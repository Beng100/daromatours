import { ArrowLeft } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';
import { Section, SectionHeading } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { attractions } from '../content/attractions';

export default function AttractionsIndex() {
  useSeo();

  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'אטרקציות וחוויות', path: '/attractions' }]} />
      </div>

      <Section className="pt-0">
        <SectionHeading
          eyebrow="אטרקציות וחוויות"
          title="האטרקציות הכי שוות מחכות ממש כאן"
          description="ממכתש רמון ועד רמת הגולן – מגוון פעילויות שאפשר לשלב לחוויה מלאה, לקבוצה, למשפחה או לזוגיים."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {attractions.map((attraction) => (
            <Card key={attraction.slug} className="flex flex-col overflow-hidden">
              <img
                src={attraction.image}
                alt={attraction.title}
                className="h-52 w-full object-cover"
                loading="lazy"
                width={480}
                height={320}
              />
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-display text-lg font-semibold text-night-800">{attraction.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-7 text-night-400">{attraction.tagline}</p>
                <Button to={`/attractions/${attraction.slug}`} variant="secondary" size="md" className="mt-4 self-start">
                  לפרטים
                  <ArrowLeft size={16} aria-hidden="true" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
