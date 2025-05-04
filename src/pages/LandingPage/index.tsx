import React, { useState, useEffect } from 'react';
import { motion, Variants, useAnimationControls } from 'framer-motion';
import Footer from '../../components/Footer';
import { FaGlobe, FaClock, FaRocket, FaHandshake } from 'react-icons/fa';
import { IconType } from 'react-icons';

// Interface for service items
interface Service {
  title: string;
  description: string;
  image: string;
}

// Interface for Why Choose Us items
interface WhyChooseUs {
  title: string;
  description: string;
  icon: IconType;
}

// Animation variants for scroll reveal
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};

// Card animation variants for Services and Why Choose Us
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.95, transition: { duration: 0.2 } },
};

// Letter-by-letter animation for titles
const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

// Icon animation for Why Choose Us
const iconVariants: Variants = {
  initial: { scale: 1 },
  animate: { scale: [1, 1.1, 1], transition: { duration: 2, repeat: Infinity } },
};

// Word-by-word animation for descriptions
const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

const LandingPage: React.FC = () => {
  const [activeServiceCard, setActiveServiceCard] = useState<number | null>(null);
  const [activeWhyCard, setActiveWhyCard] = useState<number | null>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Hero image URL
  const heroImage = 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';

  // Service data with Hero image
  const services: Service[] = [
    {
      title: 'Web & Mobile App Development',
      description: 'Tailored digital products from MVP to full-scale platforms—built to perform and scale.',
      image: heroImage,
    },
    {
      title: 'UI/UX Design',
      description: 'Clean, intuitive interfaces that keep your users engaged and your brand consistent.',
      image: heroImage,
    },
    {
      title: 'Cloud & DevOps',
      description: 'Secure, scalable infrastructure that grows with your business. Uptime, speed, and peace of mind.',
      image: heroImage,
    },
    {
      title: 'IT Consulting',
      description: 'Tech strategy and advisory services to help you avoid costly mistakes and scale smarter.',
      image: heroImage,
    },
    {
      title: 'Brand Identity Design',
      description:
        'We craft powerful brand identities—from logo to typography and color systems—so your business stands out and earns trust instantly.',
      image: heroImage,
    },
  ];

  // Why Choose Us data with icons
  const whyChooseUs: WhyChooseUs[] = [
    {
      title: 'Global Quality',
      description: 'Our solutions meet international standards—designed to thrive anywhere in the world.',
      icon: FaGlobe,
    },
    {
      title: 'Fast Delivery, No Surprises',
      description: 'We deliver on time and on budget—so you can move fast with confidence.',
      icon: FaClock,
    },
    {
      title: 'Built for Scale',
      description: 'From startup MVPs to enterprise platforms, we engineer for growth.',
      icon: FaRocket,
    },
    {
      title: 'Real Partnership',
      description: 'We collaborate deeply, advise honestly, and support you long after launch.',
      icon: FaHandshake,
    },
  ];

  // Update active cards on mobile scroll
  useEffect(() => {
    if (!isMobile) return;

    const handleServiceScroll = () => {
      const cards = document.querySelectorAll('.service-card');
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

      setActiveServiceCard(closestCard);
    };

    const handleWhyScroll = () => {
      const cards = document.querySelectorAll('.why-choose-us-card');
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

      setActiveWhyCard(closestCard);
    };

    window.addEventListener('scroll', handleServiceScroll);
    window.addEventListener('scroll', handleWhyScroll);
    return () => {
      window.removeEventListener('scroll', handleServiceScroll);
      window.removeEventListener('scroll', handleWhyScroll);
    };
  }, [isMobile]);

  // Letter-by-letter animation component for titles
  const AnimatedTitle = ({ text, isActive }: { text: string; isActive: boolean }) => {
    const letters = text.split('');
    const controls = useAnimationControls();

    useEffect(() => {
      // Start animation without resetting to hidden
      controls.start('visible');
    }, [isActive, controls]);

    return (
      <span>
        {letters.map((letter, index) => (
          <motion.span
            key={`${letter}-${index}-${isActive}`} // Unique key to retrigger animation
            className="inline-block text-current"
            custom={index}
            initial="hidden"
            animate={controls}
            variants={letterVariants}
            transition={{
              delay: index * 0.05,
              duration: 0.3,
              repeat: isActive ? Infinity : 0,
              repeatDelay: isActive ? 1 : 0,
              repeatType: 'loop' as const,
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </span>
    );
  };

  // Word-by-word animation component for descriptions
  const AnimatedText = ({ text }: { text: string }) => {
    const words = text.split(' ');
    return (
      <span>
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-1"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={wordVariants}
          >
            {word}
          </motion.span>
        ))}
      </span>
    );
  };

  return (
    <div className="font-montserrat pt-20 text-gray-900">
      {/* Hero Section */}
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
            backgroundImage: `url('${heroImage}')`,
          }}
        >
          <div className="absolute inset-0 bg-gray-900 bg-opacity-30" />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We Don’t Just Build Software. We Build Solutions That Move You Forward.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Techitcheap is your global partner for IT solutions—helping businesses launch faster, scale
            smarter, and lead their markets with tech that works from day one.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-[#2454FF] px-6 py-3 rounded-full text-white font-semibold hover:bg-[#1e45d6]">
              Let’s Build Together
            </button>
            <button className="border border-white px-6 py-3 rounded-full text-white font-semibold hover:bg-white hover:text-gray-900">
              Explore Our Services
            </button>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-20 px-8 bg-white text-gray-900 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-4">Custom IT Solutions Built for Growth</h2>
        <p className="mb-12 max-w-3xl mx-auto">
          We design, develop, and deliver IT systems that help you solve real problems, boost
          efficiency, and stay ahead in a tech-driven world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className={`p-6 rounded-tr-3xl rounded-bl-3xl shadow-lg transition-all duration-300 service-card w-[90%] mx-auto md:w-full ${
                activeServiceCard === i ? 'bg-[#2454FF] text-white' : 'bg-white text-gray-900 hover:bg-[#2454FF] hover:text-white'
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={!isMobile ? 'hover' : undefined}
              whileTap="tap"
              onMouseEnter={() => !isMobile && setActiveServiceCard(i)}
              onMouseLeave={() => !isMobile && setActiveServiceCard(null)}
              style={{
                border: '2px solid transparent',
                boxShadow: activeServiceCard === i
                  ? '0 0 15px rgba(36, 84, 255, 0.7)'
                  : '0 0 10px rgba(36, 84, 255, 0.3)',
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-32 object-cover object-center rounded-tr-3xl mb-4"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/400x200?text=Image+Not+Found';
                }}
              />
              <h3 className="text-xl font-semibold mb-2 text-current">
                <AnimatedTitle text={service.title} isActive={activeServiceCard === i} />
              </h3>
              <p>
                <AnimatedText text={service.description} />
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="py-20 px-8 bg-gray-100 text-gray-900 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-4">Why Teams Around the World Choose Techitcheap</h2>
        <p className="mb-12 max-w-2xl mx-auto">
          We’re not just developers—we’re your growth partners. Every line of code we write is focused
          on making your business work better.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={i}
              className={`p-6 rounded-tr-3xl rounded-bl-3xl shadow-lg transition-all duration-300 why-choose-us-card w-[90%] mx-auto md:w-full ${
                activeWhyCard === i ? 'bg-[#2454FF] text-white' : 'bg-white text-gray-900 hover:bg-[#2454FF] hover:text-white'
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={!isMobile ? 'hover' : undefined}
              onMouseEnter={() => !isMobile && setActiveWhyCard(i)}
              onMouseLeave={() => !isMobile && setActiveWhyCard(null)}
              style={{
                border: '2px solid transparent',
                boxShadow: activeWhyCard === i
                  ? '0 0 15px rgba(36, 84, 255, 0.7)'
                  : '0 0 10px rgba(36, 84, 255, 0.3)',
              }}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  animate={activeWhyCard === i ? 'animate' : 'initial'}
                >
                  <item.icon
                    className={`w-8 h-8 ${
                      activeWhyCard === i ? 'text-white' : 'text-[#2454FF]'
                    } transition-colors duration-300`}
                  />
                </motion.div>
                <h3 className="font-bold text-lg ml-4 text-current">
                  <AnimatedTitle text={item.title} isActive={activeWhyCard === i} />
                </h3>
              </div>
              <p>
                <AnimatedText text={item.description} />
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-8 bg-[#2454FF] text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Build Something Great?</h2>
        <p className="mb-8 max-w-xl mx-auto">
          Let’s turn your idea into a high-impact solution—with a team that cares about your success.
        </p>
        <button className="bg-white text-[#2454FF] px-6 py-3 font-semibold rounded-full hover:bg-gray-200">
          Get Started Today
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

export default LandingPage;