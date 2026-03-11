import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle as CheckCircleIcon } from 'lucide-react';
export function AboutSection() {
  const features = [
  'Certified Construction Team',
  'Quality Materials',
  'On-time Delivery',
  'Professional Workmanship'];

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
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800"
                alt="Khualo Construction Team"
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
              Welcome to Khualo Construction
            </h2>
            <p className="text-lg text-[#555555] mb-8 leading-relaxed">
              We specialize in high-quality construction, maintenance, roofing,
              fencing, and paving. Our mission is to deliver reliable
              workmanship and professional service on every project, ensuring
              your vision becomes a reality built to last.
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