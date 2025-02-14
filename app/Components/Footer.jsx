import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 animate-fadeIn">
      {/* Main Footer Content */}
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="mb-6 md:mb-0 hover:scale-105 transition-transform duration-300">
            <h1 className="text-3xl font-light tracking-wider">BOTOL</h1>
          </div>

          {/* Primary Navigation */}
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-6">
              {['Shop', 'Contact us', 'About', 'Journal', 'Custom'].map((item, index) => (
                <li key={item} 
                    className="transform hover:-translate-y-1 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}>
                  <a href={`/${item.toLowerCase().replace(' ', '')}`} 
                     className="hover:text-gray-300 relative group">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Secondary Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Social Icons */}
          <div className="flex gap-4 mb-6 md:mb-0">
            {[
              { Icon: Facebook, delay: '0ms' },
              { Icon: Instagram, delay: '100ms' },
              { Icon: Twitter, delay: '200ms' }
            ].map(({ Icon, delay }, index) => (
              <a key={index} 
                 href="#" 
                 className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transform hover:rotate-12 hover:scale-110 transition-all duration-300"
                 style={{ animationDelay: delay }}>
                <Icon size={20} className="animate-pulse" />
              </a>
            ))}
          </div>

          {/* Secondary Links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              {[
                "FAQ's", 'Returns', 'Ordering', 'Shipping', 'Personalization Policies'
              ].map((item, index) => (
                <li key={item} 
                    className="transform hover:-translate-y-1 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}>
                  <a href={`/${item.toLowerCase().replace(/['s]/g, '').replace(' ', '')}`} 
                     className="hover:text-gray-300 relative group">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm opacity-0 animate-fadeIn" 
             style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          <p>Copyright © {new Date().getFullYear()} BOTOL. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Define keyframe animations
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }
`;

// Add styles to document
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default Footer;