export default function Logo({ className, viewBox = '0 0 1024 548' }: { className?: string; viewBox?: string }) {
  return (
    <svg viewBox={viewBox} className={className} version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g transform="matrix(1,0,0,1,-0.172846,0.00578078)">
        <g transform="matrix(1,0,0,1,0,-67.8564)">
          <path d="M1024,68L1024,205.026L758.73,205.045L635.406,478.676L1024,478.676L1024,615.232L418.737,615.232L673.221,67.856" fill="currentColor" />
        </g>
        <g transform="matrix(1,0,0,1,0,-67.8564)">
          <path d="M671.535,68.789L956,68.789" fill="none" />
        </g>
        <g transform="matrix(1,0,0,1,-0.659396,-67.8564)">
          <path d="M1.005,68.303L1.005,169.312L559.162,169.312L605.357,68.303L1.005,68.303Z" fill="#fb3" />
        </g>
        <g transform="matrix(1,0,0,1,0,-67.8564)">
          <path d="M535.782,218.531L489.561,317.932L0.346,317.932L0.346,218.531L535.782,218.531Z" fill="#f53" />
        </g>
        <g transform="matrix(1,0,0,1,-0.605362,-67.8564)">
          <path d="M466.951,366.217L420.712,466.028L0.951,466.028L0.951,366.217L466.951,366.217Z" fill="#e83a63" />
        </g>
        <g transform="matrix(1,0,0,1,-0.805464,-67.8564)">
          <path d="M1.151,514.197L1.151,615.333L351.56,615.845L398.254,514.197L1.151,514.197Z" fill="#8a2be2" />
        </g>
      </g>
    </svg>
  );
}
