import type { SVGProps } from 'react';

const LogoIcon = ({ width = '2481', height = '2481', ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${width} ${height}`}
    xmlSpace="preserve"
    style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}
    {...props}
  >
    <path d="M146.658 334h2187v340h-2187zM708.907 2153.517c-310.314 0-562.249-252.608-562.249-563.75s251.935-563.75 562.25-563.75h1624.748v340H708.907v-.654c-123.522 0-223.806 100.552-223.806 224.404s100.284 224.404 223.806 224.404v-.654h1624.75v340z" />
  </svg>
);

export default LogoIcon;
