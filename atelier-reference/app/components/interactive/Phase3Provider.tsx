
/**
 * Phase 3A Provider Component - Integration Hub
 * Manages all Phase 3A components and their interactions
 * Part of Atelier Agency Theme - Premium Digital Product
 */

"use client";

import React, { useState } from 'react';
import { CookieConsent } from './CookieConsent';
import { LiveSearch } from './LiveSearch';
import { InteractiveCursor } from './InteractiveCursor';
import { searchableItems } from '../../data/searchable-items';
import { SearchableItem } from '../../types/phase3';

interface Phase3ProviderProps {
  children: React.ReactNode;
}

/**
 * Professional integration provider for all Phase 3A components
 * Features: Centralized state management, component coordination, analytics integration
 */
export const Phase3Provider: React.FC<Phase3ProviderProps> = ({ children }) => {
  const [searchItems] = useState<SearchableItem[]>(searchableItems);

  /**
   * Handle search selection with professional navigation
   */
  const handleSearchSelect = (item: SearchableItem) => {
    // Ensure we're on client side
    if (typeof window === 'undefined') return;

    // Professional analytics tracking
    if ((window as any).gtag) {
      (window as any).gtag('event', 'search_select', {
        search_term: item.title,
        category: item.category,
        result_url: item.url,
      });
    }

    // Custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('searchSelection', {
      detail: { item }
    }));

    // Navigate to the selected item
    if (item.url.startsWith('#')) {
      // Handle anchor links
      const element = document.querySelector(item.url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.url.startsWith('/')) {
      // Handle internal navigation
      window.location.href = item.url;
    } else {
      // Handle external links
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };

  /**
   * Handle cookie consent with professional analytics integration
   */
  const handleCookieAccept = (preferences: any) => {
    // Ensure we're on client side
    if (typeof window === 'undefined') return;

    // Professional analytics consent handling
    if ((window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': preferences.analytics ? 'granted' : 'denied',
        'ad_storage': preferences.marketing ? 'granted' : 'denied',
        'functionality_storage': preferences.functional ? 'granted' : 'denied',
      });

      // Track consent event
      (window as any).gtag('event', 'cookie_consent', {
        consent_type: 'accept',
        analytics: preferences.analytics,
        marketing: preferences.marketing,
        functional: preferences.functional,
      });
    }

    // Custom consent event for other integrations
    window.dispatchEvent(new CustomEvent('cookieConsent', {
      detail: { type: 'accept', preferences }
    }));
  };

  /**
   * Handle cookie decline with professional tracking
   */
  const handleCookieDecline = () => {
    // Ensure we're on client side
    if (typeof window === 'undefined') return;

    // Professional analytics decline handling
    if ((window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'functionality_storage': 'denied',
      });

      // Track decline event
      (window as any).gtag('event', 'cookie_consent', {
        consent_type: 'decline'
      });
    }

    // Custom decline event
    window.dispatchEvent(new CustomEvent('cookieConsent', {
      detail: { type: 'decline' }
    }));
  };

  return (
    <>
      {children}
      
      {/* Interactive Cursor - Premium Desktop Experience */}
      <InteractiveCursor />
      
      {/* Cookie Consent - GDPR/CCPA Compliance */}
      <CookieConsent
        config={{
          position: 'bottom-right',
          autoShow: true,
          showDeclineButton: true,
          cookiePolicyUrl: '/privacy#cookies',
          privacyPolicyUrl: '/privacy',
        }}
        onAccept={handleCookieAccept}
        onDecline={handleCookieDecline}
      />

      {/* Live Search - ⌘K Triggered Search */}
      <LiveSearch
        items={searchItems}
        config={{
          placeholder: 'Search projects, team, services...',
          maxResults: 8,
          searchKeys: ['title', 'description', 'category', 'tags'],
          threshold: 0.4,
          shortcuts: {
            open: ['cmd+k', 'ctrl+k'],
            close: ['escape'],
            navigate: {
              up: ['ArrowUp'],
              down: ['ArrowDown'],
              select: ['Enter'],
            },
          },
        }}
        onSelect={handleSearchSelect}
      />
    </>
  );
};

export default Phase3Provider;
