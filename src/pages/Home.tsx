import { ArrowLeft, CheckCircle2, MapPin } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';
import { Section, SectionHeading } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { WhatsappButton } from '../components/ui/WhatsappButton';
import { JsonLd } from '../components/seo/JsonLd';
import { organizationSchema, localBusinessSchema } from '../content/schema';
import { hero, enterpriseFeature, homeHighlights, regionsHeading, stillHaveQuestions } from '../content/home';
import { business } from '../config/business';
import { clients } from '../content/clients';

export default function Home() {
  useSeo();

  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={localBusinessSchema()} />

      <section className="relative overflow-hidden bg-dune-gradient text-white">
        <div className="container relative py-24 sm:py-32">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fire-400">{hero.eyebrow}</p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {hero.titleLine1}
              <br />
              <span className="text-fire-400">{hero.titleLine2}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand-100">{hero.subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/contact" size="lg">
                {hero.ctaPrimary}
                <ArrowLeft size={18} aria-hidden="true" />
              </Button>
              <WhatsappButton message="שלום דרומה, אשמח לשמוע פרטים על הפקת אירוע לחברה" label={hero.ctaWhatsapp} />
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise feature — focal point, asymmetric layout (not a uniform card grid) */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-ember-500">{enterpriseFeature.eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-night-800 sm:text-4xl">
              {enterpriseFeature.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-night-500">{enterpriseFeature.description}</p>
            <ul className="mt-7 space-y-3">
              {enterpriseFeature.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-night-700">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-ember-500" aria-hidden="true" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <Button to={enterpriseFeature.href} size="lg" className="mt-8">
              {enterpriseFeature.cta}
              <ArrowLeft size={18} aria-hidden="true" />
            </Button>
          </div>
          <img
            src={enterpriseFeature.image}
            alt="אירוע חברה מופק על ידי דרומה בשטח המדבר"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft"
            loading="lazy"
            width={720}
            height={540}
          />
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="עוד מהעולם של דרומה" title="חוויות משלימות לכל אירוע" />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {homeHighlights.map((item) => (
            <Card key={item.href} className="flex flex-col overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-44 w-full object-cover"
                loading="lazy"
                width={400}
                height={280}
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-night-800">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-night-500">{item.description}</p>
                <Button to={item.href} variant="secondary" size="md" className="mt-5 self-start">
                  עוד פרטים
                  <ArrowLeft size={16} aria-hidden="true" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {clients.length > 0 && (
        <Section>
          <SectionHeading align="center" eyebrow="אמון" title="ארגונים ורשויות עובדים איתנו" />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
            {clients.map((client) => (
              <img
                key={client.name}
                src={client.logo}
                alt={client.name}
                className="h-14 w-auto object-contain grayscale transition hover:grayscale-0"
                loading="lazy"
                width={140}
                height={56}
              />
            ))}
          </div>
        </Section>
      )}

      <Section tone="night">
        <div className="flex flex-col items-center gap-6 text-center">
          <MapPin size={30} className="text-fire-400" aria-hidden="true" />
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{regionsHeading.title}</h2>
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
        <Card className="flex flex-col items-center gap-4 p-10 text-center sm:p-14">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-night-800 sm:text-3xl">
            {stillHaveQuestions.heading}
          </h2>
          <p className="max-w-xl text-night-500">{stillHaveQuestions.body}</p>
          <Button to="/contact" size="lg">
            {stillHaveQuestions.cta}
            <ArrowLeft size={18} aria-hidden="true" />
          </Button>
        </Card>
      </Section>
    </>
  );
}
