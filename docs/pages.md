# Pages Documentation

This document describes the page components and their routing structure.

## Page Overview

The website consists of four main pages, each serving a specific purpose in the user journey.

## HomePage (`HomePage.tsx`)

The landing page that provides a comprehensive overview of Khualo Multi Trading Services.

**Components Used:**
- `Seo` - SEO meta tags
- `HeroSection` - Main banner with call-to-action
- `AboutSection` - Company introduction
- `WhyChooseUs` - Value proposition
- `ServicesSection` - Service offerings
- `ProjectsGallery` - Portfolio showcase
- `TeamSection` - Team introduction
- `CTASection` - Call-to-action
- `ContactSection` - Contact information

**Route:** `/`

**Purpose:** Convert visitors into leads by showcasing all services and building trust.

## AboutPage (`AboutPage.tsx`)

Dedicated page for company information and background.

**Components Used:**
- `Seo` - Page-specific SEO tags
- `AboutSection` - Detailed company story
- `WhyChooseUs` - Reasons to choose Khualo
- `TeamSection` - Team member profiles

**Route:** `/about`

**Purpose:** Build credibility and trust by sharing company history, values, and team expertise.

## ServicesPage (`ServicesPage.tsx`)

Detailed breakdown of all services offered.

**Components Used:**
- `Seo` - Service-focused SEO tags
- `ServicesSection` - Comprehensive service list
- `CTASection` - Encourage inquiries

**Route:** `/services`

**Purpose:** Provide detailed information about each service to help potential clients understand offerings.

## ContactPage (`ContactPage.tsx`)

Contact information and inquiry forms.

**Components Used:**
- `Seo` - Contact-optimized SEO tags
- `ContactSection` - Contact details and forms

**Route:** `/contact`

**Purpose:** Make it easy for potential clients to get in touch and request quotes.

## Routing Structure

The application uses React Router for client-side routing:

```tsx
// App.tsx routing setup
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/services" element={<ServicesPage />} />
  <Route path="/contact" element={<ContactPage />} />
</Routes>
```

## SEO Strategy

Each page implements unique SEO meta tags:

- **Unique titles** for each page
- **Descriptive meta descriptions** with relevant keywords
- **Open Graph and Twitter Card tags** for social sharing
- **Structured data** for search engines
- **Canonical URLs** to prevent duplicate content issues

## Page Layout Patterns

All pages follow consistent patterns:

1. **SEO Component**: First component for meta tags
2. **Header**: Automatically included via App.tsx
3. **Main Content**: Page-specific sections
4. **Footer**: Automatically included via App.tsx
5. **Responsive Design**: All pages work on mobile and desktop

## Performance Considerations

- **Lazy Loading**: Components are imported and can be lazy-loaded if needed
- **Image Optimization**: Images are properly sized and optimized
- **Minimal Bundle**: Only necessary components loaded per page
- **Fast Loading**: Vite's build optimization ensures quick page loads

## Future Enhancements

Potential improvements for pages:

- **Blog/News Section**: Add a blog page for industry updates
- **Case Studies**: Detailed project case studies
- **Testimonials**: Customer testimonial page
- **Careers**: Job opportunities page
- **FAQ**: Frequently asked questions page