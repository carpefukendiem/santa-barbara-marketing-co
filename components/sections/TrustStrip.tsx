import { trustIconMap } from '@/components/icons/maps';
import { trustCapabilities } from '@/data/trust';

export function TrustStrip() {
  return (
    <section className="border-y border-sbmc-border/80 bg-sbmc-cream py-8">
      <div className="mx-auto grid max-w-[1200px] gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4 md:px-8 lg:px-10">
        {trustCapabilities.map((item) => {
          const Icon = trustIconMap[item.icon];
          return (
            <p
              key={item.id}
              className="flex items-center gap-3.5 font-sans text-[0.8125rem] font-semibold text-sbmc-navy"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sbmc-aqua-light text-sbmc-teal">
                <Icon size={22} />
              </span>
              {item.label}
            </p>
          );
        })}
      </div>
    </section>
  );
}
