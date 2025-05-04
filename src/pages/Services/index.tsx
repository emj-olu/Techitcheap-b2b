import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // For SEO meta tags
import Footer from '../../components/Footer';
import webImage from '../../assets/img/unilorin.jpg';
import uiuxImage from '../../assets/img/uiux.jpg';
import cloudImage from '../../assets/img/cloud.jpg';
import brandImage from '../../assets/img/brand.jpg';
import consultingImage from '../../assets/img/web.jpg'


// Interface for service items
interface Service {
  title: string;
  slug: string;
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
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.95, transition: { duration: 0.2 } },
};

const ServicesPage: React.FC = () => {
  const [activeServiceCard, setActiveServiceCard] = useState<number | null>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Service data with unique images
  const services: Service[] = [
    {
      title: 'Web & Mobile App Development',
      slug: 'web-mobile-app-development',
      description:
        'Tailored digital products from MVP to full-scale platforms—built to perform and scale.',
      image: webImage,
    },
    {
      title: 'UI/UX Design',
      slug: 'ui-ux-design',
      description:
        'Clean, intuitive interfaces that keep your users engaged and your brand consistent.',
      image: uiuxImage,
    },
    {
      title: 'Cloud & DevOps',
      slug: 'cloud-devops',
      description:
        'Secure, scalable infrastructure that grows with your business. Uptime, speed, and peace of mind.',
      image: cloudImage,
    },
    {
      title: 'IT Consulting',
      slug: 'it-consulting',
      description:
        'Tech strategy and advisory services to help you avoid costly mistakes and scale smarter.',
      image:
        consultingImage,
    },
    {
      title: 'Brand Identity Design',
      slug: 'brand-identity-design',
      description:
        'We craft powerful brand identities—from logo to typography and color systems—so your business stands out and earns trust instantly.',
      image: brandImage,
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

  // Schema markup for services
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((service, index) => ({
      '@type': 'Service',
      position: index + 1,
      name: service.title,
      description: service.description,
      image: service.image,
      url: `https://yourwebsite.com/services/${service.slug}`,
    })),
  };

  return (
    <>
      <Helmet>
        <title>IT Services - Web, Mobile, UI/UX, Cloud & More | [Your Company Name]</title>
        <meta
          name="description"
          content="Discover our expert IT services, including web and mobile app development, UI/UX design, cloud & DevOps, IT consulting, and brand identity design."
        />
        <meta
          name="keywords"
          content="IT services, web development, mobile app development, UI/UX design, cloud DevOps, IT consulting, brand identity design"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="IT Services - Web, Mobile, UI/UX, Cloud & More" />
        <meta
          property="og:description"
          content="Explore our range of IT services designed to drive your business forward with cutting-edge technology."
        />
        <meta property="og:image" content={services[0].image} />
        <meta property="og:url" content="https://yourwebsite.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <link rel="canonical" href="https://yourwebsite.com/services" />
      </Helmet>

      <main className="font-montserrat text-gray-900 pt-20">
        {/* Hero Section */}
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
              backgroundImage: `url('${services[0].image}')`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30" />
          </div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              Discover Our Expert IT Services
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto drop-shadow-md">
              From development to design and consulting, our services are crafted to drive
              your business forward with cutting-edge technology.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] px-8 py-4 rounded-full text-white font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Get in Touch
              </Link>
              <Link
                to="#services"
                className="border-2 border-white px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-[#3B82F6] hover:text-white hover:border-[#3B82F6] transition-colors duration-300 shadow-lg"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          className="py-24 px-8 bg-[#DBEAFE] text-gray-900 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-4xl font-bold mb-12 text-[#1E3A8A] drop-shadow-sm">
            Our Services
          </h2>
          <p className="mb-12 max-w-3xl mx-auto text-lg">
            Explore our range of custom IT solutions designed to help your business grow
            and succeed in a tech-driven world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
            {services.map((service, i) => (
              <Link key={i} to={`/services/${service.slug}`} className="block">
                <motion.article
                  className={`group p-6 rounded-tr-3xl rounded-bl-3xl shadow-xl transition-all duration-300 service-card w-[90%] mx-auto md:w-full ${
                    activeServiceCard === i
                      ? 'bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] text-white'
                      : 'bg-white text-gray-900 hover:bg-gradient-to-br hover:from-[#3B82F6] hover:to-[#2563EB] hover:text-white'
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
                      ? '0 0 20px rgba(30, 64, 175, 0.8)'
                      : '0 0 12px rgba(30, 64, 175, 0.4)',
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src={service.image}
                    alt={`${service.title} service illustration`}
                    className="w-full h-56 object-cover object-center rounded-tr-3xl mb-4"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://via.placeholder.com/400x200?text=Image+Not+Found';
                    }}
                  />
                  <h3 className="text-xl font-semibold mb-3 text-current group-hover:text-white">
                    {service.title}
                  </h3>
                  <p
                    className={`text-lg ${
                      activeServiceCard === i
                        ? 'text-white'
                        : 'text-gray-800 group-hover:text-white'
                    }`}
                  >
                    {service.description}
                  </p>
                </motion.article>
              </Link>
            ))}
          </div>
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
      </main>
    </>
  );
};

export default ServicesPage;