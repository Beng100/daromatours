import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { JsonLd } from '../seo/JsonLd';
import { breadcrumbSchema } from '../../content/schema';

export interface Crumb {
  name: string;
  path: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const allItems = [{ name: 'בית', path: '/' }, ...items];

  return (
    <nav aria-label="פירורי לחם" className="py-4 text-sm text-night-400">
      <JsonLd data={breadcrumbSchema(allItems)} />
      <ol className="flex flex-wrap items-center gap-1">
        {allItems.map((item, index) => (
          <li key={item.path} className="flex items-center gap-1">
            {index > 0 && <ChevronLeft size={14} aria-hidden="true" className="text-sand-300" />}
            {index === allItems.length - 1 ? (
              <span aria-current="page" className="font-semibold text-night-700">
                {item.name}
              </span>
            ) : (
              <Link to={item.path} className="hover:text-ember-500">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
