const GTM_ID_PATTERN = /^GTM-[A-Z0-9]+$/

/** Default container. Override with NEXT_PUBLIC_GTM_ID only if the value is a valid GTM id. */
export const DEFAULT_GTM_ID = 'GTM-5FK5H5BS' as const

export function gtmContainerId(): string {
  const fromEnv = process.env.NEXT_PUBLIC_GTM_ID?.trim() ?? ''
  if (GTM_ID_PATTERN.test(fromEnv)) return fromEnv
  return DEFAULT_GTM_ID
}
