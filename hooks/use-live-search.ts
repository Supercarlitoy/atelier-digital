
/**
 * Live Search Hook - Phase 3A Essential Component
 * ⌘K triggered fuzzy search with keyboard navigation
 * Part of Atelier Agency Theme - Premium Digital Product
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import Fuse from 'fuse.js';
import { SearchableItem, SearchResult, LiveSearchConfig, LiveSearchState } from '../types/phase3';

const defaultConfig: LiveSearchConfig = {
  placeholder: 'Search projects, pages, team...',
  maxResults: 8,
  searchKeys: ['title', 'description', 'category', 'tags'],
  threshold: 0.4, // Fuse.js fuzzy matching threshold
  shortcuts: {
    open: ['cmd+k', 'ctrl+k'],
    close: ['escape'],
    navigate: {
      up: ['ArrowUp'],
      down: ['ArrowDown'],
      select: ['Enter'],
    },
  },
};

/**
 * Professional fuzzy search with keyboard shortcuts and navigation
 * Features: ⌘K activation, Fuse.js integration, accessibility compliance
 */
export const useLiveSearch = (items: SearchableItem[], config: LiveSearchConfig = {}) => {
  const mergedConfig = { ...defaultConfig, ...config };

  const [state, setState] = useState<LiveSearchState>({
    isOpen: false,
    query: '',
    results: [],
    selectedIndex: -1,
    isLoading: false,
  });

  /**
   * Initialize Fuse.js with professional configuration
   * Optimized for UX with appropriate thresholds and scoring
   */
  const fuse = useMemo(() => {
    const fuseOptions = {
      keys: mergedConfig.searchKeys,
      threshold: mergedConfig.threshold,
      includeScore: true,
      includeMatches: true,
      minMatchCharLength: 2,
      // Advanced Fuse.js options for better UX
      ignoreLocation: true,
      useExtendedSearch: false,
      findAllMatches: false,
    };

    return new Fuse(items, fuseOptions);
  }, [items, mergedConfig.searchKeys, mergedConfig.threshold]);

  /**
   * Perform fuzzy search with professional result processing
   */
  const performSearch = useCallback((query: string): SearchResult[] => {
    if (!query.trim()) {
      // Return featured items when no query (premium UX touch)
      const featured = items
        .filter(item => item.featured)
        .slice(0, mergedConfig.maxResults)
        .map(item => ({ ...item, score: 0 }));
      
      return featured.length > 0 
        ? featured 
        : items.slice(0, mergedConfig.maxResults).map(item => ({ ...item, score: 0 }));
    }

    const searchResults = fuse.search(query);
    
    return searchResults
      .slice(0, mergedConfig.maxResults)
      .map(result => ({
        ...result.item,
        score: result.score,
        matches: result.matches?.map(match => match.value || '') || [],
      }));
  }, [items, fuse, mergedConfig.maxResults]);

  /**
   * Update search query with debounced execution
   */
  const setQuery = useCallback((newQuery: string) => {
    setState(prev => ({
      ...prev,
      query: newQuery,
      isLoading: true,
      selectedIndex: -1, // Reset selection on new query
    }));

    // Simulate realistic search delay for premium feel
    setTimeout(() => {
      const results = performSearch(newQuery);
      setState(prev => ({
        ...prev,
        results,
        isLoading: false,
        selectedIndex: results.length > 0 ? 0 : -1,
      }));
    }, 100);
  }, [performSearch]);

  /**
   * Open search modal with professional state management
   */
  const openSearch = useCallback(() => {
    setState(prev => {
      if (!prev.isOpen) {
        const initialResults = performSearch('');
        return {
          ...prev,
          isOpen: true,
          query: '',
          results: initialResults,
          selectedIndex: initialResults.length > 0 ? 0 : -1,
          isLoading: false,
        };
      }
      return prev;
    });

    // Focus management for accessibility
    setTimeout(() => {
      const searchInput = document.querySelector('[data-search-input]') as HTMLInputElement;
      if (searchInput) {
        searchInput.focus();
      }
    }, 100);
  }, [performSearch]);

  /**
   * Close search modal with state cleanup
   */
  const closeSearch = useCallback(() => {
    setState(prev => ({
      ...prev,
      isOpen: false,
      query: '',
      results: [],
      selectedIndex: -1,
      isLoading: false,
    }));
  }, []);

  /**
   * Navigate through search results with keyboard
   */
  const navigateResults = useCallback((direction: 'up' | 'down') => {
    setState(prev => {
      const resultsLength = prev.results.length;
      if (resultsLength === 0) return prev;

      let newIndex = prev.selectedIndex;
      
      if (direction === 'down') {
        newIndex = prev.selectedIndex < resultsLength - 1 
          ? prev.selectedIndex + 1 
          : 0; // Loop to first
      } else {
        newIndex = prev.selectedIndex > 0 
          ? prev.selectedIndex - 1 
          : resultsLength - 1; // Loop to last
      }

      return { ...prev, selectedIndex: newIndex };
    });
  }, []);

  /**
   * Select current result or specific result by index
   */
  const selectResult = useCallback((index?: number): SearchResult | null => {
    const targetIndex = index !== undefined ? index : state.selectedIndex;
    const selectedResult = state.results[targetIndex];
    
    if (selectedResult) {
      closeSearch();
      return selectedResult;
    }
    
    return null;
  }, [state.selectedIndex, state.results, closeSearch]);

  /**
   * Professional keyboard shortcut handling
   */
  const handleKeyboard = useCallback((event: KeyboardEvent) => {
    // Handle command/ctrl + k to open search
    if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
      event.preventDefault();
      if (!state.isOpen) {
        openSearch();
      }
      return;
    }

    // Only handle other shortcuts when search is open
    if (!state.isOpen) return;

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        closeSearch();
        break;
        
      case 'ArrowDown':
        event.preventDefault();
        navigateResults('down');
        break;
        
      case 'ArrowUp':
        event.preventDefault();
        navigateResults('up');
        break;
        
      case 'Enter':
        event.preventDefault();
        selectResult();
        break;
        
      default:
        // Let other keys pass through for typing
        break;
    }
  }, [state.isOpen, openSearch, closeSearch, navigateResults, selectResult]);

  /**
   * Setup keyboard event listeners
   */
  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard);
    return () => document.removeEventListener('keydown', handleKeyboard);
  }, [handleKeyboard]);

  /**
   * Prevent body scroll when search is open
   */
  useEffect(() => {
    if (state.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [state.isOpen]);

  /**
   * Professional API with comprehensive search functionality
   */
  return {
    // Current state
    isOpen: state.isOpen,
    query: state.query,
    results: state.results,
    selectedIndex: state.selectedIndex,
    isLoading: state.isLoading,
    
    // Actions
    setQuery,
    openSearch,
    closeSearch,
    navigateResults,
    selectResult,
    
    // Utilities
    config: mergedConfig,
    hasResults: state.results.length > 0,
    selectedResult: state.selectedIndex >= 0 ? state.results[state.selectedIndex] : null,
    
    // Helpers
    getResultHighlight: (text: string, matches: string[] = []) => {
      // Simple highlight implementation - can be enhanced with proper highlighting
      let highlighted = text;
      matches.forEach(match => {
        const regex = new RegExp(`(${match})`, 'gi');
        highlighted = highlighted.replace(regex, '<mark>$1</mark>');
      });
      return highlighted;
    },
    
    // Keyboard shortcut display
    getShortcutDisplay: () => {
      const isMac = typeof navigator !== 'undefined' && navigator.platform.includes('Mac');
      return isMac ? '⌘K' : 'Ctrl+K';
    },
  };
};

export default useLiveSearch;
