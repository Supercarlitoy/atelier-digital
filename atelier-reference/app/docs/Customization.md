
# Customization Guide - Atelier Agency Theme

## Design System Customization

### Color Palette

The theme uses CSS custom properties for easy color customization. Edit `/app/globals.css`:

```css
:root {
  /* Primary Colors */
  --color-background: #191919;     /* Main background */
  --color-surface: #212121;       /* Cards, surfaces */
  --color-text: #A3A3A3;         /* Body text */
  --color-heading: #E5E5E5;      /* Headings */
  --color-primary: #C2A878;      /* Gold accent */
  
  /* Extended Palette */
  --color-secondary: #8B9AAF;    /* Secondary accent */
  --color-success: #10B981;      /* Success states */
  --color-warning: #F59E0B;      /* Warning states */
  --color-error: #EF4444;        /* Error states */
  
  /* Opacity Variants */
  --color-text-muted: #6B7280;
  --color-border: #374151;
  --color-border-hover: #4B5563;
}
```

### Typography System

#### Font Configuration

**Option 1: Unified Sans-Serif (Recommended)**
```css
:root {
  --font-family-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-family-display: var(--font-family-sans);
  --font-family-body: var(--font-family-sans);
}
```

**Option 2: Mixed Typography**
```css
:root {
  --font-family-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-family-serif: 'Lora', ui-serif, Georgia, serif;
  --font-family-display: var(--font-family-serif);
  --font-family-body: var(--font-family-sans);
}
```

#### Fluid Typography Scale

The theme uses a fluid type scale that adapts to screen size:

```css
:root {
  /* Fluid Typography (Utopia-style) */
  --step--2: clamp(0.72rem, 0.70rem + 0.10vw, 0.78rem);
  --step--1: clamp(0.83rem, 0.80rem + 0.18vw, 0.94rem);
  --step-0:  clamp(1.00rem, 0.95rem + 0.25vw, 1.13rem);
  --step-1:  clamp(1.20rem, 1.10rem + 0.35vw, 1.35rem);
  --step-2:  clamp(1.44rem, 1.28rem + 0.48vw, 1.62rem);
  --step-3:  clamp(1.73rem, 1.48rem + 0.64vw, 1.94rem);
  --step-4:  clamp(2.07rem, 1.71rem + 0.85vw, 2.33rem);
  --step-5:  clamp(2.49rem, 1.98rem + 1.12vw, 2.80rem);
  --step-6:  clamp(2.99rem, 2.30rem + 1.47vw, 3.36rem);
  --step-7:  clamp(3.59rem, 2.66rem + 1.92vw, 4.03rem);
  --step-8:  clamp(4.31rem, 3.07rem + 2.50vw, 4.84rem);
}

/* Usage */
h1 { font-size: var(--step-7); }
h2 { font-size: var(--step-5); }
h3 { font-size: var(--step-3); }
body { font-size: var(--step-0); }
```

### Spacing System

```css
:root {
  /* Fluid Spacing Scale */
  --space-2xs: clamp(0.25rem, 0.20rem + 0.20vw, 0.5rem);
  --space-xs:  clamp(0.5rem, 0.40rem + 0.30vw, 0.75rem);
  --space-s:   clamp(0.75rem, 0.60rem + 0.40vw, 1rem);
  --space-m:   clamp(1rem, 0.80rem + 0.60vw, 1.5rem);
  --space-l:   clamp(1.5rem, 1.20rem + 0.80vw, 2.25rem);
  --space-xl:  clamp(2rem, 1.60rem + 1.00vw, 3rem);
  --space-2xl: clamp(3rem, 2.40rem + 1.50vw, 4.5rem);
  --space-3xl: clamp(4rem, 3.20rem + 2.50vw, 6rem);
  --space-4xl: clamp(6rem, 4.80rem + 3.00vw, 9rem);
  --space-5xl: clamp(8rem, 6.40rem + 4.00vw, 12rem);
}
```

## Component Customization

### Header Configuration

Edit `/components/layout/Header.tsx`:

```tsx
const headerConfig = {
  logo: {
    text: "Your Agency",
    image: "/logo.svg",
    width: 120,
    height: 40
  },
  navigation: {
    showCTA: true,
    ctaText: "Start Project",
    ctaLink: "/contact"
  }
}
```

### Navigation Menu

Customize menu items in `/components/layout/Navigation.tsx`:

```tsx
const menuItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" }
]
```

### Button Variants

Create custom button variants by extending the base styles:

```scss
// Custom button variant
.button--custom {
  background: linear-gradient(135deg, var(--color-primary), #D4B896);
  color: var(--color-background);
  
  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 25px rgba(194, 168, 120, 0.25);
  }
}
```

