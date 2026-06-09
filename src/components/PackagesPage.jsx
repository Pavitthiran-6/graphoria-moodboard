import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { PageTransitionContext } from '../App';
import { Check, ArrowUpRight, ArrowLeft, Bell, Layout, Scroll } from 'lucide-react';
import FlowArt, { FlowSection } from './ui/story-scroll';

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

export default function PackagesPage() {
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

  const glowColorRaw = 'rgba(255, 255, 255, 0.05)';
  const glowBorder = 'rgba(255, 255, 255, 0.2)';

  return (
    <div className="bg-[#050505] text-white min-h-screen w-full relative">
      
      {/* Absolute Back Button floating over FlowArt */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-50">
        <button
          onClick={() => navigateWithTransition('/')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 font-medium text-xs backdrop-blur-md"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>
      </div>

      <FlowArt aria-label="Brand Packages Showcase">
        
        {/* SECTION 01: Hero Section */}
        <FlowSection
          aria-label="Brand Packages Introduction"
          style={{ backgroundColor: '#0b1329', color: '#ffffff' }}
        >
          <div className="flex items-center gap-2 mb-4 mt-14 md:mt-0">
            <span className="w-2 h-2 rounded-full bg-white" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">01 — Core Tiers</p>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          
          <div>
            <h1
              className="text-[clamp(2.2rem,11vw,12rem)] md:text-[clamp(3.5rem,11vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight font-display text-glow-custom"
              style={{
                textShadow: '0 0 40px rgba(255, 255, 255, 0.15)'
              }}
            >
              BRAND
              <br />
              <span className="text-white/80">PACKAGES</span>
            </h1>
          </div>
          
          <hr className="my-[2vw] border-none border-t border-white/20" />
          
          <p className="max-w-[45ch] text-[clamp(1.1rem,2.2vw,1.8rem)] font-normal leading-relaxed text-white/90">
            End-to-end design & digital packages combining branding, packaging, social creatives, and premium web & mobile development.
          </p>
          
          <hr className="my-[2vw] border-none border-t border-white/20" />
          
          <p className="max-w-[60ch] text-[clamp(0.85rem,1.5vw,1.15rem)] font-light leading-relaxed text-white/60">
            Choose a complete roadmap built to establish your authority in the market. Scroll down to review package options, breakdown of savings, and custom options.
          </p>
        </FlowSection>

        {/* SECTION 02: Package Options */}
        <FlowSection
          aria-label="Packages Details"
          style={{ backgroundColor: '#020617', color: '#ffffff' }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">02 — Packages & Breakdown</p>
            </div>
            <p className="text-[10px] font-semibold tracking-widest text-white/30 uppercase">Compare Packages</p>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/10" />

          {/* Pricing grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch w-full py-6 relative z-10">
            
            {/* Dynamic decorative blur */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full filter blur-[130px] pointer-events-none -z-10" 
              style={{ backgroundColor: glowColorRaw }}
            />

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
        </FlowSection>

        {/* SECTION 03: CTA Section */}
        <FlowSection
          aria-label="Call to Action"
          style={{ backgroundColor: '#2e1040', color: '#ffffff' }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-white" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">03 — Discuss Project</p>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          
          <div>
            <h2
              className="text-[clamp(3.5rem,11vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight font-display"
            >
              Ready
              <br />
              To
              <br />
              Grow?
            </h2>
          </div>
          
          <hr className="my-[2vw] border-none border-t border-white/20" />
          
          <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed text-white/80">
            Let's structure a roadmap that transforms your startup or business into a highly professional, scaling market leader.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href="mailto:graphoriacreativitydesign@gmail.com?subject=Package Setup Inquiry"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-display font-bold text-base bg-white text-black transition-all duration-300 hover:scale-[1.03]"
              style={{
                boxShadow: '0 0 25px rgba(255, 255, 255, 0.15)'
              }}
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
            
            <button
              onClick={() => navigateWithTransition('/')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display font-semibold text-base bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 text-white/80"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Moodboard</span>
            </button>
          </div>
        </FlowSection>

      </FlowArt>
    </div>
  );
}
