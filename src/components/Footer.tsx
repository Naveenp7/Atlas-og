import { Headphones, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-audire-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-audire-blue p-2 rounded-lg">
                <Headphones className="h-6 w-6 text-white" />
              </div>
              <span className="text-white font-bold text-xl">Audire Learning</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
            Passionate engineering students building intelligent AI products that solve real-world problems. From computer vision to NLP, we create accessible and scalable solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/_navee.n._" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-audire-blue hover:bg-audire-accent p-3 rounded-lg transition-colors duration-300"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-audire-blue transition-colors duration-300">Home</a></li>

              <li><a href="#about" className="text-gray-300 hover:text-audire-blue transition-colors duration-300">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-audire-blue transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-audire-blue transition-colors duration-300">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-audire-blue" />
                <span className="text-gray-300">hello@allied.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-audire-blue" />
                <span className="text-gray-300">+91 7012895181</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-audire-blue" />
                <span className="text-gray-300">
                Ponnani, Malappuram, India </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Allied Innovations . All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-audire-blue transition-colors duration-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-audire-blue transition-colors duration-300 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-audire-blue transition-colors duration-300 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;