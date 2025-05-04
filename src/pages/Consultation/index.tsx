import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { motion, Variants } from 'framer-motion';
import Footer from '../../components/Footer';
import { FaCalendar, FaLightbulb, FaClipboardList } from 'react-icons/fa';
import { IconType } from 'react-icons';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.95, transition: { duration: 0.2 } },
};

const iconVariants: Variants = {
  initial: { scale: 1 },
  animate: { scale: [1, 1.1, 1], transition: { duration: 2, repeat: Infinity } },
};

interface FormState {
  name: string;
  email: string;
  service: string;
  date: string;
  message: string;
}

interface HowItWorksStep {
  title: string;
  description: string;
  icon: IconType;
}

const ConsultationPage: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    service: '',
    date: '',
    message: '',
  });
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Update active card on mobile scroll
  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      const cards = document.querySelectorAll('.how-it-works-card');
      let closestCard: number | null = null;
      let minDistance = Infinity;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const distance = Math.abs(rect.top - window.innerHeight / 2);
        if (distance < minDistance) {
          minDistance = distance;
          closestCard = index;
        }
      });

      console.log('Active card:', closestCard); // Debug log
      setActiveCard(closestCard);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    alert('Thank you! We’ll get back to you shortly.');
    setForm({ name: '', email: '', service: '', date: '', message: '' });
  };

  const steps: HowItWorksStep[] = [
    {
      title: '1. Schedule a Call',
      description: 'Pick a time that works for you. We’ll connect via phone or video to discuss your project.',
      icon: FaCalendar,
    },
    {
      title: '2. Share Your Vision',
      description: 'Tell us about your goals, challenges, and ideas. We’ll ask questions to get the full picture.',
      icon: FaLightbulb,
    },
    {
      title: '3. Get a Plan',
      description: 'Receive a tailored strategy with clear steps, timelines, and costs to bring your project to life.',
      icon: FaClipboardList,
    },
  ];

  return (
    <div className="font-montserrat pt-20 text-gray-900">
      {/* Hero */}
      <motion.section
        className="relative text-white py-32 px-8 text-center bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Let’s Talk Tech
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto drop-shadow-md">
            Whether you’re building something new or improving what exists, we’re here to guide you.
            Book a free consultation today.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <button className="bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] px-8 py-4 rounded-full text-white font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg">
              Schedule Now
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-[#3B82F6] hover:text-white hover:border-[#3B82F6] transition-colors duration-300 shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        className="py-24 px-8 bg-[#DBEAFE] text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold mb-12 text-[#1E3A8A] drop-shadow-sm">
          How Our Consultation Works
        </h2>
        <p className="mb-12 max-w-3xl mx-auto text-lg">
          We make it simple to get started. Our process is designed to understand your needs and
          provide clear, actionable solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-left">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={`group p-6 rounded-tr-3xl rounded-bl-3xl shadow-xl transition-all duration-300 how-it-works-card w-[90%] mx-auto md:w-full ${
                activeCard === i
                  ? 'bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] text-white'
                  : 'bg-white text-gray-900 hover:bg-gradient-to-br hover:from-[#3B82F6] hover:to-[#2563EB] hover:text-white'
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={!isMobile ? 'hover' : undefined}
              whileTap="tap"
              onMouseEnter={() => !isMobile && setActiveCard(i)}
              onMouseLeave={() => !isMobile && setActiveCard(null)}
              style={{
                border: '2px solid transparent',
                boxShadow: activeCard === i
                  ? '0 0 20px rgba(30, 64, 175, 0.8)'
                  : '0 0 12px rgba(30, 64, 175, 0.4)',
              }}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  animate={activeCard === i ? 'animate' : 'initial'}
                >
                  <step.icon
                    className={`w-8 h-8 ${
                      activeCard === i ? 'text-white' : 'text-[#1E40AF]'
                    } group-hover:text-white transition-colors duration-300`}
                  />
                </motion.div>
                <h3 className="text-xl font-semibold ml-4 text-current group-hover:text-white">
                  {step.title}
                </h3>
              </div>
              <p
                className={`text-lg ${
                  activeCard === i
                    ? '!text-white'
                    : 'text-gray-700 group-hover:text-white'
                }`}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Consultation Form */}
      <motion.section
        className="py-24 px-8 bg-[#DBEAFE] text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold mb-12 text-[#1E3A8A] drop-shadow-sm">
          Book Your Free Consultation
        </h2>
        <p className="mb-12 max-w-3xl mx-auto text-lg">
          Fill out the form below, and we’ll reach out to schedule your consultation.
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-[90%] mx-auto md:max-w-lg bg-white p-8 rounded-xl shadow-xl"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-left font-semibold mb-2 text-[#1E3A8A]">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              placeholder="John Doe"
              onChange={handleChange}
              className="w-full px-4 py-3 border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-left font-semibold mb-2 text-[#1E3A8A]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              placeholder="user@email.com"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="service" className="block text-left font-semibold mb-2 text-[#1E3A8A]">
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
              required
            >
              <option value="">Select a service</option>
              <option value="Web & Mobile Development">Web & Mobile Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Cloud & DevOps">Cloud & DevOps</option>
              <option value="IT Consulting">IT Consulting</option>
              <option value="Brand Identity Design">Brand Identity Design</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="date" className="block text-left font-semibold mb-2 text-[#1E3A8A]">
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-left font-semibold mb-2 text-[#1E3A8A]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
              rows={4}
              placeholder="Tell us about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-gradient-to-r hover:from-[#3B82F6] hover:to-[#2563EB] transition-colors duration-300 shadow-lg"
          >
            Submit
          </button>
        </form>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-24 px-8 bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold mb-10 drop-shadow-lg">
          Ready to Start Your Project?
        </h2>
        <p className="mb-12 max-w-2xl mx-auto text-lg">
          Let’s build something great together. Contact us to turn your vision into reality.
        </p>
        <button className="bg-white text-[#1E3A8A] px-8 py-4 font-semibold rounded-full text-lg hover:bg-[#3B82F6] hover:text-white transition-colors duration-300 shadow-lg">
          Get in Touch
        </button>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-[#1E3A8A] text-white py-8 text-center text-base"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Footer />
      </motion.footer>
    </div>
  );
};

export default ConsultationPage;