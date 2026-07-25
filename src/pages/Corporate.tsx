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
  const relevantActivities = attractions.filter((a) => corporatePage.activityCategories.includes(a.category)).slice(0, 6);

  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'אירועי חברות והייטק', path: '/corporate' }]} />
      </div>

      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-ember-500">{corporatePage.eyebrow}</p>
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-night-800 sm:text-4xl">
              {corporatePage.title}
            </h1>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-night-600">
              {corporatePage.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {corporateAudiences.map((audience) => (
                <span
                  key={audience}
                  className="inline-flex items-center gap-2 rounded-full bg-sand-100 px-4 py-2 text-sm font-medium text-night-600"
                >
                  <Users size={16} className="text-ember-500" aria-hidden="true" />
                  {audience}
                </span>
              ))}
            </div>
            <Button to="/contact" size="lg" className="mt-8">
              קבלת הצעה לאירוע חברה
              <ArrowLeft size={18} aria-hidden="true" />
            </Button>
          </div>
          <img
            src={corporatePage.heroImage}
            alt="אירוע חברה בהפקת דרומה בשטח המדבר"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft"
            loading="lazy"
            width={720}
            height={540}
          />
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="איך זה עובד" title={corporatePage.processHeading} />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {corporatePage.process.map((paragraph, index) => (
            <Card key={index} className="p-6">
              <span className="font-display text-3xl font-bold text-ember-300">{index + 1}</span>
              <p className="mt-3 text-sm leading-relaxed text-night-600">{paragraph}</p>
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
