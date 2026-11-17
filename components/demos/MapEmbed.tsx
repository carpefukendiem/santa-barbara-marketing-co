type MapEmbedProps = {
  address: string;
  title: string;
  className?: string;
};

export function MapEmbed({ address, title, className }: MapEmbedProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  return (
    <div className={className ?? 'map'}>
      <iframe
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
