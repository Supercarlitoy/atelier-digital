
/**
 * Cookie Consent Component - Phase 3A Essential
 * GDPR/CCPA compliant with stone-textured design matching Atelier aesthetic
 * Part of Atelier Agency Theme - Premium Digital Product
 */

"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Cookie } from 'lucide-react';
import { useCookieConsent } from '../../hooks/use-cookie-consent';
import { CookieConsentProps } from '../../types/phase3';
import { cn } from '../../lib/utils';

/**
 * Premium Cookie Consent with Digital Stonemasonry aesthetic
 * Features: Stone texture, gold accents, smooth animations, accessibility
 */
export const CookieConsent: React.FC<CookieConsentProps> = ({
  config,
  onAccept,
  onDecline,
  className,
}) => {
  const {
    isVisible,
    acceptAll,
    acceptNecessary,
    hideConsent,
    config: consentConfig,
  } = useCookieConsent(config);

  const handleAccept = () => {
    acceptAll();
    onAccept?.({
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    });
  };

  const handleDecline = () => {
    acceptNecessary();
    onDecline?.();
  };

  const handleClose = () => {
    hideConsent();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className={cn(
          // Base positioning and sizing
          "fixed z-50 max-w-md p-6",
          // Stone-textured background with premium styling
          "bg-surface/95 backdrop-blur-md border border-surface-light",
          "shadow-2xl shadow-black/25",
          // Rounded corners matching design system
          "rounded-xl",
          // Position variants
          consentConfig.position === 'bottom-right' && "bottom-6 right-6",
          consentConfig.position === 'bottom-left' && "bottom-6 left-6",
          consentConfig.position === 'top-right' && "top-6 right-6",
          consentConfig.position === 'top-left' && "top-6 left-6",
          // Custom classes
          className
        )}
        initial={{ 
          opacity: 0, 
          scale: 0.95,
          y: consentConfig.position?.includes('bottom') ? 20 : -20 
        }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: 0 
        }}
        exit={{ 
          opacity: 0, 
          scale: 0.95,
          y: consentConfig.position?.includes('bottom') ? 20 : -20 
        }}
        transition={{
          type: "spring",
          duration: 0.5,
          ease: "easeOut"
        }}
        role="dialog"
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-description"
      >
        {/* Close button for accessibility */}
        <button
          onClick={handleClose}
          className={cn(
            "absolute top-4 right-4 p-1",
            "text-text-secondary hover:text-text-primary",
            "transition-colors duration-200",
            "rounded-md hover:bg-surface-light/50"
          )}
          aria-label="Close cookie consent"
        >
          <X size={16} />
        </button>

        {/* Header with icon */}
        <div className="flex items-center gap-3 mb-4">
          <div className={cn(
            "flex-shrink-0 w-8 h-8 rounded-lg",
            "bg-primary/10 flex items-center justify-center"
          )}>
            <Cookie size={16} className="text-primary" />
          </div>
          <h3 
            id="cookie-consent-title"
            className="text-lg font-semibold text-heading leading-tight"
          >
            Cookie Preferences
          </h3>
        </div>

        {/* Content */}
        <div 
          id="cookie-consent-description"
          className="space-y-4 mb-6"
        >
          <p className="text-sm text-text leading-relaxed">
            We use cookies to enhance your browsing experience, serve personalized content, 
            and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
          </p>

          {/* Trust indicator */}
          <div className="flex items-center gap-2 text-xs text-text-secondary">
            <Shield size={12} className="text-primary" />
            <span>GDPR & CCPA Compliant</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Primary Accept Button - Gold accent */}
          <button
            onClick={handleAccept}
            className={cn(
              // Base button styles
              "flex-1 px-4 py-2.5 rounded-lg font-medium text-sm",
              "transition-all duration-200",
              // Premium gold styling
              "bg-primary text-black",
              "hover:bg-primary/90 hover:scale-[1.02]",
              "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
              "focus:ring-offset-surface",
              // Premium shadow
              "shadow-lg shadow-primary/25"
            )}
          >
            Accept All
          </button>

          {/* Secondary Decline Button */}
          {consentConfig.showDeclineButton && (
            <button
              onClick={handleDecline}
              className={cn(
                // Base button styles
                "px-4 py-2.5 rounded-lg font-medium text-sm",
                "transition-all duration-200",
                // Secondary styling
                "border border-surface-light text-text",
                "hover:bg-surface-light/50 hover:scale-[1.02]",
                "focus:outline-none focus:ring-2 focus:ring-text/20 focus:ring-offset-2",
                "focus:ring-offset-surface"
              )}
            >
              Necessary Only
            </button>
          )}
        </div>

        {/* Optional links */}
        {(consentConfig.privacyPolicyUrl || consentConfig.cookiePolicyUrl) && (
          <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-surface-light">
            {consentConfig.privacyPolicyUrl && (
              <a
                href={consentConfig.privacyPolicyUrl}
                className="text-xs text-text-secondary hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            )}
            {consentConfig.cookiePolicyUrl && (
              <a
                href={consentConfig.cookiePolicyUrl}
                className="text-xs text-text-secondary hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cookie Policy
              </a>
            )}
          </div>
        )}

        {/* Subtle texture overlay for stone effect */}
        <div className="absolute inset-0 rounded-xl opacity-5 pointer-events-none">
          <div 
            className="w-full h-full rounded-xl"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(194, 168, 120, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(194, 168, 120, 0.1) 0%, transparent 50%)`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;
