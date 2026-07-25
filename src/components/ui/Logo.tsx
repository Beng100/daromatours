import { business } from '../../config/business';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

// סימן המותג המעוצב מחדש (SVG וקטורי) — שקיעה עולה מעל דיונות בלילה מדברי,
// תואם לפלטת ה-ember/fire/night של מערכת העיצוב. חד וברור גם בגדלים קטנים
// (favicon), בניגוד לתמונת הלוגו המקורית (צילום עגול) שנשמרה בפרויקט
// (public/images/logo/daroma-logo.webp) למקרה שדרומה יעדיפו את הסימן המקורי.
export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-night-800';
  const taglineColor = variant === 'light' ? 'text-fire-400' : 'text-ember-500';

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-10 w-10 shrink-0" role="img" aria-label={business.brandFull}>
        <defs>
          <linearGradient id="daroma-logo-sun" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#E8A23B" />
            <stop offset="1" stopColor="#C4602A" />
          </linearGradient>
          <linearGradient id="daroma-logo-dune" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#A64C1F" />
            <stop offset="1" stopColor="#C4602A" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="32" fill="#241E1A" />
        <circle cx="15" cy="15" r="1.3" fill="#F5E7D0" opacity="0.85" />
        <circle cx="48" cy="13" r="1" fill="#F5E7D0" opacity="0.6" />
        <circle cx="52" cy="23" r="0.8" fill="#F5E7D0" opacity="0.5" />
        <circle cx="32" cy="28" r="10" fill="url(#daroma-logo-sun)" />
        <path d="M-2 42 Q 16 30 32 37 T 66 35 V66 H-2 Z" fill="#181310" />
        <path d="M-2 47 Q 18 38 32 43 T 66 41 V66 H-2 Z" fill="url(#daroma-logo-dune)" />
      </svg>
      <span className="flex flex-col leading-tight">
        <span className={`font-display text-lg font-bold tracking-tight ${textColor}`}>{business.brandEnglish}</span>
        <span className={`text-[0.65rem] font-semibold uppercase tracking-[0.2em] ${taglineColor}`}>
          {business.positioningEnglish}
        </span>
      </span>
    </span>
  );
}
