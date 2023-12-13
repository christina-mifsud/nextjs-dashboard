//  Layout - to create UI that is shared between multiple pages.
//  This is the root layout (found in the root of the project) - required.Any UI added to the root layout will be shared across all pages in the app.Here you can modify your < html > and < body > tags, and add metadata.

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
