import { useState } from 'react';
import { PackageCheck } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
  fallbackLabel?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  aspectClassName = 'aspect-video',
  fallbackLabel,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-slate-100 border border-slate-200 text-slate-500 p-6 text-center ${aspectClassName} ${className}`}
        role="img"
        aria-label={alt}
      >
        <PackageCheck className="w-8 h-8 text-slate-400 mb-2" strokeWidth={1.5} aria-hidden="true" />
        <span className="text-sm font-medium text-slate-700">{fallbackLabel || alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`block w-full object-cover bg-slate-100 ${aspectClassName} ${className}`}
    />
  );
}
