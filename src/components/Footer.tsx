
import { MapPin, Phone, Mail, Clock, Instagram, Facebook,} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-eyegray-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.png"
                alt="Shree Krishnalya Logo"
                className="h-10 w-auto bg-white rounded-full p-1"
              />
              <span className="text-xl font-semibold">Shree Krishnalya</span>
            </div>
            <p className="text-eyegray-light mb-4">
              Providing professional eye care services and quality eyewear products since 2081.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-eyeblue shrink-0 mt-0.5" />
                <span>Drivartol Tilottama 01, Rupandehi</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-eyeblue shrink-0" />
                <span>+977 982 6459523</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-eyeblue shrink-0" />
                <span>+977 985 7044729</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-eyeblue shrink-0" />
                <span>shreekrishnalaya44@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-eyeblue shrink-0 mt-0.5" />
                <div>
                  <p>Sunday - Friday</p>
                  <p className="text-eyegray">9:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-eyeblue shrink-0 mt-0.5" />
                <div>
                  <p>Saturday</p>
                  <p className="text-eyegray">10:00 AM - 4:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-eyeblue transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-eyeblue transition-colors">
                  Optical Shop
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="hover:text-eyeblue transition-colors">
                  Book an Appointment
                </Link>
              </li>
              <li>
                <Link to="/insurance" className="hover:text-eyeblue transition-colors">
                  Insurance Information
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-eyeblue transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-eyegray text-sm">
            &copy; {new Date().getFullYear()} Shree Krishnalya Eye Care Center & Opticals. All rights reserved.
          </p>
          <p className="text-eyegray text-sm">
            &copy;  Website by{" "}
            <a
              href="https://www.avdevelopment.in/"
              className="text-blue-400 font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              AV Development
            </a> <a href="https://linktr.ee/yup.abhishek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 font-semibold hover:underline">
              [ABHIHSEK].</a>
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://www.instagram.com/azeet.ydv/" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-6 w-6 text-white-500 hover:text-blue-400" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100069853323174" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-6 w-6 text-white-500 hover:text-blue-400" />
            </a>
            <a href="https://wa.me/9779826459523" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp  className="h-6 w-6 text-white-500 hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
