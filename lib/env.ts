const REQUIRED_PRODUCTION = [
  'GHL_PRIVATE_TOKEN',
  'GHL_LOCATION_ID',
  'NEXT_PUBLIC_GHL_CALENDAR_ID',
] as const;

export function assertProductionGhlEnv(): void {
  if (process.env.VERCEL_ENV !== 'production') return;
  const missing = REQUIRED_PRODUCTION.filter((name) => !process.env[name]);
  if (missing.length > 0) {
    throw new Error(
      `Production build is missing required GoHighLevel env: ${missing.join(', ')}. Set them in the Vercel project settings.`,
    );
  }
}
