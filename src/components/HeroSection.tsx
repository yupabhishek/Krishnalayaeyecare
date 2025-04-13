
import { CalendarCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id='home' className="hero-pattern py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-eyegray-dark mb-4">
              Welcome to <span className="text-eyeblue">Shree Krishnalya</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-eyegray-dark mb-4">
              Eye Care Center & Opticals
            </h2>
            <p className="text-lg text-eyegray-dark mb-8 max-w-lg">
              Professional eye care services and quality eyewear products for
              you and your family. Schedule an appointment today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gap-2">
                <a href="#appointment">
                  <CalendarCheck className="h-5 w-5" />
                  Book an Appointment
                </a>
              </Button>

              <Button asChild size="lg" variant="outline">
                <a href="#services">
                  Our Services
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/public/vector-1.jpg"
              alt="Eye examination"
              className="rounded-lg shadow-lg max-w-full h-auto"
              width="400"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
