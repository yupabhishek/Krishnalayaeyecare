
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <a href="/">
            <img 
              src="/public/logo.png" 
              alt="Shree Krishnalya Logo" 
              className="h-10 w-auto"
            /></a>
            <span className="text-xl font-semibold text-eyegray-dark hidden md:inline-block">Shree Krishnalya</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-eyegray-dark hover:text-eyeblue transition-colors">
              Home
            </a>
            <a href="#services" className="text-eyegray-dark hover:text-eyeblue transition-colors">
              Services
            </a>
            <a href="#showcase" className="text-eyegray-dark hover:text-eyeblue transition-colors">
              Showcase
            </a>
            <a href="#review" className="text-eyegray-dark hover:text-eyeblue transition-colors">
              Reviews
            </a>
            <a href="#appointment" className="text-eyegray-dark hover:text-eyeblue transition-colors">
              Appointment
            </a>
            <Button asChild>
              <a href="#appointment">Book Appointment</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-eyegray-dark p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-eyegray-dark hover:text-eyeblue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="text-eyegray-dark hover:text-eyeblue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#showcase" 
                className="text-eyegray-dark hover:text-eyeblue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Showcase
              </a>
              <a 
                href="#review" 
                className="text-eyegray-dark hover:text-eyeblue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reviews
              </a>
              <a 
                href="#appointment" 
                className="text-eyegray-dark hover:text-eyeblue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Appointment
              </a>
              <Button 
                asChild 
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <a href="#appointment">Book Appointment</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;