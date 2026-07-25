import { ArrowLeft } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';
import { Section, SectionHeading } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ReviewFlag } from '../components/ui/Badge';
import { productionsPage } from '../content/productions';
import { attractions } from '../content/attractions';

export default function Productions() {
  useSeo();
  const related = attractions.filter((a) => productionsPage.relatedAttractionSlugs.includes(a.slug));

  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'הפקות ואירועים', path: '/productions' }]} />
      </div>

      <Section className="pt-0">
        <SectionHeading eyebrow="הפקות ואירועים" title={productionsPage.heading} />
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-night-600">
          {productionsPage.intro.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        {productionsPage.requiresReview && <ReviewFlag note={productionsPage.reviewNote} />}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productionsPage.capabilities.map((cap) => (
            <Card key={cap.title} className="p-6">
              <h3 className="font-display text-lg font-semibold text-night-800">{cap.title}</h3>
              <p className="mt-2 text-sm leading-7 text-night-400">{cap.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="חוויות משלימות" title="רכיבים שאפשר לשלב באירוע שלכם" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((attraction) => (
            <Card key={attraction.slug} className="overflow-hidden">
              <img src={attraction.image} alt={attraction.title} className="h-44 w-full object-cover" loading="lazy" width={480} height={280} />
              <div className="p-5">
                <h3 className="font-display text-base font-semibold text-night-800">{attraction.title}</h3>
                <Button to={`/attractions/${attraction.slug}`} variant="secondary" size="md" className="mt-4">
                  לפרטים
                  <ArrowLeft size={16} aria-hidden="true" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button to="/contact" size="lg">
            לתיאום שיחת הפקה
            <ArrowLeft size={18} aria-hidden="true" />
          </Button>
        </div>
      </Section>
    </>
  );
}
