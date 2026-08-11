import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

import { site } from '@/lib/content'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = `${site.name} — ${site.tagline}`

const geistMedium = readFileSync(
  join(process.cwd(), 'node_modules/geist/dist/fonts/geist-sans/Geist-Medium.ttf'),
)
const geistSemiBold = readFileSync(
  join(process.cwd(), 'node_modules/geist/dist/fonts/geist-sans/Geist-SemiBold.ttf'),
)
const geistMono = readFileSync(
  join(process.cwd(), 'node_modules/geist/dist/fonts/geist-mono/GeistMono-Medium.ttf'),
)
const logo = readFileSync(join(process.cwd(), 'assets/logo-mark.png')).toString('base64')

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '76px',
          background: '#0a0c10',
          backgroundImage:
            'radial-gradient(circle at 82% 12%, rgba(37,87,234,0.35), transparent 55%), radial-gradient(circle at 8% 92%, rgba(41,186,255,0.16), transparent 45%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <div
            style={{
              display: 'flex',
              width: 108,
              height: 108,
              borderRadius: 26,
              background: '#12151b',
              border: '1px solid rgba(245,244,241,0.14)',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 22,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`data:image/png;base64,${logo}`} width={64} height={64} alt="" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span
              style={{
                fontFamily: 'Geist SemiBold',
                fontSize: 46,
                letterSpacing: 4,
                color: '#f5f4f1',
              }}
            >
              R3 TECH
            </span>
            <span
              style={{
                fontFamily: 'Geist Mono',
                fontSize: 20,
                letterSpacing: 6,
                textTransform: 'uppercase',
                color: '#29baff',
              }}
            >
              Software · Web · IT Solutions
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <span
            style={{
              fontFamily: 'Geist Medium',
              fontSize: 54,
              lineHeight: 1.15,
              maxWidth: 880,
              color: '#f5f4f1',
            }}
          >
            Construimos la tecnología que tu negocio necesita.
          </span>
          <span style={{ fontFamily: 'Geist Mono', fontSize: 20, color: 'rgba(245,244,241,0.5)' }}>
            r3tech.site
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Geist Medium', data: geistMedium, weight: 500 },
        { name: 'Geist SemiBold', data: geistSemiBold, weight: 600 },
        { name: 'Geist Mono', data: geistMono, weight: 500 },
      ],
    },
  )
}
