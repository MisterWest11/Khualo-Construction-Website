import React, { Children } from 'react';
import tlb_con from "../assets/images/tlb_con.jpg";
import fencing from "../assets/images/fencing.jpg";
import tiling_1 from "../assets/images/tiling_1.jpg";
import house from "../assets/images/house.jpg";
import site_prep from "../assets/images/site_prep.jpg";
import truck from "../assets/images/truck.jpg";
import crew from "../assets/images/crew.jpg";
import construction from "../assets/images/construction.jpg";
import tent2 from "../assets/images/tent2.jpg";
import { motion } from 'framer-motion';
import { ArrowRight as ArrowRightIcon } from 'lucide-react';
export function ServicesSection() {
  const services = [
  {
    title: 'Construction & Site Works',
    description:
      'From foundations to finishing, we deliver robust construction and civil works.',
    image:
      tlb_con
  },
  {
    title: 'Plant & Equipment Hire',
    description:
      'Hire quality machinery and equipment for earthmoving, lifting, and site preparation.',
    image:
      construction
  },
  {
    title: 'Skilled Labour Hiring',
    description:
      'Flexible staffing solutions with certified operators, tradespeople, and support crews.',
    image:
      crew
  },
  {
    title: 'Renovations & Fencing',
    description:
      'Complete property transformations and secure, durable fencing solutions.',
    image:
      fencing
  },
  {
    title: 'Stretch Tent & Event Hire',
    description:
      'Hire stylish stretch tents, tables, chairs, and event equipment for memorable occasions.',
    image:
      tent2
  },
  {
    title: 'Interior Finishes & Painting',
    description:
      'Precision finishing services including tiling, painting, and detail work.',
    image:
      tiling_1
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
            Comprehensive construction, hiring, and plant hire solutions tailored
            to meet the demands of modern projects.
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