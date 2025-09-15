
import { Phase3Provider } from '../components/interactive/Phase3Provider';
import type { Metadata } from 'next';
import '../styles/globals.scss';
import '../styles/components.scss';
import '../styles/phase3b-components.scss';
import '../styles/gsap-animations.scss';
import SmoothScrollProvider from '../components/providers/SmoothScrollProvider';
import '../styles/privacy.scss';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Atelier Digital - Premium Website Blueprints',
  description:
    'Architectural blueprints for premium websites. Bridge between cheap templates and expensive custom builds.',
  keywords: 'web design, premium templates, website blueprints, digital architecture, next.js themes, react components, digital stonemasonry',
  metadataBase: new URL('https://atelierdigital.online'),
  authors: [{ name: 'Atelier Digital', url: 'https://atelierdigital.online' }],
  creator: 'Atelier Digital',
  publisher: 'Atelier Digital',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Atelier Digital - Premium Website Blueprints',
    description:
      'Architectural blueprints for premium websites. Bridge between cheap templates and expensive custom builds.',
    url: 'https://atelierdigital.online',
    siteName: 'Atelier Digital',
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Atelier Digital - Premium Website Blueprints',
      },
      {
        url: '/images/design-showcase.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Web Design Showcase',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atelier Digital - Premium Website Blueprints',
    description: 'Architectural blueprints for premium websites. Bridge between cheap templates and expensive custom builds.',
    site: '@zorvive',
    creator: '@zorvive',
    images: ['/images/hero-bg.jpg'],
  },
  alternates: {
    canonical: 'https://atelierdigital.online',
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Atelier Digital',
    description: 'Premium website blueprints and digital architecture solutions',
    url: 'https://atelierdigital.online',
    logo: 'https://atelierdigital.online/images/logos/atelier-logo.svg',
    sameAs: [
      'https://x.com/zorvive',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url: 'https://atelierdigital.online/contact',
    },
    offers: {
      '@type': 'Offer',
      name: 'Premium Website Blueprints',
      description: 'Professional-grade Next.js themes and components',
      price: '299',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>
          <SmoothScrollProvider>
            <Phase3Provider>
              <Header />
              <main className="page">
                {children}
              </main>
              <Footer />
            </Phase3Provider>
          </SmoothScrollProvider>
        </Providers>
      </body>
    </html>
  );
}
