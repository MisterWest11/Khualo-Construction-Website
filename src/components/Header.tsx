import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import logo from '../assets/images/logo.png';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Services',
      href: '/services'
    },
    {
      name: 'About',
      href: '/about'
    },
    {
      name: 'Contact',
      href: '/contact'
    }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-white/95 backdrop-blur-sm py-6'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 z-50">
            <img
              src={logo}
              alt="Khualo Multi Trading Services logo"
              className="h-12 w-auto sm:h-14 md:h-16"
            />
            <div>
              <span className="text-2xl font-extrabold text-[#1C1C1C] tracking-tighter">
                KHUALO<span className="text-[#F4B400]">.</span>
              </span>
              <span className="text-sm font-semibold text-[#555555] tracking-widest uppercase hidden sm:inline-block">
                Multi Trading Services
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) =>
              <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-[#1C1C1C] font-medium hover:text-[#F4B400] transition-colors text-sm uppercase tracking-wide">

                    {link.name}
                  </Link>
                </li>
              )}
            </ul>
            <Link
              to="/contact"
              className="bg-[#F4B400] text-[#1C1C1C] px-6 py-2.5 rounded font-bold hover:bg-[#d9a000] transition-colors">

              Request a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 text-[#1C1C1C]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu">

            {isMobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

    </header>

      {/* Mobile Nav Drawer (full-screen) */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link) =>
          <li key={link.name}>
              <Link
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold text-[#1C1C1C] hover:text-[#F4B400] transition-colors">

                {link.name}
              </Link>
            </li>
          )}
          <li>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block mt-4 bg-[#F4B400] text-[#1C1C1C] px-8 py-4 rounded font-bold text-lg">

              Request a Quote
            </Link>
          </li>
        </ul>
      </div>
    </>
  );

}