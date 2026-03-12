import React from 'react';
import truck from "../assets/images/truck.jpg";
import { motion } from 'framer-motion';
import { CheckCircle as CheckCircleIcon } from 'lucide-react';
export function AboutSection() {
  const features = [
  'Certified Construction Team',
  'Reliable Plant & Equipment Hire',
  'Skilled Labour & Hiring Support',
  'On-time Delivery'];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}
            className="relative">

            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={truck}
                alt="Khualo Multi Trading Services Team"
                className="object-cover w-full h-full" />

              <div className="absolute inset-0 bg-[#1C1C1C]/10"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#F4B400] -z-10 rounded-lg"></div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}>

            <div className="inline-block bg-[#F4B400]/20 text-[#1C1C1C] font-bold px-4 py-1 mb-6 text-sm tracking-widest uppercase rounded">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1C1C1C] mb-6 leading-tight">
              Welcome to Khualo Multi Trading Services
            </h2>
            <p className="text-lg text-[#555555] mb-8 leading-relaxed">
              We offer construction, staffing, and plant hire solutions with a
              focus on quality workmanship and reliable project delivery. We are a
              CIDB accredited construction company with NHBRC registration, giving
              you the confidence of compliant, professional delivery. Our mission
              is to bring your project to life with experienced teams and the
              right equipment.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) =>
              <li key={index} className="flex items-center gap-3">
                  <CheckCircleIcon
                  className="text-[#F4B400] flex-shrink-0"
                  size={24} />

                  <span className="text-[#1C1C1C] font-semibold text-lg">
                    {feature}
                  </span>
                </li>
              )}
            </ul>

            <a
              href="#services"
              className="inline-flex items-center justify-center bg-[#1C1C1C] text-white px-8 py-4 rounded font-bold hover:bg-[#333333] transition-colors">

              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>);

}