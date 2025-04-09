'use client'
import React from "react";
import Link from "next/link";

interface SecondaryButtonProps {
  children: string;
  href: string;
}

const SecondaryButton = ({ children, href }: SecondaryButtonProps) => {
  return (
    <Link href={href}>
      <button
        className="btn border-primary border-2 bg-base-100 font-body text-neutral-content normal-case text-lg hover:bg-neutral hover:border-secondary cursor-pointer"
      >
        {children}
      </button>
    </Link>
  );
};

export default SecondaryButton;
