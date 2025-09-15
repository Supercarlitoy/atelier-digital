
# Getting Started - Atelier Agency Theme

## Overview

The **Atelier Agency Theme** is a premium Next.js theme designed for creative agencies, architects, and design studios. Built with the philosophy of **Digital Stonemasonry**, it combines architectural precision with modern web development practices.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control
- A modern code editor (VS Code recommended)

## Installation

### 1. Extract the Theme Package

```bash
# Extract the downloaded ZIP file
unzip atelier-agency-theme-complete.zip
cd atelier-agency-theme/app
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Or using yarn (recommended)
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```bash
# Database (if using authentication)
DATABASE_URL="your_database_url_here"

# NextAuth (if using authentication)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your_nextauth_secret_here"

# Optional: Analytics, CMS, or other services
NEXT_PUBLIC_ANALYTICS_ID="your_analytics_id"
```

### 4. Start Development Server

```bash
# Start the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your theme.

## Project Structure

```
atelier-agency-theme/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── about/                   # About page
│   ├── work/                    # Portfolio/work showcase
│   ├── contact/                 # Contact page
│   └── globals.css              # Global styles
├── components/                   # React components
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── interactive/             # Interactive components
│   │   ├── CookieConsent.tsx
│   │   ├── LiveSearch.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── InteractiveCursor.tsx
│   ├── showcase/                # Portfolio components
│   │   ├── ProjectGrid.tsx
│   │   ├── TeamGrid.tsx
│   │   └── TestimonialDisplay.tsx
│   └── ui/                      # Base UI components
├── hooks/                       # Custom React hooks
├── styles/                      # SCSS stylesheets
├── lib/                         # Utility functions
├── data/                        # Sample data
└── docs/                        # Documentation
```

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run type checking
npm run type-check
```

## First Steps

### 1. Customize Your Brand

1. **Logo**: Replace the logo in `/public/logo.svg`
2. **Colors**: Edit CSS variables in `/app/globals.css`
3. **Typography**: Modify font settings in the design system
4. **Content**: Update placeholder text throughout the site

### 2. Add Your Content

1. **Projects**: Replace sample projects in `/data/projects.ts`
2. **Team Members**: Update team data in `/data/team.ts`
3. **Services**: Modify services in `/data/services.ts`
4. **Images**: Replace all placeholder images in `/public/images/`

### 3. Configure Features

1. **Analytics**: Add your tracking codes
2. **Contact Form**: Set up form submission endpoint
3. **SEO**: Update meta tags and site configuration
4. **Performance**: Optimize images and assets

## Database Setup (Optional)

If you want to use the authentication features or dynamic content:

1. **Choose a Database**: PostgreSQL, MySQL, or SQLite
2. **Set up Prisma**:
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```
3. **Seed Sample Data**:
   ```bash
   npm run seed
   ```

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The theme works with any Next.js-compatible hosting:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## Support

- **Documentation**: See other files in the `/docs` folder
- **Issues**: Check the troubleshooting guide
- **Updates**: Keep your theme updated with the latest versions

## Next Steps

1. Read the **Customization Guide** to personalize your theme
2. Follow the **Content Guide** for adding your portfolio
3. Review the **Technical Specification** for advanced customization

---

**Welcome to Digital Stonemasonry** – craft your digital presence with architectural precision.
