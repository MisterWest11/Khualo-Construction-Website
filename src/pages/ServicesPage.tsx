import React from 'react';
import { Seo } from '../components/Seo';
import { ServicesSection } from '../components/ServicesSection';
import { CTASection } from '../components/CTASection';

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Services — Khualo Multi Trading Services"
        description="Explore Khualo Multi Trading Services' construction, hiring, and plant hire offerings across South Africa."
        keywords="construction services, plant hire, hiring services, South Africa"
        author="Khualo Multi Trading Services"
        image="/src/assets/images/foreground_image.jpg"
        url={window.location.href}
      />
      <div className="min-h-screen bg-white">
        <ServicesSection />
        <CTASection />
      </div>
    </>
  );
}
