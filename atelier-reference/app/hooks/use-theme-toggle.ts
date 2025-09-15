
/**
 * Theme Toggle Hook - Phase 3A Essential Component
 * System preference aware dark/light mode with smooth transitions
 * Part of Atelier Agency Theme - Premium Digital Product
 */

import { useState, useEffect, useCallback } from 'react';
import { ThemeMode, ThemeState, ThemeToggleConfig } from '../types/phase3';

const STORAGE_KEY = 'atelier-theme-preference';
const MEDIA_QUERY = '(prefers-color-scheme: dark)';

const defaultConfig: ThemeToggleConfig = {
  showSystemOption: true,
  storageKey: STORAGE_KEY,
  attribute: 'data-theme',
  defaultTheme: 'system',
  enableColorSchemeScript: true,
};

/**
 * Professional theme management with system preference integration
 * Features: Smooth transitions, localStorage persistence, accessibility compliance
 */
export const useThemeToggle = (config: ThemeToggleConfig = {}) => {
  const mergedConfig = { ...defaultConfig, ...config };
  
  // Initialize with null values to prevent hydration mismatch
  const [themeState, setThemeState] = useState<ThemeState>(() => {
    // Only initialize with actual values on client-side
    if (typeof window !== 'undefined') {
      const systemTheme = window.matchMedia(MEDIA_QUERY).matches ? 'dark' : 'light';
      const storedTheme = localStorage.getItem(mergedConfig.storageKey!) as ThemeMode || mergedConfig.defaultTheme || 'system';
      const resolvedTheme = storedTheme === 'system' ? systemTheme : storedTheme;
      
      return {
        theme: storedTheme,
        systemTheme,
        resolvedTheme,
      };
    }
    
    // SSR-safe defaults
    return {
      theme: mergedConfig.defaultTheme || 'system',
      systemTheme: 'dark',
      resolvedTheme: 'dark',
    };
  });

  /**
   * Get current system theme preference
   */
  const getSystemTheme = useCallback((): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'dark';
    return window.matchMedia(MEDIA_QUERY).matches ? 'dark' : 'light';
  }, []);

  /**
   * Resolve the actual theme to apply
   */
  const resolveTheme = useCallback((theme: ThemeMode, systemTheme: 'light' | 'dark'): 'light' | 'dark' => {
    return theme === 'system' ? systemTheme : theme;
  }, []);

  /**
   * Apply theme to document with professional implementation
   */
  const applyTheme = useCallback((resolvedTheme: 'light' | 'dark') => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    
    // Remove previous theme classes
    root.classList.remove('light', 'dark');
    
    // Add new theme class
    root.classList.add(resolvedTheme);
    
    // Set data attribute for CSS targeting
    root.setAttribute(mergedConfig.attribute!, resolvedTheme);
    
    // Update color-scheme for browser UI
    root.style.colorScheme = resolvedTheme;
    
    // Meta theme-color for mobile browsers
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    
    // Set theme color based on CSS variables
    const themeColor = resolvedTheme === 'dark' ? '#191919' : '#ffffff';
    metaThemeColor.setAttribute('content', themeColor);
  }, [mergedConfig.attribute]);

  /**
   * Load stored theme preference
   */
  const loadStoredTheme = useCallback((): ThemeMode => {
    if (typeof window === 'undefined') return mergedConfig.defaultTheme || 'system';

    try {
      const stored = localStorage.getItem(mergedConfig.storageKey!);
      if (stored && ['light', 'dark', 'system'].includes(stored)) {
        return stored as ThemeMode;
      }
    } catch (error) {
      console.warn('Failed to load theme preference:', error);
    }
    
    return mergedConfig.defaultTheme || 'system';
  }, [mergedConfig.defaultTheme, mergedConfig.storageKey]);

  /**
   * Save theme preference to localStorage
   */
  const saveThemePreference = useCallback((theme: ThemeMode) => {
    if (typeof window === 'undefined') return;

    try {
      localStorage.setItem(mergedConfig.storageKey!, theme);
    } catch (error) {
      console.error('Failed to save theme preference:', error);
    }
  }, [mergedConfig.storageKey]);

  /**
   * Set theme with full state management
   */
  const setTheme = useCallback((newTheme: ThemeMode) => {
    const systemTheme = getSystemTheme();
    const resolvedTheme = resolveTheme(newTheme, systemTheme);

    setThemeState({
      theme: newTheme,
      systemTheme,
      resolvedTheme,
    });

    applyTheme(resolvedTheme);
    saveThemePreference(newTheme);

    // Dispatch custom event for other components
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('themechange', {
        detail: { theme: newTheme, resolvedTheme, systemTheme }
      }));
    }
  }, [getSystemTheme, resolveTheme, applyTheme, saveThemePreference]);

  /**
   * Toggle between light and dark (skip system)
   */
  const toggleTheme = useCallback(() => {
    const newTheme = themeState.resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }, [themeState.resolvedTheme, setTheme]);

  /**
   * Cycle through all available themes
   */
  const cycleTheme = useCallback(() => {
    const modes: ThemeMode[] = mergedConfig.showSystemOption 
      ? ['light', 'dark', 'system']
      : ['light', 'dark'];
    
    const currentIndex = modes.indexOf(themeState.theme);
    const nextIndex = (currentIndex + 1) % modes.length;
    setTheme(modes[nextIndex]);
  }, [themeState.theme, setTheme, mergedConfig.showSystemOption]);

  /**
   * Handle system theme changes
   */
  const handleSystemThemeChange = useCallback((e: MediaQueryListEvent) => {
    const newSystemTheme = e.matches ? 'dark' : 'light';
    const newResolvedTheme = resolveTheme(themeState.theme, newSystemTheme);

    setThemeState(prev => ({
      ...prev,
      systemTheme: newSystemTheme,
      resolvedTheme: newResolvedTheme,
    }));

    // Only apply if currently using system theme
    if (themeState.theme === 'system') {
      applyTheme(newResolvedTheme);
    }
  }, [themeState.theme, resolveTheme, applyTheme]);

  /**
   * Initialize theme on component mount
   */
  useEffect(() => {
    const storedTheme = loadStoredTheme();
    const systemTheme = getSystemTheme();
    const resolvedTheme = resolveTheme(storedTheme, systemTheme);

    setThemeState({
      theme: storedTheme,
      systemTheme,
      resolvedTheme,
    });

    applyTheme(resolvedTheme);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia(MEDIA_QUERY);
    mediaQuery.addListener(handleSystemThemeChange);

    return () => {
      mediaQuery.removeListener(handleSystemThemeChange);
    };
  }, [loadStoredTheme, getSystemTheme, resolveTheme, applyTheme, handleSystemThemeChange]);

  /**
   * Professional API with comprehensive theme management
   */
  return {
    // Current state
    theme: themeState.theme,
    systemTheme: themeState.systemTheme,
    resolvedTheme: themeState.resolvedTheme,
    
    // Theme actions
    setTheme,
    toggleTheme,
    cycleTheme,
    
    // Utilities
    config: mergedConfig,
    isLight: themeState.resolvedTheme === 'light',
    isDark: themeState.resolvedTheme === 'dark',
    isSystem: themeState.theme === 'system',
    
    // Theme information
    getThemeIcon: () => {
      switch (themeState.theme) {
        case 'light': return 'sun';
        case 'dark': return 'moon';
        case 'system': return 'monitor';
        default: return 'monitor';
      }
    },
    
    getThemeLabel: () => {
      switch (themeState.theme) {
        case 'light': return 'Light Mode';
        case 'dark': return 'Dark Mode';
        case 'system': return 'System';
        default: return 'System';
      }
    },
  };
};

export default useThemeToggle;
