
# Atelier Agency Theme - Component Index

Complete mapping of all 78 production-ready components with usage instructions and prerequisites.

## Layout & Navigation (4 components)

### Core Layout
| Component | File | Usage | Prerequisites |
|-----------|------|--------|---------------|
| Header | `components/layout/header.tsx` | Site-wide header | Requires navigation data |
| Footer | `components/layout/footer.tsx` | Site-wide footer | None |
| Navigation | `components/layout/navigation.tsx` | Main navigation menu | Requires route configuration |
| AnimatedNavbar | `components/navigation/AnimatedNavbar.tsx` | GSAP-animated navigation | Requires GSAP, SmoothScrollProvider |

## UI Foundation (48 components) - Shadcn/ui

### Form Elements
| Component | File | Usage | Prerequisites |
|-----------|------|--------|---------------|
| Button | `components/ui/button.tsx` | All button variants | None |
| Input | `components/ui/input.tsx` | Text input fields | None |
| Select | `components/ui/select.tsx` | Dropdown selections | None |
| Checkbox | `components/ui/checkbox.tsx` | Boolean inputs | None |
| RadioGroup | `components/ui/radio-group.tsx` | Single choice from options | None |
| Switch | `components/ui/switch.tsx` | Toggle switches | None |
| Textarea | `components/ui/textarea.tsx` | Multi-line text input | None |
| Form | `components/ui/form.tsx` | Form wrapper with validation | react-hook-form |

### Layout & Display
| Component | File | Usage | Prerequisites |
|-----------|------|--------|---------------|
| Card | `components/ui/card.tsx` | Content containers | None |
| Dialog | `components/ui/dialog.tsx` | Modal dialogs | None |
| Sheet | `components/ui/sheet.tsx` | Slide-out panels | None |
| Tabs | `components/ui/tabs.tsx` | Tabbed interfaces | None |
| Accordion | `components/ui/accordion.tsx` | Collapsible content | None |
| Collapsible | `components/ui/collapsible.tsx` | Show/hide content | None |
| Separator | `components/ui/separator.tsx` | Visual dividers | None |
| AspectRatio | `components/ui/aspect-ratio.tsx` | Image containers | None |
| Carousel | `components/ui/carousel.tsx` | Image/content sliders | embla-carousel-react |
| ResizablePanels | `components/ui/resizable.tsx` | Resizable layouts | None |
| ScrollArea | `components/ui/scroll-area.tsx` | Custom scrollbars | None |
| Table | `components/ui/table.tsx` | Data tables | None |

### Navigation & Commands
| Component | File | Usage | Prerequisites |
|-----------|------|--------|---------------|
| Breadcrumb | `components/ui/breadcrumb.tsx` | Navigation breadcrumbs | None |
| Command | `components/ui/command.tsx` | Command palette | cmdk |
| MenuBar | `components/ui/menubar.tsx` | Menu bars | None |
| NavigationMenu | `components/ui/navigation-menu.tsx` | Complex navigation | None |
| Pagination | `components/ui/pagination.tsx` | Page navigation | None |
| ContextMenu | `components/ui/context-menu.tsx` | Right-click menus | None |

### Display & Feedback
| Component | File | Usage | Prerequisites |
|-----------|------|--------|---------------|
| Avatar | `components/ui/avatar.tsx` | User profile images | None |
| Badge | `components/ui/badge.tsx` | Status indicators | None |
| Progress | `components/ui/progress.tsx` | Progress bars | None |
| Skeleton | `components/ui/skeleton.tsx` | Loading placeholders | None |
| Alert | `components/ui/alert.tsx` | Alert messages | None |
| AlertDialog | `components/ui/alert-dialog.tsx` | Confirmation dialogs | None |
| Toast | `components/ui/toast.tsx` | Notification system | None |
| Toaster | `components/ui/toaster.tsx` | Toast container | None |
| Sonner | `components/ui/sonner.tsx` | Alternative toast system | sonner |
| UseToast | `components/ui/use-toast.ts` | Toast hook | None |

