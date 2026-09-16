import { cn } from '@/lib/utils';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
  as?: 'div' | 'section' | 'article' | 'nav';
};

export function Container({
  children,
  className,
  wide = false,
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-6',
        wide ? 'max-w-7xl' : 'max-w-7xl',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
