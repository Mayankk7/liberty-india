"use client";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleStart = () => setShow(true);
    const handleStop = () => setShow(false);

    // Listen to Next.js router events
    if (typeof window !== 'undefined') {
      const router = require('next/router');
      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleStop);
      router.events.on('routeChangeError', handleStop);
      setTimeout(() => setShow(false), 1200); // Hide loader after initial load
      return () => {
        router.events.off('routeChangeStart', handleStart);
        router.events.off('routeChangeComplete', handleStop);
        router.events.off('routeChangeError', handleStop);
      };
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white bg-opacity-90 transition-opacity duration-500">
      <div className="flex flex-col items-center">
        <div className="loader mb-4" />
        <span className="text-lg font-semibold text-gray-700 tracking-wide" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Loading...
        </span>
      </div>
      <style jsx>{`
        .loader {
          border: 6px solid #f3f3f3;
          border-top: 6px solid #eab308;
          border-radius: 50%;
          width: 56px;
          height: 56px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
