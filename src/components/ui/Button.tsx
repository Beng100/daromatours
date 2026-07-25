import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

const variantClasses: Record<Variant, string> = {
  primary: 'bg-ember-500 text-white hover:bg-ember-600 focus-visible:bg-ember-600',
  secondary: 'bg-white text-night-800 border border-sand-300 hover:border-ember-500 hover:text-ember-500',
  ghost: 'bg-transparent text-white border border-white/40 hover:bg-white/10'
};

const sizeClasses: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base'
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none';

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  children: ReactNode;
}

type ButtonAsButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    to?: undefined;
  };

type ButtonAsLinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string;
    to?: undefined;
  };

type ButtonAsRouterLinkProps = CommonProps & {
  to: string;
  href?: undefined;
  className?: string;
};

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps | ButtonAsRouterLinkProps;

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', icon, children, className = '' } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    const { href, ...rest } = props as ButtonAsLinkProps;
    return (
      <a href={href} className={classes} {...rest}>
        {icon}
        {children}
      </a>
    );
  }

  const { ...rest } = props as ButtonAsButtonProps;
  return (
    <button className={classes} {...rest}>
      {icon}
      {children}
    </button>
  );
}
