
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'text';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ 
  children, 
  href, 
  variant = 'primary', 
  onClick, 
  className = '', 
  type = 'button' 
}: ButtonProps) => {
  const baseClass = `btn btn--${variant} ${className}`;

  if (href) {
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
    >
      {children}
    </button>
  );
};

export default Button;
