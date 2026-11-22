import { site } from '@/data/site'

/** Public IndexNow key (keys are public by design). */
export const INDEXNOW_KEY = 'b75c378aed65cd66ec124499dab950e3'

export const INDEXNOW_KEY_LOCATION = `${site.url}/${INDEXNOW_KEY}.txt`

export type IndexNowPayload = {
  host: string
  key: string
  keyLocation: string
  urlList: string[]
}

export function buildIndexNowPayload(urls: string[]): IndexNowPayload {
  const host = new URL(site.url).host
  return {
    host,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: urls,
  }
}

/** Submit changed URLs to IndexNow (Bing and participating engines). */
export async function submitIndexNow(urls: string[]): Promise<Response> {
  const payload = buildIndexNowPayload(urls)
  return fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  })
}
