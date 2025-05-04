import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Footer from '../../components/Footer';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Animation variants
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeOut' } },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What services does Techitcheap offer?',
      answer:
        'Techitcheap provides web and mobile app development, UI/UX design, cloud and DevOps solutions, and IT consulting to help businesses grow and innovate.',
    },
    {
      question: 'How can I request a consultation?',
      answer:
        'You can request a consultation by visiting our <a href="/consultation" class="text-[#2454FF] hover:underline">Consultation page</a> and filling out the form, or contact us directly via our <a href="/contact" class="text-[#2454FF] hover:underline">Contact page</a>.',
    },
    {
      question: 'What industries do you serve?',
      answer:
        'We serve a wide range of industries, including e-commerce, fintech, healthcare, education, and more. Our solutions are tailored to meet your specific needs.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary depending on complexity. A simple website may take 4-8 weeks, while custom apps or cloud solutions may take 3-6 months. Contact us for a detailed estimate.',
    },
    {
      question: 'Do you offer ongoing support after project completion?',
      answer:
        'Yes, we offer maintenance and support packages to ensure your solution remains up-to-date and performs optimally. Reach out to discuss our support plans.',
    },
  ];

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>FAQs - Techitcheap</title>
        <meta
          name="description"
          content="Find answers to common questions about Techitcheap’s IT services, including web development, UI/UX design, cloud solutions, and more."
        />
        <meta
          name="keywords"
          content="Techitcheap, FAQs, IT services, web development, UI/UX design, cloud DevOps, consultation"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="FAQs - Techitcheap" />
        <meta property="og:url" content="https://yourwebsite.com/faqs" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <link rel="canonical" href="https://yourwebsite.com/faqs" />
      </Helmet>
      <main className="font-montserrat pt-20 text-gray-900 bg-white">
        <motion.section
          className="max-w-4xl mx-auto py-16 px-4 sm:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-8 text-center"
            variants={childVariants}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.div className="space-y-4" variants={childVariants}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-200 pb-4"
                variants={childVariants}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left sm:text-lg text-base font-semibold text-gray-900 hover:text-[#2454FF] transition-colors"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  {faq.question}
                  {openIndex === index ? (
                    <FaChevronUp className="text-[#2454FF]" />
                  ) : (
                    <FaChevronDown className="text-[#2454FF]" />
                  )}
                </button>
                <motion.div
                  id={`faq-answer-${index}`}
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <p
                    className="mt-2 sm:text-base text-sm text-gray-600"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="mt-12 text-center" variants={childVariants}>
            <Link
              to="/contact"
              className="bg-[#2454FF] px-6 py-3 rounded-full text-white font-semibold hover:bg-[#1E3A8A] transition-colors"
            >
              Still Have Questions? Contact Us
            </Link>
          </motion.div>
        </motion.section>
        <Footer />
      </main>
    </>
  );
};

export default FAQPage;