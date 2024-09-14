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


