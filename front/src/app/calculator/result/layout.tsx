import type { Metadata } from "next";
import { inter } from "../../../fonts/_fonts";
import "../../globals.scss";

export const metadata: Metadata = {
  title: "Equipacare",
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
