import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageWithLoaderProps extends ImageProps {
  loaderClassName?: string;
}

export default function ImageWithLoader({ loaderClassName = '', ...props }: ImageWithLoaderProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ position: 'relative', width: props.width || '100%', height: props.height || '100%' }}>
      {loading && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black/10 z-10 ${loaderClassName}`}
          style={{ pointerEvents: 'none' }}
        >
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#EF9120]" />
        </div>
      )}
      <Image
        {...props}
        onLoad={() => setLoading(false)}
        style={{ ...props.style, opacity: loading ? 0 : 1, transition: 'opacity 0.5s' }}
      />
    </div>
  );
}
