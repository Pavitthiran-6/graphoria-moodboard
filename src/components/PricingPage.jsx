import React, { useRef, useState, useEffect, useContext } from 'react';
import { PageTransitionContext } from '../App';
import { Check, ArrowUpRight, ArrowLeft, Bell, Layout, Scroll } from 'lucide-react';

const packageData = [
  {
    tag: 'Startup Friendly',
    title: 'Startup Launch Package',
    subtitle: 'Website + Mobile App',
    price: '₹80,000',
    description: 'Perfect for startups and growing businesses looking for a strong digital presence with essential branding and marketing assets.',
    features: [
      'Standard Logo Design',
      'Basic Packaging Design',
      '10 Social Media Creatives',
      'Mobile Responsive Design',
      'Basic SEO Setup'
    ],
    breakdown: [
      { label: 'Website & Mobile App Development', price: '₹50,000' },
      { label: 'Standard Logo Design',             price: '₹10,000' },
      { label: 'Basic Packaging Design',           price: '₹12,000' },
      { label: 'Business Stationeries',            price: '₹3,000'  },
      { label: 'Social Media Poster Design (10×)', price: '₹10,000' }
    ],
    originalTotal: '₹85,000',
    savings: '₹5,000'
  },
  {
    tag: 'Best Value',
    title: 'Business Growth Package',
    subtitle: 'Website + Mobile App',
    price: '₹1,20,000',
    description: 'Designed for businesses ready to scale with premium branding, enhanced user experience, and higher-quality digital assets.',
    features: [
      'Premium Logo Design',
      'Premium Packaging Design',
      '20 Social Media Creatives',
      'Advanced UI/UX Experience',
      'Enhanced SEO Setup',
      'Priority Support',
      'Performance Optimization',
      'Conversion-Focused Design',
      'Brand Consistency Review'
    ],
    breakdown: [
      { label: 'Website & Mobile App Development', price: '₹65,000' },
      { label: 'Premium Logo Design',              price: '₹20,000' },
      { label: 'Premium Packaging Design',         price: '₹30,000' },
      { label: 'Business Stationeries',            price: '₹5,000'  },
      { label: 'Social Media Poster Design (20×)', price: '₹15,000' }
    ],
    originalTotal: '₹1,35,000',
    savings: '₹15,000'
  },
  {
    tag: 'Get In Touch',
    title: 'Custom Quote',
    subtitle: 'Tailored to Your Needs',
    price: 'Let\'s Talk',
    description: 'Have a unique vision that doesn\'t fit a standard tier? We build fully bespoke digital experiences scoped precisely around your requirements.',
    features: [
      'Scoped to Your Project',
      'Flexible Deliverables',
      'Direct Founder Access',
      'Priority Turnaround'
    ]
  }
];

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

  // Professional 3D tilt state for Card 2
  const tiltCardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
  });
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove3D = (e) => {
    if (!tiltCardRef.current) return;
    const rect = tiltCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${((cy - y) / cy) * 12}deg) rotateY(${((x - cx) / cx) * 12}deg)`,
    });
    setParallaxOffset({ x: ((x - cx) / cx) * 15, y: ((y - cy) / cy) * 15 });
  };

  const handleMouseLeave3D = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: 'all 0.5s ease',
    });
    setParallaxOffset({ x: 0, y: 0 });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const glowColorRaw = 'rgba(255, 255, 255, 0.03)';
  const glowBorder = 'rgba(255, 255, 255, 0.15)';

  return (
    <div className="bg-[#050505] text-white min-h-screen w-full relative pt-6 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      
      {/* Premium Header/Navbar */}
      <header className="w-full flex items-center justify-between border-b border-white/10 pb-6 mb-16 pt-2">
        {/* Brand Logo */}
        <div 
          onClick={() => navigateWithTransition('/')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Logo Mark SVG */}
          <div className="w-10 h-10 rounded-xl bg-black/60 flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(0,223,102,0.15)] group-hover:border-white/20 transition-all duration-300">
            <svg viewBox="0 0 100 100" className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300">
              <path 
                d="M 0,40 C 0,15 15,0 40,0 L 95,0 C 95,15 85,25 70,25 L 40,25 C 30,25 25,30 25,40 L 25,70 C 25,85 15,95 0,95 Z" 
                fill="#00DF66"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-xl tracking-wider text-white leading-none">graphoria</span>
            <span className="text-[7.5px] font-semibold text-white/40 tracking-[3.5px] uppercase leading-none mt-1 group-hover:text-white/60 transition-colors duration-300">creativity design</span>
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigateWithTransition('/')}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 font-semibold text-xs backdrop-blur-md"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>
      </header>

      {/* Backdrop glows */}
      <div className="absolute top-44 left-1/4 -translate-x-1/2 w-[400px] h-[400px] bg-white/5 rounded-full filter blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-44 right-1/4 translate-x-1/2 w-[400px] h-[400px] bg-white/5 rounded-full filter blur-[150px] pointer-events-none -z-10" />

      {/* Hero Header */}
      <div className="mb-20 mt-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Core Packages</p>
        </div>
        <h1 className="font-display font-black text-4xl md:text-6xl text-white mb-6 uppercase tracking-tight">
          Brand Packages
        </h1>
        <p className="font-sans text-white/60 text-base md:text-lg font-light leading-relaxed">
          Complete, end-to-end roadmap packages designed to launch your startup or expand your business with premium branding, packaging, animation, and custom software development.
        </p>
      </div>

      {/* Packages Tiers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch w-full py-6 relative z-10 mb-24">
        
        {/* Card 1: Startup Launch */}
        <div className="group relative flex flex-col justify-between p-8 rounded-2xl glass-card text-left transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/60 tracking-wider font-semibold uppercase">
            {packageData[0].tag}
          </div>
          <div>
            <div className="mb-6 mt-2">
              <Layout className="w-5 h-5 text-white/40" />
            </div>
            <h3 className="font-display font-black text-2xl text-white mb-1">{packageData[0].title}</h3>
            <p className="text-xs font-semibold text-white/40 mb-4">{packageData[0].subtitle}</p>
            <div className="mb-6 flex items-baseline gap-1">
              <span className="font-display font-black text-4xl text-white">{packageData[0].price}</span>
              <span className="text-xs text-white/40">/ project</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed font-light mb-6">{packageData[0].description}</p>
            
            {/* Package breakdown */}
            <div className="mb-6 rounded-xl border border-white/8 bg-white/[0.03] overflow-hidden">
              <p className="px-4 pt-3 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Package Includes</p>
              <div className="px-4 pb-2 space-y-2">
                {packageData[0].breakdown.map(({ label, price }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-xs text-white/45 font-light">{label}</span>
                    <span className="text-xs text-white/55 font-semibold font-display tabular-nums">{price}</span>
                  </div>
                ))}
              </div>
              <div className="mx-4 h-[1px] bg-white/8 my-2" />
              <div className="px-4 pb-2 flex items-center justify-between">
                <span className="text-xs text-white/40 font-light">Individual Total</span>
                <span className="text-xs text-white/50 font-semibold font-display line-through tabular-nums">{packageData[0].originalTotal}</span>
              </div>
              <div className="px-4 pb-3 flex items-center justify-between">
                <span className="text-xs font-bold text-white/70 uppercase tracking-wider">You Save</span>
                <span className="text-xs font-black font-display text-white">{packageData[0].savings}</span>
              </div>
            </div>

            <ul className="space-y-3.5 mb-2">
              {packageData[0].features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-4 h-4 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card 2: Business Growth (Highlighted with 3D tilt) */}
        <div
          ref={tiltCardRef}
          onMouseMove={handleMouseMove3D}
          onMouseLeave={handleMouseLeave3D}
          style={{
            ...tiltStyle,
            borderColor: glowBorder,
            boxShadow: '0 0 25px rgba(255, 255, 255, 0.08)'
          }}
          className="group relative flex flex-col justify-between p-8 rounded-2xl glass-card text-left transition-all duration-200 bg-brand-charcoal/30 border-2"
        >
          <div 
            className="absolute top-6 right-6 px-3 py-1 rounded-full text-[10px] text-white tracking-wider font-semibold uppercase border"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: glowBorder,
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)'
            }}
          >
            {packageData[1].tag}
          </div>
          
          <div>
            <div
              style={{ transform: `translate3d(${parallaxOffset.x * 0.5}px, ${parallaxOffset.y * 0.5}px, 0)` }}
              className="mb-6 mt-2"
            >
              <Scroll className="w-5 h-5 text-white" />
            </div>
            
            <div style={{ transform: `translate3d(${parallaxOffset.x * 0.3}px, ${parallaxOffset.y * 0.3}px, 0)` }}>
              <h3 className="font-display font-black text-2xl text-white mb-1">{packageData[1].title}</h3>
              <p className="text-xs font-semibold text-white/40 mb-4">{packageData[1].subtitle}</p>
            </div>
            
            <div
              style={{ transform: `translate3d(${parallaxOffset.x * 0.4}px, ${parallaxOffset.y * 0.4}px, 0)` }}
              className="mb-6 flex items-baseline gap-1"
            >
              <span className="font-display font-black text-4xl text-white text-glow" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>
                {packageData[1].price}
              </span>
              <span className="text-xs text-white/40">/ project</span>
            </div>
            
            <p className="text-sm text-white/50 leading-relaxed font-light mb-6">{packageData[1].description}</p>
            
            {/* Package breakdown */}
            <div className="mb-6 rounded-xl border border-white/10 bg-white/[0.04] overflow-hidden">
              <p className="px-4 pt-3 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Package Includes</p>
              <div className="px-4 pb-2 space-y-2">
                {packageData[1].breakdown.map(({ label, price }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-xs text-white/50 font-light">{label}</span>
                    <span className="text-xs text-white/65 font-semibold font-display tabular-nums">{price}</span>
                  </div>
                ))}
              </div>
              <div className="mx-4 h-[1px] bg-white/10 my-2" />
              <div className="px-4 pb-2 flex items-center justify-between">
                <span className="text-xs text-white/45 font-light">Individual Total</span>
                <span className="text-xs text-white/55 font-semibold font-display line-through tabular-nums">{packageData[1].originalTotal}</span>
              </div>
              <div className="px-4 pb-3 flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase tracking-wider">You Save</span>
                <span className="text-xs font-black font-display text-white text-glow">{packageData[1].savings}</span>
              </div>
            </div>

            <ul className="space-y-3.5 mb-2">
              {packageData[1].features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}>
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card 3: Custom Quote */}
        <div className="group relative flex flex-col justify-between p-8 rounded-2xl glass-card text-left transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/60 tracking-wider font-semibold uppercase">
            {packageData[2].tag}
          </div>

          <div>
            <div className="mb-6 mt-2">
              <Bell className="w-5 h-5 text-white/40" />
            </div>
            <h3 className="font-display font-black text-2xl text-white mb-1">{packageData[2].title}</h3>
            <p className="text-xs font-semibold text-white/40 mb-4">{packageData[2].subtitle}</p>
            <div className="mb-6 flex items-baseline gap-1">
              <span className="font-display font-black text-4xl text-white">{packageData[2].price}</span>
            </div>

            {/* Alert notice banner */}
            <div className="mb-6 flex items-start gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.04]">
              <Bell className="w-4 h-4 text-white/50 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-white/50 leading-relaxed font-light">
                This tier is scoped collaboratively on discovery calls based on your specific requirements.
              </p>
            </div>

            <p className="text-sm text-white/50 leading-relaxed font-light mb-8">{packageData[2].description}</p>
            
            <ul className="space-y-3.5 mb-8">
              {packageData[2].features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-4 h-4 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={`mailto:graphoriacreativitydesign@gmail.com?subject=Inquiry for ${packageData[2].title}`}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-display font-semibold text-sm transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white"
          >
            <span>Request a Quote</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      <hr className="my-16 border-white/10" />

      {/* Individual Services Section */}
      <div className="w-full">
        {/* Section header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="w-6 h-[1px] bg-white/25" />
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
              Individual Services
            </p>
            <div className="w-6 h-[1px] bg-white/25" />
          </div>
          <h3 className="font-display font-black text-3xl md:text-4xl text-white mb-4 leading-tight">
            Individual Standalone Services
          </h3>
          <p className="font-sans text-white/50 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Standalone creative, branding, animation, and development services available individually or as part of a complete project.
          </p>
        </div>

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
