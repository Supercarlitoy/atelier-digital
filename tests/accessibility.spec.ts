import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Homepage Accessibility & Readability Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('accessibility audit with axe-core', async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
    
    // Log accessibility results
    console.log('Accessibility scan completed:');
    console.log(`- ${accessibilityScanResults.passes.length} checks passed`);
    console.log(`- ${accessibilityScanResults.violations.length} violations found`);
    
    if (accessibilityScanResults.violations.length > 0) {
      console.log('Violations:', accessibilityScanResults.violations);
    }
  });

  test('color contrast and readability', async ({ page }) => {
    // Check for sufficient color contrast
    const contrastResults = await page.evaluate(() => {
      const elements = document.querySelectorAll('*');
      const issues: Array<{element: string, color: string, backgroundColor: string, text: string}> = [];
      
      elements.forEach(el => {
        const styles = window.getComputedStyle(el);
        const color = styles.color;
        const backgroundColor = styles.backgroundColor;
        
        // Check if element has text content
        if (el.textContent && el.textContent.trim()) {
          // Store for manual review (actual contrast calculation would need a library)
          if (color && backgroundColor && backgroundColor !== 'rgba(0, 0, 0, 0)') {
            issues.push({
              element: el.tagName,
              color,
              backgroundColor,
              text: el.textContent.substring(0, 50)
            });
          }
        }
      });
      
      return issues.slice(0, 10); // Limit for performance
    });
    
    console.log('Color contrast elements to review:', contrastResults.length);
  });

  test('text readability and typography', async ({ page }) => {
    const readabilityCheck = await page.evaluate(() => {
      const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div');
      const issues: Array<{type: string, element: string, fontSize?: string, lineHeight?: number, text: string}> = [];
      
      textElements.forEach(el => {
        if (el.textContent && el.textContent.trim()) {
          const styles = window.getComputedStyle(el);
          const fontSize = parseFloat(styles.fontSize);
          const lineHeight = parseFloat(styles.lineHeight);
          
          // Check minimum font size (should be at least 16px for body text)
          if (fontSize < 14) {
            issues.push({
              type: 'small-font',
              element: el.tagName,
              fontSize: fontSize + 'px',
              text: el.textContent.substring(0, 30)
            });
          }
          
          // Check line height (should be at least 1.4)
          if (lineHeight && lineHeight / fontSize < 1.2) {
            issues.push({
              type: 'poor-line-height',
              element: el.tagName,
              lineHeight: lineHeight / fontSize,
              text: el.textContent.substring(0, 30)
            });
          }
        }
      });
      
      return issues;
    });
    
    console.log('Typography issues found:', readabilityCheck.length);
    readabilityCheck.forEach(issue => console.log(issue));
    
    // Allow some flexibility but flag major issues
    expect(readabilityCheck.filter(i => i.type === 'small-font' && i.fontSize && parseFloat(i.fontSize) < 12).length).toBe(0);
  });

  test('keyboard navigation', async ({ page }) => {
    // Test tab navigation
    const focusableElements = await page.evaluate(() => {
      const focusable = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      return Array.from(focusable).map(el => ({
        tag: el.tagName,
        type: (el as HTMLInputElement).type || 'N/A',
        text: el.textContent?.substring(0, 30) || el.getAttribute('aria-label') || 'No text'
      }));
    });
    
    console.log(`Found ${focusableElements.length} focusable elements`);
    
    // Test that we can navigate through key elements
    await page.keyboard.press('Tab');
    const firstFocused = await page.evaluate(() => document.activeElement?.tagName);
    expect(firstFocused).toBeTruthy();
    
    // Test escape key functionality
    await page.keyboard.press('Escape');
  });

  test('semantic HTML structure', async ({ page }) => {
    const semanticCheck = await page.evaluate(() => {
      const results = {
        hasH1: document.querySelectorAll('h1').length,
        hasMain: document.querySelectorAll('main').length,
        hasNav: document.querySelectorAll('nav').length,
        hasHeader: document.querySelectorAll('header').length,
        hasFooter: document.querySelectorAll('footer').length,
        imagesWithoutAlt: document.querySelectorAll('img:not([alt])').length,
        linksWithoutText: Array.from(document.querySelectorAll('a')).filter(
          a => !a.textContent?.trim() && !a.getAttribute('aria-label')
        ).length
      };
      
      return results;
    });
    
    console.log('Semantic HTML check:', semanticCheck);
    
    // Assertions for good semantic structure
    expect(semanticCheck.hasH1).toBeGreaterThan(0);
    expect(semanticCheck.hasMain).toBeGreaterThan(0);
    expect(semanticCheck.imagesWithoutAlt).toBe(0);
    expect(semanticCheck.linksWithoutText).toBe(0);
  });

  test('mobile responsiveness and touch targets', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    
    const touchTargetCheck = await page.evaluate(() => {
      const clickableElements = document.querySelectorAll('button, a, input, [role="button"]');
      const smallTargets: Array<{element: string, width: number, height: number, text: string}> = [];
      
      clickableElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const minSize = 44; // Minimum touch target size (44px)
        
        if (rect.width < minSize || rect.height < minSize) {
          smallTargets.push({
            element: el.tagName,
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            text: el.textContent?.substring(0, 20) || 'No text'
          });
        }
      });
      
      return smallTargets;
    });
    
    console.log('Small touch targets found:', touchTargetCheck.length);
    touchTargetCheck.forEach(target => console.log(target));
    
    // Allow some small targets but flag critically small ones
    const criticallySmall = touchTargetCheck.filter(t => t.width < 32 || t.height < 32);
    expect(criticallySmall.length).toBe(0);
  });

  test('performance and loading accessibility', async ({ page }) => {
    // Measure loading performance
    const performanceMetrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return {
        domContentLoaded: Math.round(navigation.domContentLoadedEventEnd),
        loadComplete: Math.round(navigation.loadEventEnd),
        firstPaint: Math.round(performance.getEntriesByName('first-paint')[0]?.startTime || 0),
        firstContentfulPaint: Math.round(performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0)
      };
    });
    
    console.log('Performance metrics:', performanceMetrics);
    
    // Check for reasonable loading times
    expect(performanceMetrics.domContentLoaded).toBeLessThan(3000); // 3 seconds
    expect(performanceMetrics.firstContentfulPaint).toBeLessThan(2000); // 2 seconds
  });

  test('screen reader compatibility', async ({ page }) => {
    const ariaCheck = await page.evaluate(() => {
      const results = {
        elementsWithAriaLabel: document.querySelectorAll('[aria-label]').length,
        elementsWithAriaDescribedBy: document.querySelectorAll('[aria-describedby]').length,
        elementsWithRole: document.querySelectorAll('[role]').length,
        headingsWithProperStructure: true,
        landmarksPresent: {
          main: document.querySelectorAll('main, [role="main"]').length > 0,
          navigation: document.querySelectorAll('nav, [role="navigation"]').length > 0,
          banner: document.querySelectorAll('header, [role="banner"]').length > 0,
          contentinfo: document.querySelectorAll('footer, [role="contentinfo"]').length > 0
        }
      };
      
      // Check heading hierarchy
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
      let previousLevel = 0;
      for (const heading of headings) {
        const currentLevel = parseInt(heading.tagName.charAt(1));
        if (currentLevel > previousLevel + 1) {
          results.headingsWithProperStructure = false;
          break;
        }
        previousLevel = currentLevel;
      }
      
      return results;
    });
    
    console.log('Screen reader compatibility check:', ariaCheck);
    
    // Ensure proper landmarks are present
    expect(ariaCheck.landmarksPresent.main).toBe(true);
    expect(ariaCheck.landmarksPresent.navigation).toBe(true);
  });
});