### Utility & Interactions
| Component | File | Usage | Prerequisites |
|-----------|------|--------|---------------|
| Tooltip | `components/ui/tooltip.tsx` | Hover information | None |
| Popover | `components/ui/popover.tsx` | Floating content | None |
| HoverCard | `components/ui/hover-card.tsx` | Hover-triggered cards | None |
| DropdownMenu | `components/ui/dropdown-menu.tsx` | Dropdown menus | None |
| Toggle | `components/ui/toggle.tsx` | Toggle buttons | None |
| ToggleGroup | `components/ui/toggle-group.tsx` | Toggle button groups | None |
| Slider | `components/ui/slider.tsx` | Range inputs | None |
| Calendar | `components/ui/calendar.tsx` | Date picker | react-day-picker |
| DateRangePicker | `components/ui/date-range-picker.tsx` | Date range selection | react-day-picker |
| InputOTP | `components/ui/input-otp.tsx` | OTP input fields | input-otp |

## Interactive Components (9 components)

### Essential Interactive
| Component | File | Usage | Prerequisites |
|-----------|------|--------|---------------|
| CookieConsent | `components/interactive/CookieConsent.tsx` | GDPR cookie banner | `use-cookie-consent` hook, styles |
| ThemeToggle | `components/interactive/ThemeToggle.tsx` | Dark/light mode toggle | `next-themes`, `use-theme-toggle` hook |
| LiveSearch | `components/interactive/LiveSearch.tsx` | Real-time search | `use-live-search` hook, search data |

### Enhanced Interactive
| Component | File | Usage | Prerequisites |
|-----------|------|--------|---------------|
| InteractiveCursor | `components/interactive/InteractiveCursor.tsx` | Custom cursor effects | `use-interactive-cursor` hook, GSAP |
| DynamicMarquee | `components/interactive/DynamicMarquee.tsx` | Scrolling text marquee | `use-dynamic-marquee` hook, marquee data |
| ImageHotspots | `components/interactive/ImageHotspots.tsx` | Interactive image annotations | `use-image-hotspots` hook, hotspot data |

### Premium Interactive
| Component | File | Usage | Prerequisites |
|-----------|------|--------|---------------|
| ModelViewer3D | `components/interactive/ModelViewer3D.tsx` | 3D model display | Three.js, `@react-three/fiber`, `use-3d-viewer` hook |

### System Components
| Component | File | Usage | Prerequisites |
|-----------|------|--------|---------------|
| Phase3Provider | `components/interactive/Phase3Provider.tsx` | Interactive features context | None |
| SearchTrigger | `components/interactive/SearchTrigger.tsx` | Search activation | LiveSearch component |

## Animation Components (7 components)

| Component | File | Usage | Prerequisites |
|-----------|------|--------|---------------|
| AnimatedSection | `components/animations/AnimatedSection.tsx` | Scroll-triggered animations | GSAP, `use-gsap-animations` |
| AnimatedCard | `components/animations/AnimatedCard.tsx` | Card hover/enter animations | GSAP |
| AnimatedButton | `components/animations/AnimatedButton.tsx` | Button interaction effects | GSAP |
| AnimatedCounter | `components/animations/AnimatedCounter.tsx` | Number counting animations | GSAP |
| AnimatedText | `components/animations/AnimatedText.tsx` | Text reveal animations | GSAP |
| ParallaxSection | `components/animations/ParallaxSection.tsx` | Parallax scrolling effects | GSAP ScrollTrigger |
| StaggeredGrid | `components/animations/StaggeredGrid.tsx` | Grid item stagger animations | GSAP |

## Content & Business Components (10 components)

### About Page
| Component | File | Usage | Prerequisites |
|-----------|------|--------|---------------|
| TeamCards | `components/about/team-cards.tsx` | Team member display | Team data |
| ServiceCards | `components/about/service-cards.tsx` | Services showcase | Service data |

### Work/Portfolio
| Component | File | Usage | Prerequisites |
|-----------|------|--------|---------------|
| ProjectGrid | `components/work/project-grid.tsx` | Portfolio grid with filtering | Project data, filtering logic |

### Common/Shared
| Component | File | Usage | Prerequisites |
|-----------|------|--------|---------------|
| Button | `components/common/button.tsx` | Enhanced button component | Base UI button |
| LoadingSkeleton | `components/common/loading-skeleton.tsx` | Loading states | None |
| StatsDisplay | `components/common/stats-display.tsx` | Statistics showcase | Stats data |
| Testimonials | `components/common/testimonials.tsx` | Customer testimonials | Testimonial data |

