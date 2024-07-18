import type { Metadata } from "next";
import { inter } from "../../../fonts/_fonts";

export const metadata: Metadata = {
  title: "Equipacare",
  icons: {
    icon: [
      {
        rel: 'icon',
        url: '/logo32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        url: '/logo192x192.png',
        sizes: '192x192',
      },
      {
        rel: 'icon',
        url: '/logo180x180.png',
        sizes: '180x180',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
