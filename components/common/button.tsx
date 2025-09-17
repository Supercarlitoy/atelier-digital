
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'text';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
  'aria-describedby'?: string;
  disabled?: boolean;
}

const Button = ({ 
  children, 
  href, 
  variant = 'primary', 
  onClick, 
  className = '', 
  type = 'button',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  disabled = false
}: ButtonProps) => {
  const baseClass = `btn btn--${variant} ${className} ${disabled ? 'btn--disabled' : ''}`;

  if (href && !disabled) {
    return (
      <Link 
        href={href} 
        className={baseClass}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      className={baseClass} 
      onClick={onClick}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
