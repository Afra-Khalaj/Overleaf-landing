'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function LangSetter() {
  const pathname = usePathname();

  // Extract the locale from the path (e.g., '/fa/about' → 'fa')
  const locale = pathname.split('/')[1] || 'en';

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'fa' ? 'rtl' : 'ltr';
  }, [locale]);

  return null;
}
