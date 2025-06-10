import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CtaSection from '@/components/sections/CtaSection';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow pt-[68px]"> {/* Add padding-top to account for fixed navbar height */}
        <HeroSection />
        <FeaturesSection />
        <CtaSection />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}

export default App;
