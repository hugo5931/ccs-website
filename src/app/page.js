'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function CommunityLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Structured data for Organization and Event
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cambridge Creative Synergy Community",
    "description": "A community promoting good mental health and well-being through weekly gatherings, cooking, and creative activities",
    "url": "https://cambridgecreativesynergy.org",
    "logo": "https://cambridgecreativesynergy.org/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Victoria Street (entrance)",
      "addressLocality": "Cambridge",
      "postalCode": "CB1 1JN",
      "addressCountry": "GB"
    },
    "email": "info@cambridgecreativesynergy.org",
    "telephone": "+441234567890",
    "sameAs": [
      "https://www.facebook.com/YOUR_PAGE_HERE"
    ]
  };

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Weekly Community Gathering",
    "description": "Free weekly gathering for mental health support, companionship, cooking together, and creative activities. No booking required.",
    "startDate": "2024-01-01T12:00",
    "endDate": "2024-12-31T16:00",
    "eventSchedule": {
      "@type": "Schedule",
      "scheduleTimezone": "Europe/London",
      "byDay": "Friday",
      "startTime": "12:00",
      "endTime": "16:00"
    },
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Cambridge Unitarian Meeting Hall",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Victoria Street",
        "addressLocality": "Cambridge",
        "postalCode": "CB1 1JN",
        "addressCountry": "GB"
      }
    },
    "isAccessibleForFree": true,
    "organizer": {
      "@type": "Organization",
      "name": "Cambridge Creative Synergy Community",
      "url": "https://cambridgecreativesynergy.org"
    }
  };

  return (
    <>
      <Head>
        <title>Cambridge Creative Synergy Community - Mental Health & Well-Being Support</title>
        <meta name="description" content="A welcoming community in Cambridge offering free weekly gatherings every Friday (12-4pm) for mental health support, companionship, cooking together, and creative activities. No booking required." />
        <meta name="keywords" content="Cambridge community, mental health support, well-being, social connection, loneliness support, Cambridge activities" />
        <link rel="canonical" href="https://cambridgecreativesynergy.org" />
      </Head>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
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
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-4 px-6 text-gray-800 hover:bg-emerald-50 border-b border-gray-100"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Home
            </a>
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
              <a
                href="#home"
                className="text-white hover:text-emerald-200 transition-colors text-lg"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Home
              </a>
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
            Cambridge Creative<br/>Synergy Community
          </h1>
          <div className="w-24 h-1 bg-white mx-auto my-6"></div>
          <p className="text-2xl font-light" style={{ fontFamily: 'Georgia, serif' }}>
            Good Mental Health & Well-Being
          </p>
        </div>
      </header>

      {/* Floating meeting card */}
      <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-12 text-center border-t-4 border-emerald-600">
          <p className="text-emerald-700 font-semibold text-sm tracking-wider mb-2">WEEKLY GATHERING</p>
          <p className="text-3xl md:text-4xl font-light text-gray-800 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Every Friday
          </p>
          <p className="text-xl md:text-2xl text-gray-600 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            12:00 – 4:00 pm
          </p>
          <div className="border-t border-gray-200 pt-6">
            <p className="text-base md:text-lg text-gray-700 font-medium">Cambridge Unitarian Meeting Hall</p>
            <p className="text-sm md:text-base text-gray-600">Victoria Street, Cambridge CB1 1JN</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Welcome Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6 font-light leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                You're welcome here
              </h2>
              <div className="w-16 h-1 bg-emerald-600 mb-6"></div>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                We're a group of people who meet every Friday for good company and a bit of support.
                If you're feeling lonely or just fancy some company, come along.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                It's a place where you can have a chat, listen, be heard, or just sit quietly if that's what you need.
                <span className="text-emerald-700 font-semibold"> There's no charge - it's completely free.</span>
              </p>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/image-welcome1.jpg"
                alt="Welcome - community gathering"
                width={800}
                height={600}
                className="w-full h-auto object-cover min-h-[300px] md:min-h-[400px]"
              />
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-800 mb-4 font-light" style={{ fontFamily: 'Georgia, serif' }}>
              Our Story
            </h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              [Placeholder for now Placeholder for now Placeholder for now Placeholder for now Placeholder 
              for now Placeholder for now Placeholder for now]
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              [Placeholder for now Placeholder for now Placeholder for now Placeholder for now Placeholder 
              for now Placeholder for now Placeholder for now]
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              [Placeholder for now Placeholder for now Placeholder for now Placeholder for now Placeholder 
              for now Placeholder for now Placeholder for now]
            </p>
          </div>
        </section>

        {/* Community Photo Section */}
        <section className="mb-20">
          <div className="bg-emerald-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl text-gray-800 mb-4 font-light" style={{ fontFamily: 'Georgia, serif' }}>
                See our community in action
              </h2>
              <div className="w-16 h-1 bg-emerald-600 mx-auto mb-4"></div>
              <p className="text-lg md:text-xl text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
                A glimpse into our warm and welcoming gatherings
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/image-gathering1.jpg"
                alt="Community members gathering at the hall"
                width={1200}
                height={700}
                className="w-full h-auto object-cover min-h-[300px] md:min-h-[400px] lg:min-h-[500px] max-h-[600px]"
              />
            </div>
          </div>
        </section>

        {/* What We Offer - Split Layout */}
        <section className="mb-20">
          <div className="bg-emerald-700 rounded-3xl p-8 md:p-12 lg:p-16 text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12 font-light text-center" style={{ fontFamily: 'Georgia, serif' }}>
              What happens on Fridays
            </h2>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white/20 backdrop-blur rounded-xl p-5 md:p-6">
                <h4 className="text-lg md:text-xl font-semibold mb-3">Chat or Just Listen</h4>
                <p className="text-sm md:text-base leading-relaxed opacity-90" style={{ fontFamily: 'Georgia, serif' }}>
                  You can talk as much or as little as you like. Some days you might want a good chat,
                  other days you might just want to sit with a cup of tea.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur rounded-xl p-5 md:p-6">
                <h4 className="text-lg md:text-xl font-semibold mb-3">Cook and Eat Together</h4>
                <p className="text-sm md:text-base leading-relaxed opacity-90" style={{ fontFamily: 'Georgia, serif' }}>
                  We try recipes from different places - Italian one week, Indian another. Then we all sit down
                  and have a meal together.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur rounded-xl p-5 md:p-6">
                <h4 className="text-lg md:text-xl font-semibold mb-3">Support Each Other</h4>
                <p className="text-sm md:text-base leading-relaxed opacity-90" style={{ fontFamily: 'Georgia, serif' }}>
                  Everyone's been through something. We share what we've learned and help each other out
                  when things are tough.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur rounded-xl p-5 md:p-6">
                <h4 className="text-lg md:text-xl font-semibold mb-3">No Cost, No Fuss</h4>
                <p className="text-sm md:text-base leading-relaxed opacity-90" style={{ fontFamily: 'Georgia, serif' }}>
                  It doesn't cost anything and you don't need to sign up. Just turn up on a Friday
                  if you fancy it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6 font-light" style={{ fontFamily: 'Georgia, serif' }}>
              Come along this Friday
            </h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              If you're lonely, or just want some company and a decent meal, we'd be happy to see you.
              No need to let us know - just turn up.
            </p>
            <div className="inline-block bg-emerald-700 text-white rounded-full px-8 md:px-10 py-3 md:py-4">
              <p className="text-base md:text-lg font-semibold">Every Friday | 12:00 - 4:00 pm</p>
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