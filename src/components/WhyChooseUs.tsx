import React, { Children } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck as ShieldCheckIcon,
  Clock as ClockIcon,
  Users as UsersIcon,
  Award as AwardIcon } from
'lucide-react';
export function WhyChooseUs() {
  const features = [
  {
    icon: <ShieldCheckIcon size={40} className="text-[#F4B400]" />,
    title: 'Quality Workmanship',
    description:
    'We maintain the highest standards in every project we undertake.'
  },
  {
    icon: <ClockIcon size={40} className="text-[#F4B400]" />,
    title: 'Always On Time',
    description: 'We respect deadlines and deliver projects on schedule.'
  },
  {
    icon: <UsersIcon size={40} className="text-[#F4B400]" />,
    title: 'Experienced Team',
    description:
    'Our skilled professionals bring years of project expertise.'
  },
  {
    icon: <AwardIcon size={40} className="text-[#F4B400]" />,
    title: 'Professional Service',
    description:
    'From start to finish, we provide reliable and professional service.'
  }];

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
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
    <section className="py-24 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#1C1C1C] inline-block relative">
            Why Choose Us
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-[#F4B400]"></span>
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px'
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) =>
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#E5E5E5]">

              <div className="mb-6 bg-[#F7F7F7] w-16 h-16 rounded flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1C1C1C] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#555555] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}