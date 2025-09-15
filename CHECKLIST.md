# Project Completion Checklist

This checklist organizes completion into clear phases. Each phase lists scope, tasks, and acceptance criteria you can tick off as you go.

**Target Platform**: Vercel Production Deployment  
**Mobile Optimization**: Required for all phases  
**Browser Matrix**: Chrome latest (desktop + mobile), Safari latest  
**Social**: Twitter @zorvive (https://x.com/zorvive)  
**Domain**: atelierdigital.online  

## Phase: Build + Routes
- [ ] Scope: Confirm build health and page coverage
- [ ] Task: Run `npm run build` and capture metrics
- [ ] Task: Verify pages render: `/`, `/about`, `/work`, `/contact`, `/privacy`
- [ ] Task: Test mobile responsiveness (320px-768px)
- [ ] Acceptance: First Load JS ~160–170 kB; all routes prerender; no type errors or console errors; mobile optimized

## Phase: Motion + UX (GSAP + Smooth Scroll)
- [ ] Scope: Validate animations and reduced‑motion behavior
- [ ] Task: Scroll test Home/About/Work; verify sections reveal smoothly
- [ ] Task: Toggle OS "Reduce Motion"; animations disable gracefully
- [ ] Task: Ensure no overlay blocks clicks
- [ ] Task: Test animations on mobile devices (touch interactions)
- [ ] Acceptance: Smooth animations; reduced‑motion respected; no interaction blocking; mobile touch optimized

## Phase: SEO + Metadata
- [ ] Scope: Upgrade metadata to vendor parity
- [ ] Task: Add `openGraph`, `twitter`, and JSON‑LD to `app/layout.tsx`
- [ ] Task: Update Twitter handle to @zorvive (https://x.com/zorvive)
- [ ] Task: Set canonical domain to atelierdigital.online
- [ ] Task: Test mobile SEO (viewport, touch icons)
- [ ] Acceptance: Meta visible in page source; Lighthouse SEO > 90; mobile SEO optimized

## Phase: Accessibility
- [ ] Scope: Baseline a11y checks
- [ ] Task: Keyboard navigation; visible focus; form labels/ARIA on Contact
- [ ] Task: Quick axe/Lighthouse pass
- [ ] Acceptance: No critical a11y issues; Lighthouse Accessibility > 90

## Phase: Assets Finalization
- [ ] Scope: Replace placeholders with final imagery
- [ ] Task: Swap in logos, hero, showcase, project, avatar, team, hotspot detail images
- [ ] Task: Update alt text contextually
- [ ] Acceptance: All referenced images resolve; alt text meaningful

## Phase: Components QA
- [ ] Scope: Validate interactive and content components
- [ ] Task: Home — `StatsDisplay`, `ServiceCards`, `Testimonials`
- [ ] Task: Work — `ProjectGrid` filtering and empty‑state
- [ ] Task: About — `TeamCards` responsive grid
- [ ] Task: Interactive — LiveSearch, ThemeToggle, CookieConsent
- [ ] Acceptance: All interactions work; no console errors

## Phase: Auth Integration (Optional, vendor parity)
- [ ] Scope: NextAuth + signup parity with reference
- [ ] Task: Add routes: `app/api/auth/[...nextauth]`, `app/api/signup`, `app/auth/signin`
- [ ] Task: Add `env.example`; configure DB + env; run Prisma migrations/seed
- [ ] Acceptance: Signin/Signup succeed; session established; secure cookies

## Phase: 3D Viewer (Required - Optimized Implementation)
- [ ] Scope: Integrate enhanced 3D viewer with mobile optimization
- [ ] Task: Implement optimized `ModelViewer3D` with lazy loading
- [ ] Task: Add Three.js dependencies (@react-three/fiber, @react-three/drei, three)
- [ ] Task: Implement mobile-specific fallbacks and touch controls
- [ ] Task: Add reduced-motion graceful degradation
- [ ] Task: Optimize for mobile performance (lower poly models, texture compression)
- [ ] Acceptance: Renders on desktop and mobile; touch-optimized controls; graceful fallbacks; no mobile performance issues

## Phase: Cross‑Browser + Responsive QA
- [ ] Scope: Validate on minimum browser matrix (mobile-first)
- [ ] Task: Test Chrome latest (desktop + mobile)
- [ ] Task: Test Safari latest (desktop + mobile)
- [ ] Task: Verify responsive breakpoints: 320px/768px/1024px/1440px+
- [ ] Task: Test touch interactions on mobile (marquee, hotspots, 3D viewer)
- [ ] Task: Validate form usability on mobile devices
- [ ] Acceptance: Mobile-optimized layouts; touch interactions work; forms usable on mobile

## Phase: Tooling + Hygiene
- [ ] Scope: Developer experience and configuration
- [ ] Task: Align ESLint (next/core‑web‑vitals) or document exceptions; run `next lint`
- [ ] Task: Decide on Next Image optimizer vs `images.unoptimized`
- [ ] Task: Trim unused dev deps; modernize `browserslist`
- [ ] Acceptance: Lint passes (or tracked); configs match deployment targets

## Phase: Deployment (Vercel)
- [ ] Scope: Vercel production deployment
- [ ] Task: Create Vercel project and configure domain (atelierdigital.online)
- [ ] Task: Add environment variables to Vercel dashboard
- [ ] Task: Deploy preview and test all routes/interactions
- [ ] Task: Test mobile performance on deployed version
- [ ] Task: Configure custom domain and SSL
- [ ] Acceptance: Live on atelierdigital.online; mobile performance optimized; no deployment regressions

## Phase: Documentation
- [ ] Scope: Handoff and ops notes
- [ ] Task: Create `DEPLOY_NOTES.md` with Vercel-specific instructions
- [ ] Task: Document mobile optimization techniques used
- [ ] Task: Add 3D viewer performance notes and fallback strategies
- [ ] Task: Include environment variables template
- [ ] Task: Document known limitations and mobile-specific considerations
- [ ] Acceptance: Clear handoff doc at repo root; mobile deployment guide included

---

## Evidence-First Tracking

After each phase, document evidence in `VERIFICATION.md`:
- Build output metrics
- Lighthouse scores (desktop + mobile)
- Performance measurements
- Screenshots of mobile testing
- Browser compatibility results

---

## Evidence‑First Notes
- After each phase, paste relevant evidence into a running log (e.g., `VERIFICATION.md`):
  - Build output table from `npm run build`
  - Screenshot or text of Lighthouse scores
  - Brief notes on any issues found and fixes applied

