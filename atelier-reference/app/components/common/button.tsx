
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'text';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({ 
  children, 
  href, 
  variant = 'primary', 
  onClick, 
  className = '', 
  type = 'button',
  disabled = false
}: ButtonProps) => {
  const baseClass = `btn btn--${variant} ${className} ${disabled ? 'is-disabled' : ''}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      className={baseClass} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
