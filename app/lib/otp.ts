import crypto from 'node:crypto';

/**
 * Stateless OTP / download tokens.
 *
 * No database is required: we email the visitor a one-time code and hand the
 * client a *signed* token that embeds an HMAC of that code (never the code
 * itself). On verify we recompute the HMAC from the submitted code and compare.
 * A separate short-lived "download" token authorises the actual PDF download.
 *
 * Set OTP_SECRET in the environment for production; the dev fallback keeps local
 * testing working.
 */
const SECRET =
  process.env.OTP_SECRET || 'liberty-india-dev-otp-secret-change-me-in-prod';

function hmac(data: string): string {
  return crypto.createHmac('sha256', SECRET).update(data).digest('hex');
}

export function sign(payload: Record<string, unknown>): string {
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url');
  return `${body}.${hmac(body)}`;
}

export function verifyToken<T = Record<string, unknown>>(token: string): T | null {
  if (!token || !token.includes('.')) return null;
  const [body, sig] = token.split('.');
  const expected = hmac(body);
  if (!sig || sig.length !== expected.length) return null;
  try {
    if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
    return JSON.parse(Buffer.from(body, 'base64url').toString('utf8')) as T;
  } catch {
    return null;
  }
}

/** Binds the one-time code to the specific email + itinerary. */
export function otpHash(otp: string, email: string, slug: string): string {
  return hmac(`otp:${otp}:${email.toLowerCase().trim()}:${slug}`);
}

export function generateOtp(): string {
  return String(crypto.randomInt(0, 1_000_000)).padStart(6, '0');
}
