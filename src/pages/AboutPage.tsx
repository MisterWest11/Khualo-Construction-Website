import React from 'react';
import { Seo } from '../components/Seo';
import { AboutSection } from '../components/AboutSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { TeamSection } from '../components/TeamSection';

export function AboutPage() {
  return (
    <>
      <Seo
        title="About — Khualo Multi Trading Services"
        description="Learn about Khualo Multi Trading Services' mission, values, and team dedicated to delivering construction, hiring, and plant hire solutions across South Africa."
        keywords="about Khualo Multi Trading Services, construction, plant hire, hiring services, South Africa"
        author="Khualo Multi Trading Services"
        image="/src/assets/images/foreground_image.jpg"
        url={window.location.href}
      />
      <div className="min-h-screen bg-white">
        <AboutSection />
        <WhyChooseUs />
        <TeamSection />
      </div>
    </>
  );
}
