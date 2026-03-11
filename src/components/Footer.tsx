import React from 'react';
export function Footer() {
  return (
    <footer className="bg-[#1C1C1C] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <a href="#" className="inline-block mb-6">
              <span className="text-2xl font-extrabold text-white tracking-tighter">
                KHUALO<span className="text-[#F4B400]">.</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              Delivering high-quality building, renovations, and infrastructure
              work across South Africa with a commitment to excellence and
              reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-[#F4B400] transition-colors">

                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[#F4B400] transition-colors">

                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-[#F4B400] transition-colors">

                  Recent Projects
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-gray-400 hover:text-[#F4B400] transition-colors">

                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#F4B400] transition-colors">

                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="text-gray-400">
                <span className="block text-white font-semibold mb-1">
                  Location:
                </span>
                Eastern Cape, South Africa
              </li>
              <li className="text-gray-400">
                <span className="block text-white font-semibold mb-1">
                  Phone:
                </span>
                <a
                  href="tel:0834954307"
                  className="hover:text-[#F4B400] transition-colors">

                  083-495-4307
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block text-white font-semibold mb-1">
                  Email:
                </span>
                <a
                  href="mailto:SIWEKHUALO@gmail.com"
                  className="hover:text-[#F4B400] transition-colors">

                  SIWEKHUALO@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Khualo Construction. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-[#F4B400] text-sm transition-colors">

              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#F4B400] text-sm transition-colors">

              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

}