
/**
 * Search Trigger Component - Phase 3A Support Component
 * Button to trigger LiveSearch modal with ⌘K shortcut display
 * Part of Atelier Agency Theme - Premium Digital Product
 */

"use client";

import React from 'react';
import { Search, Command } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SearchTriggerProps {
  onClick: () => void;
  variant?: 'button' | 'input-style' | 'icon';
  placeholder?: string;
  showShortcut?: boolean;
  className?: string;
}

/**
 * Professional Search Trigger matching Atelier design system
 * Features: Multiple variants, keyboard shortcut indication, accessibility
 */
export const SearchTrigger: React.FC<SearchTriggerProps> = ({
  onClick,
  variant = 'input-style',
  placeholder = 'Search...',
  showShortcut = true,
  className,
}) => {
  const getShortcutDisplay = () => {
    const isMac = typeof navigator !== 'undefined' && navigator.platform.includes('Mac');
    return isMac ? '⌘K' : 'Ctrl+K';
  };

  if (variant === 'icon') {
    return (
      <button
        onClick={onClick}
        className={cn(
          // Base icon button styles
          "w-10 h-10 flex items-center justify-center",
          "text-text hover:text-heading",
          "rounded-lg transition-all duration-200",
          "hover:bg-surface-light/30 hover:scale-110 active:scale-95",
          // Focus accessibility
          "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2",
          "focus:ring-offset-background",
          className
        )}
        aria-label="Open search"
        title={`Open search (${getShortcutDisplay()})`}
      >
        <Search size={18} />
      </button>
    );
  }

  if (variant === 'button') {
    return (
      <button
        onClick={onClick}
        className={cn(
          // Base button styles
          "inline-flex items-center gap-2 px-4 py-2",
          "bg-surface border border-surface-light rounded-lg",
          "text-text hover:text-heading hover:border-primary/30",
          "transition-all duration-200",
          "hover:shadow-md hover:shadow-primary/5",
          // Focus accessibility
          "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
          "focus:ring-offset-background",
          className
        )}
        aria-label="Open search"
      >
        <Search size={16} />
        <span className="font-medium">Search</span>
        {showShortcut && (
          <div className="ml-auto flex items-center gap-1 text-xs text-text-secondary">
            <Command size={10} />
            <span>{getShortcutDisplay().slice(-1)}</span>
          </div>
        )}
      </button>
    );
  }

  // Default input-style variant
  return (
    <button
      onClick={onClick}
      className={cn(
        // Base input-style button
        "w-full max-w-sm flex items-center gap-3 px-4 py-2.5",
        "bg-surface border border-surface-light rounded-xl",
        "text-left transition-all duration-200",
        "hover:border-primary/30 hover:shadow-md hover:shadow-primary/5",
        // Focus states
        "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
        "focus:ring-offset-background",
        className
      )}
      aria-label="Open search"
    >
      <Search size={18} className="text-text-secondary flex-shrink-0" />
      <span className="flex-1 text-text-secondary font-medium">
        {placeholder}
      </span>
      {showShortcut && (
        <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-surface-light/50 text-text-secondary text-xs font-mono">
          <Command size={10} />
          <span>{getShortcutDisplay().slice(-1)}</span>
        </div>
      )}
    </button>
  );
};

export default SearchTrigger;
