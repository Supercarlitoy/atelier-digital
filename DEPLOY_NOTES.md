# Atelier Digital - Deployment Guide

**Version**: 1.0  
**Target Platform**: Vercel Production  
**Domain**: atelierdigital.online  
**Last Updated**: January 2025  

---

## 🚀 Quick Deployment (Vercel)

### Prerequisites
- Vercel account with team access
- Domain configuration permissions for atelierdigital.online
- Node.js 18+ and npm/yarn installed locally

### Deployment Steps

1. **Connect Repository**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login and connect project
   vercel login
   vercel --prod
   ```

2. **Configure Domain**
   - Add custom domain: `atelierdigital.online`
   - Configure DNS: Point domain to Vercel
   - SSL certificate: Auto-configured by Vercel

3. **Environment Variables**
   ```bash
   # Add to Vercel Dashboard > Settings > Environment Variables
   NEXTAUTH_SECRET=your-secret-key-here
   NEXTAUTH_URL=https://atelierdigital.online
   DATABASE_URL=your-database-connection-string
   GOOGLE_SITE_VERIFICATION=your-verification-code
   ```

---

## 📋 Environment Variables

### IMPORTANT: Production-required variables
The following variables must be set in Vercel (Production) or GitHub Actions for the build/runtime to succeed:

- `NEXTAUTH_SECRET` - NextAuth secret (use `openssl rand -base64 32`)
- `NEXTAUTH_URL` - Your production URL (e.g. `https://atelierdigital.online`)
- `DATABASE_URL` - Production database connection string (Postgres recommended)
- `DATABASE_PROVIDER` - Prisma provider string (`postgresql` in prod, `sqlite` locally)

If these are missing, builds may succeed locally but fail on Vercel/GitHub due to missing secrets or an invalid database provider.

Note: Prisma's `provider` must be a literal in `schema.prisma` (Prisma restriction). For production you should either update `provider = "postgresql"` in the deployed schema or maintain a separate `schema.prod.prisma` that uses Postgres. The build will fail if the schema references SQLite but your DATABASE_URL points to Postgres unless the schema matches the provider.

### Required Variables
| Variable | Description | Example |
|----------|-------------|----------|
| `NEXTAUTH_SECRET` | NextAuth.js secret key | `openssl rand -base64 32` |
| `NEXTAUTH_URL` | Production URL | `https://atelierdigital.online` |
| `DATABASE_URL` | Database connection | `postgresql://user:pass@host:5432/db` |
| `DATABASE_PROVIDER` | Prisma provider | `postgresql` or `sqlite` |

### Optional Variables
| Variable | Description | Default |
|----------|-------------|----------|
| `GOOGLE_SITE_VERIFICATION` | Google Search Console | `google-site-verification-code` |
| `NODE_ENV` | Environment mode | `production` |

### Local Development
Create `.env.local` file:
```bash
NEXTAUTH_SECRET=your-local-secret
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=file:./prisma/dev.db
```

---

## 🏗️ Build Configuration

### Build Commands
```bash
# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Production server
npm run lint         # Code linting

# Database
npx prisma generate  # Generate Prisma client
npx prisma db push   # Push schema changes
npx prisma db seed   # Seed database
```

### Build Verification
- **Target Bundle Size**: ~160-170kB First Load JS
- **Static Generation**: All pages prerendered
- **Performance**: Lighthouse scores >90
- **Mobile Optimization**: Required for all features

---

## 📱 Mobile Optimization

### Responsive Breakpoints
- **320px**: iPhone SE (minimum supported)
- **375px**: iPhone 12/13 (primary mobile)
- **768px**: iPad (tablet)
- **1024px**: Desktop (minimum)
- **1440px+**: Large desktop

### Mobile-Specific Features
- **Touch Controls**: 3D viewer with touch events
- **Touch Targets**: Minimum 44px tap targets
- **Viewport**: Proper mobile viewport meta tag
- **Performance**: 30fps minimum for 3D interactions
- **Animations**: Reduced motion compliance

