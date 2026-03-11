import React, { useEffect, useState } from 'react';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
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
  const navLinks = [
  {
    name: 'Home',
    href: '#'
  },
  {
    name: 'Services',
    href: '#services'
  },
  {
    name: 'Projects',
    href: '#projects'
  },
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Team',
    href: '#team'
  },
  {
    name: 'Contact',
    href: '#contact'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-white/95 backdrop-blur-sm py-6'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1 z-50">
            <span className="text-2xl font-extrabold text-[#1C1C1C] tracking-tighter">
              KHUALO<span className="text-[#F4B400]">.</span>
            </span>
            <span className="text-sm font-semibold text-[#555555] tracking-widest uppercase hidden sm:block mt-1">
              Construction
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) =>
              <li key={link.name}>
                  <a
                  href={link.href}
                  className="text-[#1C1C1C] font-medium hover:text-[#F4B400] transition-colors text-sm uppercase tracking-wide">

                    {link.name}
                  </a>
                </li>
              )}
            </ul>
            <a
              href="#contact"
              className="bg-[#F4B400] text-[#1C1C1C] px-6 py-2.5 rounded font-bold hover:bg-[#d9a000] transition-colors">

              Request a Quote
            </a>
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

      {/* Mobile Nav Drawer */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link) =>
          <li key={link.name}>
              <a
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-[#1C1C1C] hover:text-[#F4B400] transition-colors">

                {link.name}
              </a>
            </li>
          )}
          <li>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block mt-4 bg-[#F4B400] text-[#1C1C1C] px-8 py-4 rounded font-bold text-lg">

              Request a Quote
            </a>
          </li>
        </ul>
      </div>
    </header>);

}