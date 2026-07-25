import { ArrowLeft } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';
import { Section, SectionHeading } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Badge, ReviewFlag } from '../components/ui/Badge';
import { barMitzvahPage } from '../content/barMitzvah';

export default function BarMitzvah() {
  useSeo();

  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'טיול בר מצווה', path: '/bar-mitzvah' }]} />
      </div>

      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeading eyebrow="חוויה אישית" title={barMitzvahPage.heading} description={barMitzvahPage.intro} />

            <div className="mt-8">
              <h2 className="font-display text-lg font-semibold text-night-800">{barMitzvahPage.themesHeading}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {barMitzvahPage.themes.map((theme) => (
                  <Badge key={theme}>{theme}</Badge>
                ))}
              </div>
            </div>

            {barMitzvahPage.requiresReview && <ReviewFlag note={barMitzvahPage.reviewNote} />}

            <div className="mt-10">
              <p className="font-display text-xl font-semibold text-night-800">{barMitzvahPage.closingHeading}</p>
              <Button to="/contact" size="lg" className="mt-5">
                לתיאום מסע בר/בת המצווה
                <ArrowLeft size={18} aria-hidden="true" />
              </Button>
            </div>
          </div>
          <img
            src={barMitzvahPage.heroImage}
            alt="טיול בר מצווה של דרומה במדבר"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft"
            loading="lazy"
            width={720}
            height={540}
          />
        </div>
      </Section>
    </>
  );
}
