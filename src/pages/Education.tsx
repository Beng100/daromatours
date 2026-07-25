import { ArrowLeft } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';
import { Section, SectionHeading } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ReviewFlag } from '../components/ui/Badge';
import { educationPage } from '../content/education';

export default function Education() {
  useSeo();

  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'חינוך וצה״ל', path: '/education' }]} />
      </div>

      <Section className="pt-0">
        <SectionHeading eyebrow="מוסדות חינוך" title={educationPage.schoolHeading} />
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-night-600">
          {educationPage.schoolParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="קייטנות ומוסדות לימוד" title={educationPage.campHeading} />
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-night-600">
          {educationPage.campParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {educationPage.gpnRequiresReview && <ReviewFlag note={educationPage.gpnReviewNote} />}
      </Section>

      <Section>
        <SectionHeading eyebrow="ביטחון" title={educationPage.idfHeading} />
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-night-600">
          {educationPage.idfParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {educationPage.idfRequiresReview && <ReviewFlag note={educationPage.idfReviewNote} />}

        <Card className="mt-10 flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg font-semibold text-night-800">
            רוצים לקבוע יום שיא חללי או תצפית בית ספרית?
          </p>
          <Button to="/contact" size="lg">
            לתיאום פעילות
            <ArrowLeft size={18} aria-hidden="true" />
          </Button>
        </Card>
      </Section>
    </>
  );
}
