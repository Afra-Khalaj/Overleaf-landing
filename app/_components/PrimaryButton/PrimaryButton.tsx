import React from "react";

interface PrimaryButtonProps {
  children: string;
  href: string;
  className?: string;
}

const PrimaryButton = ({ children, href, className }: PrimaryButtonProps) => {
  return (
    // Use <a> for external links
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-fit"
    >
      <button
        className={`btn btn-primary font-medium text-base-200 normal-case text-lg items-center justify-center flex text-center ${className}`}
      >
        {children}
      </button>
    </a>
  );
};

export default PrimaryButton;
