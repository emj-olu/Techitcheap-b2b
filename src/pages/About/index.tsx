import React, { useState, useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Footer from '../../components/Footer';
import {
  FaGlobe,
  FaClock,
  FaRocket,
  FaHandshake,
  FaLightbulb,
  FaHeart,
  FaShieldAlt,
  FaBolt,
  FaUsers,
  FaCheckCircle,
} from 'react-icons/fa';
import { IconType } from 'react-icons';

// Corrected image import
import aboutImage from '../../assets/img/subtract.png';

// Interface for Why Choose Us items
interface WhyChooseUs {
  title: string;
  description: string;
  icon: IconType;
}

// Interface for Testimonial items
interface Testimonial {
  quote: string;
  clientName: string;
  clientTitle: string;
  image: string;
}

// Animation variants for scroll reveal
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};

// Card animation variants for Why Choose Us and Testimonials
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.95, transition: { duration: 0.2 } },
};

// Icon animation for Why Choose Us
const iconVariants: Variants = {
  initial: { scale: 1 },
  animate: { scale: [1, 1.1, 1], transition: { duration: 2, repeat: Infinity } },
};

// Testimonial slide animation
const slideVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
};

// Bullet item animation
const bulletVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.2 },
  }),
};

const AboutPage: React.FC = () => {
  const [activeWhyCard, setActiveWhyCard] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const carouselRef = useRef<HTMLDivElement>(null);

  // Hero image URL
  const heroImage =
    'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';

  // Why Choose Us data with icons
  const whyChooseUs: WhyChooseUs[] = [
    {
      title: 'Global Quality',
      description:
        'Our solutions meet international standards—designed to thrive anywhere in the world.',
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
      description:
        'We collaborate deeply, advise honestly, and support you long after launch.',
      icon: FaHandshake,
    },
  ];

  // Testimonial data
  const testimonials: Testimonial[] = [
    {
      quote:
        'Techitcheap transformed our payment system, boosting transaction success rates by 60%. Their team was a true partner!',
      clientName: 'Aisha Bello',
      clientTitle: 'CEO, PayFast Solutions',
      image: 'https://via.placeholder.com/100?text=Client',
    },
    {
      quote:
        'Their agile approach delivered our app ahead of schedule. The UI/UX design has been a game-changer for our users.',
      clientName: 'James Okoro',
      clientTitle: 'Founder, CampusRide',
      image: 'https://via.placeholder.com/100?text=Client',
    },
    {
      quote:
        'From strategy to execution, Techitcheap’s expertise helped us scale seamlessly. Highly recommend their services!',
      clientName: 'Sarah Adebayo',
      clientTitle: 'CTO, FinTech Innovations',
      image: 'https://via.placeholder.com/100?text=Client',
    },
  ];

  // Bullet points for Our Story
  const storyBullets = [
    'Streamline operations',
    'Enhance customer experiences',
    'Unlock new growth opportunities',
  ];

  // Update active cards on mobile scroll for Why Choose Us
  useEffect(() => {
    if (!isMobile) return;

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

    window.addEventListener('scroll', handleWhyScroll);
    return () => window.removeEventListener('scroll', handleWhyScroll);
  }, [isMobile]);

  // Auto-scroll testimonials every 5 seconds, pause on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length, isPaused]);

  // Handle keyboard navigation for carousel
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 5000); // Resume auto-scroll after 5s
    } else if (e.key === 'ArrowLeft') {
      setCurrentTestimonial((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 5000);
    }
  };

  // Schema markup for organization
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Techitcheap',
    url: 'https://yourwebsite.com',
    logo: aboutImage,
    description:
      'Techitcheap is a global partner for IT solutions, helping businesses launch faster, scale smarter, and lead their markets with innovative technology.',
    sameAs: [
      'https://twitter.com/yourcompany',
      'https://linkedin.com/company/yourcompany',
    ],
  };

  return (
    <>
      <Helmet>
        <title>About Techitcheap - Innovative IT Solutions | Techitcheap</title>
        <meta
          name="description"
          content="Learn about Techitcheap, your global partner for IT solutions. Discover our story, mission, vision, and core values, and see why businesses choose us for innovative technology."
        />
        <meta
          name="keywords"
          content="Techitcheap, IT solutions, web development, mobile apps, UI/UX design, cloud DevOps, IT consulting, brand identity, about us"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="About Techitcheap - Innovative IT Solutions"
        />
        <meta
          property="og:description"
          content="Explore Techitcheap’s mission to deliver high-quality, cost-effective IT solutions. Learn about our story, values, and client success stories."
        />
        <meta property="og:image" content={heroImage} />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <link rel="canonical" href="https://yourwebsite.com" />
      </Helmet>

      <main className="font-montserrat pt-20 text-gray-900">
        {/* Hero Section */}
        <motion.section
          className="relative text-white py-32 px-8 text-center bg-gradient-to-br from-[#2454FF] to-[#1E3A8A]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{
              backgroundImage: `url('${heroImage}')`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              Solutions That Move You Forward
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto drop-shadow-md">
              Techitcheap is your global partner for IT solutions—helping businesses
              launch faster, scale smarter, and lead their markets with tech that works
              from day one.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#2454FF] to-[#1E3A8A] px-8 py-4 rounded-full text-white font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Let’s Build Together
              </Link>
              <Link
                to="/services"
                className="border-2 border-white px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-[#60A5FA] hover:text-white hover:border-[#60A5FA] transition-colors duration-300 shadow-lg"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </motion.section>

        {/* About Us Section */}
        <motion.section
          className="py-24 px-8 bg-[#DBEAFE] text-gray-900 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-4xl font-bold mb-12 text-[#1E3A8A] drop-shadow-sm">
            About Techitcheap
          </h2>
          <div className="max-w-5xl mx-auto">
            {/* Our Story */}
            <div className="mb-16">
              <h3 className="text-3nii font-semibold mb-6 text-[#2454FF]">
                Our Story
              </h3>
              <div className="flex flex-col md:flex-row items-center gap-12">
                <img
                  src={aboutImage}
                  alt="Techitcheap team working together"
                  className="w-full md:w-1/2 h-72 object-cover rounded-xl shadow-lg"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://via.placeholder.com/400x300?text=Image+Not+Found';
                  }}
                />
                <div className="text-left">
                  <p className="text-lg mb-6">
                    Founded on a passion for innovation and a commitment to
                    affordability, Techitcheap delivers end-to-end technology solutions
                    that help businesses of every size thrive in today’s digital economy.
                    We blend deep industry expertise with agile development practices to
                    create software, fintech platforms, and intelligent automation tools
                    that:
                  </p>
                  <ul className="space-y-4">
                    {storyBullets.map((bullet, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center p-4 bg-white rounded-lg shadow-md hover:bg-gradient-to-r hover:from-[#2454FF] hover:to-[#1E3A8A] hover:text-white transition-all duration-300 group"
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={bulletVariants}
                        whileHover={{ scale: 1.03 }}
                      >
                        <FaCheckCircle className="w-6 h-6 text-[#2454FF] mr-3 group-hover:text-white" />
                        <span className="text-xl font-semibold">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-6 text-[#2454FF]">
                Our Mission
              </h3>
              <p className="text-lg max-w-3xl mx-auto">
                To deliver high-quality, cost-effective technology services that
                simplify complex challenges, accelerate digital transformation, and
                foster financial inclusion.
              </p>
            </div>

            {/* Vision */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-6 text-[#2454FF]">
                Our Vision
              </h3>
              <p className="text-lg max-w-3xl mx-auto">
                To be a global leader in technology innovation—transforming industries
                and empowering organizations to achieve more with smart, scalable
                solutions.
              </p>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-3xl font-semibold mb-8 text-[#2454FF]">
                Our Core Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto text-left">
                {[
                  {
                    icon: FaLightbulb,
                    title: 'Innovation',
                    description:
                      'We embrace creativity and continuously explore new ideas to build tomorrow’s solutions today.',
                  },
                  {
                    icon: FaHeart,
                    title: 'Customer Focus',
                    description:
                      'Your success is our success. We listen closely, tailor our approach, and iterate until we exceed expectations.',
                  },
                  {
                    icon: FaShieldAlt,
                    title: 'Integrity',
                    description:
                      'We act with honesty, transparency, and accountability in every engagement.',
                  },
                  {
                    icon: FaBolt,
                    title: 'Agility',
                    description:
                      'Rapid feedback loops and lean teams let us adapt quickly to changing needs and market trends.',
                  },
                  {
                    icon: FaUsers,
                    title: 'Collaboration',
                    description:
                      'We believe the best results come from diverse perspectives—working together, we achieve more.',
                  },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start p-4 bg-white rounded-lg shadow-md hover:bg-[#60A5FA] hover:text-white transition-colors duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <value.icon
                      className="w-8 h-8 text-[#2454FF] mr-4 mt-1 group-hover:text-white"
                      aria-hidden="true"
                    />
                    <div>
                      <h4 className="text-xl font-semibold text-[#1E3A8A] group-hover:text-white">
                        {value.title}
                      </h4>
                      <p className="text-lg">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          className="py-24 px-8 bg-white text-gray-900 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-4xl font-bold mb-12 text-[#1E3A8A] drop-shadow-sm">
            Why Teams Choose Techitcheap
          </h2>
          <p className="mb-12 max-w-3xl mx-auto text-lg">
            We’re not just developers—we’re your growth partners. Every line of code we
            write is focused on making your business work better.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {whyChooseUs.map((item, i) => (
              <motion.article
                key={i}
                className={`p-8 rounded-tr-3xl rounded-bl-3xl shadow-lg transition-all duration-300 why-choose-us-card w-[90%] mx-auto md:w-full ${
                  activeWhyCard === i
                    ? 'bg-gradient-to-br from-[#2454FF] to-[#1E3A8A] text-white'
                    : 'bg-white text-gray-900 hover:bg-gradient-to-br hover:from-[#2454FF] hover:to-[#1E3A8A] hover:text-white'
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
                    ? '0 0 20px rgba(36, 84, 255, 0.7)'
                    : '0 0 12px rgba(36, 84, 255, 0.3)',
                }}
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    variants={iconVariants}
                    initial="initial"
                    animate={activeWhyCard === i ? 'animate' : 'initial'}
                  >
                    <item.icon
                      className={`w-10 h-10 ${
                        activeWhyCard === i ? 'text-white' : 'text-[#2454FF]'
                      } transition-colors duration-300`}
                      aria-hidden="true"
                    />
                  </motion.div>
                  <h3 className="font-bold text-xl ml-4 text-current">{item.title}</h3>
                </div>
                <p className="text-lg">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Testimonial Carousel Section */}
        <motion.section
          className="py-24 px-8 bg-[#DBEAFE] text-gray-900 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-4xl font-bold mb-12 text-[#1E3A8A] drop-shadow-sm">
            What Our Clients Say
          </h2>
          <div
            className="max-w-4xl mx-auto relative"
            ref={carouselRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            aria-label="Testimonial carousel"
          >
            <div className="overflow-hidden">
              <motion.div
                key={currentTestimonial}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="p-8 bg-white rounded-xl shadow-lg flex flex-col items-center"
              >
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={`${testimonials[currentTestimonial].clientName}, ${testimonials[currentTestimonial].clientTitle}`}
                  className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-[#2454FF]"
                  loading="lazy"
                />
                <p className="text-lg italic mb-4 max-w-2xl">
                  “{testimonials[currentTestimonial].quote}”
                </p>
                <p className="text-xl font-semibold text-[#2454FF]">
                  {testimonials[currentTestimonial].clientName}
                </p>
                <p className="text-md text-gray-600">
                  {testimonials[currentTestimonial].clientTitle}
                </p>
              </motion.div>
            </div>
            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentTestimonial(index);
                    setIsPaused(true);
                    setTimeout(() => setIsPaused(false), 5000);
                  }}
                  className={`w-3 h-3 rounded-full ${
                    currentTestimonial === index ? 'bg-[#2454FF]' : 'bg-gray-400'
                  } hover:bg-[#60A5FA] transition-colors duration-300`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="py-24 px-8 bg-gradient-to-br from-[#2454FF] to-[#1E3A8A] text-white text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-4xl font-bold mb-10 drop-shadow-lg">
            Ready to Build Something Great?
          </h2>
          <p className="mb-12 max-w-2xl mx-auto text-lg">
            Let’s turn your idea into a high-impact solution—with a team that cares
            about your success.
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#1E3A8A] px-8 py-4 font-semibold rounded-full text-lg hover:bg-[#60A5FA] hover:text-white transition-colors duration-300 shadow-lg"
          >
            Get Started Today
          </Link>
        </motion.section>

        {/* Back to Top Button */}
        <motion.button
          className="fixed bottom-8 right-8 bg-[#2454FF] text-white p-4 rounded-full shadow-lg hover:bg-[#1E3A8A] transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>

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

export default AboutPage;