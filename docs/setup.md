# Setup and Installation

This guide will help you set up the Khualo Construction Website for development.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** for version control

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MisterWest11/Khualo-Construction-Website.git
   cd Khualo-Construction-Website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173` (or the URL shown in your terminal).

## Available Scripts

The following npm scripts are available:

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## Environment Variables

If you need to configure environment variables (e.g., for contact form submissions), create a `.env` file in the root directory based on `.env.example`:

```bash
cp .env.example .env
```

Edit the `.env` file with your specific configuration values.

## Development Workflow

1. Make changes to the code
2. The development server will automatically reload
3. Test your changes in the browser
4. Run `npm run lint` to check for code quality issues
5. Commit your changes when ready

## Troubleshooting

### Common Issues

- **Port already in use**: If port 5173 is busy, Vite will suggest an alternative port
- **Dependencies issues**: Try deleting `node_modules` and running `npm install` again
- **Build errors**: Check the console for TypeScript or ESLint errors

### Getting Help

If you encounter issues not covered here, please check:
- The project's GitHub Issues page
- The Vite documentation
- React documentation