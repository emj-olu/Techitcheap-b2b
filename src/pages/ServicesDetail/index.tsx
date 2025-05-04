import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Footer from '../../components/Footer';

// Corrected image imports
import webImage from '../../assets/img/web.jpg';
import uiuxImage from '../../assets/img/uiux.jpg';
import cloudImage from '../../assets/img/cloud.jpg';
import brandImage from '../../assets/img/brand.jpg';

// Animation variants for scroll reveal
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

interface Service {
  title: string;
  slug: string;
  description: string;
  image: string;
  features: { title: string; description: string }[];
}

const services: Service[] = [
  {
    title: 'Web & Mobile App Development',
    slug: 'web-mobile-app-development',
    description:
      'Tailored digital products from MVP to full-scale platforms—built to perform and scale.',
    image: webImage,
    features: [
      {
        title: 'Custom Development',
        description: 'Bespoke web and mobile apps tailored to your business needs.',
      },
      {
        title: 'Scalable Architecture',
        description: 'Solutions designed to grow with your user base and data demands.',
      },
      {
        title: 'Cross-Platform Support',
        description: 'Seamless performance on iOS, Android, and web browsers.',
      },
    ],
  },
  {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    description:
      'Clean, intuitive interfaces that keep your users engaged and your brand consistent.',
    image: uiuxImage,
    features: [
      {
        title: 'User-Centered Design',
        description: 'Interfaces built around user behavior and feedback.',
      },
      {
        title: 'Consistent Branding',
        description: 'Unified visual identity across all touchpoints.',
      },
      {
        title: 'Prototyping & Testing',
        description: 'Interactive prototypes to validate designs before development.',
      },
    ],
  },
  {
    title: 'Cloud & DevOps',
    slug: 'cloud-devops',
    description:
      'Secure, scalable infrastructure that grows with your business. Uptime, speed, and peace of mind.',
    image: cloudImage,
    features: [
      {
        title: 'Cloud Migration',
        description: 'Seamless transition to cloud platforms like AWS, Azure, or GCP.',
      },
      {
        title: 'CI/CD Pipelines',
        description: 'Automated workflows for faster, reliable deployments.',
      },
      {
        title: 'Security & Monitoring',
        description: 'Robust measures to protect data and ensure uptime.',
      },
    ],
  },
  {
    title: 'IT Consulting',
    slug: 'it-consulting',
    description:
      'Tech strategy and advisory services to help you avoid costly mistakes and scale smarter.',
    image:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    features: [
      {
        title: 'Strategic Planning',
        description: 'Roadmaps to align technology with business goals.',
      },
      {
        title: 'Cost Optimization',
        description: 'Solutions to maximize ROI on tech investments.',
      },
      {
        title: 'Risk Assessment',
        description: 'Identify and mitigate potential tech challenges.',
      },
    ],
  },
  {
    title: 'Brand Identity Design',
    slug: 'brand-identity-design',
    description:
      'We craft powerful brand identities—from logo to typography and color systems—so your business stands out and earns trust instantly.',
    image: brandImage,
    features: [
      {
        title: 'Logo Design',
        description: 'Memorable logos that encapsulate your brand’s essence.',
      },
      {
        title: 'Typography & Colors',
        description: 'Cohesive systems for consistent brand recognition.',
      },
      {
        title: 'Brand Guidelines',
        description: 'Comprehensive guides to maintain brand integrity.',
      },
    ],
  },
];

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: service?.title || '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      service: service?.title || '',
    });
  };

  if (!service) {
    return (
      <main className="font-montserrat text-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-base mb-8">The service you’re looking for doesn’t exist.</p>
          <Link
            to="/services"
            className="bg-[#1E40AF] px-6 py-3 rounded-lg text-white font-semibold hover:bg-[#2563EB] transition-colors"
          >
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  // Schema markup for the service
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    image: service.image,
    url: `https://yourwebsite.com/services/${service.slug}`,
    serviceType: service.title,
    provider: {
      '@type': 'Organization',
      name: '[Your Company Name]',
    },
  };

  return (
    <>
      <Helmet>
        <title>{`${service.title} - IT Services | [Your Company Name]`}</title>
        <meta name="description" content={service.description} />
        <meta
          name="keywords"
          content={`${service.title.toLowerCase()}, IT services, web development, mobile app development, UI/UX design, cloud DevOps, IT consulting, brand identity design`}
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${service.title} - IT Services`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:image" content={service.image} />
        <meta
          property="og:url"
          content={`https://yourwebsite.com/services/${service.slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <link
          rel="canonical"
          href={`https://yourwebsite.com/services/${service.slug}`}
        />
      </Helmet>

      <main className="font-montserrat text-gray-900">
        {/* Hero Section */}
        <motion.section
          className="relative text-white py-24 px-8 text-center bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: `url('${service.image}')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30" />
          </div>
          <div className="relative z-10">
            <motion.h1
              className="text-3xl md:text-5xl font-bold mb-4"
              variants={childVariants}
            >
              {service.title}
            </motion.h1>
            <motion.p
              className="text-base md:text-lg mb-8 max-w-2xl mx-auto"
              variants={childVariants}
            >
              {service.description}
            </motion.p>
            <motion.div variants={childVariants}>
              <Link
                to="/contact"
                className="bg-[#1E40AF] px-6 py-3 rounded-lg text-white font-semibold hover:bg-[#2563EB] transition-colors"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Details Section */}
        <motion.section
          className="py-16 px-8 bg-white text-gray-900 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-3xl font-bold mb-8 text-gray-900"
            variants={childVariants}
          >
            Why Choose Our {service.title}?
          </motion.h2>
          <motion.p
            className="mb-8 max-w-2xl mx-auto text-base"
            variants={childVariants}
          >
            Discover the key features that make our {service.title.toLowerCase()} stand
            out.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {service.features.map((feature, i) => (
              <motion.article
                key={i}
                className="group p-6 rounded-lg shadow-xl transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-[#3B82F6] hover:to-[#2563EB] hover:text-white"
                variants={childVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: '0 0 12px rgba(30, 64, 175, 0.4)',
                }}
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-white">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-800 group-hover:text-white">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Enquiry Form Section */}
        <motion.section
          className="py-16 px-8 bg-white text-gray-900"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-3xl font-bold mb-8 text-center text-gray-900"
            variants={childVariants}
          >
            Enquire About {service.title}
          </motion.h2>
          <motion.div
            className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
            variants={childVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
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
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:ring-[#1E40AF] focus:border-[#1E40AF] text-base"
                  placeholder="Enter your full name"
                  aria-required="true"
                />
              </div>
              <div>
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
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:ring-[#1E40AF] focus:border-[#1E40AF] text-base"
                  placeholder="Enter your email address"
                  aria-required="true"
                />
              </div>
              <div>
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
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:ring-[#1E40AF] focus:border-[#1E40AF] text-base"
                  placeholder="Enter your company name (optional)"
                />
              </div>
              <div>
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
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:ring-[#1E40AF] focus:border-[#1E40AF] text-base"
                  placeholder="Tell us about your project or requirements"
                  aria-required="true"
                />
              </div>
              <input type="hidden" name="service" value={formData.service} />
              <motion.button
                type="submit"
                className="w-full bg-[#1E40AF] text-white py-3 rounded-lg font-semibold text-base hover:bg-[#2563EB] transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Enquiry
              </motion.button>
            </form>
          </motion.div>
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

export default ServiceDetailPage;