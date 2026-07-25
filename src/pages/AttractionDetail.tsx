import { Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, CalendarClock, CheckCircle2 } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { WhatsappButton } from '../components/ui/WhatsappButton';
import { ReviewFlag } from '../components/ui/Badge';
import { JsonLd } from '../components/seo/JsonLd';
import { serviceSchema } from '../content/schema';
import { getAttractionBySlug } from '../content/attractions';

export default function AttractionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const attraction = slug ? getAttractionBySlug(slug) : undefined;
  useSeo();

  if (!attraction) {
    return <Navigate to="/attractions" replace />;
  }

  return (
    <>
      <JsonLd data={serviceSchema(attraction.title, attraction.tagline, `/attractions/${attraction.slug}`)} />

      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'אטרקציות וחוויות', path: '/attractions' },
            { name: attraction.title, path: `/attractions/${attraction.slug}` }
          ]}
        />
      </div>

      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="font-display text-3xl font-bold text-night-800 sm:text-4xl">{attraction.title}</h1>
            <p className="mt-3 text-lg text-ember-500">{attraction.tagline}</p>

            <div className="mt-6 space-y-4 text-night-600">
              {attraction.description.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {attraction.includes && (
              <div className="mt-8">
                <h2 className="font-display text-xl font-semibold text-night-800">מה כלול</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {attraction.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-night-600">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-ember-500" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {attraction.requiresReview && attraction.reviewNote && <ReviewFlag note={attraction.reviewNote} />}
          </div>

          <div>
            <img
              src={attraction.image}
              alt={attraction.title}
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card"
              loading="lazy"
              width={640}
              height={480}
            />

            <div className="mt-6 rounded-2xl border border-sand-200 bg-white p-6 shadow-card">
              {attraction.duration && (
                <p className="flex items-center gap-2 text-sm font-semibold text-night-700">
                  <CalendarClock size={18} className="text-ember-500" aria-hidden="true" />
                  משך הפעילות: {attraction.duration}
                </p>
              )}

              {attraction.pricing && (
                <div className="mt-4 space-y-2">
                  {attraction.pricing.map((option) => (
                    <div key={option.label} className="flex items-center justify-between rounded-xl bg-sand-50 px-4 py-3 text-sm">
                      <span className="text-night-600">{option.label}</span>
                      <span className="font-semibold text-ember-600">{option.price}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 flex flex-col gap-3">
                <Button to="/contact" size="lg" className="justify-center">
                  {attraction.pricing ? 'להזמנה' : 'קבלת הצעת מחיר'}
                  <ArrowLeft size={18} aria-hidden="true" />
                </Button>
                <WhatsappButton message={`שלום, אשמח לפרטים על "${attraction.title}"`} />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
