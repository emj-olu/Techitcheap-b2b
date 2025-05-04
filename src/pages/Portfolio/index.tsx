import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet-async'; // For dynamic meta tags
import unilorinImage from '../../assets/img/unilorin.jpg'; // Corrected import

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
    image: unilorinImage,
    impact: 'Increased operational efficiency and cashless convenience for students.',
  },
  {
    title: 'Techitcheap App (Legacy)',
    description:
      'Before pivoting to Accessivo, Techitcheap processed ₦30M+ in transactions. Focused on quick, reliable bill payments.',
    techUsed: ['Flutter', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
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

  // Schema markup for case studies
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: caseStudies.map((caseStudy, index) => ({
      '@type': 'CreativeWork',
      position: index + 1,
      name: caseStudy.title,
      description: caseStudy.description,
      image: caseStudy.image,
    })),
  };

  return (
    <>
      <Helmet>
        <title>Portfolio - Our Work and Case Studies | [Your Company Name]</title>
        <meta
          name="description"
          content="Explore our portfolio of successful projects, including case studies like Unilorin Campus Shuttle and VFD Payment Integration, showcasing real results and impactful tech solutions."
        />
        <meta
          name="keywords"
          content="portfolio, case studies, tech projects, web development, app development, Unilorin shuttle, VFD payment, Techitcheap"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Portfolio - Our Work and Case Studies" />
        <meta
          property="og:description"
          content="Discover our impactful tech projects and case studies, delivering real results for businesses."
        />
        <meta property="og:image" content={caseStudies[0].image} />
        <meta property="og:url" content="https://yourwebsite.com/portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <main className="font-montserrat bg-white text-gray-900 pt-20">
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
              backgroundImage: `url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30" />
          </div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              Our Work. Real Results.
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto drop-shadow-md">
              We don’t just deliver products—we deliver impact. Explore how we’ve helped
              businesses launch, grow, and scale with powerful tech.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="/start-project"
                className="bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] px-8 py-4 rounded-full text-white font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Start a Project
              </a>
              <a
                href="/contact"
                className="border-2 border-white px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-[#3B82F6] hover:text-white hover:border-[#3B82F6] transition-colors duration-300 shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.section>

        {/* Case Studies */}
        <motion.section
          className="py-24 px-8 bg-[#DBEAFE]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1E3A8A] drop-shadow-sm">
            Case Studies
          </h2>
          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {caseStudies.map((caseStudy, index) => (
              <motion.article
                key={index}
                className={`group relative rounded-tr-3xl rounded-bl-3xl shadow-xl transition-all duration-300 case-study-card w-[90%] mx-auto md:w-full ${
                  activeCard === index
                    ? 'bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] text-white'
                    : 'bg-white text-gray-900 hover:bg-gradient-to-br hover:from-[#3B82F6] hover:to-[#2563EB] hover:text-white'
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
                    ? '0 0 20px rgba(30, 64, 175, 0.8)'
                    : '0 0 12px rgba(30, 64, 175, 0.4)',
                }}
              >
                <img
                  src={caseStudy.image}
                  alt={`${caseStudy.title} project showcase`}
                  className="w-full h-56 object-cover object-center rounded-tr-3xl"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400x200?text=Image+Not+Found';
                  }}
                />
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-3 text-current group-hover:text-white">
                    {caseStudy.title}
                  </h3>
                  <p
                    className={`mb-4 text-lg ${
                      activeCard === index
                        ? '!text-white'
                        : 'text-gray-700 group-hover:text-white'
                    }`}
                  >
                    {caseStudy.description}
                  </p>
                  <div className="mb-4">
                    <strong className="text-current group-hover:text-white">Impact:</strong>{' '}
                    <span
                      className={`text-lg ${
                        activeCard === index
                          ? '!text-white'
                          : 'text-gray-700 group-hover:text-white'
                      }`}
                    >
                      {caseStudy.impact}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.techUsed.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-[#3B82F6] text-white transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
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
            Let’s Make Your Project the Next Success Story
          </h2>
          <p className="mb-12 max-w-2xl mx-auto text-lg">
            Whether you’re launching a product, redesigning your platform, or scaling your
            backend, we’re ready to help.
          </p>
          <a
            href="/start-project"
            className="bg-white text-[#1E3A8A] px-8 py-4 font-semibold rounded-full text-lg hover:bg-[#3B82F6] hover:text-white transition-colors duration-300 shadow-lg"
          >
            Start a Project
          </a>
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

export default PortfolioPage;