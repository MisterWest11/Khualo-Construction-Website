import React from 'react';
import { Seo } from '../components/Seo';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ServicesSection } from '../components/ServicesSection';
import { ProjectsGallery } from '../components/ProjectsGallery';
import { TeamSection } from '../components/TeamSection';
import { CTASection } from '../components/CTASection';
import { ContactSection } from '../components/ContactSection';

export function HomePage() {
  return (
    <>
      <Seo
        title="Khualo Multi Trading Services — Construction, Hiring & Plant Hire"
        description="Delivering construction, staffing, and plant hire solutions across South Africa."
        keywords="construction, plant hire, hiring services, staffing, equipment rental, South Africa"
        author="Khualo Multi Trading Services"
        image="/src/assets/images/foreground_image.jpg"
        url={window.location.href}
      />
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <ServicesSection />
      <ProjectsGallery />
      <TeamSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
