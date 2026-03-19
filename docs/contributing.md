# Contributing Guide

Welcome to the Khualo Construction Website project! This guide will help you contribute effectively to the codebase.

## Development Workflow

### 1. Fork and Clone

```bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR_USERNAME/Khualo-Construction-Website.git
cd Khualo-Construction-Website
```

### 2. Set Up Development Environment

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### 3. Create a Feature Branch

```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/issue-description
```

### 4. Make Changes

Follow the coding standards and guidelines below.

### 5. Test Your Changes

```bash
# Run linting
npm run lint

# Build for production
npm run build

# Test the build locally
npm run preview
```

### 6. Commit and Push

```bash
# Stage your changes
git add .

# Commit with descriptive message
git commit -m "Add: descriptive commit message"

# Push to your fork
git push origin feature/your-feature-name
```

### 7. Create a Pull Request

1. Go to the original repository
2. Click "New Pull Request"
3. Select your branch
4. Fill out the PR template
5. Request review

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define interfaces for component props
- Use strict type checking
- Avoid `any` type when possible

```typescript
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  // Component implementation
}
```

### React

- Use functional components with hooks
- Prefer custom hooks for reusable logic
- Use meaningful component and variable names
- Keep components small and focused

### Styling

- Use Tailwind CSS utility classes
- Follow the established design system
- Maintain consistent spacing and colors
- Ensure responsive design

### File Structure

- Components: `src/components/ComponentName.tsx`
- Pages: `src/pages/PageName.tsx`
- Assets: `src/assets/images/filename.ext`
- Keep related files together

## Component Guidelines

### Component Structure

```typescript
import React from 'react';

interface ComponentNameProps {
  // Define props here
}

export function ComponentName({ prop }: ComponentNameProps) {
  return (
    <div className="component-classes">
      {/* Component JSX */}
    </div>
  );
}
```

### Naming Conventions

- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Files**: PascalCase for components, camelCase for utilities
- **Functions**: camelCase
- **Constants**: SCREAMING_SNAKE_CASE

### Props and State

- Use descriptive prop names
- Provide default values where appropriate
- Document complex prop interfaces
- Minimize state, prefer props when possible

## Git Commit Guidelines

Follow conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```
feat: add contact form validation
fix: resolve mobile menu toggle issue
docs: update component documentation
refactor: simplify hero section animation
```

## Pull Request Process

### PR Template

When creating a PR, include:

1. **Description**: What changes were made and why
2. **Screenshots**: Visual changes (if applicable)
3. **Testing**: How the changes were tested
4. **Breaking Changes**: Any breaking changes
5. **Related Issues**: Link to related issues

### Review Process

1. **Automated Checks**: Ensure CI passes
2. **Code Review**: At least one maintainer review
3. **Testing**: Test changes in different browsers
4. **Approval**: PR approved by maintainer
5. **Merge**: Squash and merge with descriptive commit

## Testing

### Manual Testing Checklist

- [ ] Desktop layout (Chrome, Firefox, Safari)
- [ ] Mobile layout (iOS Safari, Chrome Mobile)
- [ ] Tablet layout
- [ ] Navigation works correctly
- [ ] Forms submit properly
- [ ] Images load correctly
- [ ] No console errors
- [ ] Performance acceptable

### Accessibility Testing

- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast sufficient
- [ ] Focus indicators visible

## Documentation

### Code Comments

- Add JSDoc comments for complex functions
- Explain non-obvious logic
- Document component props and usage

### README Updates

- Update README.md for significant changes
- Document new features or breaking changes
- Update setup instructions if needed

## Issue Reporting

### Bug Reports

When reporting bugs, include:

1. **Steps to reproduce**
2. **Expected behavior**
3. **Actual behavior**
4. **Browser and OS information**
5. **Screenshots or videos**
6. **Console errors**

### Feature Requests

For new features, include:

1. **Problem description**
2. **Proposed solution**
3. **Alternatives considered**
4. **Mockups or examples**

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help newcomers learn
- Focus on solutions, not blame

## Getting Help

- Check existing issues and documentation first
- Ask questions in GitHub Discussions
- Reach out to maintainers for guidance
- Join community channels if available

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md (if applicable)
- Mentioned in release notes
- Acknowledged for significant contributions

Thank you for contributing to the Khualo Construction Website!