import { HeroSection } from '@/components/HeroSection';
import { HowItWorks } from '@/components/HowItWorks';
import { Benefits } from '@/components/Benefits';
import { FutureFeaturesSection } from '@/components/FutureFeaturesSection';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-nexmove-darker">
      <HeroSection />
      <HowItWorks />
      <Benefits />
      <FutureFeaturesSection />
      <ContactForm />
      <Footer />
    </main>
  );
} 