
/**
 * Cookie Consent Component - Phase 3A Essential
 * GDPR/CCPA compliant with accessible design
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
 * Accessible Cookie Consent with proper contrast and focus management
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
          "fixed bottom-0 left-0 right-0 z-50",
          "bg-background/95 backdrop-blur-sm",
          "border-t border-border",
          "p-4 md:p-6",
          className
        )}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        role="dialog"
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-description"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <div className="flex-shrink-0 mt-1">
                <Cookie className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 
                  id="cookie-consent-title"
                  className="text-sm font-semibold text-foreground mb-1"
                >
                  Cookie Preferences
                </h3>
                <p 
                  id="cookie-consent-description"
                  className="text-sm text-muted-foreground leading-relaxed"
                >
                  We use cookies to enhance your experience, analyze site traffic, and personalize content. 
                  You can manage your preferences or accept all cookies.
                </p>
                <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                  <Shield className="w-3 h-3 text-primary" />
                  <span>GDPR & CCPA Compliant</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={handleDecline}
                className={cn(
                  "px-4 py-2 text-sm font-medium",
                  "text-muted-foreground hover:text-foreground",
                  "border border-border rounded-md",
                  "hover:bg-muted/50 transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2",
                  "focus:ring-offset-background"
                )}
              >
                Necessary Only
              </button>
              
              <button
                onClick={handleAccept}
                className={cn(
                  "px-4 py-2 text-sm font-medium",
                  "bg-primary text-primary-foreground",
                  "rounded-md hover:bg-primary/90",
                  "transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2",
                  "focus:ring-offset-background"
                )}
              >
                Accept All
              </button>
              
              <button
                onClick={handleClose}
                className={cn(
                  "p-2 text-muted-foreground hover:text-foreground",
                  "rounded-md hover:bg-muted/50 transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2",
                  "focus:ring-offset-background"
                )}
                aria-label="Close cookie consent"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;
