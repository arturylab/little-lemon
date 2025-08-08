// components/LoadApiScript.js
'use client';

import Script from 'next/script';

export default function LoadApiScript() {
  return (
    <Script
      src="/api.js"
      strategy="afterInteractive"
      onLoad={() => console.log("API cargada correctamente")}
    />
  );
}
