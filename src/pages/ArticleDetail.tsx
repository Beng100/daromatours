import { Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, CalendarDays, ExternalLink } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { articles } from '../content/articles';

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);
  useSeo();

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  return (
    <div className="container">
      <Breadcrumbs items={[{ name: 'מאמרים', path: '/articles' }, { name: article.title, path: `/articles/${article.slug}` }]} />

      <Section className="px-0 pt-0">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-display text-3xl font-bold text-night-800 sm:text-4xl">{article.title}</h1>
          {article.date && (
            <p className="mt-3 flex items-center gap-2 text-sm text-night-400">
              <CalendarDays size={16} aria-hidden="true" />
              {article.date}
            </p>
          )}

          {article.excerpt && <p className="mt-6 text-lg leading-relaxed text-night-600">{article.excerpt}</p>}

          <Card className="mt-8 p-6">
            <p className="text-night-600">
              המאמר המלא נמצא כרגע בהעברה מהאתר הישן של דרומה. בינתיים אפשר לקרוא אותו בגרסה המקורית, או לחזור לרשימת המאמרים.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-sand-300 px-5 py-2.5 text-sm font-semibold text-night-700 hover:border-ember-500 hover:text-ember-500"
              >
                לקריאת המאמר המקורי
                <ExternalLink size={16} aria-hidden="true" />
              </a>
              <Button to="/articles" variant="secondary" size="md">
                <ArrowLeft size={16} aria-hidden="true" />
                כל המאמרים
              </Button>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
