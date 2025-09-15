
/**
 * Live Search Component - Phase 3A Essential
 * ⌘K triggered modal with fuzzy search and keyboard navigation
 * Part of Atelier Agency Theme - Premium Digital Product
 */

"use client";

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Hash, User, FileText, Briefcase, Command } from 'lucide-react';
import { useLiveSearch } from '../../hooks/use-live-search';
import { LiveSearchProps, SearchableItem } from '../../types/phase3';
import { cn } from '../../lib/utils';

/**
 * Premium Live Search with Digital Stonemasonry aesthetic
 * Features: ⌘K shortcuts, fuzzy search, keyboard navigation, categorized results
 */
export const LiveSearch: React.FC<LiveSearchProps> = ({
  items,
  config,
  onSelect,
  className,
}) => {
  const {
    isOpen,
    query,
    results,
    selectedIndex,
    isLoading,
    setQuery,
    closeSearch,
    navigateResults,
    selectResult,
    hasResults,
    getShortcutDisplay,
  } = useLiveSearch(items, config);

  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * Focus input when modal opens
   */
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  /**
   * Get category icon for visual organization
   */
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'project':
        return <Briefcase size={16} />;
      case 'team':
        return <User size={16} />;
      case 'page':
        return <FileText size={16} />;
      case 'service':
        return <Hash size={16} />;
      default:
        return <FileText size={16} />;
    }
  };

  /**
   * Handle result selection
   */
  const handleSelect = (item?: SearchableItem, index?: number) => {
    const selectedItem = item || selectResult(index);
    if (selectedItem) {
      onSelect?.(selectedItem);
      // Navigate to the URL if no custom handler
      if (!onSelect && selectedItem.url) {
        window.location.href = selectedItem.url;
      }
    }
  };

  /**
   * Handle backdrop click to close
   */
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeSearch();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={handleBackdropClick}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        {/* Search Modal */}
        <motion.div
          className={cn(
            // Base modal styles
            "relative w-full max-w-2xl",
            "bg-surface/95 backdrop-blur-md",
            "border border-surface-light shadow-2xl shadow-black/25",
            "rounded-2xl overflow-hidden",
            className
          )}
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ 
            type: "spring", 
            duration: 0.4, 
            ease: "easeOut" 
          }}
        >
          {/* Search Input Section */}
          <div className="flex items-center gap-4 p-6 border-b border-surface-light">
            <Search size={20} className="text-text-secondary flex-shrink-0" />
            <input
              ref={inputRef}
              data-search-input
              type="text"
              placeholder={config?.placeholder || "Search projects, pages, team..."}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={cn(
                // Base input styles
                "flex-1 bg-transparent text-heading",
                "placeholder:text-text-secondary",
                "focus:outline-none",
                "text-lg font-medium"
              )}
              autoComplete="off"
              spellCheck="false"
            />
            
            {/* Keyboard shortcut indicator */}
            <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-surface-light text-text-secondary text-xs font-mono">
              <Command size={10} />
              <span>ESC</span>
            </div>
          </div>

          {/* Results Section */}
          <div className="max-h-96 overflow-y-auto">
            {isLoading ? (
              // Loading State
              <div className="flex items-center justify-center py-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full"
                />
              </div>
            ) : hasResults ? (
              // Results List
              <div className="py-2">
                {results.map((item, index) => (
                  <motion.button
                    key={`${item.category}-${item.id}`}
                    onClick={() => handleSelect(item)}
                    className={cn(
                      // Base result styles
                      "w-full flex items-center gap-4 px-6 py-4 text-left",
                      "transition-all duration-150",
                      "hover:bg-surface-light/50",
                      // Selected state
                      index === selectedIndex && "bg-primary/10 border-r-2 border-primary",
                      // Focus accessibility
                      "focus:outline-none focus:bg-primary/10"
                    )}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {/* Category Icon */}
                    <div className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-lg",
                      "flex items-center justify-center",
                      "bg-surface-light/50 text-text-secondary",
                      index === selectedIndex && "bg-primary/20 text-primary"
                    )}>
                      {getCategoryIcon(item.category)}
                    </div>

                    {/* Result Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className={cn(
                        "font-medium truncate",
                        index === selectedIndex ? "text-heading" : "text-text"
                      )}>
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-sm text-text-secondary truncate mt-0.5">
                          {item.description}
                        </p>
                      )}
                      
                      {/* Tags */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex gap-1 mt-2">
                          {item.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded text-xs bg-surface-light/50 text-text-secondary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Arrow indicator for selected */}
                    {index === selectedIndex && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-primary"
                      >
                        <ArrowRight size={16} />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            ) : query.trim() ? (
              // No Results
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Search size={32} className="text-text-secondary mb-3" />
                <h3 className="font-medium text-heading mb-1">No results found</h3>
                <p className="text-sm text-text-secondary">
                  Try adjusting your search query
                </p>
              </div>
            ) : (
              // Empty State with featured items
              <div className="py-2">
                <div className="px-6 py-3 border-b border-surface-light">
                  <p className="text-sm font-medium text-text-secondary uppercase tracking-wide">
                    Featured
                  </p>
                </div>
                {results.slice(0, 4).map((item, index) => (
                  <button
                    key={`featured-${item.id}`}
                    onClick={() => handleSelect(item)}
                    className={cn(
                      "w-full flex items-center gap-4 px-6 py-3 text-left",
                      "hover:bg-surface-light/50 transition-colors",
                      index === selectedIndex && "bg-primary/10 border-r-2 border-primary"
                    )}
                  >
                    <div className="flex-shrink-0 w-6 h-6 text-text-secondary">
                      {getCategoryIcon(item.category)}
                    </div>
                    <span className="text-text font-medium">{item.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer with keyboard shortcuts */}
          <div className="flex items-center justify-between px-6 py-3 bg-surface-light/30 border-t border-surface-light text-xs text-text-secondary">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-surface text-xs">↑↓</kbd>
                Navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-surface text-xs">↵</kbd>
                Select
              </span>
            </div>
            <span>
              Press <kbd className="px-1.5 py-0.5 rounded bg-surface text-xs">ESC</kbd> to close
            </span>
          </div>

          {/* Subtle texture overlay */}
          <div className="absolute inset-0 rounded-2xl opacity-5 pointer-events-none">
            <div 
              className="w-full h-full rounded-2xl"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 40%, rgba(194, 168, 120, 0.1) 0%, transparent 70%),
                                 radial-gradient(circle at 70% 60%, rgba(194, 168, 120, 0.1) 0%, transparent 70%)`,
                backgroundSize: '50px 50px'
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LiveSearch;
