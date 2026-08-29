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
      <label htmlFor={id} className="block text-sm font-medium text-sbmc-navy">
        {label}
        {required ? <span className="text-sbmc-ink-muted"> (required)</span> : <span className="text-sbmc-ink-muted"> (optional)</span>}
      </label>
      <div className="mt-1.5">
        {children}
      </div>
      {error ? (
        <p id={errorId} role="alert" className="mt-1 text-sm text-[#9b2c2c]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const inputClass = cn(
  'w-full rounded-[8px] border border-sbmc-border bg-sbmc-white px-3 py-3 text-sbmc-ink',
  'placeholder:text-sbmc-ink-muted/70',
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
