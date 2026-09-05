import Link from 'next/link';

type NavLinkProps = {
  readonly href: string;
  readonly label: string;
  readonly active?: boolean;
  readonly onClick?: () => void;
  readonly className?: string;
};

export default function NavLink({ href, label, active = false, onClick, className = '' }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm lowercase transition ${active ? 'text-accent' : 'text-mono-text-muted hover:text-accent'} ${className}`}
    >
      {label}
    </Link>
  );
}
