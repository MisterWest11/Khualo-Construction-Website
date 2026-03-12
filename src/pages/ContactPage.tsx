import React from 'react';
import { Seo } from '../components/Seo';
import { ContactSection } from '../components/ContactSection';

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact — Khualo Multi Trading Services"
        description="Get in touch with Khualo Multi Trading Services for construction, hiring, and plant hire quotes and consultations in South Africa."
        keywords="contact Khualo Multi Trading Services, plant hire quotes, hiring services quote, construction consultation, South Africa"
        author="Khualo Multi Trading Services"
        image="/src/assets/images/foreground_image.jpg"
        url={window.location.href}
      />
      <div className="min-h-screen bg-white">
        <ContactSection />
      </div>
    </>
  );
}
