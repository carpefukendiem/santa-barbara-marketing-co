const GA4_ID_PATTERN = /^G-[A-Z0-9]+$/

/** Public measurement id. Invalid or empty values load nothing. */
export function ga4MeasurementId(): string | null {
  const id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim() ?? ''
  if (!GA4_ID_PATTERN.test(id)) return null
  return id
}
