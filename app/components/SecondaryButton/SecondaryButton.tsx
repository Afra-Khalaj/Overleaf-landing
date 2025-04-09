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
        className="btn btn-secondary btn-outline border-2 rounded-lg font-body text-base-content normal-case text-lg hover:bg-base-100 hover:!text-secondary-content cursor-pointer"
      >
        {children}
      </button>
    </Link>
  );
};

export default SecondaryButton;
