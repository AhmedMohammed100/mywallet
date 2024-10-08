'use client'

import "./globals.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Connect TON Wallet</title>
        <p>Farm Big<span></span>Earn $BIG</p>
      </head>
      <body>
        <TonConnectUIProvider manifestUrl="https://apricot-voluntary-emu-723.mypinata.cloud/ipfs/QmdNxmnbXhApfZsCFEKVLnB3g8Gpmq2nBn4jX6w9wNDD4V">
          {children}
        </TonConnectUIProvider>
      </body>
    </html>
  );
}
