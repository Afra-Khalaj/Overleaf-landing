'use client'
import React from "react";
import Link from "next/link";

interface SecondaryButtonProps {
  children: string;
  href: string;
  className?: string;
}

const SecondaryButton = ({ children, href, className }: SecondaryButtonProps) => {
  return (
    <Link href={href}>
      <button
        className="btn border-primary border-2 bg-base-100 text-primary normal-case text-lg hover:bg-primary hover:border-primary hover:text-primary-content cursor-pointer"
      >
        {children}
      </button>
    </Link>
  );
};

export default SecondaryButton;
