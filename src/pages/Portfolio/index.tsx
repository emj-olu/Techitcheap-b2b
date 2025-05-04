import React, { useState, useEffect } from 'react';
import { motion, useAnimationControls, Variants } from 'framer-motion';
import Footer from '../../components/Footer';

interface CaseStudy {
  title: string;
  description: string;
  techUsed: string[];
  image: string;
  impact: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Unilorin Campus Shuttle',
    description:
      'Built a web-based ticketing system for a campus shuttle service. Over 4,000 transactions within 2 weeks and ₦1M revenue generated.',
    techUsed: ['React', 'Django', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    impact: 'Increased operational efficiency and cashless convenience for students.',
  },
  {
    title: 'Techitcheap App (Legacy)',
    description:
      'Before pivoting to Accessivo, Techitcheap processed ₦30M+ in transactions. Focused on quick, reliable bill payments.',
    techUsed: ['Flutter', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    impact: 'Enabled 24/7 access to services with fast delivery and low failure rate.',
  },
  {
    title: 'VFD Payment Integration',
    description:
      'Seamless backend integration of VFD for all app transactions to increase speed, reduce failure, and enable real-time wallet funding.',
    techUsed: ['Python', 'APIs'],
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    impact: '99.8% success rate on payments, cutting failed transactions by 60%.',
  },
];

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

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

const PortfolioPage: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      const cards = document.querySelectorAll('.case-study-card');
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
            key={`${letter}-${index}`}
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

  // Word-by-word animation component
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
    <div className="font-montserrat bg-white text-gray-900 pt-20">
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
            backgroundImage: `url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-[#2454FF] bg-opacity-30" />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work. Real Results.</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            We don’t just deliver products—we deliver impact. Explore how Techitcheap has helped
            businesses launch, grow, and scale with powerful tech.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-[#2454FF] px-6 py-3 rounded-full text-white font-semibold hover:bg-[#1e45d6]">
              Start a Project
            </button>
            <button className="border border-white px-6 py-3 rounded-full text-white font-semibold hover:bg-white hover:text-gray-900">
              Contact Us
            </button>
          </div>
        </div>
      </motion.section>

      {/* Case Studies */}
      <motion.section
        className="py-20 px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              className={`relative rounded-tr-3xl rounded-bl-3xl shadow-lg transition-all duration-300 case-study-card w-[100%] mx-auto md:w-full ${
                activeCard === index ? 'bg-[#2454FF] text-white' : 'bg-white text-gray-900 hover:bg-[#2454FF] hover:text-white'
              } overflow-hidden`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={!isMobile ? 'hover' : undefined}
              whileTap="tap"
              onMouseEnter={() => !isMobile && setActiveCard(index)}
              onMouseLeave={() => !isMobile && setActiveCard(null)}
              style={{
                border: '2px solid transparent',
                boxShadow: activeCard === index
                  ? '0 0 15px rgba(36, 84, 255, 0.7)'
                  : '0 0 10px rgba(36, 84, 255, 0.3)',
              }}
            >
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-48 object-cover object-center rounded-tr-3xl"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-current">
                  <AnimatedTitle text={caseStudy.title} isActive={activeCard === index} />
                </h3>
                <p className="mb-3">
                  <AnimatedText text={caseStudy.description} />
                </p>
                <div className="mb-3">
                  <strong>Impact:</strong> <AnimatedText text={caseStudy.impact} />
                </div>
                <div className="text-sm flex flex-wrap gap-2">
                  {caseStudy.techUsed.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded-md ${
                        activeCard === index
                          ? 'bg-white text-[#2454FF]'
                          : 'bg-[#2454FF] text-white'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
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
        <h2 className="text-3xl font-bold mb-4">Let’s Make Your Project the Next Success Story</h2>
        <p className="mb-8 max-w-xl mx-auto">
          Whether you’re launching a product, redesigning your platform, or scaling your
          backend—Techitcheap is ready to help.
        </p>
        <button className="bg-white text-[#2454FF] px-6 py-3 font-semibold rounded-full hover:bg-gray-200">
          Start a Project
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

export default PortfolioPage;