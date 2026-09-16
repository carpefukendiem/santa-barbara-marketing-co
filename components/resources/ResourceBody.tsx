import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Prose } from '@/components/ui/Prose';
import type { ResourceBlock } from '@/data/resources';
import { primaryCta } from '@/data/navigation';
import { slugify } from '@/lib/utils';

export function headingId(text: string): string {
  return slugify(text);
}

export function ResourceBody({ blocks }: { blocks: ResourceBlock[] }) {
  let insertAt = Math.round(blocks.length * 0.6);
  const takeawaysIndex = blocks.findIndex((block) => block.type === 'takeaways');
  if (takeawaysIndex >= 0 && insertAt > takeawaysIndex) {
    insertAt = takeawaysIndex;
  }
  if (insertAt < 1) insertAt = 1;
  if (insertAt > blocks.length) insertAt = blocks.length;

  const before = blocks.slice(0, insertAt);
  const after = blocks.slice(insertAt);

  return (
    <>
      <Prose>
        <ResourceBlocks blocks={before} enableDropCap />
      </Prose>
      <InlineArticleCta />
      <Prose>
        <ResourceBlocks blocks={after} />
      </Prose>
    </>
  );
}

function ResourceBlocks({
  blocks,
  enableDropCap,
}: {
  blocks: ResourceBlock[];
  enableDropCap?: boolean;
}) {
  let firstParagraph = Boolean(enableDropCap);
  return (
    <>
      {blocks.map((block, index) => {
        const dropCap = block.type === 'p' && firstParagraph;
        if (block.type === 'p') firstParagraph = false;
        return (
          <ResourceBlockView
            key={`${block.type}-${index}`}
            block={block}
            dropCap={dropCap}
          />
        );
      })}
    </>
  );
}

function ResourceBlockView({
  block,
  dropCap,
}: {
  block: ResourceBlock;
  dropCap?: boolean;
}) {
  switch (block.type) {
    case 'p':
      return (
        <p
          className={
            dropCap
              ? '[&::first-letter]:float-left [&::first-letter]:pr-3 [&::first-letter]:font-display [&::first-letter]:text-7xl [&::first-letter]:leading-[0.8] [&::first-letter]:text-tile'
              : undefined
          }
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      );
    case 'h2':
      return <h2 id={headingId(block.text)}>{block.text}</h2>;
    case 'h3':
      return <h3>{block.text}</h3>;
    case 'ul':
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case 'blockquote':
      return <blockquote>{block.text}</blockquote>;
    case 'takeaways':
      return (
        <aside className="mt-10 border-t-2 border-tile pt-6">
          <p className="text-eyebrow text-ocean">Key takeaways</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-ocean">
            {block.items.map((item) => (
              <li key={item} className="text-[1.0625rem] leading-[1.65] text-ink">
                {item}
              </li>
            ))}
          </ul>
        </aside>
      );
  }
}

function InlineArticleCta() {
  return (
    <Card className="my-12 p-7">
      <p className="text-eyebrow text-ocean">Free Call</p>
      <p className="mt-3 text-h3 text-navy">
        Want this applied to your listing and your pages?
      </p>
      <p className="mt-3 text-stone">
        A written look at Search and Maps, competitor gaps, and a 90-day
        priority list. A person writes it. No contract attached.
      </p>
      <div className="mt-5">
        <Button href={primaryCta.href}>{primaryCta.label}</Button>
      </div>
    </Card>
  );
}
