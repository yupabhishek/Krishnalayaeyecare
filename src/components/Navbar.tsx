import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <a href="/">
              <img
                src="/logo.png"
                alt="Shree Krishnalya Logo"
                className="h-8 sm:h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <a href="https://wa.me/9779826459523" target="_blank" rel="noopener noreferrer" className="text-2xl">
              <FaWhatsapp />
            </a>
            <a href="https://www.facebook.com/azeet.ydv" target="_blank" rel="noopener noreferrer" className="text-2xl">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/azeet.ydv/" target="_blank" rel="noopener noreferrer" className="text-2xl">
              <FaInstagram />
            </a>

            <a href="#home" className="text-eyegray-dark hover:text-eyeblue transition-colors text-sm lg:text-base">
              Home
            </a>
            <a href="#services" className="text-eyegray-dark hover:text-eyeblue transition-colors text-sm lg:text-base">
              Services
            </a>
            <a href="#showcase" className="text-eyegray-dark hover:text-eyeblue transition-colors text-sm lg:text-base">
              Showcase
            </a>
            <a href="#review" className="text-eyegray-dark hover:text-eyeblue transition-colors text-sm lg:text-base">
              Reviews
            </a>
            <a href="#appointment" className="text-eyegray-dark hover:text-eyeblue transition-colors text-sm lg:text-base">
              Appointment
            </a>
            <Button asChild className="text-sm lg:text-base">
              <a href="#appointment">Book Appointment</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-eyegray-dark p-1 sm:p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-2 pb-1 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <a
                href="#home"
                className="text-eyegray-dark hover:text-eyeblue transition-colors py-1 text-sm sm:text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="text-eyegray-dark hover:text-eyeblue transition-colors py-1 text-sm sm:text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#showcase"
                className="text-eyegray-dark hover:text-eyeblue transition-colors py-1 text-sm sm:text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Showcase
              </a>
              <a
                href="#review"
                className="text-eyegray-dark hover:text-eyeblue transition-colors py-1 text-sm sm:text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reviews
              </a>
              <a
                href="#appointment"
                className="text-eyegray-dark hover:text-eyeblue transition-colors py-1 text-sm sm:text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Appointment
              </a>
              <Button
                asChild
                className="w-full text-sm sm:text-base"
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
