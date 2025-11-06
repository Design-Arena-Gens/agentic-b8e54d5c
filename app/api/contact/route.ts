import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  website: z.string().optional(),
  startTime: z.string().optional(),
})

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })

  const parsed = schema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 })

  const { website, startTime, name, email, message } = parsed.data

  // Honeypot: bots often fill hidden fields
  if (website && website.trim().length > 0) {
    return NextResponse.json({ ok: true })
  }

  // Time-based check: require at least 3s between render and submit
  const started = Number(startTime)
  if (!Number.isFinite(started) || Date.now() - started < 3000) {
    return NextResponse.json({ error: 'Slow down' }, { status: 429 })
  }

  // In a real app, send email or persist to a database here.
  console.log('[Contact] New message', { name, email, message: message.slice(0, 200) })

  return NextResponse.json({ ok: true })
}
