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
          ? 'text-mono-text dark:text-dark-mono-text font-medium'
          : 'text-mono-text-muted dark:text-dark-mono-text-muted hover:text-mono-text dark:hover:text-dark-mono-text'
      } ${className}`}
    >
      {label}
    </Link>
  );
}
