import { ArrowLeft, Users } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';
import { Section, SectionHeading } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { corporatePage, corporateAudiences } from '../content/corporate';
import { attractions } from '../content/attractions';

export default function Corporate() {
  useSeo();
  const relevantActivities = attractions.filter((a) => corporatePage.activityCategories.includes(a.category));

  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'חברות וארגונים', path: '/corporate' }]} />
      </div>

      <Section className="pt-0">
        <SectionHeading eyebrow="חברות וארגונים" title={corporatePage.title} />
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-night-600">
          {corporatePage.intro.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {corporateAudiences.map((audience) => (
            <span key={audience} className="inline-flex items-center gap-2 rounded-full bg-sand-100 px-4 py-2 text-sm font-medium text-night-600">
              <Users size={16} className="text-ember-500" aria-hidden="true" />
              {audience}
            </span>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="איך זה עובד" title={corporatePage.processHeading} />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {corporatePage.process.map((paragraph, index) => (
            <Card key={index} className="p-6">
              <span className="font-display text-3xl font-bold text-ember-300">{index + 1}</span>
              <p className="mt-3 text-sm leading-7 text-night-600">{paragraph}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="מה אפשר לשלב" title="פעילויות מומלצות ליום גיבוש" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relevantActivities.map((attraction) => (
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
        <div className="mt-10 text-center">
          <Button to="/contact" size="lg">
            למילוי שאלון אפיון צרכים
            <ArrowLeft size={18} aria-hidden="true" />
          </Button>
        </div>
      </Section>
    </>
  );
}
