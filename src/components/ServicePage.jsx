import React, { useRef, useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageTransitionContext } from '../App';
import { Check, ArrowUpRight, ArrowLeft, Bell, Layout, Scroll } from 'lucide-react';
import FlowArt, { FlowSection } from './ui/story-scroll';

const serviceData = {
  'logo-design': {
    title: ['LOGO', 'DESIGN'],
    subtitle: 'Professional logo creation and brand identity development.',
    glowColor: '168, 85, 247', // Purple
    glowName: 'purple',
    cards: [
      {
        tag: 'Starter Logo Package',
        title: 'Starter Logo',
        price: '₹3,000 – ₹10,000',
        subtitle: 'For new startups',
        description: 'Perfect for startups and emerging projects that need a professional brand mark to get started.',
        features: [
          '2 Logo Concepts',
          'Basic Brand Guidelines',
          'Vector Files',
          'Social Media Logo Variants',
          '3 Revisions'
        ]
      },
      {
        tag: 'Premium Brand Identity',
        title: 'Premium Brand',
        price: '₹25,000',
        subtitle: 'Complete identity system',
        highlighted: true,
        description: 'A comprehensive brand transformation containing everything you need to position your company at a premium tier.',
        features: [
          '5 Logo Concepts',
          'Complete Brand Identity',
          'Color Palette System',
          'Typography Guidelines',
          'Social Media Brand Kit',
          'Marketing Assets',
          'Unlimited Revisions'
        ]
      },
      {
        tag: 'Custom Quote',
        title: 'Custom Brand Identity',
        price: 'Let\'s Talk',
        subtitle: 'Fully bespoke scoping',
        isCustom: true,
        description: 'Need dynamic logos, global trademark guidelines, or sub-brand architectures? We design enterprise-scale branding systems.',
        features: [
          'Bespoke Visual Systems',
          'Sub-brand Architectures',
          'Global Trademark Support',
          'Direct Design Lead Collaboration'
        ]
      }
    ]
  },
  'packaging-design': {
    title: ['PACKAGING', 'DESIGN'],
    subtitle: 'Creative product packaging designed for strong brand presence.',
    glowColor: '249, 115, 22', // Orange
    glowName: 'orange',
    cards: [
      {
        tag: 'Standard Packaging',
        title: 'Standard Package',
        price: '₹5,000 – ₹20,000',
        subtitle: 'Single product launch',
        description: 'Professional visual design for a single product line, fully prepared for commercial print production.',
        features: [
          'Single Product Package',
          'Print Ready Files',
          'Product Mockups',
          '3 Revisions'
        ]
      },
      {
        tag: 'Premium Packaging System',
        title: 'Premium Packaging',
        price: '₹38,000',
        subtitle: 'Multiple variants & system',
        highlighted: true,
        description: 'Complete packaging system designed for high-retail shelf impact, complete variant layouts, and optimized production files.',
        features: [
          'Multiple Product Variants',
          'Retail Shelf Optimization',
          'Marketing Mockups',
          'Print Production Files',
          'Packaging Strategy',
          'Unlimited Revisions'
        ]
      },
      {
        tag: 'Custom Quote',
        title: 'Custom Product Packaging',
        price: 'Let\'s Talk',
        subtitle: 'Bespoke box geometries',
        isCustom: true,
        description: 'For unique structures, eco-friendly materials sourcing, complex production finishes, and large-scale industrial line-ups.',
        features: [
          'Custom Geometric Structures',
          'Premium Production Finishes',
          'Unboxing Experience Scoping',
          'Eco-Material Consultation'
        ]
      }
    ]
  },
  'business-stationeries': {
    title: ['BUSINESS', 'STATIONERIES'],
    subtitle: 'Business cards, letterheads, invoices, envelopes, and corporate materials.',
    glowColor: '59, 130, 246', // Blue
    glowName: 'blue',
    cards: [
      {
        tag: 'Essential Stationery Kit',
        title: 'Essential Kit',
        price: '₹2,000 – ₹5,000',
        subtitle: 'Core brand touchpoints',
        description: 'Establish cohesive client touchpoints with clean, high-quality collateral for day-to-day operations.',
        features: [
          'Business Card',
          'Letterhead',
          'Email Signature',
          'Basic Brand Assets'
        ]
      },
      {
        tag: 'Corporate Identity Kit',
        title: 'Corporate Kit',
        price: '₹7,000',
        subtitle: 'Complete corporate suite',
        highlighted: true,
        description: 'A comprehensive kit designed for established teams looking to project authority across all correspondence channels.',
        features: [
          'Business Card',
          'Letterhead',
          'Invoice Design',
          'Envelope Design',
          'Presentation Folder',
          'Email Signature System'
        ]
      },
      {
        tag: 'Custom Quote',
        title: 'Bespoke Corporate Package',
        price: 'Let\'s Talk',
        subtitle: 'Enterprise-wide kits',
        isCustom: true,
        description: 'Tailored for large corporations requiring custom presentation decks, multi-entity systems, signage designs, and style guides.',
        features: [
          'Multi-Entity Systems',
          'Custom Pitch Decks',
          'Corporate Signage Layouts',
          'Specialty Printing Specs'
        ]
      }
    ]
  },
  'social-media-design': {
    title: ['SOCIAL', 'MEDIA DESIGN'],
    subtitle: 'Marketing creatives and promotional designs for social platforms.',
    glowColor: '236, 72, 153', // Pink
    glowName: 'pink',
    cards: [
      {
        tag: 'Starter Social Package',
        title: 'Starter Social',
        price: '₹500 – ₹1,500 per post',
        subtitle: 'Essential feed designs',
        description: 'Launch your profiles with custom templates and clean visual compositions designed for initial engagement.',
        features: [
          '10 Static Posts',
          'Basic Branding',
          'Feed Design',
          'Content Templates'
        ]
      },
      {
        tag: 'Growth Social Package',
        title: 'Growth Social',
        price: '₹20,000',
        subtitle: 'Campaign scaling',
        highlighted: true,
        description: 'Premium designs crafted to establish authority, expand digital reach, and drive direct lead conversion campaigns.',
        features: [
          '30 Premium Posts',
          'Story Designs',
          'Campaign Creatives',
          'Marketing Templates',
          'Advanced Visual Direction'
        ]
      },
      {
        tag: 'Custom Quote',
        title: 'Social Media Strategy & Art',
        price: 'Let\'s Talk',
        subtitle: 'Bespoke monthly retainer',
        isCustom: true,
        description: 'Dedicated campaign production, high-fidelity custom reels, 3D post assets, and complete brand profile takeovers.',
        features: [
          'Video Retainers (Reels/Shorts)',
          'Monthly Creative Direction',
          'Interactive Story Series',
          'Custom 3D Social Assets'
        ]
      }
    ]
  },
  '3d-animation': {
    title: ['3D', 'ANIMATION'],
    subtitle: 'High-quality 3D animation for products, brands, and promotional content.',
    glowColor: '6, 182, 212', // Cyan
    glowName: 'cyan',
    cards: [
      {
        tag: 'Product Showcase Animation',
        title: 'Product Showcase',
        price: '₹55,000 – ₹85,000',
        subtitle: 'High-fidelity render',
        description: 'Perfect for displaying complex physical designs, internal features, and initial brand presentations.',
        features: [
          '15 Second Animation',
          'Product Reveal',
          'HD Export',
          'Commercial Usage'
        ]
      },
      {
        tag: 'Premium 3D Commercial',
        title: 'Premium Commercial',
        price: '₹1,00,000',
        subtitle: 'Cinematic brand video',
        highlighted: true,
        description: 'Bespoke 3D brand film detailing core features with advanced lighting, studio physics simulations, and visual effects.',
        features: [
          '30-60 Second Animation',
          'Advanced Lighting',
          'Visual Effects',
          'Cinematic Rendering',
          'Multiple Camera Angles',
          'Marketing Ready Assets'
        ]
      },
      {
        tag: 'Custom Quote',
        title: 'CGI & VFX Scale',
        price: 'Let\'s Talk',
        subtitle: 'Large scope projects',
        isCustom: true,
        description: 'For complex environmental design, extensive character animations, physics modeling, and long-form brand stories.',
        features: [
          'Full-scale CGI Environments',
          'Character Rigging & Motion',
          'Sound design and mix sync',
          'Ultra-high 4K/8K Deliverables'
        ]
      }
    ]
  },
  'product-ad-animation': {
    title: ['PRODUCT AD', 'ANIMATION'],
    subtitle: 'Motion graphics and advertising videos designed to increase engagement.',
    glowColor: '239, 68, 68', // Red
    glowName: 'red',
    cards: [
      {
        tag: 'Starter Ad Video',
        title: 'Starter Ad',
        price: '₹30,000 – ₹80,000',
        subtitle: 'Social optimization',
        description: 'Dynamic visual cuts highlighting key features of your physical product. Perfect for digital distribution.',
        features: [
          '15-30 Second Video',
          'Motion Graphics',
          'Product Highlights',
          'Social Media Format'
        ]
      },
      {
        tag: 'Premium Marketing Ad',
        title: 'Premium Marketing',
        price: '₹80,000',
        subtitle: 'Campaign main creative',
        highlighted: true,
        description: 'Premium advertising film crafted to convey emotion, tell a story, and directly drive sales and engagement.',
        features: [
          '30-60 Second Commercial',
          'Storytelling Structure',
          'Motion Graphics',
          'Multiple Deliverables',
          'Marketing Campaign Assets'
        ]
      },
      {
        tag: 'Custom Quote',
        title: 'Enterprise Campaign',
        price: 'Let\'s Talk',
        subtitle: 'Full campaign suite',
        isCustom: true,
        description: 'Omni-channel production with voiceover coordination, localization, multiple aspect ratios, and campaign testing variants.',
        features: [
          'Multilingual Deliverables',
          'Split-testing Variant Edits',
          'Broadcasting Quality Audio',
          'Extended Commercial Licensing'
        ]
      }
    ]
  },
  'web-mobile-development': {
    title: ['WEBSITE & MOBILE', 'DEVELOPMENT'],
    subtitle: 'Custom web and mobile applications built with modern technologies.',
    glowColor: '255, 255, 255', // White/Silver
    glowName: 'white',
    cards: [
      {
        tag: 'Startup Launch Package',
        title: 'Startup Launch',
        price: '₹45,000 +',
        subtitle: 'Complete starter system',
        description: 'Professional, high-performance website and mobile application development to launch your digital presence.',
        features: [
          'Custom Website Development',
          'Custom Mobile App Development',
          'Fully Responsive Layouts',
          'Standard UI/UX Design',
          'Basic SEO Optimization',
          '2 Revisions',
          'Deployment & Support'
        ]
      },
      {
        tag: 'Business Growth Package',
        title: 'Business Growth',
        price: '₹65,000 +',
        subtitle: 'Advanced product suite',
        highlighted: true,
        description: 'Our flagship digital development plan including high-fidelity custom design systems, native web/app elements, database scale-up, and SEO growth kits.',
        features: [
          'Premium Website Development',
          'Premium Mobile App Development',
          'Advanced Custom UI/UX',
          'Performance & Speed Tuning',
          'Database Integration',
          'Custom API Architectures',
          'SEO Strategy & Analytics',
          '3 Revisions',
          'Priority 24/7 Support'
        ]
      },
      {
        tag: 'Enterprise Custom Solution',
        title: 'Enterprise Custom',
        price: 'Custom',
        subtitle: 'Bespoke applications',
        isCustom: true,
        description: 'Engineered for high scaling, specific enterprise platforms, marketplaces, ERP portals, and tailored AI model integrations.',
        features: [
          'SaaS Platforms',
          'Marketplace Applications',
          'ERP Systems',
          'AI Integrations',
          'Enterprise Software',
          'Custom Scalable Solutions'
        ]
      }
    ]
  }
};

