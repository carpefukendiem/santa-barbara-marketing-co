import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const alt = 'Santa Barbara Marketing Co. — Local Businesses. Lasting Growth.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  const logoPath = path.join(
    process.cwd(),
    'public',
    'images',
    'brand',
    'sbmc-logo.png',
  );
  const logoBuffer = await readFile(logoPath);
  const logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 48,
          background: '#052136',
          color: '#F8F4ED',
        }}
      >
        <img src={logoSrc} width={280} height={280} alt="" />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          <div style={{ display: 'flex', fontSize: 44, lineHeight: 1.15 }}>
            Santa Barbara
          </div>
          <div style={{ display: 'flex', fontSize: 44, lineHeight: 1.15 }}>
            Marketing Co.
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              color: '#BFD7D7',
              marginTop: 8,
            }}
          >
            Local Businesses. Lasting Growth.
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
