import React from 'react';
import { motion } from 'framer-motion';
export function CTASection() {
  return (
    <section className="bg-[#F4B400] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1C1C1C] mb-4">
              Need Professional Construction, Hiring, or Plant Hire Services?
            </h2>
            <p className="text-xl text-[#1C1C1C]/80 font-medium">
              Contact us today for a free quote on your next project.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="#contact"
              className="bg-[#1C1C1C] text-white px-8 py-4 rounded font-bold text-center hover:bg-[#333333] transition-colors text-lg shadow-lg">

              Request Quote
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-[#1C1C1C] text-[#1C1C1C] px-8 py-4 rounded font-bold text-center hover:bg-[#1C1C1C] hover:text-white transition-colors text-lg">

              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}