import HeroSection from '@/components/HeroSection';
import ServiceOverview from '@/components/ServiceOverview';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import PricingSection from '@/components/PricingSection';
import FeaturesSection from '@/components/FeaturesSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Service Overview */}
      <ServiceOverview />
      
      {/* Features */}
      <FeaturesSection />
      
      {/* Pricing */}
      <PricingSection />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
