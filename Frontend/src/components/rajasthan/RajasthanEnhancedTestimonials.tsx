import React from 'react';
import { AnimatedSection } from '../common/AnimatedSection';

const QuoteIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const testimonials = [
  {
    quote: "I needed clarification on property tax assessment in Puducherry. FileMyRTI helped me file the RTI correctly and I received the reply within the expected time.",
    name: "Arun Kumar",
    location: "Puducherry",
    role: "Small Business Owner",
    image: "/images/arun.webp"
  },
  {
    quote: "I needed information about a delayed municipal certificate. FileMyRTI helped me get an official response without visiting the office.",
    name: "Revathi S",
    location: "Puducherry",
    role: "Office Assistant",
    image: "/images/revati.webp"
  },
  {
    quote: "I needed details about scholarship eligibility. FileMyRTI helped me receive accurate information from the department.",
    name: "Karthik R",
    location: "Puducherry",
    role: "College Student",
    image: "/images/karthik.webp"
  }
];

export const RajasthanEnhancedTestimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-responsive max-w-7xl mx-auto px-4">
        <AnimatedSection animation="fadeIn" delay={200}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 tracking-wide mb-6">
              What Citizens Say
            </h2>
            <p className="text-base md:text-lg font-normal text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Thousands of Puducherry citizens have successfully obtained government 
              information through our RTI filing service.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} animation="fadeInScale" delay={400 + index * 100}>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 h-full flex flex-col">
              <div className="mb-4">
                <QuoteIcon className="w-8 h-8 text-[#0267AD] opacity-60" />
              </div>
              <p className="text-gray-700 font-normal leading-relaxed mb-6 flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-4 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-gray-200 bg-gray-100">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 20%' }}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm font-normal text-gray-600">{testimonial.role}</p>
                    <p className="text-xs font-normal text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
        </div>
      </div>
    </section>
  );
};

