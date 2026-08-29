import { trustIconMap } from '@/components/icons/maps';
import { trustCapabilities } from '@/data/trust';

export function TrustStrip() {
  return (
    <section className="bg-sbmc-cream-warm py-8">
      <div className="mx-auto grid max-w-[1200px] gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4 md:px-8 lg:px-10">
        {trustCapabilities.map((item) => {
          const Icon = trustIconMap[item.icon];
          return (
            <p
              key={item.id}
              className="flex items-center gap-3 text-body-sm font-medium text-sbmc-navy"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sbmc-white text-sbmc-teal">
                <Icon size={20} />
              </span>
              {item.label}
            </p>
          );
        })}
      </div>
    </section>
  );
}
