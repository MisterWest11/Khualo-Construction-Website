import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin as MapPinIcon,
  Phone as PhoneIcon,
  Mail as MailIcon } from
'lucide-react';
export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    honeypot: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<
    | { type: 'success' | 'error'; message: string }
    | null
  >(null);

  const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!web3FormsAccessKey) {
      setStatus({
        type: 'error',
        message:
          'Missing Web3Forms access key. Please set VITE_WEB3FORMS_ACCESS_KEY in your environment variables.'
      });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const payload = {
        access_key: web3FormsAccessKey,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.service
          ? `Service request: ${formData.service}`
          : 'New contact message',
        message: formData.message,
        honeypot: formData.honeypot // keeps spam bots from submitting
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok || result.success === false) {
        throw new Error(result.message || 'Failed to send message.');
      }

      setStatus({
        type: 'success',
        message: 'Thank you! Your message was sent successfully. We will be in touch soon.'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        honeypot: ''
      });
    } catch (error: any) {
      console.error('Web3Forms error:', error);
      setStatus({
        type: 'error',
        message:
          error?.message ||
          'Something went wrong. Please try again in a few minutes.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#1C1C1C] inline-block relative">
            Get In Touch
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-[#F4B400]"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>

            <h3 className="text-3xl font-bold text-[#1C1C1C] mb-8">
              Contact Information
            </h3>
            <p className="text-[#555555] mb-10 text-lg">
              Ready to start your next project? Reach out for construction, hiring,
              or plant hire support.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#F7F7F7] p-4 rounded-full text-[#F4B400]">
                  <MapPinIcon size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1C1C1C] mb-1">
                    Location
                  </h4>
                  <p className="text-[#555555] text-lg">
                    Eastern Cape, South Africa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#F7F7F7] p-4 rounded-full text-[#F4B400]">
                  <PhoneIcon size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1C1C1C] mb-1">
                    Phone
                  </h4>
                  <p className="text-[#555555] text-lg">083-495-4307</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#F7F7F7] p-4 rounded-full text-[#F4B400]">
                  <MailIcon size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1C1C1C] mb-1">
                    Email
                  </h4>
                  <p className="text-[#555555] text-lg">Siviwekhwalo@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="bg-[#F7F7F7] p-8 md:p-10 rounded-lg border border-[#E5E5E5]">

            <h3 className="text-2xl font-bold text-[#1C1C1C] mb-6">
              Send Us A Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field (hidden) to help prevent automated spam submissions */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                autoComplete="off"
                className="hidden"
              />
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-[#1C1C1C] mb-2">

                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#F4B400] focus:border-transparent transition-shadow bg-white"
                  placeholder="First & Last Name" />

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-[#1C1C1C] mb-2">

                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#F4B400] focus:border-transparent transition-shadow bg-white"
                    placeholder="john@example.com" />

                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-[#1C1C1C] mb-2">

                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#F4B400] focus:border-transparent transition-shadow bg-white"
                    placeholder="083 123 4567" />

                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-bold text-[#1C1C1C] mb-2">

                  Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#F4B400] focus:border-transparent transition-shadow bg-white appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23555555' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center'
                  }}>

                  <option value="">Select a service...</option>
                  <option value="construction-services">
                    Construction Services
                  </option>
                  <option value="plant-hire-services">
                    Plant Hire Services
                  </option>
                  <option value="hiring-services">
                    Hiring Services
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-[#1C1C1C] mb-2">

                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#F4B400] focus:border-transparent transition-shadow bg-white resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {status ? (
                <div
                  className={`rounded p-4 text-sm font-medium ${
                    status.type === 'success'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-rose-50 text-rose-700 border border-rose-200'
                  }`}
                >
                  {status.message}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded font-bold text-lg transition-colors ${
                  isSubmitting
                    ? 'bg-[#F4B400]/70 cursor-not-allowed'
                    : 'bg-[#F4B400] hover:bg-[#d9a000]'
                } text-[#1C1C1C]`}
              >
                {isSubmitting ? 'Sending…' : 'Submit Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>);

}