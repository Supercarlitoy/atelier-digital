
# Atelier Agency Theme - Advanced GSAP Animations Package

## Overview
This package contains the complete GSAP animation system implementation for The Atelier Agency Theme. This professional animation system brings the "Digital Stonemasonry" design philosophy to life with smooth, performant animations.

## 🚀 Features Implemented

### Core Animation System
- **GSAP-powered animations** with ScrollTrigger integration
- **Smooth scrolling** using Studio Freight's Lenis
- **Performance-optimized** animation utilities
- **Accessible animation** with reduced motion support
- **TypeScript fully typed** animation hooks and components

### Animation Components
- `AnimatedSection` - Scroll-triggered section animations
- `AnimatedCard` - Interactive card hover effects
- `AnimatedButton` - Enhanced button micro-interactions
- `AnimatedCounter` - Number counting animations
- `AnimatedText` - Advanced text reveal effects
- `ParallaxSection` - Smooth parallax scrolling
- `StaggeredGrid` - Staggered reveal animations
- `AnimatedNavbar` - Animated navigation with scroll effects

### Text Animations
- **Typewriter Effect** - Character-by-character text reveal
- **Fade In Words** - Word-by-word text animation
- **Slide Up Lines** - Line-by-line text reveals
- **Split Characters** - 3D character animations

### Scroll Animations
- **Fade In Up** - Classic scroll reveal
- **Slide From Left/Right** - Directional reveals
- **Staggered Reveals** - Sequential element animations
- **Parallax Effects** - Depth-based scrolling

### Micro-Interactions
- **Button Hovers** - Professional button effects
- **Card Hovers** - Elegant card interactions
- **Text Reveals** - Smooth text animations
- **Counter Animations** - Animated number counting

## 📁 Package Structure

```
atelier-gsap-animations/
├── README.md                          # This file
├── gsap-animations.ts                 # Core animation utilities
├── use-gsap-animations.ts            # React hooks for animations
├── SmoothScrollProvider.tsx          # Smooth scrolling provider
├── AnimatedNavbar.tsx               # Enhanced navigation
├── gsap-animations.scss             # Animation styles
├── enhanced-homepage.tsx            # Example implementation
└── animations/                      # Animation components
    ├── AnimatedSection.tsx
    ├── AnimatedCard.tsx
    ├── AnimatedButton.tsx
    ├── AnimatedCounter.tsx
    ├── AnimatedText.tsx
    ├── ParallaxSection.tsx
    └── StaggeredGrid.tsx
```

## 🔧 Installation Instructions

### 1. Copy Files to Your Project

Copy all files to their respective directories:

```bash
# Core utilities
cp gsap-animations.ts your-project/lib/
cp use-gsap-animations.ts your-project/hooks/

# Components
cp -r animations/ your-project/components/
cp SmoothScrollProvider.tsx your-project/components/providers/
cp AnimatedNavbar.tsx your-project/components/navigation/

# Styles
cp gsap-animations.scss your-project/styles/
```

### 2. Install Dependencies

Ensure these packages are installed in your project:

```bash
yarn add gsap @studio-freight/lenis
```

### 3. Update Layout

Replace your layout with the enhanced version:

```tsx
import SmoothScrollProvider from '../components/providers/SmoothScrollProvider';
import AnimatedNavbar from '../components/navigation/AnimatedNavbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <SmoothScrollProvider>
            <AnimatedNavbar />
            <main className="page min-h-screen">
              {children}
            </main>
            <Footer />
          </SmoothScrollProvider>
        </Providers>
      </body>
    </html>
  );
}
```

### 4. Import Styles

Add to your main CSS file:

```scss
@import 'gsap-animations.scss';
```

## 💫 Usage Examples

### Basic Animation Wrapper
```tsx
import AnimatedSection from '../components/animations/AnimatedSection';

<AnimatedSection animation="fadeInUp">
  <h2>Your Content</h2>
</AnimatedSection>
```

### Animated Text Effects
```tsx
import AnimatedText from '../components/animations/AnimatedText';

<AnimatedText animation="typewriter" className="hero-title">
  Digital Stonemasonry for the Modern Web
</AnimatedText>
```

### Staggered Grid Animations
```tsx
import StaggeredGrid from '../components/animations/StaggeredGrid';

<StaggeredGrid gridCols={3}>
  {items.map(item => (
    <AnimatedCard key={item.id} hover>
      {/* Your card content */}
    </AnimatedCard>
  ))}
</StaggeredGrid>
```

### Counter Animations
```tsx
import AnimatedCounter from '../components/animations/AnimatedCounter';

<AnimatedCounter 
  endValue={150} 
  suffix="+" 
  className="text-3xl font-bold"
/>
```

### Page Transitions
```tsx
import { usePageTransition } from '../hooks/use-gsap-animations';

export default function MyPage() {
  usePageTransition('architecturalReveal');
  
  return (
    // Your page content
  );
}
```

## 🎨 Animation Types Available

### Section Animations
- `fadeInUp` - Fade in from bottom
- `slideInFromLeft` - Slide in from left
- `slideInFromRight` - Slide in from right  
- `staggeredReveal` - Sequential reveals

### Text Animations
- `typewriter` - Character-by-character typing
- `fadeInWords` - Word-by-word fade in
- `slideUpLines` - Line-by-line slide up
- `splitChars` - 3D character rotation

### Page Transitions
- `fadeIn` - Simple fade transition
- `slideUp` - Slide up from bottom
- `architecturalReveal` - Premium clip-path reveal

## ⚙️ Advanced Configuration

### Custom Animation Timings
```tsx
<AnimatedSection 
  animation="fadeInUp"
  options={{
    duration: 1.5,
    delay: 0.3,
    ease: "power3.out"
  }}
>
  Content
</AnimatedSection>
```

### Custom Stagger Amounts
```tsx
<StaggeredGrid 
  staggerAmount={0.2}
  itemSelector=".custom-item"
>
  Content
</StaggeredGrid>
```

### Parallax Speed Control
```tsx
<ParallaxSection speed={0.3}>
  <img src="background.jpg" alt="Parallax background" />
</ParallaxSection>
```

## 🎯 Performance Considerations

- All animations use `will-change: transform` for GPU acceleration
- ScrollTrigger is properly cleaned up on unmount
- Reduced motion preferences are respected
- Animations are optimized for 60fps performance

## 🌟 Design Philosophy Integration

These animations embody the "Digital Stonemasonry" philosophy:

- **Foundational**: Solid, reliable animation base
- **Architectural**: Structured, purposeful transitions  
- **Crafted**: Attention to timing and easing details
- **Premium**: Professional-grade polish and refinement

## 🔄 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📝 Notes

- Always test animations on different devices and connection speeds
- Consider battery life implications for mobile users
- Use animations purposefully to enhance UX, not distract
- Follow accessibility guidelines for motion and animation

## 🎊 What's Next

This animation system provides a solid foundation for:
- Custom animation sequences
- Advanced scroll-based interactions
- Complex timeline animations
- Interactive storytelling experiences

The system is designed to be extensible and customizable for your specific needs while maintaining the premium quality expected from The Atelier Agency Theme.
