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
        className="relative text-white py-24 px-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-[#2454FF] bg-opacity-30" />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let’s Talk Tech</h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Whether you’re building something new or improving what exists, we’re here to guide you.
            Book a free consultation today.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-[#2454FF] px-6 py-3 rounded-full text-white font-semibold hover:bg-[#1e45d6]">
              Schedule Now
            </button>
            <button className="border border-white px-6 py-3 rounded-full text-white font-semibold hover:bg-white hover:text-gray-900">
              Learn More
            </button>
          </div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        className="py-20 px-8 bg-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-4">How Our Consultation Works</h2>
        <p className="mb-12 max-w-2xl mx-auto">
          We make it simple to get started. Our process is designed to understand your needs and
          provide clear, actionable solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={`p-6 rounded-tr-3xl rounded-bl-3xl shadow-lg transition-all duration-300 how-it-works-card w-[90%] mx-auto md:w-full ${
                activeCard === i ? 'bg-[#2454FF] text-white' : 'bg-white text-gray-900 hover:bg-[#2454FF] hover:text-white'
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
                  ? '0 0 15px rgba(36, 84, 255, 0.7)'
                  : '0 0 10px rgba(36, 84, 255, 0.3)',
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
                      activeCard === i ? 'text-white' : 'text-[#2454FF]'
                    } transition-colors duration-300`}
                  />
                </motion.div>
                <h3 className="text-xl font-semibold ml-4 text-current">
                  {step.title}
                </h3>
              </div>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Consultation Form */}
      <motion.section
        className="py-20 px-8 bg-gray-100 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-4">Book Your Free Consultation</h2>
        <p className="mb-12 max-w-2xl mx-auto">
          Fill out the form below, and we’ll reach out to schedule your consultation.
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-[100%] mx-auto md:max-w-lg bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-left font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              placeholder="John Doe"
              onChange={handleChange}
              className="w-full px-4 py-2 border bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#2454FF]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              placeholder="user@email.com"
              onChange={handleChange}
              className="w-full px-4 bg-gray-100 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#2454FF]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="service" className="block text-left font-semibold mb-2">
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full px-4 bg-gray-100 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#2454FF]"
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
          <div className="mb-4">
            <label htmlFor="date" className="block text-left font-semibold mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full bg-gray-100 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#2454FF]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-100 border rounded focus:outline-none focus:ring-2 focus:ring-[#2454FF]"
              rows={4}
              placeholder="Tell us about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#2454FF] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1e45d6]"
          >
            Submit
          </button>
        </form>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-8 bg-[#2454FF] text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="mb-8 max-w-xl mx-auto">
          Let’s build something great together. Contact us to turn your vision into reality.
        </p>
        <button className="bg-white text-[#2454FF] px-6 py-3 font-semibold rounded-full hover:bg-gray-200">
          Get in Touch
        </button>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-gray-900 text-white py-6 text-center text-sm"
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