import { ArrowLeft, MapPin } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';
import { Section, SectionHeading } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { WhatsappButton } from '../components/ui/WhatsappButton';
import { JsonLd } from '../components/seo/JsonLd';
import { organizationSchema, localBusinessSchema } from '../content/schema';
import { hero, homeHighlights, stillHaveQuestions } from '../content/home';
import { business } from '../config/business';
import { clients, clientsNote } from '../content/clients';
import { attractions } from '../content/attractions';

export default function Home() {
  useSeo();

  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={localBusinessSchema()} />

      <section className="relative overflow-hidden bg-dune-gradient text-white">
        <div className="container relative py-20 sm:py-28">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-fire-400">{hero.eyebrow}</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {hero.titleLine1}
              <br />
              <span className="text-fire-400">{hero.titleLine2}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-sand-100">{hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact" size="lg">
                {hero.ctaPrimary}
                <ArrowLeft size={18} aria-hidden="true" />
              </Button>
              <WhatsappButton message="שלום דרומה, אשמח לשמוע פרטים על פעילות" label={hero.ctaWhatsapp} />
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow="השירותים שלנו" title="חוויה מדברית שמתאימה לכם בדיוק" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeHighlights.map((item) => (
            <Card key={item.href} className="flex flex-col justify-between p-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-night-800">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-night-400">{item.description}</p>
              </div>
              <Button to={item.href} variant="secondary" size="md" className="mt-6 self-start">
                עוד פרטים
                <ArrowLeft size={16} aria-hidden="true" />
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="אטרקציות וחוויות" title="מגוון חוויות משלימות במדבר" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {attractions.slice(0, 6).map((attraction) => (
            <Card key={attraction.slug} className="overflow-hidden">
              <img
                src={attraction.image}
                alt={attraction.title}
                className="h-48 w-full object-cover"
                loading="lazy"
                width={480}
                height={320}
              />
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-night-800">{attraction.title}</h3>
                <p className="mt-2 text-sm leading-7 text-night-400">{attraction.tagline}</p>
                <Button to={`/attractions/${attraction.slug}`} variant="secondary" size="md" className="mt-4">
                  לפרטים
                  <ArrowLeft size={16} aria-hidden="true" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button to="/attractions" variant="primary" size="md">
            כל האטרקציות
          </Button>
        </div>
      </Section>

      {clients.length > 0 && (
        <Section>
          <SectionHeading align="center" eyebrow="לקוחות" title="לקוחות מפרגנים לנו" />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            {clients.map((client) => (
              <img
                key={client.name}
                src={client.logo}
                alt={client.name}
                className="h-16 w-auto object-contain grayscale transition hover:grayscale-0"
                loading="lazy"
                width={140}
                height={64}
              />
            ))}
          </div>
          {import.meta.env.DEV && (
            <p className="mt-6 text-center text-xs text-night-400">{clientsNote.reviewNote}</p>
          )}
        </Section>
      )}

      <Section tone="night">
        <div className="flex flex-col items-center gap-6 text-center">
          <MapPin size={32} className="text-fire-400" aria-hidden="true" />
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">בשבילכם – עד הירח וחזרה</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {business.serviceAreas.map((area) => (
              <span key={area} className="rounded-full border border-white/20 px-4 py-2 text-sm">
                {area}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <Card className="flex flex-col items-center gap-4 p-10 text-center">
          <h2 className="font-display text-2xl font-semibold text-night-800 sm:text-3xl">
            {stillHaveQuestions.heading}
          </h2>
          <p className="max-w-xl text-night-400">{stillHaveQuestions.body}</p>
          <Button to="/contact" size="lg">
            {stillHaveQuestions.cta}
            <ArrowLeft size={18} aria-hidden="true" />
          </Button>
        </Card>
      </Section>
    </>
  );
}
