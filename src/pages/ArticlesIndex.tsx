import { CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSeo } from '../hooks/useSeo';
import { Section, SectionHeading } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { articles } from '../content/articles';

export default function ArticlesIndex() {
  useSeo();

  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'מאמרים', path: '/articles' }]} />
      </div>

      <Section className="pt-0">
        <SectionHeading
          eyebrow="מאמרי אסטרונומיה וטיולים"
          title="ברוכים הבאים לדף המאמרים שלנו"
          description="דרך המאמרים ניתן לצאת למסע בגלקסיה שלנו וללמוד על העולמות הנסתרים שנמצאים ממש מעלינו."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.slug} className="flex flex-col p-6">
              <div className="flex-1">
                <h2 className="font-display text-lg font-semibold text-night-800">
                  <Link to={`/articles/${article.slug}`} className="hover:text-ember-500">
                    {article.title}
                  </Link>
                </h2>
                {article.excerpt && <p className="mt-3 text-sm leading-relaxed text-night-400">{article.excerpt}</p>}
                {!article.bodyMigrated && (
                  <div className="mt-3">
                    <Badge tone="sand">התוכן המלא בהכנה</Badge>
                  </div>
                )}
              </div>
              {article.date && (
                <p className="mt-4 flex items-center gap-2 text-xs text-night-400">
                  <CalendarDays size={14} aria-hidden="true" />
                  {article.date}
                </p>
              )}
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
