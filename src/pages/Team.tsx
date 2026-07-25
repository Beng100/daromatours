import { useSeo } from '../hooks/useSeo';
import { Section, SectionHeading } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { team, teamIntro, teamGalleryImages } from '../content/team';

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  return parts
    .slice(0, 2)
    .map((part) => part[0])
    .join('');
}

export default function Team() {
  useSeo();

  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'הצוות', path: '/team' }]} />
      </div>

      <Section className="pt-0">
        <SectionHeading eyebrow="הצוות שלנו" title={teamIntro.heading} />
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-night-600">
          {teamIntro.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {teamGalleryImages.slice(0, 8).map((src) => (
            <img
              key={src}
              src={src}
              alt="צוות דרומה בפעילות בשטח"
              loading="lazy"
              width={320}
              height={320}
              className="aspect-square w-full rounded-xl object-cover"
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="מדריכות ומדריכים" title="נעים להכיר" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <Card key={member.slug} className="p-6">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full bg-ember-50 font-display text-xl font-bold text-ember-600"
                aria-hidden="true"
              >
                {getInitials(member.name)}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-night-800">{member.name}</h3>
              <div className="mt-2 space-y-2 text-sm leading-relaxed text-night-400">
                {member.bio.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
