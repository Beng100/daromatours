import { useMemo, useState } from 'react';
import { useSeo } from '../hooks/useSeo';
import { Section, SectionHeading } from '../components/ui/Section';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Lightbox } from '../components/ui/Lightbox';
import { galleryImages, galleryCategoryLabels, type GalleryCategory } from '../content/gallery';

const categories: (GalleryCategory | 'all')[] = ['all', 'stargazing', 'corporate', 'hosting', 'offroad', 'team'];

export default function Gallery() {
  useSeo();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'all'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (activeCategory === 'all' ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)),
    [activeCategory]
  );

  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'גלריה', path: '/gallery' }]} />
      </div>

      <Section className="pt-0">
        <SectionHeading eyebrow="גלריית הפקות" title="רגעים אמיתיים מהשטח" description="תמונות אמיתיות מפעילויות ואירועים של דרומה." />

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="סינון גלריה לפי סוג פעילות">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeCategory === cat
                  ? 'border-ember-500 bg-ember-500 text-white'
                  : 'border-sand-200 bg-white text-night-600 hover:border-ember-300'
              }`}
            >
              {cat === 'all' ? 'הכול' : galleryCategoryLabels[cat]}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="group aspect-square overflow-hidden rounded-xl bg-sand-100"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width={400}
                height={400}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-night-400">אין עדיין תמונות בקטגוריה זו.</p>
        )}
      </Section>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