---

## 🎯 Performance Targets

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: <2.5s
- **FID (First Input Delay)**: <100ms
- **CLS (Cumulative Layout Shift)**: <0.1

### Lighthouse Scores (Target: >90)
- **Performance**: >90 (desktop and mobile)
- **Accessibility**: >90 (WCAG AA compliance)
- **Best Practices**: >90
- **SEO**: >90 (comprehensive metadata)

### Bundle Analysis
```bash
# Analyze bundle size
npm run build
# Check .next/analyze/ for detailed breakdown
```

---

## 🔧 Technical Architecture

### Technology Stack
- **Framework**: Next.js 14.2.28 with App Router
- **Language**: TypeScript 5.2.2 (strict mode)
- **Styling**: Tailwind CSS + SASS + CSS Variables
- **Animations**: GSAP 3.13.0 + Framer Motion
- **Database**: Prisma with SQLite (dev) / PostgreSQL (prod)
- **Authentication**: NextAuth.js 4.24.11
- **UI Components**: Radix UI + Shadcn/ui (40+ components)

### Key Features
- **3D Viewer**: Lightweight CSS-based (no Three.js)
- **Animations**: GSAP with reduced motion support
- **Search**: Fuzzy search with Fuse.js
- **Theme**: Dark/light/system mode toggle
- **SEO**: Comprehensive metadata + JSON-LD
- **Accessibility**: WCAG AA compliant

---

## 🚨 Known Limitations

### Browser Support
- **Minimum**: Chrome 88+, Safari 14+, Firefox 85+, Edge 88+
- **Mobile**: iOS Safari 14+, Chrome Mobile 88+
- **3D Viewer**: Requires CSS 3D transform support
- **Animations**: Graceful degradation for reduced motion

### Performance Considerations
- **3D Viewer**: May impact performance on low-end devices
- **GSAP Animations**: GPU acceleration required for smooth performance
- **Bundle Size**: Monitor for dependency bloat (current: ~160kB)
- **Mobile**: Test on mid-range devices for performance validation

### Development Notes
- **Images**: Using `images.unoptimized = true` (keep as-is)
- **ESLint**: Proceeding without strict enforcement
- **Database**: SQLite for development, PostgreSQL recommended for production
- **Authentication**: Local development uses file-based session storage

---

## 🔍 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear Next.js cache
rm -rf .next
npm run build

# Clear node_modules
rm -rf node_modules package-lock.json
npm install
```

#### Hydration Errors
- Check for whitespace between HTML tags
- Ensure client/server rendering consistency
- Verify "use client" directives on interactive components

#### Database Issues
```bash
# Reset Prisma
npx prisma db push --force-reset
npx prisma generate
npx prisma db seed
```

#### Performance Issues
- Check bundle analyzer for large dependencies
- Verify GSAP animations use GPU acceleration
- Test 3D viewer performance on target devices
- Monitor Core Web Vitals in production

### Support Contacts
- **Technical Issues**: Check VERIFICATION.md for implementation details
- **Deployment**: Refer to Vercel documentation
- **Performance**: Use Lighthouse and Chrome DevTools

---

## 📊 Monitoring & Maintenance

### Production Monitoring
- **Vercel Analytics**: Built-in performance monitoring
- **Core Web Vitals**: Real user metrics
- **Error Tracking**: Vercel error reporting
- **Uptime**: Vercel status dashboard

### Regular Maintenance
- **Dependencies**: Monthly security updates
- **Performance**: Quarterly Lighthouse audits
- **Content**: Update placeholder images when ready
- **SEO**: Monitor search console for issues

### Backup Strategy
- **Code**: Git repository (primary backup)
- **Database**: Regular Prisma schema exports
- **Assets**: Vercel automatic asset optimization
- **Configuration**: Environment variables documented

---

**Deployment Status**: Ready for production  
**Last Verified**: January 2025  
**Next Review**: Quarterly performance audit  

*This document should be updated with each major deployment or configuration change.*