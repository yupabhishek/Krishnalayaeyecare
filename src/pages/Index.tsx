import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AppointmentSection from "@/components/AppointmentSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <ShowcaseSection />
        <AppointmentSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;