
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EventProdRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/under-development');
  }, [router]);
  return null;
}