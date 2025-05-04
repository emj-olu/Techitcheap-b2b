import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

// Animation variants for scroll reveal
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeOut' } },
};

// Child animation variants
const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

// Form field animation
const fieldVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

// Interface for form data
interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

// Available services for dropdown (aligned with ServicesPage.tsx)
const services = [
  'Web & Mobile App Development',
  'UI/UX Design',
  'Cloud & DevOps',
  'IT Consulting',
  'Brand Identity Design',
];

const ContactPage: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
  };

  // Hero image
  const heroImage =
    'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';

  // Schema markup for contact page
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Techitcheap',
    description:
      'Get in touch with Techitcheap for innovative IT solutions. Reach out via our contact form, email, phone, or visit our office.',
    url: 'https://yourwebsite.com/contact',
    publisher: {
      '@type': 'Organization',
      name: 'Techitcheap',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-123-456-7890',
        email: 'info@techitcheap.com',
        contactType: 'Customer Service',
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch | Techitcheap</title>
        <meta
          name="description"
          content="Contact Techitcheap for expert IT solutions. Fill out our form, email us, or call to discuss your project needs."
        />
        <meta
          name="keywords"
          content="contact Techitcheap, IT solutions, web development, UI/UX design, cloud DevOps, IT consulting, brand identity"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Us - Techitcheap" />
        <meta
          property="og:description"
          content="Reach out to Techitcheap to start your next IT project. Use our contact form, email, or phone for a quick response."
        />
        <meta property="og:image" content={heroImage} />
        <meta property="og:url" content="https://yourwebsite.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <link rel="canonical" href="https://yourwebsite.com/contact" />
      </Helmet>

      <main className="font-montserrat text-gray-900 pt-20">
        {/* Hero Section */}
        <motion.section
          className="relative text-white py-24 px-8 text-center bg-gradient-to-br from-[#2454FF] to-[#1E3A8A]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: `url('${heroImage}')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30" />
          </div>
          <div className="relative z-10">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
              variants={childVariants}
            >
              Get in Touch
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md"
              variants={childVariants}
            >
              Ready to transform your business with innovative IT solutions? Reach out
              to discuss your project or learn more about our services.
            </motion.p>
            <motion.div variants={childVariants}>
              <Link
                to="#contact-form"
                className="bg-[#2454FF] px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-[#1E3A8A] transition-colors duration-300 shadow-lg"
              >
                Start the Conversation
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Form Section */}
        <motion.section
          className="py-16 px-8 bg-[#DBEAFE] text-gray-900"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          id="contact-form"
        >
          <motion.h2
            className="text-3xl font-bold mb-8 text-center text-[#1E3A8A]"
            variants={childVariants}
          >
            Send Us a Message
          </motion.h2>
          <motion.div
            className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md"
            variants={childVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={fieldVariants}>
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-gray-900"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:ring-[#2454FF] focus:border-[#2454FF] text-base"
                  placeholder="Enter your full name"
                  aria-required="true"
                />
              </motion.div>
              <motion.div variants={fieldVariants}>
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-gray-900"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:ring-[#2454FF] focus:border-[#2454FF] text-base"
                  placeholder="Enter your email address"
                  aria-required="true"
                />
              </motion.div>
              <motion.div variants={fieldVariants}>
                <label
                  htmlFor="company"
                  className="block text-base font-medium text-gray-900"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:ring-[#2454FF] focus:border-[#2454FF] text-base"
                  placeholder="Enter your company name (optional)"
                />
              </motion.div>
              <motion.div variants={fieldVariants}>
                <label
                  htmlFor="service"
                  className="block text-base font-medium text-gray-900"
                >
                  Interested Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:ring-[#2454FF] focus:border-[#2454FF] text-base"
                >
                  <option value="">Select a service (optional)</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </motion.div>
              <motion.div variants={fieldVariants}>
                <label
                  htmlFor="message"
                  className="block text-base font-medium text-gray-900"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:ring-[#2454FF] focus:border-[#2454FF] text-base"
                  placeholder="Tell us about your project or requirements"
                  aria-required="true"
                />
              </motion.div>
              <motion.button
                type="submit"
                className="w-full bg-[#2454FF] text-white py-3 rounded-lg font-semibold text-base hover:bg-[#1E3A8A] transition-colors duration-300 shadow-lg"
                variants={childVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Message
              </motion.button>
            </form>
          </motion.div>
        </motion.section>

        {/* Contact Details Section */}
        <motion.section
          className="py-16 px-8 bg-white text-gray-900 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-3xl font-bold mb-8 text-[#1E3A8A]"
            variants={childVariants}
          >
            Other Ways to Reach Us
          </motion.h2>
          <motion.p
            className="mb-12 max-w-2xl mx-auto text-lg"
            variants={childVariants}
          >
            Prefer a different method? Contact us via email, phone, or visit our office.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="p-6 bg-[#DBEAFE] rounded-lg shadow-md"
              variants={childVariants}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#2454FF]">Email</h3>
              <p className="text-lg">
                <a
                  href="mailto:info@techitcheap.com"
                  className="hover:text-[#1E3A8A] transition-colors"
                >
                  info@techitcheap.com
                </a>
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-[#DBEAFE] rounded-lg shadow-md"
              variants={childVariants}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#2454FF]">Phone</h3>
              <p className="text-lg">
                <a
                  href="tel:+11234567890"
                  className="hover:text-[#1E3A8A] transition-colors"
                >
                  +1 (123) 456-7890
                </a>
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-[#DBEAFE] rounded-lg shadow-md"
              variants={childVariants}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#2454FF]">
                Office
              </h3>
              <p className="text-lg">
                123 Tech Street, Suite 100
                <br />
                Innovation City, TC 12345
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="bg-[#1E3A8A] text-white py-8 text-center text-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <Footer />
        </motion.footer>
      </main>
    </>
  );
};

export default ContactPage;