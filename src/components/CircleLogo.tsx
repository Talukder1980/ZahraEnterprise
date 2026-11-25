import { useState } from 'react';
import { COMPANY_INFO } from '../data/enterpriseData';

interface CircleLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZE_CLASSES: Record<NonNullable<CircleLogoProps['size']>, string> = {
  sm: 'w-10 h-10',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
};

export const CIRCLE_LOGO_SRC =
  '/assets/aistudio/WhatsApp_Image_2026-11-23_at_11.11.26_PM_98e17e12.jpeg';

export function CircleLogo({ size = 'sm', className = '' }: CircleLogoProps) {
  const [hasError, setHasError] = useState(false);
  const sizeClass = SIZE_CLASSES[size];

  if (hasError) {
    return (
      <span
        aria-label={`${COMPANY_INFO.shortName} logo`}
        className={`inline-flex items-center justify-center rounded-full border-2 border-[#4B1D77] bg-white text-[#4B1D77] font-serif font-bold shrink-0 ${sizeClass} ${className}`}
      >
        Z
      </span>
    );
  }

  return (
    <span
      className={`inline-block rounded-full overflow-hidden bg-white shrink-0 ${sizeClass} ${className}`}
    >
      <img
        src={CIRCLE_LOGO_SRC}
        alt={`${COMPANY_INFO.businessName} circle logo`}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className="w-full h-full object-cover object-center"
      />
    </span>
  );
}
