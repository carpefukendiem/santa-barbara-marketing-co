import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

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
      <p className="text-eyebrow text-sbmc-teal">
        {category} · {readTime}
      </p>
      <h3 className="mt-3 text-heading-sm">
        <Link href={href} className="hover:text-sbmc-teal">
          {title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-body-sm text-sbmc-ink-muted">{excerpt}</p>
      <div className="mt-5">
        <Button variant="link" href={href}>
          Read article
        </Button>
      </div>
    </Card>
  );
}
