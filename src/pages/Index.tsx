import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import Doctor from "@/components/Doctor";
import AppointmentSection from "@/components/AppointmentSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatsappFloatButton from "@/components/WhatsappFloatButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <Doctor/>
        <ShowcaseSection />
        <AppointmentSection />
        <TestimonialsSection />
        <WhatsappFloatButton />
      </main>
      <Footer />
    </div>
  );
};


export default Index;