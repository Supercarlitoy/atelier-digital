
import type { Metadata, Viewport } from 'next';
import '../styles/globals.scss';
import '../styles/components.scss';
import '../styles/phase3-components.scss';
import '../styles/phase3c-components.scss';
import '../styles/privacy.scss';
import '../styles/gsap-animations.scss';
import Footer from '../components/layout/footer';
import Providers from './providers';
import Phase3Provider from '../components/interactive/Phase3Provider';
import SmoothScrollProvider from '../components/providers/SmoothScrollProvider';
import AnimatedNavbar from '../components/navigation/AnimatedNavbar';

export const metadata: Metadata = {
  title: 'Atelier Digital - Premium Website Blueprints',
  description: 'Architectural blueprints for premium websites. Bridge between cheap templates and expensive custom builds.',
  keywords: 'web design, premium templates, website blueprints, digital architecture, GSAP animations, premium themes',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#191919',
  colorScheme: 'dark light',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Phase3Provider>
            <SmoothScrollProvider>
              <AnimatedNavbar />
              <main className="page min-h-screen">
                {children}
              </main>
              <Footer />
            </SmoothScrollProvider>
          </Phase3Provider>
        </Providers>
      </body>
    </html>
  );
}
