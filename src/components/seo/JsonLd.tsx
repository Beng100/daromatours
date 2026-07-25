interface JsonLdProps {
  data: Record<string, unknown>;
}

// התוכן תמיד מגיע מנתוני האתר עצמו (לא מקלט משתמש), ולכן הזרקה כ-JSON סטטי בטוחה.
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
