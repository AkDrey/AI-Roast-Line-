import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/components/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Roast - Get Roasted by AI for Fun & Therapy',
  description: 'Experience the most hilarious AI roasting sessions. Get personalized, witty roasts that are actually therapeutic. Sign up for voice or text sessions today!',
  keywords: 'AI roasting, comedy therapy, AI humor, personalized roasts, voice AI, text AI, entertainment',
  authors: [{ name: 'AI Roast Team' }],
  creator: 'AI Roast',
  publisher: 'AI Roast',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://airoast.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AI Roast - Get Roasted by AI for Fun & Therapy',
    description: 'Experience the most hilarious AI roasting sessions. Get personalized, witty roasts that are actually therapeutic.',
    url: 'https://airoast.com',
    siteName: 'AI Roast',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Roast - Get Roasted by AI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Roast - Get Roasted by AI for Fun & Therapy',
    description: 'Experience the most hilarious AI roasting sessions. Get personalized, witty roasts that are actually therapeutic.',
    images: ['/og-image.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        
        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_FACEBOOK_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
