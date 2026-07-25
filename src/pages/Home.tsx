import { ArrowLeft, MapPin } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { WhatsappButton } from '../components/ui/WhatsappButton';
import { JsonLd } from '../components/seo/JsonLd';
import { organizationSchema, localBusinessSchema } from '../content/schema';
import { TrustStrip } from '../components/home/TrustStrip';
import { EnterpriseFeature } from '../components/home/EnterpriseFeature';
import { AudienceSegments } from '../components/home/AudienceSegments';
import { HighlightsGrid } from '../components/home/HighlightsGrid';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { hero, regionsHeading, stillHaveQuestions } from '../content/home';
import { business } from '../config/business';

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

      <TrustStrip />
      <EnterpriseFeature />
      <AudienceSegments />
      <HighlightsGrid />
      <ProcessTimeline />
      <GalleryPreview />

      <Section tone="sand">
        <div className="flex flex-col items-center gap-6 text-center">
          <MapPin size={30} className="text-ember-500" aria-hidden="true" />
          <h2 className="font-display text-3xl font-semibold tracking-tight text-night-800 sm:text-4xl">
            {regionsHeading.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {business.serviceAreas.map((area) => (
              <span key={area} className="rounded-full border border-night-800/10 bg-white px-4 py-2 text-sm text-night-700 shadow-sm">
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
