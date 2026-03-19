# Styling Documentation

This document covers the styling approach and design system used in the Khualo Construction Website.

## CSS Framework

The project uses **Tailwind CSS** for utility-first styling, providing:

- Rapid UI development
- Consistent spacing and sizing
- Responsive design utilities
- Dark mode support (not currently implemented)
- Customizable design tokens

## Design System

### Color Palette

```css
/* Primary Colors */
--primary: #F4B400;        /* Gold/Yellow - Brand color */
--primary-dark: #d9a000;   /* Darker gold for hovers */

/* Text Colors */
--text-primary: #1C1C1C;   /* Dark gray - main text */
--text-secondary: #555555; /* Medium gray - secondary text */
--text-light: #888888;     /* Light gray - muted text */

/* Background Colors */
--bg-white: #FFFFFF;       /* Pure white */
--bg-gray-light: #F8F8F8;  /* Light gray backgrounds */
--bg-overlay: rgba(28, 28, 28, 0.7); /* Dark overlay for hero */
```

### Typography

**Font Families:**
- **Headings**: System font stack (fallback to sans-serif)
- **Body**: System font stack (fallback to sans-serif)

**Font Sizes:**
- Hero titles: `text-5xl md:text-6xl lg:text-7xl`
- Section headings: `text-4xl md:text-5xl`
- Subheadings: `text-2xl md:text-3xl`
- Body text: `text-base` (16px)
- Small text: `text-sm` (14px)

**Font Weights:**
- Regular text: `font-normal` (400)
- Bold text: `font-bold` (700)
- Extra bold: `font-extrabold` (800)

### Spacing

**Consistent spacing scale using Tailwind's default values:**
- Small: `4px` (1)
- Medium: `8px` (2)
- Large: `16px` (4)
- Extra large: `24px` (6)
- Double extra large: `32px` (8)
- Triple: `48px` (12)
- Quadruple: `64px` (16)

### Breakpoints

Following Tailwind's responsive breakpoints:

```css
/* Mobile First */
@media (min-width: 640px)  /* sm: */
@media (min-width: 768px)  /* md: */
@media (min-width: 1024px) /* lg: */
@media (min-width: 1280px) /* xl: */
@media (min-width: 1536px) /* 2xl: */
```

## Component Styling Patterns

### Buttons

**Primary Button:**
```tsx
className="bg-[#F4B400] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#d9a000] transition-colors"
```

**Secondary Button:**
```tsx
className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-[#1C1C1C] transition-colors"
```

### Cards

**Service Cards:**
```tsx
className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
```

### Sections

**Standard Section:**
```tsx
className="py-24 bg-white"
```

**Alternate Background:**
```tsx
className="py-24 bg-gray-50"
```

## Animations

Using **Framer Motion** for smooth animations:

### Entrance Animations
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
```

### Staggered Animations
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};
```

## Responsive Design

### Mobile-First Approach

All components are designed mobile-first:

1. **Base styles** apply to mobile
2. **sm:** breakpoint for small tablets
3. **md:** breakpoint for tablets and small desktops
4. **lg:** breakpoint for desktops
5. **xl:** and **2xl:** for large screens

### Common Responsive Patterns

**Typography Scaling:**
```tsx
className="text-2xl md:text-3xl lg:text-4xl"
```

**Layout Changes:**
```tsx
className="flex flex-col sm:flex-row"
```

**Spacing Adjustments:**
```tsx
className="px-4 sm:px-6 lg:px-8"
```

## Accessibility

### Color Contrast
- Text on light backgrounds: WCAG AA compliant
- Text on dark backgrounds: High contrast ratios
- Focus states: Visible focus indicators

### Semantic HTML
- Proper heading hierarchy (h1, h2, h3)
- Semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels where needed

### Keyboard Navigation
- Focusable elements have visible focus states
- Logical tab order
- Skip links for screen readers

## Performance

### CSS Optimization
- **PurgeCSS**: Removes unused CSS in production
- **Minification**: Compressed CSS output
- **Critical CSS**: Above-the-fold styles prioritized

### Image Optimization
- **Responsive images**: Different sizes for different screens
- **Modern formats**: WebP with fallbacks
- **Lazy loading**: Images load as needed

## Customization

### Tailwind Configuration

Located in `tailwind.config.js`:

```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#F4B400',
        // Add custom colors here
      },
      fontFamily: {
        // Add custom fonts here
      }
    }
  },
  plugins: []
}
```

### Adding Custom Styles

For styles not covered by Tailwind, add to `src/index.css`:

```css
/* Custom styles */
@layer components {
  .btn-custom {
    @apply bg-primary text-white px-4 py-2 rounded;
  }
}
```

## Browser Support

- **Modern browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile browsers**: iOS Safari, Chrome Mobile
- **Fallbacks**: Graceful degradation for older browsers