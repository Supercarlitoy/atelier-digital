
/**
 * TypeScript interfaces for Phase 3A Enhanced Interactive Components
 * Atelier Agency Theme - Premium Digital Product
 */

// Cookie Consent Types
export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export interface CookieConsentConfig {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  autoShow?: boolean;
  showDeclineButton?: boolean;
  cookiePolicyUrl?: string;
  privacyPolicyUrl?: string;
}

export interface CookieConsentState {
  isVisible: boolean;
  hasConsented: boolean;
  preferences: CookiePreferences;
  consentDate: string | null;
}

// Theme Toggle Types
export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeState {
  theme: ThemeMode;
  systemTheme: 'light' | 'dark';
  resolvedTheme: 'light' | 'dark';
}

export interface ThemeToggleConfig {
  showSystemOption?: boolean;
  storageKey?: string;
  attribute?: string;
  defaultTheme?: ThemeMode;
  enableColorSchemeScript?: boolean;
}

// Search Types
export interface SearchableItem {
  id: string;
  title: string;
  description?: string;
  category: 'project' | 'page' | 'team' | 'service';
  url: string;
  tags?: string[];
  featured?: boolean;
}

export interface SearchResult extends SearchableItem {
  score?: number;
  matches?: string[];
}

export interface LiveSearchConfig {
  placeholder?: string;
  maxResults?: number;
  searchKeys?: string[];
  threshold?: number; // Fuse.js threshold for fuzzy matching
  shortcuts?: {
    open: string[];
    close: string[];
    navigate: {
      up: string[];
      down: string[];
      select: string[];
    };
  };
}

export interface LiveSearchState {
  isOpen: boolean;
  query: string;
  results: SearchResult[];
  selectedIndex: number;
  isLoading: boolean;
}

// Marquee Types
export type MarqueeItemType = 'text' | 'logo' | 'testimonial';

export interface MarqueeItem {
  id: string;
  type: MarqueeItemType;
  content: string; // text content or image src
  alt?: string; // for logo images
  author?: string; // for testimonials
  link?: string; // optional link for item
}

// Hotspots Types
export interface HotspotDetail {
  label: string;
  value: string;
}

export interface HotspotItem {
  id: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  title: string;
  description: string;
  details?: HotspotDetail[];
  image?: string;
  category?: string;
}

// Animation and GSAP Types
export interface GSAPAnimationConfig {
  duration?: number;
  ease?: string;
  delay?: number;
  stagger?: number;
}

export interface ScrollRevealOptions extends GSAPAnimationConfig {
  selector?: string;
  threshold?: number;
  once?: boolean;
  offset?: number;
}

// Component Props Types
export interface CookieConsentProps {
  config?: CookieConsentConfig;
  onAccept?: (preferences: CookiePreferences) => void;
  onDecline?: () => void;
  className?: string;
}

export interface ThemeToggleProps {
  config?: ThemeToggleConfig;
  variant?: 'icon' | 'text' | 'minimal' | 'elegant';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface LiveSearchProps {
  items: SearchableItem[];
  config?: LiveSearchConfig;
  onSelect?: (item: SearchableItem) => void;
  className?: string;
}

// Utility Types
export type ComponentVariant = 'default' | 'minimal' | 'elegant' | 'stone';
export type AnimationState = 'idle' | 'loading' | 'animating' | 'complete';
export type InteractionState = 'default' | 'hover' | 'active' | 'focused' | 'disabled';

// Global State Types
export interface AtelierThemeState {
  cookieConsent: CookieConsentState;
  theme: ThemeState;
  search: LiveSearchState;
  animations: {
    prefersReducedMotion: boolean;
    isScrolling: boolean;
  };
}

// Event Types
export type CookieConsentEvent = 'accept' | 'decline' | 'customize' | 'show' | 'hide';
export type ThemeToggleEvent = 'change' | 'system-change' | 'manual-change';
export type SearchEvent = 'open' | 'close' | 'query' | 'select' | 'navigate';

export interface ComponentEvent<T = any> {
  type: string;
  component: string;
  payload?: T;
  timestamp: number;
}
