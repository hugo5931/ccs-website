'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Structured data for LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cambridge Creative Synergy Community",
    "image": "https://cambridgecreativesynergy.org/og-image.jpg",
    "description": "A welcoming community space promoting mental health and well-being through weekly gatherings",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Victoria Street (entrance)",
      "addressLocality": "Cambridge",
      "postalCode": "CB1 1JN",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.202370",
      "longitude": "0.118775"
    },
    "url": "https://cambridgecreativesynergy.org",
    "telephone": "+441234567890",
    "email": "info@cambridgecreativesynergy.org",
    "priceRange": "Free",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "12:00",
      "closes": "16:00"
    }
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="min-h-screen bg-gray-50">
      {/* Header with overlay */}
      <header className="relative bg-emerald-700 text-white py-16 md:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden absolute top-4 right-4 z-50 bg-white text-emerald-700 p-3 rounded-lg shadow-lg"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 right-4 bg-white rounded-xl shadow-2xl overflow-hidden z-40 w-64">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-4 px-6 text-gray-800 hover:bg-emerald-50 border-b border-gray-100"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Home
            </Link>
            <Link
              href="/what-we-do"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-4 px-6 text-gray-800 hover:bg-emerald-50 border-b border-gray-100"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              What We Do
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-4 px-6 text-gray-800 hover:bg-emerald-50"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Contact
            </Link>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:block absolute top-5 left-0 right-0 z-40">
          <div className="max-w-4xl mx-auto bg-white/20 backdrop-blur rounded-full px-4 py-3 shadow-lg">
            <ul className="flex justify-center gap-8 max-w-6xl mx-auto">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-emerald-200 transition-colors text-lg"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do"
                  className="text-white hover:text-emerald-200 transition-colors text-lg"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-emerald-200 transition-colors text-lg"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="relative max-w-6xl mx-auto text-center z-10 mt-14 md:mt-16">
          <h1 className="text-5xl md:text-6xl mb-4 font-light tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-white mx-auto my-6"></div>
          <p className="text-2xl font-light" style={{ fontFamily: 'Georgia, serif' }}>
            Get in Touch with Our Community
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Contact Info Cards */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Visit Us Card */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-shadow text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto">
                <span className="text-2xl md:text-3xl">📍</span>
              </div>
              <h3 className="text-xl md:text-2xl text-gray-800 mb-3 md:mb-4 font-light" style={{ fontFamily: 'Georgia, serif' }}>
                Visit Us
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Cambridge Unitarian Meeting Hall
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Victoria Street (entrance)<br />
                Cambridge CB1 1JN
              </p>
              <p className="text-sm md:text-base text-emerald-700 font-semibold" style={{ fontFamily: 'Georgia, serif' }}>
                Every Friday<br />
                12:00 - 4:00 pm
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-shadow text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto">
                <span className="text-2xl md:text-3xl">✉️</span>
              </div>
              <h3 className="text-xl md:text-2xl text-gray-800 mb-3 md:mb-4 font-light" style={{ fontFamily: 'Georgia, serif' }}>
                Email Us
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Have questions or want more information? Send us an email and we'll get back to you.
              </p>
              <a
                href="mailto:info@cambridgecreativesynergy.org"
                className="text-sm md:text-base text-emerald-700 font-semibold hover:text-emerald-800 transition-colors wrap-break-word"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                info@cambridgecreativesynergy.org
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-shadow text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto">
                <span className="text-2xl md:text-3xl">📞</span>
              </div>
              <h3 className="text-xl md:text-2xl text-gray-800 mb-3 md:mb-4 font-light" style={{ fontFamily: 'Georgia, serif' }}>
                Call Us
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Prefer to talk? Give us a call during our Friday sessions.
              </p>
              <a
                href="tel:+441234567890"
                className="text-lg md:text-xl text-emerald-700 font-semibold hover:text-emerald-800 transition-colors"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                01234 567 890
              </a>
              <p className="text-xs md:text-sm text-gray-500 mt-2" style={{ fontFamily: 'Georgia, serif' }}>
                Fridays, 12:00 - 4:00 pm
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-20">
          <div className="bg-emerald-50 rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl text-gray-800 mb-4 font-light" style={{ fontFamily: 'Georgia, serif' }}>
                Find Us on the Map
              </h2>
              <div className="w-16 h-1 bg-emerald-600 mx-auto mb-4"></div>
              <p className="text-lg md:text-xl text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
                Located in the heart of Cambridge
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl h-[300px] md:h-[400px] lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.5986851709186!2d0.11877531580644!3d52.20236997975455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d870bda7a67b67%3A0x7f6f9b8e0c7c5a0e!2sUnitarian%20Church%2C%20Cambridge!5e0!3m2!1sen!2suk!4v1645000000000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cambridge Unitarian Meeting Hall location map"
              ></iframe>
            </div>

            <div className="mt-6 md:mt-8 grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-xl p-5 md:p-6 shadow-lg">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  Getting Here by Bus
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  Several bus routes stop nearby on Emmanuel Street and St Andrew's Street. The hall is
                  a short walk from either stop.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 md:p-6 shadow-lg">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  Parking Information
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  Limited street parking is available. The nearest car parks are Grand Arcade and Park Street,
                  both within walking distance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Building Photo Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/image-garden1.jpg"
                alt="Cambridge Unitarian Meeting Hall exterior"
                width={800}
                height={600}
                className="w-full h-auto object-cover min-h-[300px] md:min-h-[400px]"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl text-gray-800 mb-6 font-light" style={{ fontFamily: 'Georgia, serif' }}>
                What the Building Looks Like
              </h2>
              <div className="w-16 h-1 bg-emerald-600 mb-6"></div>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                This is the Cambridge Unitarian Meeting Hall on Victoria Street. It's in the city center,
                not far from the Grand Arcade shopping center.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                The entrance is on Victoria Street. If you're not sure which building it is, look for
                the address number or ask someone - most locals know where it is.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                The building has a ground-floor entrance and there's access for wheelchairs. The map below
                shows you exactly where we are.
              </p>
            </div>
          </div>
        </section>

        {/* Facebook Section */}
        <section className="mb-20">
          <div className="bg-emerald-700 rounded-3xl p-8 md:p-12 lg:p-16 text-white text-center">
            <div className="text-5xl md:text-6xl mb-6">📘</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 font-light" style={{ fontFamily: 'Georgia, serif' }}>
              Follow Us on Facebook
            </h2>
            <div className="w-16 h-1 bg-white mx-auto mb-6 md:mb-8"></div>
            <p className="text-base md:text-lg lg:text-xl mb-6 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              We post regular updates on our Facebook page so you can see what we've been up to. There are
              photos from our Friday gatherings, meals we've cooked together, and news about what's coming up.
            </p>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              It's a good way to get a feel for the group before you come along, or to stay in touch if you
              can't make it one week.
            </p>
            <a
              href="https://www.facebook.com/YOUR_PAGE_HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-emerald-700 rounded-full px-8 md:px-10 py-3 md:py-4 hover:bg-gray-100 transition-colors font-semibold text-base md:text-lg shadow-lg"
            >
              Visit Our Facebook Page
            </a>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6 font-light" style={{ fontFamily: 'Georgia, serif' }}>
              Questions? Just Ask!
            </h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6 md:mb-8"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              Don't hesitate to reach out if you have any questions about joining our community. We're
              here to help and would love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@cambridgesynergy.org"
                className="inline-block bg-emerald-700 text-white rounded-full px-8 md:px-10 py-3 md:py-4 hover:bg-emerald-800 transition-colors text-base md:text-lg font-semibold"
              >
                Send Us an Email
              </a>
              <a
                href="tel:+441234567890"
                className="inline-block bg-gray-200 text-gray-800 rounded-full px-8 md:px-10 py-3 md:py-4 hover:bg-gray-300 transition-colors text-base md:text-lg font-semibold"
              >
                Call Us
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl mb-4 font-light" style={{ fontFamily: 'Georgia, serif' }}>
            Cambridge Creative Synergy Community
          </h3>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-300 mb-2">Cambridge Unitarian Meeting Hall</p>
          <p className="text-gray-300 mb-2">Victoria Street (entrance), Cambridge CB1 1JN</p>
          <p className="text-gray-300 mb-6">Every Friday, 12:00 - 4:00 pm</p>

          <div className="mt-6 mb-6">
            <a
              href="https://www.facebook.com/YOUR_PAGE_HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-emerald-400 transition-colors text-lg"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              <span className="text-2xl">📘</span>
              <span>Follow us on Facebook for photos and updates</span>
            </a>
          </div>

          <p className="text-sm text-gray-400 mt-8">
            Promoting good mental health and well-being for all
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}
