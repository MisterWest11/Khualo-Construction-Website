# Components Documentation

This document describes the reusable components used throughout the Khualo Construction Website.

## Layout Components

### Header (`Header.tsx`)

The main navigation component that appears at the top of every page.

**Features:**
- Fixed positioning with scroll-based styling changes
- Responsive design with mobile hamburger menu
- Logo and company branding
- Navigation links to all main pages
- "Request a Quote" call-to-action button

**Props:** None (self-contained component)

**Usage:**
```tsx
import { Header } from './components/Header';

// Used in App.tsx for all pages
<Header />
```

### Footer (`Footer.tsx`)

The website footer with company information and links.

**Features:**
- Company contact information
- Quick navigation links
- Social media links (if applicable)
- Copyright notice

## Section Components

### HeroSection (`HeroSection.tsx`)

The main banner section on the homepage featuring a background image and call-to-action buttons.

**Features:**
- Full-screen background image with overlay
- Animated text content using Framer Motion
- Two call-to-action buttons: "View Services" and "Get a Quote"
- Responsive typography

**Props:** None

### ServicesSection (`ServicesSection.tsx`)

Displays the company's service offerings in a grid layout.

**Features:**
- Grid of service cards with images and descriptions
- Animated entrance using Framer Motion
- Seven main services:
  - Construction & Site Works
  - Plant & Equipment Hire
  - Skilled Labour Hiring
  - Renovations & Fencing
  - Stretch Tent & Event Hire
  - Interior Finishes & Painting

**Props:** None

### ProjectsGallery (`ProjectsGallery.tsx`)

Showcase of completed projects with images and descriptions.

**Features:**
- Image gallery with project details
- Responsive grid layout
- Project categorization

### TeamSection (`TeamSection.tsx`)

Introduction to the company team and expertise.

**Features:**
- Team member profiles
- Photos and bios
- Contact information

### ContactSection (`ContactSection.tsx`)

Contact information and possibly a contact form.

**Features:**
- Contact details (phone, email, address)
- Business hours
- Contact form integration

### AboutSection (`AboutSection.tsx`)

Company background and mission statement.

**Features:**
- Company history
- Values and mission
- Key achievements

### WhyChooseUs (`WhyChooseUs.tsx`)

Highlights the benefits of choosing Khualo services.

**Features:**
- Key differentiators
- Testimonials or trust indicators
- Quality guarantees

### CTASection (`CTASection.tsx`)

Call-to-action section to encourage user engagement.

**Features:**
- Prominent call-to-action button
- Compelling messaging
- Contact form or link

## Utility Components

### Seo (`Seo.tsx`)

Handles SEO meta tags and structured data.

**Features:**
- Dynamic meta titles and descriptions
- Open Graph tags for social sharing
- Twitter Card support
- Structured data markup

**Props:**
- `title`: Page title
- `description`: Page description
- `image`: Social sharing image
- `url`: Canonical URL

## Component Architecture

All components follow these patterns:

1. **Functional Components**: Using React hooks
2. **TypeScript**: Fully typed with interfaces
3. **Tailwind CSS**: Utility-first styling
4. **Framer Motion**: Smooth animations
5. **Responsive Design**: Mobile-first approach
6. **Accessibility**: Proper ARIA labels and semantic HTML

## Styling Guidelines

- **Color Palette**:
  - Primary: `#F4B400` (Gold/Yellow)
  - Text: `#1C1C1C` (Dark Gray)
  - Secondary Text: `#555555` (Medium Gray)
  - Background: White or variations

- **Typography**:
  - Headings: Bold, large sizes
  - Body: Clean, readable fonts
  - Buttons: Bold, uppercase for CTAs

- **Spacing**: Consistent use of Tailwind spacing utilities
- **Animations**: Subtle entrance animations with Framer Motion