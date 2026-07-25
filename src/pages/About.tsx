import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';
import { Section, SectionHeading } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { aboutPage } from '../content/about';

export default function About() {
  useSeo();

  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'אודות', path: '/about' }]} />
      </div>

      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeading eyebrow="אודות דרומה" title={aboutPage.heading} description={aboutPage.brandStatement} />
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-night-600">
              {aboutPage.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <img
            src={aboutPage.heroImage}
            alt="צוות דרומה בפעילות בשטח המדבר"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft"
            loading="lazy"
            width={720}
            height={540}
          />
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="היכולות שלנו" title="הפקה ואירוח מקצה לקצה" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {aboutPage.operationalCapabilities.map((item) => (
            <Card key={item} className="flex items-start gap-3 p-5">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-ember-500" aria-hidden="true" />
              <span className="text-night-700">{item}</span>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/team" variant="secondary" size="lg">
            הכירו את הצוות
          </Button>
          <Button to="/contact" size="lg">
            צור קשר
            <ArrowLeft size={18} aria-hidden="true" />
          </Button>
        </div>
      </Section>
    </>
  );
}
