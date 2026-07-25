import type { ReactNode } from 'react';

export function Badge({ children, tone = 'ember' }: { children: ReactNode; tone?: 'ember' | 'sand' }) {
  const classes =
    tone === 'ember'
      ? 'bg-ember-50 text-ember-600'
      : 'bg-sand-100 text-night-600';
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${classes}`}>
      {children}
    </span>
  );
}

// מוצג רק בסביבת פיתוח מקומית (npm run dev) — לעולם לא בבנייית הפרודקשן.
// כך אפשר לראות בזמן העבודה אילו פרטים דורשים אימות מול דרומה, בלי שהערות פנימיות
// יגיעו לאתר החי. הרשימה המלאה של הפריטים הללו מרוכזת גם ב-content-review.md.
export function ReviewFlag({ note }: { note: string }) {
  if (!import.meta.env.DEV) return null;
  return (
    <div
      role="note"
      className="mt-3 rounded-xl border border-fire-400/40 bg-fire-400/10 px-4 py-3 text-sm leading-6 text-night-600"
    >
      <strong className="font-semibold text-ember-600">לתשומת לב דרומה (לפני פרסום): </strong>
      {note}
    </div>
  );
}
