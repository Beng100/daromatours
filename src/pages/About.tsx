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
        <SectionHeading eyebrow="אודות דרומה" title={aboutPage.heading} description={aboutPage.brandStatement} />
        <div className="mt-8 max-w-3xl space-y-4 text-lg leading-8 text-night-600">
          {aboutPage.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
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