### Forms & Validation
| Component | File | Usage | Prerequisites |
|-----------|------|--------|---------------|
| FormValidation | `components/forms/form-validation.tsx` | Form validation logic | react-hook-form, yup/zod |

### Providers & Context
| Component | File | Usage | Prerequisites |
|-----------|------|--------|---------------|
| ThemeProvider | `components/theme-provider.tsx` | Theme context provider | next-themes |
| SmoothScrollProvider | `components/providers/SmoothScrollProvider.tsx` | Smooth scroll context | GSAP ScrollSmoother |

## Hooks & Utilities (12 hooks)

| Hook | File | Purpose | Dependencies |
|------|------|---------|--------------|
| use-3d-viewer | `hooks/use-3d-viewer.ts` | 3D model viewer logic | Three.js |
| use-cookie-consent | `hooks/use-cookie-consent.ts` | Cookie consent management | localStorage |
| use-dynamic-marquee | `hooks/use-dynamic-marquee.ts` | Marquee animation control | GSAP |
| use-gsap-animations | `hooks/use-gsap-animations.ts` | GSAP animation utilities | GSAP |
| use-image-hotspots | `hooks/use-image-hotspots.ts` | Image hotspot interactions | None |
| use-interactive-cursor | `hooks/use-interactive-cursor.ts` | Custom cursor logic | GSAP |
| use-live-search | `hooks/use-live-search.ts` | Real-time search functionality | None |
| use-scroll-reveal | `hooks/use-scroll-reveal.ts` | Scroll-triggered reveals | GSAP ScrollTrigger |
| use-smooth-scroll | `hooks/use-smooth-scroll.ts` | Smooth scrolling | GSAP ScrollSmoother |
| use-theme-toggle | `hooks/use-theme-toggle.ts` | Theme switching logic | next-themes |
| use-toast | `hooks/use-toast.ts` | Toast notification system | None |

## Data & Types (8 files)

| File | Purpose | Content |
|------|---------|---------|
| `data/3d-models.ts` | 3D model definitions | Model paths, metadata |
| `data/hotspot-samples.ts` | Image hotspot data | Hotspot positions, content |
| `data/marquee-items.ts` | Marquee text items | Text content for scrolling |
| `data/searchable-items.ts` | Search data | Items for live search |
| `types/3d-viewer.ts` | 3D viewer types | Model, viewer interfaces |
| `types/phase3.ts` | Interactive component types | Phase 3 feature types |
| `lib/types.ts` | Global type definitions | App-wide interfaces |
| `lib/utils.ts` | Utility functions | Helper functions |

## Prerequisites Summary

### Critical Dependencies:
1. **GSAP**: Required for all animation components
2. **Next.js 14.2+**: App router compatibility
3. **Tailwind CSS**: All styling depends on this
4. **React Hook Form**: Form validation components
5. **Next Themes**: Theme toggle functionality

### Optional Dependencies (Feature-specific):
1. **Three.js + R3F**: Only for 3D model viewer
2. **Prisma**: Only if using database features
3. **NextAuth**: Only if using authentication

### Style Dependencies:
All components require their corresponding SCSS files to be imported:
- `styles/globals.scss` (mandatory)
- `styles/components.scss` (mandatory)
- `styles/gsap-animations.scss` (for animation components)
- `styles/phase3*.scss` (for interactive components)

## Usage Patterns

### Basic Component Usage:
```tsx
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

<Button variant="primary">Click me</Button>
<Card>Content here</Card>
```

### Interactive Component Usage:
```tsx
import { LiveSearch } from '@/components/interactive/LiveSearch'
import { CookieConsent } from '@/components/interactive/CookieConsent'

<LiveSearch data={searchableItems} />
<CookieConsent />
```

### Animation Component Usage:
```tsx
import { AnimatedSection } from '@/components/animations/AnimatedSection'
import { StaggeredGrid } from '@/components/animations/StaggeredGrid'

<AnimatedSection animation="fadeInUp">
  <StaggeredGrid items={gridItems} />
</AnimatedSection>
```

This component inventory provides complete visibility into all 78 components, their purposes, dependencies, and usage patterns for seamless integration into your main codebase.
