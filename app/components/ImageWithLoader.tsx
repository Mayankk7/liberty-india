'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

/**
 * Drop-in replacement for next/image that shows a loading state until the image
 * paints, then fades it in.
 *
 *  • `fill` images: returns a fragment (skeleton + image) that relies on the
 *    caller's existing `relative` parent — same as a bare <Image fill/>.
 *  • fixed-size / `w-full` images: wraps in a relative block so the skeleton can
 *    sit behind the image.
 *
 * The skeleton is a soft animated shimmer; once the image loads it fades out and
 * the (usually opaque) image covers it.
 */
export default function ImageWithLoader({ className, style, ...props }: ImageProps) {
  const [loading, setLoading] = useState(true);

  const skeleton = (
    <span
      aria-hidden="true"
      className={`absolute inset-0 z-[1] pointer-events-none transition-opacity duration-500 ${
        loading ? 'opacity-100 li-img-skeleton' : 'opacity-0'
      }`}
    />
  );

  const image = (
    <Image
      {...props}
      className={className}
      style={{ ...style, opacity: loading ? 0 : 1, transition: 'opacity 0.6s ease' }}
      onLoad={() => setLoading(false)}
      onError={() => setLoading(false)}
    />
  );

  // `fill` images already live inside a sized, positioned parent — emit siblings.
  if (props.fill) {
    return (
      <>
        {skeleton}
        {image}
      </>
    );
  }

  // Fixed-size / intrinsic images need their own positioning context.
  return (
    <span className="relative block">
      {skeleton}
      {image}
    </span>
  );
}