export default function ServicePage() {
  const { serviceId } = useParams();
  const data = serviceData[serviceId];
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
    // Scroll to top when path changes
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-4xl font-display font-black mb-4">Service Not Found</h1>
        <p className="text-white/60 mb-8 max-w-md">The service page you are looking for does not exist.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  const glowColorRaw = `rgba(${data.glowColor}, 0.15)`;
  const glowBorder = `rgba(${data.glowColor}, 0.25)`;
  const glowText = `rgba(${data.glowColor}, 0.8)`;

  // Determine section background colors - 21 unique solid colors across all pages and sections
  const getSectionBgs = (glowName) => {
    switch (glowName) {
      case 'purple':
        return { hero: '#1e1b4b', packages: '#0f172a', cta: '#311042' };
      case 'orange':
        return { hero: '#3b0764', packages: '#1c1917', cta: '#451a03' };
      case 'blue':
        return { hero: '#172554', packages: '#022c22', cta: '#1e3a8a' };
      case 'pink':
        return { hero: '#4c0519', packages: '#180020', cta: '#831843' };
      case 'cyan':
        return { hero: '#042f2e', packages: '#030712', cta: '#164e63' };
      case 'red':
        return { hero: '#450a0a', packages: '#27272a', cta: '#7f1d1d' };
      case 'white':
      default:
        return { hero: '#062013', packages: '#020617', cta: '#581c87' };
    }
  };
  const sectionBgs = getSectionBgs(data.glowName);

  return (
    <div className="bg-[#050505] text-white min-h-screen w-full relative">
      
      {/* Absolute Header Widget floating over FlowArt */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-50 flex items-center gap-3">
        {/* Back Button */}
        <button
          onClick={() => navigateWithTransition('/')}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 font-semibold text-xs backdrop-blur-md shadow-lg"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back</span>
        </button>

        {/* Logo Badge */}
        <img 
          src="/logo.png" 
          onClick={() => navigateWithTransition('/')}
          className="h-16 md:h-20 w-auto cursor-pointer transition-transform duration-300 hover:scale-105" 
          alt="Graphoria Logo" 
        />
      </div>

      <FlowArt aria-label={`${data.title.join(' ')} Showcase`}>
        
        {/* SECTION 01: Hero Section */}
        <FlowSection
          aria-label="Service Introduction"
          style={{ backgroundColor: sectionBgs.hero, color: '#ffffff' }}
        >
          <div className="flex items-center gap-2 mb-4 mt-14 md:mt-0">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: `rgb(${data.glowColor})` }} />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">01 — Service Details</p>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          
          <div>
            <h1
              className="text-[clamp(2.2rem,11vw,12rem)] md:text-[clamp(3.5rem,11vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight font-display text-glow-custom"
              style={{
                textShadow: `0 0 40px rgba(${data.glowColor}, 0.2)`
              }}
            >
              {data.title[0]}
              {data.title[1] && (
                <>
                  <br />
                  <span className="text-white/80">{data.title[1]}</span>
                </>
              )}
            </h1>
          </div>
          
          <hr className="my-[2vw] border-none border-t border-white/20" />
          
          <p className="max-w-[45ch] text-[clamp(1.1rem,2.2vw,1.8rem)] font-normal leading-relaxed text-white/90">
            {data.subtitle}
          </p>
          
          <hr className="my-[2vw] border-none border-t border-white/20" />
          
          <p className="max-w-[60ch] text-[clamp(0.85rem,1.5vw,1.15rem)] font-light leading-relaxed text-white/60">
            Explore our curated packages built exactly on our agency standards. All deliverable timelines are scheduled after onboarding to guarantee precise outputs. Scroll down to view service tiers.
          </p>
        </FlowSection>

        {/* SECTION 02: Service Packages */}
        <FlowSection
          aria-label="Pricing Packages"
          style={{ backgroundColor: sectionBgs.packages, color: '#ffffff' }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: `rgb(${data.glowColor})` }} />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">02 — Service Packages</p>
            </div>
            <p className="text-[10px] font-semibold tracking-widest text-white/30 uppercase">Packages / Scopes</p>
          </div>
          {/* Pricing grid - 3 columns if website/app service, 2 centered columns otherwise */}
          <div className={
            serviceId === 'web-mobile-development' 
              ? "grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch w-full py-6 relative z-10"
              : "grid grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto gap-8 items-stretch w-full py-6 relative z-10"
          }>
            
            {/* Dynamic decorative blur matching service accent */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full filter blur-[130px] pointer-events-none -z-10" 
              style={{ backgroundColor: glowColorRaw }}
            />

            {/* Card 1: Starter Package */}
            <div className="group relative flex flex-col justify-between p-8 rounded-2xl glass-card text-left transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/60 tracking-wider font-semibold uppercase">
                {data.cards[0].tag}
              </div>
              <div>
                <div className="mb-6 mt-2">
                  <Layout className="w-5 h-5 text-white/40" />
                </div>
                <h3 className="font-display font-black text-2xl text-white mb-1">{data.cards[0].title}</h3>
                <p className="text-xs font-semibold text-white/40 mb-4">{data.cards[0].subtitle}</p>
                
                <div className="mb-6 flex flex-col justify-start">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display font-black text-3xl md:text-4xl text-white">{data.cards[0].price}</span>
                    <span className="text-xs text-white/40">
                      {serviceId === 'social-media-design' ? '' : '/ project'}
                    </span>
                  </div>
                  {serviceId !== 'web-mobile-development' && data.cards[1] && (
                    <div className="text-xs text-white/40 mt-1.5 flex items-center gap-1.5 flex-wrap">
                      <span>Original Premium Value:</span>
                      <span className="line-through font-semibold text-white/60">{data.cards[1].price}</span>
                    </div>
                  )}
                </div>

                <p className="text-sm text-white/50 leading-relaxed font-light mb-8">{data.cards[0].description}</p>
                
                <ul className="space-y-3.5 mb-2">
                  {data.cards[0].features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                      <div className="w-4 h-4 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}

                  {serviceId !== 'web-mobile-development' && data.cards[1] && (
                    <>
                      <div className="my-4 border-t border-white/10 pt-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: `rgb(${data.glowColor})` }}>
                          + Included Premium Features
                        </p>
                      </div>
                      {data.cards[1].features
                        .filter(f => !data.cards[0].features.includes(f))
                        .map((feature, i) => (
                          <li key={`prem-${i}`} className="flex items-center gap-3 text-sm text-white/90 font-medium">
                            <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `rgba(${data.glowColor}, 0.2)` }}>
                              <Check className="w-2.5 h-2.5" style={{ color: `rgb(${data.glowColor})` }} />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))
                      }
                    </>
                  )}
                </ul>
              </div>
            </div>

            {/* Card 2: Premium Package (Highlighted with accent glow and 3D tilt) - Keep only for Web & App Service */}
            {serviceId === 'web-mobile-development' && (
              <div
                ref={tiltCardRef}
                onMouseMove={handleMouseMove3D}
                onMouseLeave={handleMouseLeave3D}
                style={{
                  ...tiltStyle,
                  borderColor: glowBorder,
                  boxShadow: `0 0 25px rgba(${data.glowColor}, 0.15)`
                }}
                className="group relative flex flex-col justify-between p-8 rounded-2xl glass-card text-left transition-all duration-200 bg-brand-charcoal/30 border-2"
              >
                <div 
                  className="absolute top-6 right-6 px-3 py-1 rounded-full text-[10px] text-white tracking-wider font-semibold uppercase border"
                  style={{
                    backgroundColor: `rgba(${data.glowColor}, 0.25)`,
                    borderColor: glowBorder,
                    boxShadow: `0 0 10px rgba(${data.glowColor}, 0.2)`
                  }}
                >
                  {data.cards[1].tag}
                </div>
                
                <div>
                  <div
                    style={{ transform: `translate3d(${parallaxOffset.x * 0.5}px, ${parallaxOffset.y * 0.5}px, 0)` }}
                    className="mb-6 mt-2"
                  >
                    <Scroll className="w-5 h-5" style={{ color: glowText }} />
                  </div>
                  
                  <div style={{ transform: `translate3d(${parallaxOffset.x * 0.3}px, ${parallaxOffset.y * 0.3}px, 0)` }}>
                    <h3 className="font-display font-black text-2xl text-white mb-1">{data.cards[1].title}</h3>
                    <p className="text-xs font-semibold text-white/40 mb-4">{data.cards[1].subtitle}</p>
                  </div>
                  
                  <div
                    style={{ transform: `translate3d(${parallaxOffset.x * 0.4}px, ${parallaxOffset.y * 0.4}px, 0)` }}
                    className="mb-6 flex items-baseline gap-1"
                  >
                    <span className="font-display font-black text-4xl text-white text-glow" style={{ textShadow: `0 0 10px rgba(${data.glowColor}, 0.4)` }}>
                      {data.cards[1].price}
                    </span>
                    <span className="text-xs text-white/40">/ project</span>
                  </div>
                  
                  <p className="text-sm text-white/50 leading-relaxed font-light mb-8">{data.cards[1].description}</p>
                  
                  <ul className="space-y-3.5 mb-2">
                    {data.cards[1].features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `rgba(${data.glowColor}, 0.25)` }}>
                          <Check className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Card 3: Custom Quote */}
            <div className="group relative flex flex-col justify-between p-8 rounded-2xl glass-card text-left transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/60 tracking-wider font-semibold uppercase">
                {data.cards[2].tag}
              </div>

              <div>
                <div className="mb-6 mt-2">
                  <Bell className="w-5 h-5 text-white/40" />
                </div>
                <h3 className="font-display font-black text-2xl text-white mb-1">{data.cards[2].title}</h3>
                <p className="text-xs font-semibold text-white/40 mb-4">{data.cards[2].subtitle}</p>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="font-display font-black text-4xl text-white">{data.cards[2].price}</span>
                </div>

                {/* Alert notice banner */}
                <div className="mb-6 flex items-start gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.04]">
                  <Bell className="w-4 h-4 text-white/50 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-white/50 leading-relaxed font-light">
                    {data.glowName === 'white' ? 'This tier is bespoke. Pricing and details are tailored to your requirements.' : 'This tier is scoped collaboratively on discovery calls based on your design specs.'}
                  </p>
                </div>

                <p className="text-sm text-white/50 leading-relaxed font-light mb-8">{data.cards[2].description}</p>
                
                <ul className="space-y-3.5 mb-8">
                  {data.cards[2].features.map((feature, i) => (
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
                href={`mailto:graphoriacreativitydesign@gmail.com?subject=Inquiry for ${data.cards[2].title}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-display font-semibold text-sm transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white"
                style={{
                  '--hover-shadow': `0 0 20px rgba(${data.glowColor}, 0.3)`
                }}
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
          style={{ backgroundColor: sectionBgs.cta, color: '#ffffff' }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: `rgb(${data.glowColor})` }} />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">03 — Launch Project</p>
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
              Begin?
            </h2>
          </div>
          
          <hr className="my-[2vw] border-none border-t border-white/20" />
          
          <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed text-white/80">
            Ready to start your project? Connect with us to establish your brand presence and get custom assets designed to stand out.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href={`mailto:graphoriacreativitydesign@gmail.com?subject=Project Startup - ${data.title.join(' ')}`}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-display font-bold text-base bg-white text-black transition-all duration-300 hover:scale-[1.03]"
              style={{
                boxShadow: `0 0 25px rgba(${data.glowColor}, 0.25)`
              }}
            >
              <span>Launch {data.title.join(' ')}</span>
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
