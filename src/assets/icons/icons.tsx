import React, { SVGProps } from 'react';

export const SvgStar: React.FC<SVGProps<SVGSVGElement>> = props => (
     <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill=""
      d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"
    />
  </svg>
);

export const SvgArrowLeft: React.FC<SVGProps<SVGSVGElement>> = props => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
  viewBox="0 0 40 40"
    {...props}
  >
    <path
      stroke="#FCC50D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 36.667c9.204 0 16.666-7.462 16.666-16.667 0-9.205-7.462-16.667-16.666-16.667-9.205 0-16.667 7.462-16.667 16.667 0 9.205 7.462 16.667 16.667 16.667Z"
    />
    <path
      stroke="#FCC50D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 13.333 13.333 20 20 26.667M26.666 20H13.333"
    />
  </svg>
);

export const SvgArrowRight: React.FC<SVGProps<SVGSVGElement>> = props => (
     <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
  viewBox="0 0 40 40"
    {...props}
  >
    <path
      stroke="#FCC50D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 36.667c9.204 0 16.666-7.462 16.666-16.667 0-9.205-7.462-16.667-16.666-16.667-9.205 0-16.667 7.462-16.667 16.667 0 9.205 7.462 16.667 16.667 16.667Z"
    />
    <path
      stroke="#FCC50D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 26.667 26.667 20 20 13.333M13.333 20h13.333"
    />
  </svg>
);

export const SvgPlus: React.FC<SVGProps<SVGSVGElement>> = props => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
  viewBox="0 0 40 40"
    {...props}
  >
    <path
      stroke="#FCC50D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M20 36.667c9.205 0 16.667-7.462 16.667-16.667 0-9.205-7.462-16.667-16.666-16.667-9.205 0-16.667 7.462-16.667 16.667 0 9.205 7.462 16.667 16.667 16.667ZM20 13.333v13.334M13.333 20h13.333"
    />
  </svg>
);

export const SvgMinus: React.FC<SVGProps<SVGSVGElement>> = props => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
  viewBox="0 0 40 40"
    {...props}
  >
    <path
      stroke="#FCC50D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M20 36.667c9.205 0 16.667-7.462 16.667-16.667 0-9.205-7.462-16.666-16.666-16.666-9.205 0-16.667 7.461-16.667 16.666s7.462 16.667 16.667 16.667ZM13.334 20h13.333"
    />
  </svg>
);

export const SvgMail: React.FC<SVGProps<SVGSVGElement>> = props => (
   <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
      viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      stroke=""
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.334 5.333h21.333c1.467 0 2.667 1.2 2.667 2.667v16c0 1.467-1.2 2.667-2.667 2.667H5.334A2.675 2.675 0 0 1 2.667 24V8c0-1.467 1.2-2.667 2.667-2.667Z"
    />
    <path
      stroke=""
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M29.334 8 16 17.333 2.667 8"
    />
  </svg>
);


