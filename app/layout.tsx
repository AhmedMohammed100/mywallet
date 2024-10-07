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
        <title>TON Connect Demo</title>
      </head>
      <body>
        <TonConnectUIProvider manifestUrl="https://apricot-voluntary-emu-723.mypinata.cloud/ipfs/QmYsdaobPuZMGiMM2KM36CFkWz4ZY8TCWv65ioKQfX1seN">
          {children}
        </TonConnectUIProvider>
      </body>
    </html>
  );
}
