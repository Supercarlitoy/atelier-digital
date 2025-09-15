
/**
 * Cookie Consent Hook - Phase 3A Essential Component
 * Handles GDPR/CCPA compliant cookie consent with localStorage persistence
 * Part of Atelier Agency Theme - Premium Digital Product
 */

import { useState, useEffect, useCallback } from 'react';
import { CookieConsentState, CookiePreferences, CookieConsentConfig } from '../types/phase3';

const STORAGE_KEY = 'atelier-cookie-consent';

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always required
  analytics: false,
  marketing: false,
  functional: false,
};

const defaultConfig: CookieConsentConfig = {
  position: 'bottom-right',
  autoShow: true,
  showDeclineButton: true,
};

/**
 * Professional-grade cookie consent management
 * Features: GDPR compliance, localStorage persistence, TypeScript safety
 */
export const useCookieConsent = (config: CookieConsentConfig = {}) => {
  const mergedConfig = { ...defaultConfig, ...config };
  
  const [state, setState] = useState<CookieConsentState>({
    isVisible: false,
    hasConsented: false,
    preferences: defaultPreferences,
    consentDate: null,
  });

  /**
   * Load existing consent from localStorage on mount
   * Ensures consent persistence across sessions
   */
  const loadStoredConsent = useCallback(() => {
    if (typeof window === 'undefined') return;

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsedState = JSON.parse(stored) as CookieConsentState;
        
        // Validate stored data structure
        if (parsedState.hasConsented && parsedState.consentDate) {
          setState(prevState => ({
            ...prevState,
            ...parsedState,
            isVisible: false, // Don't auto-show if already consented
          }));
          return true; // Has valid consent
        }
      }
    } catch (error) {
      console.warn('Failed to load cookie consent from localStorage:', error);
    }
    return false; // No valid consent found
  }, []);

  /**
   * Save consent state to localStorage
   * Includes timestamp for audit trail
   */
  const saveConsent = useCallback((newState: CookieConsentState) => {
    if (typeof window === 'undefined') return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        ...newState,
        consentDate: new Date().toISOString(),
      }));
    } catch (error) {
      console.error('Failed to save cookie consent to localStorage:', error);
    }
  }, []);

  /**
   * Accept all cookies with professional logging
   */
  const acceptAll = useCallback(() => {
    const newPreferences: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };

    const newState: CookieConsentState = {
      isVisible: false,
      hasConsented: true,
      preferences: newPreferences,
      consentDate: new Date().toISOString(),
    };

    setState(newState);
    saveConsent(newState);

    // Professional event tracking for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted',
        'functionality_storage': 'granted',
      });
    }
  }, [saveConsent]);

  /**
   * Accept only necessary cookies
   */
  const acceptNecessary = useCallback(() => {
    const newState: CookieConsentState = {
      isVisible: false,
      hasConsented: true,
      preferences: defaultPreferences,
      consentDate: new Date().toISOString(),
    };

    setState(newState);
    saveConsent(newState);

    // Update consent for analytics tools
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'functionality_storage': 'denied',
      });
    }
  }, [saveConsent]);

  /**
   * Customize preferences with granular control
   */
  const customizePreferences = useCallback((preferences: Partial<CookiePreferences>) => {
    const newPreferences: CookiePreferences = {
      ...state.preferences,
      ...preferences,
      necessary: true, // Always required
    };

    const newState: CookieConsentState = {
      isVisible: false,
      hasConsented: true,
      preferences: newPreferences,
      consentDate: new Date().toISOString(),
    };

    setState(newState);
    saveConsent(newState);
  }, [state.preferences, saveConsent]);

  /**
   * Show consent banner (for re-consent scenarios)
   */
  const showConsent = useCallback(() => {
    setState(prev => ({ ...prev, isVisible: true }));
  }, []);

  /**
   * Hide consent banner without consenting
   */
  const hideConsent = useCallback(() => {
    setState(prev => ({ ...prev, isVisible: false }));
  }, []);

  /**
   * Reset all consent (for testing or user request)
   */
  const resetConsent = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
    
    setState({
      isVisible: mergedConfig.autoShow || false,
      hasConsented: false,
      preferences: defaultPreferences,
      consentDate: null,
    });
  }, [mergedConfig.autoShow]);

  /**
   * Initialize consent state on component mount
   */
  useEffect(() => {
    const hasStoredConsent = loadStoredConsent();
    
    // Show banner if no stored consent and autoShow enabled
    if (!hasStoredConsent && mergedConfig.autoShow) {
      setState(prev => ({ ...prev, isVisible: true }));
    }
  }, [loadStoredConsent, mergedConfig.autoShow]);

  /**
   * Professional API with comprehensive state management
   */
  return {
    // State
    isVisible: state.isVisible,
    hasConsented: state.hasConsented,
    preferences: state.preferences,
    consentDate: state.consentDate,
    
    // Actions
    acceptAll,
    acceptNecessary,
    customizePreferences,
    showConsent,
    hideConsent,
    resetConsent,
    
    // Utilities
    config: mergedConfig,
    canUseAnalytics: state.hasConsented && state.preferences.analytics,
    canUseMarketing: state.hasConsented && state.preferences.marketing,
    canUseFunctional: state.hasConsented && state.preferences.functional,
  };
};

export default useCookieConsent;
