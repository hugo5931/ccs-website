'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WhatWeDoPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-light tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
            What We Do
          </h1>
          <div className="w-24 h-1 bg-white mx-auto my-6"></div>
          <p className="text-xl md:text-2xl font-light" style={{ fontFamily: 'Georgia, serif' }}>
            Our Activities, Programs & Weekly Gatherings
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Overview Section */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl text-gray-800 mb-4 font-light" style={{ fontFamily: 'Georgia, serif' }}>
                Our Weekly Gatherings
              </h2>
              <div className="w-16 h-1 bg-emerald-600 mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                Every Friday from 12 to 4, we meet at the Cambridge Unitarian Meeting Hall.
                It's a relaxed afternoon - you can join in as much or as little as you like.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                Some people like to cook, others prefer to chat or just sit with a cup of tea.
                <span className="text-emerald-700 font-semibold"> You don't need to book, and it won't cost you anything.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Photo Gallery - What We Do */}
        <section className="mb-20">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-800 mb-4 font-light" style={{ fontFamily: 'Georgia, serif' }}>
              See What We Do
            </h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto mb-4"></div>
            <p className="text-lg md:text-xl text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
              A glimpse into our community activities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Gathering Together */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="relative h-64 md:h-80">
                <Image
                  src="/image-gatheringstanding.jpg"
                  alt="Community members gathering together"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl text-gray-800 mb-2 font-light" style={{ fontFamily: 'Georgia, serif' }}>
                  Getting Together
                </h3>
                <p className="text-sm md:text-base text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
                  Fridays at the hall - just people getting together for a bit of company
                </p>
              </div>
            </div>

            {/* Eating Together */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="relative h-64 md:h-80">
                <Image
                  src="/image-eating1.jpg"
                  alt="Community members eating together"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl text-gray-800 mb-2 font-light" style={{ fontFamily: 'Georgia, serif' }}>
                  Eating Together
                </h3>
                <p className="text-sm md:text-base text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
                  We sit down and have our meal together - always tastes better that way
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Vegetables Harvested */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="relative h-56 md:h-64">
                <Image
                  src="/image-vegetable1.jpg"
                  alt="Fresh vegetables harvested by members"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl text-gray-800 mb-2 font-light" style={{ fontFamily: 'Georgia, serif' }}>
                  Fresh from the Garden
                </h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                  Members bring vegetables from their gardens to cook with
                </p>
              </div>
            </div>

            {/* Creative Activities */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="relative h-56 md:h-64">
                <Image
                  src="/image-branches1.jpg"
                  alt="Hands-on creative activities"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl text-gray-800 mb-2 font-light" style={{ fontFamily: 'Georgia, serif' }}>
                  Hands-On Activities
                </h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                  Various creative projects - from seasonal crafts to other activities
                </p>
              </div>
            </div>

            {/* Prepared Food */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="relative h-56 md:h-64">
                <Image
                  src="/image-pasta.jpg"
                  alt="Delicious food prepared together"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl text-gray-800 mb-2 font-light" style={{ fontFamily: 'Georgia, serif' }}>
                  Preparing Meals
                </h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                  We cook dishes from different cultures and try new recipes
                </p>
              </div>
            </div>

            {/* Tai Chi */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="relative h-56 md:h-64">
                <Image
                  src="/image-taichi2.jpg"
                  alt="Tai Chi practice session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl text-gray-800 mb-2 font-light" style={{ fontFamily: 'Georgia, serif' }}>
                  Tai Chi
                </h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                  Gentle movement and mindfulness practice together with instructor
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* More Activities Gallery */}
        <section className="mb-20">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-800 mb-4 font-light" style={{ fontFamily: 'Georgia, serif' }}>
              More from Our Gatherings
            </h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto mb-4"></div>
            <p className="text-lg md:text-xl text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
              A variety of activities to suit different interests
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Craft Activities */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="relative h-64 md:h-80">
                <Image
                  src="/image-branches2.jpg"
                  alt="Creative activities with natural materials"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl text-gray-800 mb-2 md:mb-3 font-light" style={{ fontFamily: 'Georgia, serif' }}>
                  Seasonal Crafts
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  Throughout the year we enjoy different hands-on activities - wreath-making around
                  Christmas, or other crafts that members suggest. It's a nice way to spend time together.
                </p>
              </div>
            </div>

            {/* Garden Fresh */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="relative h-64 md:h-80">
                <Image
                  src="/image-vegetable2.jpg"
                  alt="Fresh vegetables from gardens"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl text-gray-800 mb-2 md:mb-3 font-light" style={{ fontFamily: 'Georgia, serif' }}>
                  Home-Grown Vegetables
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  Many members have gardens and bring along their vegetables to share.
                  It's lovely to cook with fresh ingredients that we've grown ourselves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Typical Friday Schedule */}
        <section className="mb-20">
          <div className="bg-emerald-700 rounded-3xl p-8 md:p-12 lg:p-16 text-white">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-light" style={{ fontFamily: 'Georgia, serif' }}>
                A Typical Friday
              </h2>
              <div className="w-16 h-1 bg-white mx-auto mb-4"></div>
              <p className="text-lg md:text-xl opacity-90" style={{ fontFamily: 'Georgia, serif' }}>
                Here's what a usual gathering looks like
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
              <div className="bg-white/20 backdrop-blur rounded-xl p-4 md:p-6 flex gap-4 md:gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/30 rounded-full flex items-center justify-center">
                    <span className="text-lg md:text-2xl font-light" style={{ fontFamily: 'Georgia, serif' }}>12:00</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2">Arrival & Welcome</h4>
                  <p className="text-sm md:text-base leading-relaxed opacity-90" style={{ fontFamily: 'Georgia, serif' }}>
                    Doors open and everyone is welcomed. Tea, coffee, and light refreshments are available.
                    It's a time to settle in, catch up with familiar faces, and meet new people.
                  </p>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur rounded-xl p-4 md:p-6 flex gap-4 md:gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/30 rounded-full flex items-center justify-center">
                    <span className="text-lg md:text-2xl font-light" style={{ fontFamily: 'Georgia, serif' }}>12:30</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2">Cooking Begins</h4>
                  <p className="text-sm md:text-base leading-relaxed opacity-90" style={{ fontFamily: 'Georgia, serif' }}>
                    We gather in the kitchen to plan and prepare our meal together. Whether you're an
                    experienced cook or a complete beginner, there's a role for everyone.
                  </p>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur rounded-xl p-4 md:p-6 flex gap-4 md:gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/30 rounded-full flex items-center justify-center">
                    <span className="text-lg md:text-2xl font-light" style={{ fontFamily: 'Georgia, serif' }}>2:00</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2">Meal Time</h4>
                  <p className="text-sm md:text-base leading-relaxed opacity-90" style={{ fontFamily: 'Georgia, serif' }}>
                    We sit down together to enjoy the meal we've prepared. This is a time for conversation,
                    laughter, and connection over good food.
                  </p>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur rounded-xl p-4 md:p-6 flex gap-4 md:gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/30 rounded-full flex items-center justify-center">
                    <span className="text-lg md:text-2xl font-light" style={{ fontFamily: 'Georgia, serif' }}>3:00</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2">Free Time & Activities</h4>
                  <p className="text-sm md:text-base leading-relaxed opacity-90" style={{ fontFamily: 'Georgia, serif' }}>
                    The final hour is flexible - people chat, play games, share stories, or engage in
                    creative activities. Some prefer quiet conversation while others enjoy group activities.
                  </p>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur rounded-xl p-4 md:p-6 flex gap-4 md:gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/30 rounded-full flex items-center justify-center">
                    <span className="text-lg md:text-2xl font-light" style={{ fontFamily: 'Georgia, serif' }}>4:00</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2">Wrap Up</h4>
                  <p className="text-sm md:text-base leading-relaxed opacity-90" style={{ fontFamily: 'Georgia, serif' }}>
                    We tidy up together and say our goodbyes. Everyone leaves knowing they're welcome
                    back next Friday, and the Friday after that.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Members Participate Section */}
        <section className="mb-20">
          <div className="bg-emerald-50 rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl text-gray-800 mb-6 font-light" style={{ fontFamily: 'Georgia, serif' }}>
                  How Members Participate
                </h2>
                <div className="w-16 h-1 bg-emerald-600 mb-6"></div>
                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  Everyone chips in however they can. There's no pressure - you just do what feels right.
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-emerald-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white text-xs md:text-sm">✓</span>
                    </div>
                    <p className="text-sm md:text-base text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>
                      <strong>Share a recipe</strong> if you know a good one
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-emerald-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white text-xs md:text-sm">✓</span>
                    </div>
                    <p className="text-sm md:text-base text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>
                      <strong>Bring veg from your garden</strong> if you've got some going spare
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-emerald-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white text-xs md:text-sm">✓</span>
                    </div>
                    <p className="text-sm md:text-base text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>
                      <strong>Suggest something</strong> you'd like to try doing together
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-emerald-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white text-xs md:text-sm">✓</span>
                    </div>
                    <p className="text-sm md:text-base text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>
                      <strong>Just turn up</strong> - honestly, that's enough
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image-gatheringstanding2.jpg"
                  alt="Community members at the hall"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover min-h-[300px] md:min-h-[400px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6 font-light" style={{ fontFamily: 'Georgia, serif' }}>
              Come Join Us This Friday
            </h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6 md:mb-8"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              No need to book or register - just show up at 12:00 pm on any Friday and you'll be warmly welcomed.
              Whether you stay for an hour or the full four hours, you'll always have a place at our table.
            </p>
            <div className="space-y-3 md:space-y-4">
              <div className="inline-block bg-emerald-700 text-white rounded-full px-8 md:px-10 py-3 md:py-4">
                <p className="text-base md:text-lg font-semibold">Every Friday | 12:00 - 4:00 pm</p>
              </div>
              <p className="text-sm md:text-base text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
                Cambridge Unitarian Meeting Hall, Victoria Street, Cambridge CB1 1JN
              </p>
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
  );
}
