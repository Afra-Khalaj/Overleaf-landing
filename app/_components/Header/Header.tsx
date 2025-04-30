'use client'

import React from "react";
import Link from "next/link";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { FormattedMessage, useIntl } from "react-intl";
import { useRouter, usePathname } from "next/navigation"; // Import usePathname from next/navigation

const Header = () => {
  const { formatMessage } = useIntl();
  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname

  const changeLanguage = (locale: string) => {
    router.push(`/${locale}${pathname}`);
  };  

  return (
    <div className="flex items-center px-6 pb-10">
      <Link
        className="text text-4xl text-primary font-title font-semibold"
        href="/"
      >
        HPC LaTeX Editor
      </Link>
      {/* <button onClick={() => changeLanguage("en")}>
        <FormattedMessage id="changeLanguage" /> (English)
      </button>
      <button onClick={() => changeLanguage("fa")}>
        <FormattedMessage id="changeLanguage" /> (فارسی)
      </button> */}
      <Link href="/templates" className="ml-auto text-xl hover:text-primary">
        {/* Templates */}
        <FormattedMessage id="template" /> 
      </Link>
      <Link href="/docs" className="ml-6 mr-6 text-xl hover:text-primary">
        Docs
      </Link>
      <PrimaryButton href="https://dev.latex.hpc.ipm.ac.ir">
        Login
      </PrimaryButton>
    </div>
  );
};

export default Header;