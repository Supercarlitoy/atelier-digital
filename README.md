
# The Atelier Agency Theme v1.0

Premium NextJS 14 theme with TypeScript, implementing digital stonemasonry principles for modern web architecture.

## Philosophy

**Digital Stonemasonry** - We craft websites with architectural precision, tactile interactions, and minimalist luxury. This theme bridges the gap between cheap templates and expensive custom builds.

## Features

### Design System
- **Quarried Stone Palette**: Dark theme with premium gold accents
- **Fluid Typography**: Utopia-style clamp functions for perfect scaling
- **Fluid Spacing**: Responsive spacing system using CSS custom properties
- **Premium Components**: Buttons, navigation, and layouts built for luxury

### Technical Stack
- **NextJS 14** with App Router
- **TypeScript** for type safety
- **SCSS** with CSS custom properties
- **GSAP** ready for advanced animations
- **Lenis** for smooth scrolling

### Components
- **Header**: Minimalist logo with menu trigger
- **Navigation**: Fullscreen overlay with smooth transitions
- **Footer**: Clean social links and copyright
- **Button**: Primary solid and text variants with hover animations

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the theme in action.

## Project Structure

```
/app
├── app/                    # Next.js pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── work/              # Work showcase
│   └── contact/           # Contact form
├── components/
│   ├── layout/            # Header, footer, navigation
│   └── common/            # Reusable components
└── styles/
    ├── globals.scss       # Design system & CSS variables
    └── components.scss    # Component-specific styles
```

## Design System Usage

### Colors
```scss
var(--color-background)    // #191919 - Primary background
var(--color-text)          // #A3A3A3 - Body text
var(--color-heading)       // #E5E5E5 - Headings
var(--color-primary)       // #C2A878 - Premium gold accent
```

### Typography
```scss
var(--text-xs) to var(--text-6xl)    // Fluid type scale
var(--font-weight-normal)            // 400
var(--font-weight-semibold)          // 600
```

### Spacing
```scss
var(--space-xs) to var(--space-5xl)  // Fluid spacing scale
```

## Phase 1 Complete

This is Phase 1 of the Atelier Agency Theme, providing:
- ✅ Complete design system with CSS variables
- ✅ Fluid typography and spacing scales
- ✅ Basic layout components (Header, Footer, Navigation)
- ✅ Core page structure (Home, About, Work, Contact)
- ✅ TypeScript configuration
- ✅ SCSS integration
- ✅ Premium aesthetic foundation

## Development Guidelines

### Adding Components
- Use CSS custom properties for consistency
- Follow the established naming conventions
- Implement hover states and transitions
- Ensure responsive design

### Styling
- All styles use the design system variables
- Components follow BEM methodology
- Mobile-first responsive approach
- Smooth transitions and animations

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Optimized for performance

## License
Premium theme for Atelier Digital storefront.

---

**Next Steps**: Phase 2 will add GSAP animations, Lenis smooth scrolling, advanced components, and content management features.
