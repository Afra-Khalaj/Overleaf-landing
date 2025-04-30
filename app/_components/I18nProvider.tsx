'use client';

import React from 'react';
import { IntlProvider } from 'react-intl';
import en from '../../locales/en.json';
import fa from '../../locales/fa.json';

const messages = { en, fa };

function I18nProvider({ children, locale }: { children: React.ReactNode; locale: 'en' | 'fa' }) {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
}

export default I18nProvider;
