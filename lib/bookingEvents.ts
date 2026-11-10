const EXACT = new Set([
  'calendars:appointment:booked',
  'appointmentbooked',
  'booking-confirmed',
  'bookingsuccess',
])

function textsFrom(value: unknown, depth = 0): string[] {
  if (depth > 3 || value == null) return []
  if (typeof value === 'string') {
    const trimmed = value.trim()
    if (!trimmed) return []
    if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
      try {
        return textsFrom(JSON.parse(trimmed) as unknown, depth + 1)
      } catch {
        return [trimmed]
      }
    }
    return [trimmed]
  }
  if (typeof value !== 'object') return []
  const record = value as Record<string, unknown>
  const nested = ['event', 'type', 'message', 'action', 'name', 'status']
    .flatMap((key) => textsFrom(record[key], depth + 1))
  return nested
}

export function isBookingConfirmedMessage(data: unknown): boolean {
  return textsFrom(data).some((value) => {
    const text = value.toLowerCase()
    if (EXACT.has(text)) return true
    const mentionsBooking =
      text.includes('appointment') || text.includes('booking') || text.includes('calendar')
    const mentionsDone = text.includes('booked') || text.includes('confirm') || text.includes('success')
    return mentionsBooking && mentionsDone
  })
}
