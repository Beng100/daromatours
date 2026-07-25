import { ArrowLeft } from 'lucide-react';
import { Section, SectionHeading } from '../ui/Section';
import { Button } from '../ui/Button';
import { galleryPreview } from '../../content/home';

export function GalleryPreview() {
  const [first, ...rest] = galleryPreview.images;

  return (
    <Section tone="night">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <SectionHeading tone="night" eyebrow="גלריה" title={galleryPreview.heading} description={galleryPreview.description} />
        <Button to="/gallery" variant="ghost" size="md" className="shrink-0">
          {galleryPreview.cta}
          <ArrowLeft size={16} aria-hidden="true" />
        </Button>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:grid-rows-2">
        <img
          src={first.src}
          alt={first.alt}
          loading="lazy"
          width={640}
          height={640}
          className="col-span-2 row-span-2 aspect-square w-full rounded-2xl object-cover sm:aspect-auto sm:h-full"
        />
        {rest.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            width={320}
            height={320}
            className="aspect-square w-full rounded-2xl object-cover"
          />
        ))}
      </div>
    </Section>
  );
}
