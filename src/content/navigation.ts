export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

// ניווט ראשי מצומצם במכוון (6 פריטים) — מותאם לקהל עסקי/הייטק שמצפה לניווט
// נקי וברור. עמודים נוספים (פסטיבל, בר מצווה, חינוך, מאמרים) נגישים דרך ה-Footer
// ודרך קישורים הקשריים בתוך העמודים, לא מהניווט העליון.
export const mainNav: NavItem[] = [
  { label: 'בית', href: '/' },
  { label: 'אירועי חברות והייטק', href: '/corporate' },
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
  { label: 'גלריה', href: '/gallery' },
  { label: 'אודות', href: '/about' },
  { label: 'צור קשר', href: '/contact' }
];

export const footerNavPrimary: NavChild[] = [
  { label: 'דף הבית', href: '/' },
  { label: 'אירועי חברות והייטק', href: '/corporate' },
  { label: 'הפקות אירועים בשטח', href: '/productions' },
  { label: 'אטרקציות', href: '/attractions' },
  { label: 'גלריה', href: '/gallery' },
  { label: 'אודות', href: '/about' },
  { label: 'הצוות', href: '/team' },
  { label: 'צור קשר', href: '/contact' }
];

export const footerNavSecondary: NavChild[] = [
  { label: 'פסטיבל קיץ של כוכבים', href: '/festival' },
  { label: 'טיול בר מצווה', href: '/bar-mitzvah' },
  { label: 'חינוך וצה״ל', href: '/education' },
  { label: 'מאמרים', href: '/articles' }
];
