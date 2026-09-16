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
        'max-w-prose text-ink text-lg',
        '[&>h2]:mt-12 [&>h2]:font-display [&>h2]:text-h2 [&>h2]:font-light [&>h2]:text-ink',
        '[&>h3]:mt-8 [&>h3]:font-display [&>h3]:text-h3 [&>h3]:text-ink',
        '[&>p]:mt-5 [&>p]:text-lg [&>p]:leading-[1.6]',
        '[&>ul]:mt-5 [&>ul]:list-disc [&>ul]:pl-6 [&_ul]:marker:text-tile',
        '[&>ol]:mt-5 [&>ol]:list-decimal [&>ol]:pl-6 [&_ol]:marker:text-tile',
        '[&>li]:mt-2 [&>li]:text-lg [&>li]:leading-[1.6]',
        '[&>blockquote]:mt-8 [&>blockquote]:border-l-4 [&>blockquote]:border-tile [&>blockquote]:pl-6 [&>blockquote]:font-display [&>blockquote]:italic',
        '[&>table]:mt-8 [&>table]:w-full [&>table]:border-collapse [&>table]:text-left [&>table]:text-body-sm',
        '[&>table_th]:border-b [&>table_th]:border-rule [&>table_th]:py-2 [&>table_th]:pr-4',
        '[&>table_td]:border-b [&>table_td]:border-rule [&>table_td]:py-2 [&>table_td]:pr-4',
        '[&_a]:font-medium [&_a]:text-tile [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-navy',
        '[&>code]:rounded [&>code]:bg-sand [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:text-[0.9em]',
        className,
      )}
    >
      {children}
    </div>
  );
}
