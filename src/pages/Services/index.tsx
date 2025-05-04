import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

// Interface for service items
interface Service {
  title: string;
  description: string;
  image: string;
}

// Animation variants for scroll reveal
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};

// Card animation variants for Services
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const ServicesPage: React.FC = () => {
  const [activeServiceCard, setActiveServiceCard] = useState<number | null>(null);
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

    window.addEventListener('scroll', handleServiceScroll);
    return () => {
      window.removeEventListener('scroll', handleServiceScroll);
    };
  }, [isMobile]);

  return (
    <div className="font-montserrat text-gray-900">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Techitcheap</h1>
        <Link to="/" className="text-white hover:text-[#2454FF]">
          Back to Home
        </Link>
      </header>

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
            Discover Our Expert IT Services
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            From development to design and consulting, our services are crafted to drive your business forward with cutting-edge technology.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact">
              <button className="bg-[#2454FF] px-6 py-3 rounded-full text-white font-semibold hover:bg-[#1e45d6]">
                Get in Touch
              </button>
            </Link>
            <button className="border border-white px-6 py-3 rounded-full text-white font-semibold hover:bg-white hover:text-gray-900">
              Explore Services
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
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="mb-12 max-w-3xl mx-auto">
          Explore our range of custom IT solutions designed to help your business grow and succeed in a tech-driven world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <Link
              key={i}
              to={`/services/${service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
              className="block"
            >
              <motion.div
                className={`p-6 rounded-tr-3xl rounded-bl-3xl shadow-lg transition-all duration-300 service-card w-[90%] mx-auto md:w-full ${
                  activeServiceCard === i ? 'bg-[#2454FF] text-white' : 'bg-white text-gray-900 hover:bg-[#2454FF] hover:text-white'
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                onMouseEnter={() => !isMobile && setActiveServiceCard(i)}
                onMouseLeave={() => !isMobile && setActiveServiceCard(null)}
                style={{
                  border: '2px solid transparent',
                  boxShadow: activeServiceCard === i
                    ? '0 0 15px rgba(36, 84, 255, 0.7)'
                    : '0 0 10px rgba(36, 84, 255, 0.3)',
                  cursor: 'pointer',
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
                  {service.title}
                </h3>
                <p>{service.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
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

export default ServicesPage;