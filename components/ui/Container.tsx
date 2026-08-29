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
        'mx-auto w-full px-5 md:px-8 lg:px-10',
        wide ? 'max-w-[1360px]' : 'max-w-[1200px]',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
