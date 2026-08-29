import { cn } from '@/lib/utils';

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'measure text-sbmc-ink',
        '[&>h2]:mt-12 [&>h2]:text-display-md',
        '[&>h3]:mt-8 [&>h3]:text-heading-sm',
        '[&>p]:mt-5 [&>p]:text-body-lg [&>p]:leading-[1.7]',
        '[&>ul]:mt-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:text-sbmc-ink',
        '[&>ol]:mt-5 [&>ol]:list-decimal [&>ol]:pl-6',
        '[&>li]:mt-2 [&>li]:text-[1.0625rem] [&>li]:leading-[1.65]',
        '[&>blockquote]:mt-8 [&>blockquote]:border-l-2 [&>blockquote]:border-sbmc-teal [&>blockquote]:pl-5 [&>blockquote]:text-sbmc-ink-muted [&>blockquote]:italic',
        '[&>table]:mt-8 [&>table]:w-full [&>table]:border-collapse [&>table]:text-left [&>table]:text-body-sm',
        '[&>table_th]:border-b [&>table_th]:border-sbmc-border [&>table_th]:py-2 [&>table_th]:pr-4',
        '[&>table_td]:border-b [&>table_td]:border-sbmc-border [&>table_td]:py-2 [&>table_td]:pr-4',
        '[&_a]:font-medium [&_a]:text-sbmc-teal hover:[&_a]:text-sbmc-teal-dark',
        '[&>code]:rounded [&>code]:bg-sbmc-cream-warm [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:text-[0.9em]',
        className,
      )}
    >
      {children}
    </div>
  );
}
