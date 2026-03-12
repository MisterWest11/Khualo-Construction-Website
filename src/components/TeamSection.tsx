import React from 'react';
import Client_Picture from "../assets/images/Client_Picture.jpg";
import { motion } from 'framer-motion';
export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#1C1C1C] inline-block relative">
            Meet Our Team
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-[#F4B400]"></span>
          </h2>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30
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
          className="max-w-sm mx-auto">

          <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-[#E5E5E5]">
            <div className="aspect-square overflow-hidden">
              <img
                src={Client_Picture}
                alt="Siwe Khualo"
                className="w-full h-full object-cover object-top" />

            </div>
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-[#1C1C1C] mb-1">
                Siwe Khualo
              </h3>
              <p className="text-[#F4B400] font-bold uppercase tracking-wider text-sm mb-4">
                Project Manager
              </p>
              <p className="text-[#555555] leading-relaxed">
                "Leading our projects with dedication and attention to detail."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}