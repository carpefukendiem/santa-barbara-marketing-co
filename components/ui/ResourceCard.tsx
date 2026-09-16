import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';

export function ResourceCard({
  title,
  href,
  excerpt,
  category,
  readTime,
}: {
  title: string;
  href: string;
  excerpt: string;
  category: string;
  readTime: string;
}) {
  return (
    <Card hover className="flex h-full flex-col p-7">
      <Eyebrow>
        {category}
        {readTime ? ` · ${readTime}` : ''}
      </Eyebrow>
      <h3 className="mt-3 font-display text-h3 text-navy">
        <Link href={href} className="hover:text-ocean">
          {title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-stone">{excerpt}</p>
      <div className="mt-5">
        <Button variant="ghost" href={href}>
          Read
        </Button>
      </div>
    </Card>
  );
}
