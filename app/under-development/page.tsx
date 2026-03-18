import React from 'react';

export default function UnderDevelopment() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Page Under Development</h1>
      <p className="text-lg text-gray-600 mb-8">We're working hard to bring this page to you soon!</p>
      <div className="w-40 h-40 mb-6">
        <img src="https://ik.imagekit.io/libertyindia/images/hero-section/logo-footer.svg" alt="Under Development" className="w-full h-full object-contain opacity-80" />
      </div>
      <a href="/" className="text-blue-600 hover:underline text-base">Go back to Home</a>
    </div>
  );
}
