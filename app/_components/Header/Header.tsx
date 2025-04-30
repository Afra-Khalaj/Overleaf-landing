'use client';

import Link from 'next/link';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations();

  return (
    <div className="flex items-center px-6 pb-10">
      <Link className="text-4xl text-primary font-title font-semibold" href="/">
        HPC LaTeX Editor
      </Link>
      <Link href="/templates" className="ml-auto text-xl hover:text-primary">
        {t('templates')}
      </Link>
      <Link href="/docs" className="ml-6 mr-6 text-xl hover:text-primary">
        {t('docs')}
      </Link>
      <PrimaryButton href="https://dev.latex.hpc.ipm.ac.ir">
        {t('login')}
      </PrimaryButton>
    </div>
  );
}