## Animation Customization

### GSAP Animation Settings

Configure animations in `/hooks/use-gsap-animations.ts`:

```typescript
export const animationConfig = {
  // Scroll reveal settings
  scrollReveal: {
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.1,
    blur: 5
  },
  
  // Page transition settings
  pageTransition: {
    duration: 0.6,
    ease: "power2.inOut"
  },
  
  // Hover animations
  hover: {
    duration: 0.3,
    ease: "power2.out"
  }
}
```

### Smooth Scrolling Configuration

Customize Lenis smooth scrolling behavior:

```typescript
const lenisConfig = {
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
}
```

## Content Customization

### Portfolio Data

Update your projects in `/data/projects.ts`:

```typescript
export const projects = [
  {
    id: 1,
    title: "Your Project Name",
    category: "Web Design",
    description: "Project description...",
    image: "/images/projects/project-1.jpg",
    gallery: [
      "/images/projects/project-1-detail-1.jpg",
      "/images/projects/project-1-detail-2.jpg"
    ],
    technologies: ["Next.js", "TypeScript", "GSAP"],
    client: "Client Name",
    year: "2024",
    url: "https://project-url.com"
  }
]
```

### Team Members

Configure your team in `/data/team.ts`:

```typescript
export const team = [
  {
    id: 1,
    name: "Your Name",
    role: "Creative Director",
    image: "/images/team/member-1.jpg",
    bio: "Brief bio...",
    social: {
      linkedin: "https://linkedin.com/in/yourname",
      twitter: "https://twitter.com/yourname",
      instagram: "https://instagram.com/yourname"
    }
  }
]
```

## Feature Configuration

### Interactive Components

#### Cookie Consent
```typescript
// Customize in components/interactive/CookieConsent.tsx
const cookieConfig = {
  message: "We use cookies to enhance your experience.",
  acceptText: "Accept All",
  position: "bottom-right",
  showDecline: false
}
```

#### Live Search
```typescript
// Configure searchable content
const searchConfig = {
  placeholder: "Search projects, team, or pages...",
  maxResults: 10,
  searchFields: ['title', 'category', 'description']
}
```

#### Theme Toggle
```typescript
// Theme configuration
const themeConfig = {
  defaultTheme: 'dark',
  enableSystemTheme: true,
  storageKey: 'atelier-theme'
}
```

## SEO Configuration

### Meta Tags

Update meta configuration in `/app/layout.tsx`:

```tsx
export const metadata = {
  title: "Your Agency Name",
  description: "Your agency description",
  keywords: "web design, branding, digital agency",
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Agency Name",
    description: "Your agency description",
    images: ["/og-image.jpg"]
  }
}
```

### Structured Data

Add JSON-LD structured data for better SEO:

```typescript
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Agency Name",
  "url": "https://youragency.com",
  "logo": "https://marketplace.canva.com/EAF7cca_2pA/1/0/1600w/canva-black-and-blue-initials-creative-logo-U-z4x7ZUjjs.jpg"
}
```

## Performance Optimization

### Image Optimization

Use Next.js Image component with proper configurations:

```tsx
import Image from 'next/image'

<Image
  src="/images/hero-bg.jpg"
  alt="Hero background"
  fill
  priority
  sizes="100vw"
  style={{ objectFit: 'cover' }}
/>
```

### Font Loading

Optimize font loading in `/app/layout.tsx`:

```tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})
```

## Texture Enhancement (Optional)

Add subtle texture to enhance the "Digital Stonemasonry" feel:

```css
body {
  /* Add noise texture */
  background-image: url('/textures/noise.png');
  background-size: 256px 256px;
  background-repeat: repeat;
  background-blend-mode: overlay;
}

/* Alternative: CSS-only noise */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 25% 25%, rgba(255,255,255,0.02) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(255,255,255,0.02) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
}
```

## Advanced Customization

### Custom Animations

Create your own GSAP animations:

```typescript
// Custom scroll trigger animation
export const useCustomAnimation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.fromTo('.custom-element', 
      { 
        opacity: 0, 
        rotateX: -30,
        transformOrigin: 'center bottom'
      },
      {
        opacity: 1,
        rotateX: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.custom-element',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1
        }
      }
    )
  }, [])
}
```

### Custom Hooks

Create reusable custom hooks for your specific needs:

```typescript
// Custom intersection observer hook
export const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting)
    }, options)
    
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [options])
  
  return [ref, isInView]
}
```

---

This guide covers the most common customizations. For more advanced modifications, refer to the Technical Specification document.
