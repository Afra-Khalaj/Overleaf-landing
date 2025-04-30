// app/[locale]/layout.tsx
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import LangSetter from '../_components/LangSetter/LangSetter';
import '../globals.css';

// Load Google Fonts
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

// Generate static paths for SSG
export function generateStaticParams() {
  return [{ locale: 'fa' }, { locale: 'en' }];
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = require(`../../messages/${locale}.json`);
  } catch (error) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={locale === 'fa' ? 'rtl' : 'ltr'}
      className={`${playfair.variable} ${sourceSans.variable}`}
      data-theme="overleafTheme"
    >
      <body className="font-body">
        {/* <LangSetter /> */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
