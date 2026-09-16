import { cn } from '@/lib/utils';

export function FormField({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-[11px] uppercase tracking-[0.16em] text-stone [.bg-navy_&]:text-cream/60"
      >
        {label}
        {required ? null : <span> (optional)</span>}
      </label>
      <div className="mt-1.5">{children}</div>
      {error ? (
        <p id={errorId} role="alert" className="mt-1 text-sm text-tile">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const inputClass = cn(
  'w-full rounded-none border-0 border-b border-rule bg-transparent px-0 py-4 text-ink',
  'placeholder:text-stone',
  'focus:border-[--ochre] focus:outline-none focus:ring-0',
  '[.bg-navy_&]:border-cream/30 [.bg-navy_&]:text-cream [.bg-navy_&]:placeholder:text-cream/40',
);

export function Honeypot({
  inputProps,
}: {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <div className="absolute h-px w-px overflow-hidden" style={{ clipPath: 'inset(50%)' }} aria-hidden="true">
      <label htmlFor="company_website">Company website</label>
      <input
        id="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        name="company_website"
        {...inputProps}
      />
    </div>
  );
}
