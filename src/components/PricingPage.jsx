import React, { useEffect, useContext } from 'react';
import { PageTransitionContext } from '../App';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

const individualServices = [
  {
    idx: 0,
    emoji: '✦',
    title: 'Logo Design',
    price: '₹3,000 – ₹10,000',
    desc: 'Professional logo creation and brand identity development.',
    path: '/services/logo-design',
    glowHex: '#a855f7'
  },
  {
    idx: 1,
    emoji: '⬡',
    title: 'Packaging Design',
    price: '₹5,000 – ₹20,000',
    desc: 'Creative product packaging designed for strong brand presence.',
    path: '/services/packaging-design',
    glowHex: '#f97316'
  },
  {
    idx: 2,
    emoji: '◈',
    title: 'Business Stationeries',
    price: '₹2,000 – ₹5,000',
    desc: 'Business cards, letterheads, invoices, envelopes, and corporate materials.',
    path: '/services/business-stationeries',
    glowHex: '#3b82f6'
  },
  {
    idx: 3,
    emoji: '◎',
    title: 'Social Media Poster Design',
    price: '₹500 – ₹1,500 per post',
    desc: 'Marketing creatives and promotional designs for social platforms.',
    path: '/services/social-media-design',
    glowHex: '#ec4899'
  },
  {
    idx: 4,
    emoji: '◬',
    title: '3D Animation',
    price: '₹55,000 – ₹85,000',
    desc: 'High-quality 3D animation for products, brands, and promotional content.',
    path: '/services/3d-animation',
    glowHex: '#06b6d4'
  },
  {
    idx: 5,
    emoji: '⬙',
    title: 'Product Advertisement Animation',
    price: '₹30,000 – ₹80,000',
    desc: 'Motion graphics and advertising videos designed to increase engagement.',
    path: '/services/product-ad-animation',
    glowHex: '#ef4444'
  },
  {
    idx: 6,
    emoji: '⬡',
    title: 'Website & Mobile App Development',
    price: '₹45,000 – ₹1,00,000+',
    desc: 'Custom web and mobile applications built with modern technologies.',
    path: '/services/web-mobile-development',
    glowHex: '#ffffff'
  }
];

export default function PricingPage() {
  const { navigateWithTransition } = useContext(PageTransitionContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen w-full relative pt-6 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      
      {/* Premium Header/Navbar */}
      <header className="w-full flex items-center justify-between border-b border-white/10 pb-2 mb-16 pt-2 gap-4">
        {/* Brand Logo */}
        <img 
          src="/logo.png" 
          onClick={() => navigateWithTransition('/')}
          className="h-28 md:h-32 w-auto -my-8 md:-my-10 cursor-pointer transition-transform duration-300 hover:scale-105" 
          alt="Graphoria Logo" 
        />

        {/* Back Button */}
        <button
          onClick={() => navigateWithTransition('/')}
          className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 font-semibold text-xs backdrop-blur-md flex-shrink-0"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back<span className="hidden sm:inline"> to Home</span></span>
        </button>
      </header>

      {/* Backdrop glows */}
      <div className="absolute top-44 left-1/4 -translate-x-1/2 w-[400px] h-[400px] bg-white/5 rounded-full filter blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-44 right-1/4 translate-x-1/2 w-[400px] h-[400px] bg-white/5 rounded-full filter blur-[150px] pointer-events-none -z-10" />

      {/* Hero Header */}
      <div className="mb-20 mt-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Pricing & Services</p>
        </div>
        <h1 className="font-display font-black text-4xl md:text-6xl text-white mb-6 uppercase tracking-tight">
          Individual Services
        </h1>
        <p className="font-sans text-white/60 text-base md:text-lg font-light leading-relaxed">
          Standalone creative, branding, animation, and custom software development services available individually or custom-scoped for your business.
        </p>
      </div>

      {/* Individual Services Section */}
      <div className="w-full">

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {individualServices.map(({ idx, emoji, title, price, desc, path, glowHex }) => (
            <div
              key={idx}
              onClick={() => navigateWithTransition(path, glowHex)}
              className="group relative flex flex-col p-8 rounded-2xl glass-card text-left transition-all duration-500 hover:scale-[1.02] cursor-pointer"
            >
              {/* Decorative symbol */}
              <div className="mb-5 text-white/20 text-xl font-light select-none leading-none">
                {emoji}
              </div>

              {/* Title */}
              <h4 className="font-display font-bold text-lg text-white mb-2 leading-snug">
                {title}
              </h4>

              {/* Price */}
              <p
                className="font-display font-black text-base mb-4 leading-tight"
                style={{
                  background: 'linear-gradient(90deg,#fff 0%,rgba(255,255,255,0.55) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {price}
              </p>

              {/* Divider */}
              <div className="w-full h-[1px] bg-white/8 mb-4" />

              {/* Description */}
              <p className="font-sans text-sm text-white/50 leading-relaxed font-light flex-1">
                {desc}
              </p>

              {/* Visit Service Link */}
              <div className="mt-5 flex items-center gap-1.5 text-sm font-bold text-white/70 group-hover:text-white transition-colors duration-300">
                <span>Explore Service</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>

              {/* Bottom glow line on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white/50 rounded-full transition-all duration-500 group-hover:w-2/3" />
            </div>
          ))}
        </div>
      </div>

      {/* Footer Custom Discussion */}
      <div className="mt-24 max-w-2xl mx-auto flex flex-col items-center">
        <div className="w-12 h-[1px] bg-white/20 mb-6" />
        <p className="font-sans text-white/50 text-sm md:text-base font-light leading-relaxed mb-4 text-center">
          Have custom features or complex enterprise requirements? We design tailored solutions specifically structured for your scaling needs, custom integrations, and branding systems.
        </p>
        <a
          href="mailto:graphoriacreativitydesign@gmail.com"
          className="inline-flex items-center gap-1.5 text-white hover:text-white transition-colors duration-300 font-semibold text-sm border-b border-white/30 pb-0.5 hover:border-white"
        >
          <span>Discuss Custom Requirements</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

    </div>
  );
}
