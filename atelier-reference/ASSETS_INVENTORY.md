
# Atelier Agency Theme - Assets Inventory

Complete inventory of all assets, their sources, licenses, and usage requirements.

## Current Assets Structure

```
/public/
├── images/
│   ├── hero-bg.jpg (5,004,582 bytes)
│   ├── design-showcase.jpg (3,061,313 bytes) 
│   └── logos/
│       └── (brand asset directory)
└── models/ (Create for 3D assets)
```

## Image Assets (Current)

### Hero Section
| File | Size | Dimensions | Usage | License |
|------|------|------------|-------|---------|
| `hero-bg.jpg` | 5MB | High-res | Homepage hero background | Stock/Commercial |
| `design-showcase.jpg` | 3MB | Portfolio format | Work showcase, about page | Stock/Commercial |

### Brand Assets
| Directory | Contents | Usage |
|-----------|----------|--------|
| `logos/` | Brand logos, icons | Header, footer, branding |

## Required Assets (To be added)

### Essential Images
| Asset Type | Suggested Filenames | Usage | Recommended Size |
|------------|-------------------|-------|------------------|
| Portfolio Items | `project-*.jpg` | Work page grid | 800x600px |
| Team Photos | `team-*.jpg` | About page team cards | 400x400px |
| Service Icons | `service-*.svg` | About page services | SVG (scalable) |
| Testimonial Photos | `testimonial-*.jpg` | Client testimonials | 100x100px |
| Blog/Article Images | `blog-*.jpg` | Content pages | 1200x630px (OG size) |

### 3D Model Assets
| File Type | Location | Usage | Requirements |
|-----------|----------|-------|-------------|
| GLB files | `/public/models/*.glb` | 3D viewer component | Optimized, <2MB each |
| GLTF files | `/public/models/*.gltf` | Alternative format | With separate textures |
| Fallback images | `/public/models/previews/*.jpg` | Non-WebGL browsers | 800x600px |

### Icon Assets
| Category | Format | Usage |
|----------|--------|-------|
| Social Icons | SVG | Footer social links |
| Service Icons | SVG | About page services |
| Feature Icons | SVG | Homepage features |
| UI Icons | Built into Lucide React | All UI components |

## SEO & Open Graph Assets

### Required Meta Images
| File | Dimensions | Usage |
|------|------------|--------|
| `og-image.jpg` | 1200x630px | Open Graph, Twitter Cards |
| `favicon.ico` | 32x32px | Browser tab icon |
| `apple-touch-icon.png` | 180x180px | iOS home screen |
| `android-chrome-*.png` | 192x192px, 512x512px | Android home screen |

## Font Assets

### Current Implementation
```typescript
// Using Next.js Font Optimization
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })
```

### Font Stack
| Font | Usage | Weight | License |
|------|-------|--------|---------|
| Inter | Body text, UI | 400, 500, 600 | Google Fonts (Open Source) |
| Playfair Display | Headings, luxury text | 400, 700 | Google Fonts (Open Source) |

## Asset Optimization Requirements

### Image Optimization
| Format | Use Case | Quality Settings |
|--------|----------|------------------|
| WebP | Modern browsers | 85% quality |
| JPEG | Legacy browsers | 90% quality |
| PNG | Images with transparency | Lossless compression |
| SVG | Icons, simple graphics | Optimized/minified |

### Performance Guidelines
| Asset Type | Max Size | Optimization |
|------------|----------|--------------|
| Hero Images | 500KB | Next.js Image component |
| Portfolio Images | 200KB | Lazy loading, srcset |
| Team Photos | 50KB | Compressed, optimized |
| 3D Models | 2MB | LOD (Level of Detail) |
| Icons | 5KB | SVG optimization |

## Asset Sources & Licenses

### Stock Photography
```
Current images appear to be from stock photo services.
Recommended sources:
- Unsplash (Free, commercial use)
- Pexels (Free, commercial use) 
- Adobe Stock (Paid, commercial license)
- Shutterstock (Paid, commercial license)
```

### 3D Models
```
Recommended sources:
- Sketchfab (Various licenses)
- TurboSquid (Commercial licenses)
- CGTrader (Various licenses)
- Free3D (Free models available)

Format requirements:
- GLB preferred (binary, smaller)
- GLTF acceptable (JSON, larger)
- Max 2MB per model
- PBR materials preferred
```

### Icons
```
Current: Lucide React (MIT License)
Alternatives:
- Heroicons (MIT)
- Feather Icons (MIT)
- Phosphor Icons (MIT)
```

## Usage in Components

### Next.js Image Implementation
```tsx
import Image from 'next/image'

// Proper usage with aspect ratio container
<div className="relative aspect-video bg-muted">
  <Image
    src="/images/hero-bg.jpg"
    alt="Descriptive alt text"
    fill
    className="object-cover"
    priority={true} // For above-the-fold images
  />
</div>
```

### 3D Model Usage
```tsx
import { ModelViewer3D } from '@/components/interactive/ModelViewer3D'

<ModelViewer3D
  src="/models/sample.glb"
  fallbackImage="/models/previews/sample.jpg"
  alt="3D model description"
/>
```

## Asset Loading Strategy

### Critical Assets (Preload)
- Hero background image
- Logo/brand assets
- Above-the-fold images

### Lazy-Loaded Assets
- Portfolio images
- Team photos
- Below-the-fold content
- 3D models

### Progressive Enhancement
- WebP images with JPEG fallbacks
- 3D models with image fallbacks
- High-res images with low-res placeholders

## Content Guidelines

### Image Alt Text
All images require descriptive alt text:
```tsx
// Good
<Image alt="Modern minimalist office workspace with natural lighting" />

// Bad  
<Image alt="image" />
```

### File Naming Convention
```
// Recommended naming:
hero-section-bg.jpg
project-ecommerce-showcase.jpg
team-member-john-doe.jpg
service-icon-web-design.svg

// Avoid:
image1.jpg
DSC_0001.jpg
untitled.png
```

## Asset Delivery Optimization

### CDN Recommendations
For production deployment:
- Vercel: Built-in image optimization
- Cloudflare Images: Advanced optimization
- AWS CloudFront: Custom configuration
- Netlify: Built-in asset optimization

### Responsive Images
```tsx
<Image
  src="/images/portfolio-item.jpg"
  alt="Project showcase"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  fill
/>
```

## Missing Asset Checklist

To complete the asset inventory, please provide:

### High Priority
- [ ] Portfolio project images (8-12 projects)
- [ ] Team member photos (4-6 people) 
- [ ] Service/feature icons (6-8 icons)
- [ ] Open Graph image (1200x630px)

### Medium Priority  
- [ ] Client testimonial photos (3-5 clients)
- [ ] Blog/article header images
- [ ] Additional brand assets/variations

### Low Priority
- [ ] 3D models for ModelViewer3D
- [ ] Animation assets (video, Lottie)
- [ ] Additional stock photography

## License Compliance

### Current Status
```
✅ Google Fonts: Open Source (SIL Open Font License)
✅ Lucide Icons: MIT License
❓ Stock Images: License verification needed
❓ Hero/Portfolio Images: Source confirmation required
```

### Production Requirements
Before deployment, ensure:
1. All images have proper commercial licenses
2. Attribution requirements are met (if any)
3. Model releases for photos with people
4. Property releases for architectural photos
5. Copyright compliance for any branded content

This asset inventory provides a complete overview of current and required assets for the Atelier Agency Theme, ensuring proper licensing and optimization for production deployment.
