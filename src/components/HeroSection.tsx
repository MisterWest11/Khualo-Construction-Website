import React from 'react';
import foreground_image from "../assets/images/foreground_image.jpg";
import { motion } from 'framer-motion';
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${foreground_image})`
        }}>

        <div className="absolute inset-0 bg-[#1C1C1C]/70 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}>

            <div className="inline-block bg-[#F4B400] text-[#1C1C1C] font-bold px-4 py-1 mb-6 text-sm tracking-widest uppercase">
              Building The Future
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Professional Construction, Hiring & Plant Hire Services You Can Trust
            </h1>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: 'easeOut'
            }}
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl font-light">

            We deliver high-quality construction, staffing, and plant hire
            solutions across South Africa.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: 'easeOut'
            }}
            className="flex flex-col sm:flex-row gap-4">

            <a
              href="#services"
              className="bg-[#F4B400] text-[#1C1C1C] px-8 py-4 rounded font-bold text-center hover:bg-[#d9a000] transition-colors text-lg">

              View Services
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold text-center hover:bg-white hover:text-[#1C1C1C] transition-colors text-lg">

              Get a Quote
            </a>
          </motion.div>
        </div>
      </div>
    </section>);

}