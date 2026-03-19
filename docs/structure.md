# Project Structure

This document outlines the organization of the Khualo Construction Website codebase.

## Root Directory

```
Khualo-Construction-Website/
├── docs/                    # Documentation files
├── public/                  # Static assets served directly
│   ├── favicon.png         # Website favicon
│   ├── robots.txt          # Search engine crawling instructions
│   └── sitemap.xml         # Website sitemap for SEO
├── src/                    # Source code
│   ├── assets/             # Static assets (images, fonts, etc.)
│   │   └── images/         # Image files
│   ├── components/         # Reusable UI components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Website footer
│   │   ├── HeroSection.tsx # Main hero/banner section
│   │   ├── ServicesSection.tsx # Services overview
│   │   ├── ProjectsGallery.tsx # Project showcase
│   │   ├── TeamSection.tsx # Team members
│   │   ├── ContactSection.tsx # Contact information
│   │   ├── AboutSection.tsx # About company section
│   │   ├── WhyChooseUs.tsx # Why choose us section
│   │   ├── CTASection.tsx  # Call-to-action section
│   │   └── Seo.tsx         # SEO meta components
│   ├── pages/              # Page components
│   │   ├── HomePage.tsx    # Homepage
│   │   ├── AboutPage.tsx   # About page
│   │   ├── ServicesPage.tsx # Services page
│   │   └── ContactPage.tsx # Contact page
│   ├── App.tsx             # Main app component
│   ├── index.tsx           # App entry point
│   └── index.css           # Global styles
├── .env.example           # Environment variables template
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
├── tsconfig.node.json     # TypeScript config for build tools
├── vite.config.ts         # Vite configuration
├── .eslintrc.cjs          # ESLint configuration
└── README.md              # Project overview
```

## Key Directories Explained

### `src/components/`
Contains all reusable UI components. Each component is a self-contained module with its own styling and logic.

### `src/pages/`
Contains page-level components that represent entire routes in the application. These components typically compose multiple smaller components.

### `src/assets/`
Houses static assets like images, fonts, and other media files that are imported and used within components.

### `public/`
Static files that are served directly by the web server. These are not processed by Vite's build system.

### `docs/`
Documentation files for developers and maintainers of the project.

## File Naming Conventions

- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Pages**: PascalCase with "Page" suffix (e.g., `HomePage.tsx`)
- **Assets**: lowercase with hyphens (e.g., `company-logo.png`)
- **Configuration files**: camelCase or kebab-case as appropriate

## Import Structure

The project follows a clean import structure:
- Relative imports for components within the same directory
- Absolute imports from the `src/` directory
- Third-party libraries imported at the top
- Type imports separated from value imports

Example:
```typescript
import React from 'react';
import { motion } from 'framer-motion';
import type { ComponentProps } from './types';

import Header from '../components/Header';
import { useScrollToTop } from '../../hooks/useScrollToTop';
```