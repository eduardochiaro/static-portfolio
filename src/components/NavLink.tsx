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
      className={`text-sm uppercase transition ${
        active
          ? 'text-accent dark:text-dark-accent font-medium'
          : 'text-mono-text-muted dark:text-dark-mono-text-muted hover:text-accent dark:hover:text-dark-accent'
      } ${className}`}
    >
      {label}
    </Link>
  );
}
