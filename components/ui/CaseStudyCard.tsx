import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function CaseStudyCard({
  title,
  href,
  industry,
  location,
  excerpt,
}: {
  title: string;
  href: string;
  industry: string;
  location: string;
  excerpt: string;
}) {
  return (
    <Card hover className="flex h-full flex-col p-7">
      <p className="text-eyebrow text-sbmc-teal">
        {industry} · {location}
      </p>
      <h3 className="mt-3 text-heading-sm">{title}</h3>
      <p className="mt-3 flex-1 text-body-sm text-sbmc-ink-muted">{excerpt}</p>
      <div className="mt-5">
        <Button variant="link" href={href}>
          See the work
        </Button>
      </div>
    </Card>
  );
}
