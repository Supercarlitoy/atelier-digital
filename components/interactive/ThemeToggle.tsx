
/**
 * Theme Toggle Component - Phase 3A Essential
 * System-aware dark/light mode with morphing sun/moon icons
 * Part of Atelier Agency Theme - Premium Digital Product
 */

"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useThemeToggle } from '../../hooks/use-theme-toggle';
import { ThemeToggleProps } from '../../types/phase3';
import { cn } from '../../lib/utils';

/**
 * Premium Theme Toggle with Digital Stonemasonry aesthetic
 * Features: Morphing icons, smooth transitions, system preference awareness
 */
export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  config,
  variant = 'minimal',
  size = 'md',
  className,
}) => {
  const [mounted, setMounted] = useState(false);
  const {
    theme,
    resolvedTheme,
    isSystem,
    toggleTheme,
    cycleTheme,
    getThemeIcon,
    getThemeLabel,
  } = useThemeToggle(config);

  // Size variants
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconSizes = {
    sm: 16,
    md: 18,
    lg: 20,
  };

  // Prevent hydration mismatch by waiting for client mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Show a neutral placeholder until mounted
  if (!mounted) {
    return (
      <div 
        className={cn(
          "flex items-center justify-center animate-pulse",
          variant === 'text' ? 'px-3 py-1.5' : sizeClasses[size],
          className
        )}
        aria-hidden="true"
      >
        <div className="w-4 h-4 bg-surface-light rounded opacity-50" />
      </div>
    );
  }

  /**
   * Get current icon component with smooth morphing animation
   */
  const getCurrentIcon = () => {
    const iconSize = iconSizes[size];
    
    switch (getThemeIcon()) {
      case 'sun':
        return (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Sun size={iconSize} />
          </motion.div>
        );
      case 'moon':
        return (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Moon size={iconSize} />
          </motion.div>
        );
      case 'monitor':
      default:
        return (
          <motion.div
            key="monitor"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Monitor size={iconSize} />
          </motion.div>
        );
    }
  };

  /**
   * Handle theme toggle based on variant
   */
  const handleClick = () => {
    if (config?.showSystemOption) {
      cycleTheme(); // Cycle through all options including system
    } else {
      toggleTheme(); // Toggle between light and dark only
    }
  };

  if (variant === 'text') {
    return (
      <button
        onClick={handleClick}
        className={cn(
          // Base text button styles
          "inline-flex items-center gap-2 px-3 py-1.5",
          "text-sm font-medium text-text hover:text-heading",
          "rounded-md transition-all duration-200",
          "hover:bg-surface-light/50",
          "focus:outline-none focus:ring-2 focus:ring-primary/50",
          className
        )}
        aria-label={`Switch to ${getThemeLabel()}`}
      >
        {getCurrentIcon()}
        <span>{getThemeLabel()}</span>
      </button>
    );
  }

  if (variant === 'elegant') {
    return (
      <div className={cn("relative", className)}>
        <button
          onClick={handleClick}
          className={cn(
            // Base elegant button styles
            sizeClasses[size],
            "relative overflow-hidden",
            "bg-surface border border-surface-light rounded-xl",
            "flex items-center justify-center",
            "transition-all duration-300 ease-out",
            // Hover states
            "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10",
            "hover:scale-105",
            // Focus states
            "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
            "focus:ring-offset-background",
            // Text color based on resolved theme
            resolvedTheme === 'dark' ? 'text-primary' : 'text-text'
          )}
          aria-label={`Current theme: ${getThemeLabel()}. Click to change.`}
        >
          {getCurrentIcon()}
          
          {/* Premium gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Theme indicator dot */}
        <motion.div
          className={cn(
            "absolute -top-1 -right-1 w-3 h-3 rounded-full",
            "border-2 border-background",
            resolvedTheme === 'dark' ? 'bg-blue-500' : 'bg-amber-500'
          )}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
        />
      </div>
    );
  }

  // Default minimal variant
  return (
    <button
      onClick={handleClick}
      className={cn(
        // Base minimal button styles
        sizeClasses[size],
        "relative flex items-center justify-center",
        "text-text hover:text-heading",
        "rounded-lg transition-all duration-200",
        "hover:bg-surface-light/30",
        // Focus accessibility
        "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2",
        "focus:ring-offset-background",
        // Premium hover effect
        "hover:scale-110 active:scale-95",
        className
      )}
      aria-label={`Current theme: ${getThemeLabel()}. Click to toggle.`}
      title={`Switch theme (${getThemeLabel()})`}
    >
      {getCurrentIcon()}
      
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
    </button>
  );
};

export default ThemeToggle;
