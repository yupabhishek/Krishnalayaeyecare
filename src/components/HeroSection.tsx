import { CalendarCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="hero-pattern py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-eyegray-dark mb-3">
              Welcome to <span className="text-eyeblue">Shree Krishnalya</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-eyegray-dark mb-3">
              Eye Care Center & Opticals
            </h2>
            <p className="text-base sm:text-lg text-eyegray-dark mb-5 max-w-md">
              Professional eye care services and quality eyewear products for you and your family. Schedule an appointment today!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="gap-2 text-sm sm:text-base">
                <a href="#appointment">
                  <CalendarCheck className="h-4 w-4 sm:h-5 sm:w-5" />
                  Book an Appointment
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-sm sm:text-base">
                <a href="#services">
                  Our Services
                </a>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/vector-1.jpg"
              alt="Eye examination"
              className="rounded-lg shadow-lg w-full max-w-[280px] sm:max-w-[360px] md:max-w-[400px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;