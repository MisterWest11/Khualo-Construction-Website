import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight as ArrowRightIcon } from 'lucide-react';
export function ServicesSection() {
  const services = [
  {
    title: 'TLB & Construction',
    description:
    'Heavy machinery operation and core construction services for robust foundations.',
    image:
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600'
  },
  {
    title: 'Renovations & Fencing',
    description:
    'Complete property transformations and secure, durable fencing solutions.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600'
  },
  {
    title: 'Tiling',
    description:
    'Precision tiling for floors and walls using high-quality materials.',
    image:
    'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600'
  },
  {
    title: 'Room & Roof Painting',
    description:
    'Professional interior and exterior painting, including specialized roof coatings.',
    image:
    'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=600'
  },
  {
    title: 'Site Preparation & Building',
    description:
    'Thorough site clearing, leveling, and complete building erection.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600'
  },
  {
    title: 'Paving & Rubble Removal',
    description:
    'Expert paving installations and efficient post-construction site cleanup.',
    image:
    'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=600'
  }];

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#F4B400]/20 text-[#1C1C1C] font-bold px-4 py-1 mb-4 text-sm tracking-widest uppercase rounded">
            What We Do
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1C1C1C] mb-6">
            Our Services
          </h2>
          <p className="text-lg text-[#555555]">
            Comprehensive construction solutions tailored to meet the demands of
            modern infrastructure and residential needs.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px'
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) =>
          <motion.a
            href="#contact"
            key={index}
            variants={cardVariants}
            className="group flex flex-col bg-white border border-[#E5E5E5] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

              <div className="relative h-64 overflow-hidden">
                <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                <div className="absolute inset-0 bg-[#1C1C1C]/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-[#1C1C1C] mb-3 group-hover:text-[#F4B400] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#555555] mb-6 flex-1">
                  {service.description}
                </p>
                <div className="flex items-center text-[#1C1C1C] font-bold group-hover:text-[#F4B400] transition-colors mt-auto">
                  Learn More{' '}
                  <ArrowRightIcon
                  size={20}
                  className="ml-2 transform group-hover:translate-x-1 transition-transform" />

                </div>
              </div>
            </motion.a>
          )}
        </motion.div>
      </div>
    </section>);

}