export interface Client {
  name: string;
  logo: string;
}

export const clients: Client[] = [
  { name: 'עיריית ירושלים', logo: '/images/clients/jerusalem-municipality.png' },
  { name: 'דימונה', logo: '/images/clients/dimona.png' },
  { name: 'נחל זמרי', logo: '/images/clients/nachal-zimri.png' }
];

export const clientsNote = {
  requiresReview: true,
  reviewNote:
    'בעמוד הבית של האתר הישן הוצג "שורת לקוחות" הכוללת לוגואים נוספים מעבר לשלושת אלו שזוהו בבירור (עיריית ירושלים, דימונה, נחל זמרי). יש לאסוף מדרומה את הרשימה המלאה והמעודכנת של לקוחות שאפשר להציג בפומבי לפני פרסום.',
  sourceUrl: 'https://www.daromatours.com/'
};
