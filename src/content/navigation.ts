export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const mainNav: NavItem[] = [
  { label: 'בית', href: '/' },
  { label: 'הפקות ואירועים', href: '/productions' },
  { label: 'חברות וארגונים', href: '/corporate' },
  {
    label: 'אטרקציות וחוויות',
    href: '/attractions',
    children: [
      { label: 'תצפיות כוכבים', href: '/attractions/stargazing' },
      { label: 'אסטרומנטיקה – חוויה לזוגות', href: '/attractions/astromentica' },
      { label: 'Desert Happy Hour', href: '/attractions/desert-happy-hour' },
      { label: 'אירוח מדברי VIP', href: '/attractions/vip-hosting' },
      { label: 'טיולי ג׳יפים', href: '/attractions/jeep-tours' },
      { label: 'ספארי עקרבים וחיות לילה', href: '/attractions/scorpion-safari' },
      { label: 'קבלות פנים וארוחות בוקר', href: '/attractions/welcome-breakfast' }
    ]
  },
  { label: 'טיול בר מצווה', href: '/bar-mitzvah' },
  { label: 'פסטיבל קיץ של כוכבים', href: '/festival' },
  { label: 'חינוך וצה״ל', href: '/education' },
  { label: 'גלריה', href: '/gallery' },
  { label: 'אודות', href: '/about' },
  { label: 'הצוות', href: '/team' },
  { label: 'מאמרים', href: '/articles' },
  { label: 'צור קשר', href: '/contact' }
];

export const footerNav: NavChild[] = [
  { label: 'דף הבית', href: '/' },
  { label: 'הפקות ואירועים', href: '/productions' },
  { label: 'חברות וארגונים', href: '/corporate' },
  { label: 'אטרקציות', href: '/attractions' },
  { label: 'חינוך וצה״ל', href: '/education' },
  { label: 'אודות', href: '/about' },
  { label: 'מאמרים', href: '/articles' },
  { label: 'צור קשר', href: '/contact' }
];
