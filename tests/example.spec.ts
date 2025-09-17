import { test, expect } from '@playwright/test';

test.describe('Atelier Digital Website', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check if the page title contains "Atelier"
    await expect(page).toHaveTitle(/Atelier/i);
    
    // Check if main navigation is visible
    await expect(page.locator('nav')).toBeVisible();
  });

  test('navigation menu works', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation to About page
    await page.click('text=About');
    await expect(page).toHaveURL(/.*\/about/);
    
    // Test navigation to Work page
    await page.click('text=Work');
    await expect(page).toHaveURL(/.*\/work/);
    
    // Test navigation to Contact page
    await page.click('text=Contact');
    await expect(page).toHaveURL(/.*\/contact/);
  });

  test('responsive design on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check if mobile navigation is working
    await expect(page.locator('nav')).toBeVisible();
    
    // Take a screenshot for visual regression testing
    await page.screenshot({ path: 'test-results/mobile-homepage.png' });
  });

  test('authentication pages are accessible', async ({ page }) => {
    // Test sign in page
    await page.goto('/auth/signin');
    await expect(page.locator('form')).toBeVisible();
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
    
    // Test sign up page
    await page.goto('/auth/signup');
    await expect(page.locator('form')).toBeVisible();
  });

  test('contact form is functional', async ({ page }) => {
    await page.goto('/contact');
    
    // Check if contact form exists
    const form = page.locator('form');
    await expect(form).toBeVisible();
    
    // Fill out the form (if form fields exist)
    const nameField = page.locator('input[name="name"], input[placeholder*="name" i]');
    const emailField = page.locator('input[name="email"], input[type="email"]');
    const messageField = page.locator('textarea[name="message"], textarea[placeholder*="message" i]');
    
    if (await nameField.count() > 0) {
      await nameField.fill('Test User');
    }
    if (await emailField.count() > 0) {
      await emailField.fill('test@example.com');
    }
    if (await messageField.count() > 0) {
      await messageField.fill('This is a test message from Playwright.');
    }
  });

  test('page performance is acceptable', async ({ page }) => {
    // Start measuring performance
    const startTime = Date.now();
    
    await page.goto('/');
    
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    const loadTime = Date.now() - startTime;
    
    // Assert that page loads within 5 seconds
    expect(loadTime).toBeLessThan(5000);
    
    console.log(`Homepage loaded in ${loadTime}ms`);
  });
});

// Test for production website
test.describe('Production Website Tests', () => {
  test.use({ baseURL: 'https://atelierdigital.online' });
  
  test('production site is accessible', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Atelier/i);
    
    // Check if HTTPS is working
    expect(page.url()).toContain('https://');
  });
  
  test('SSL certificate is valid', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
    
    // Check security headers (if implemented)
    const headers = response?.headers();
    console.log('Security headers:', headers);
  });
});