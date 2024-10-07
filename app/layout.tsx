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
        <TonConnectUIProvider manifestUrl="https://mega.nz/file/9eFSESyJ#T7DxaCv4tz-NoGc09YWo3fROjumprBvAahaujycprKc">
          {children}
        </TonConnectUIProvider>
      </body>
    </html>
  );
}
