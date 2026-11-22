/**
 * Named past clients approved for public listing.
 * Pest control client stays anonymous and is intentionally omitted.
 */
export type PastClient = {
  name: string
  /** Existing /work/<slug> when a case study page exists. */
  workSlug: string | null
}

export const pastClients: PastClient[] = [
  { name: 'Enso MMA', workSlug: 'enso-mma' },
  { name: '101 Jiu Jitsu & Kickboxing', workSlug: '101-jiu-jitsu-kickboxing' },
  { name: "Fred's Upholstery", workSlug: 'freds-upholstery' },
  { name: 'Mission Sanitation', workSlug: 'mission-sanitation' },
  { name: 'Montecito Electric', workSlug: 'montecito-electric' },
  { name: 'Junk Dogs', workSlug: 'junk-dogs' },
  { name: 'Tastes & Tunes Santa Barbara', workSlug: 'tastes-and-tunes' },
  { name: 'Royal Latin Dance Cup', workSlug: 'royal-latin-dance-cup' },
  { name: 'Glow Installations', workSlug: 'glow-installations' },
]
