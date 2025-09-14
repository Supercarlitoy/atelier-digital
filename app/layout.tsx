
import type { Metadata } from 'next';
import '../styles/globals.scss';
import '../styles/components.scss';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

export const metadata: Metadata = {
  title: 'Atelier Digital - Premium Website Blueprints',
  description: 'Architectural blueprints for premium websites. Bridge between cheap templates and expensive custom builds.',
  keywords: 'web design, premium templates, website blueprints, digital architecture',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="page">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
