import React from 'react';
import { motion } from 'framer-motion';
export function ProjectsGallery() {
  const projects = [
  {
    title: 'Commercial Building',
    image:
    'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=600',
    size: 'large'
  },
  {
    title: 'Residential Paving',
    image:
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600',
    size: 'small'
  },
  {
    title: 'Infrastructure Work',
    image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=600',
    size: 'medium'
  },
  {
    title: 'Modern Brickwork',
    image:
    'https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=600',
    size: 'medium'
  },
  {
    title: 'Site Preparation',
    image:
    'https://images.unsplash.com/photo-1590725121839-892b458a74fe?w=600',
    size: 'small'
  },
  {
    title: 'Renovation Project',
    image:
    'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600',
    size: 'large'
  }];

  return (
    <section id="projects" className="py-24 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1C1C1C] mb-4">
              Our Recent Projects
            </h2>
            <p className="text-lg text-[#555555]">
              Quality work delivered across our latest construction sites.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center bg-[#1C1C1C] text-white px-6 py-3 rounded font-bold hover:bg-[#333333] transition-colors whitespace-nowrap">

            Start Your Project
          </a>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]">
          {projects.map((project, index) => {
            // Determine row span based on size
            const rowSpan =
            project.size === 'large' ? 'row-span-2' : 'row-span-1';
            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.95
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                viewport={{
                  once: true,
                  margin: '-50px'
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className={`relative group overflow-hidden rounded-lg bg-[#1C1C1C] ${rowSpan}`}>

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-40" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#1C1C1C]/90 to-transparent">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[#F4B400] font-bold text-sm tracking-wider uppercase mb-1 block">
                      Construction
                    </span>
                    <h3 className="text-white text-2xl font-bold">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}