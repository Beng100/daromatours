import { ArrowLeft, Sparkles } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';
import { Section, SectionHeading } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ReviewFlag } from '../components/ui/Badge';
import { festivalPage } from '../content/festival';

export default function Festival() {
  useSeo();

  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'פסטיבל קיץ של כוכבים', path: '/festival' }]} />
      </div>

      <Section className="pt-0">
        <SectionHeading eyebrow="אירוע מיוחד" title={festivalPage.title} description={festivalPage.intro} />

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-semibold text-night-800">{festivalPage.meteorShowerHeading}</h2>
            <div className="mt-4 space-y-3 text-night-600">
              {festivalPage.meteorShowerParagraphs.map((p, i) => (
                <p key={i} className="leading-7">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <Card className="p-6">
            <h2 className="font-display text-xl font-semibold text-night-800">{festivalPage.eventHeading}</h2>
            <p className="mt-2 text-ember-500">{festivalPage.eventSubheading}</p>
            <ul className="mt-5 space-y-3">
              {festivalPage.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-7 text-night-600">
                  <Sparkles size={18} className="mt-0.5 shrink-0 text-fire-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Card className="mt-10 p-6">
          <h2 className="font-display text-lg font-semibold text-night-800">תאריכי הפסטיבל</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {festivalPage.dates.map((date) => (
              <span key={date} className="rounded-full bg-sand-100 px-4 py-2 text-sm font-semibold text-night-700">
                {date}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-night-400">
            {festivalPage.location} · {festivalPage.limitedSeatsNote}
          </p>
          {festivalPage.requiresReview && <ReviewFlag note={festivalPage.reviewNote} />}
          <Button to="/contact" size="lg" className="mt-6">
            {festivalPage.ctaLabel}
            <ArrowLeft size={18} aria-hidden="true" />
          </Button>
        </Card>
      </Section>
    </>
  );
}
