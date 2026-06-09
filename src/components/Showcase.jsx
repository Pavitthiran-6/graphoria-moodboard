import React, { useRef, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowUpRight, Layout, Scroll, Bell } from 'lucide-react';
import { PageTransitionContext } from '../App';

/* ─────────────────────────────────────────
   Jumping-letter component
   • animates only when `active` is true
   • overflow stays inside the parent via
     `display:inline-block` + no translateY overflow
───────────────────────────────────────── */
const JumpText = ({ text, active, className = '' }) => (
  <span
    className={`inline-flex flex-wrap overflow-hidden ${className}`}
    style={{ lineHeight: '1.3' }}
  >
    {text.split('').map((ch, i) => (
      <span
        key={i}
        style={{
          display: ch === ' ' ? 'inline' : 'inline-block',
          minWidth: ch === ' ' ? '0.35em' : undefined,
          animation: active ? `letterJump 1.2s ease-in-out infinite` : 'none',
          animationDelay: active ? `${i * 0.06}s` : '0s',
          willChange: 'transform',
        }}
      >
        {ch === ' ' ? '\u00A0' : ch}
      </span>
    ))}
  </span>
);

/* ────────────────────────────────────────────────── */

const Showcase = () => {
  const { navigateWithTransition } = useContext(PageTransitionContext);
  /* Professional 3D tilt (card 2) */
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


  const tiers = [
    {
      id: 'modern',
      title: 'Startup Launch Package',
      subtitle: 'Website + Mobile App',
      price: '₹80,000',
      description:
        'Perfect for startups and growing businesses looking for a strong digital presence with essential branding and marketing assets.',
      features: ['Standard Logo Design', 'Basic Packaging Design', '10 Social Media Creatives', 'Mobile Responsive Design', 'Basic SEO Setup'],
      icon: <Layout className="w-5 h-5 text-white" />,
      tag: 'Startup Friendly',
    },
    {
      id: 'professional',
      title: 'Business Growth Package',
      subtitle: 'Website + Mobile App',
      price: '₹1,20,000',
      description:
        'Designed for businesses ready to scale with premium branding, enhanced user experience, and higher-quality digital assets.',
      features: [
        'Premium Logo Design',
        'Premium Packaging Design',
        '20 Social Media Creatives',
        'Advanced UI/UX Experience',
        'Enhanced SEO Setup',
        'Priority Support',
        'Performance Optimization',
        'Conversion-Focused Design',
        'Brand Consistency Review',
      ],
      icon: <Scroll className="w-5 h-5 text-white" />,
      tag: 'Best Value',
    },
    {
      id: 'alert',
      title: 'Custom Quote',
      subtitle: 'Tailored to Your Needs',
      price: 'Let\'s Talk',
      description:
        'Have a unique vision that doesn\'t fit a standard tier? We build fully bespoke digital experiences scoped precisely around your requirements.',
      features: [
        'Scoped to Your Project',
        'Flexible Deliverables',
        'Direct Founder Access',
        'Priority Turnaround',
      ],
      icon: <Bell className="w-5 h-5 text-white" />,
      tag: 'Get In Touch',
    },
  ];

  return (
    <div className="w-full relative select-none z-10">
      {/* Keyframes */}
      <style>{`
        @keyframes letterJump {
          0%, 100% { transform: translateY(0)    scale(1)    rotate(0deg);  }
          25%       { transform: translateY(-8px) scale(1.12) rotate(-3deg); }
          50%       { transform: translateY(3px)  scale(0.96) rotate(2deg);  }
          75%       { transform: translateY(-4px) scale(1.05) rotate(-1deg); }
        }
        @keyframes pulseRing {
          0%   { transform: scale(0.85); opacity: 0.7; }
          70%  { transform: scale(1.35); opacity: 0;   }
          100% { transform: scale(0.85); opacity: 0;   }
        }
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0)    rotate(0deg);  }
          50%       { transform: translateY(-6px) rotate(8deg); }
        }
        @keyframes shimmerBar {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 10px rgba(255,255,255,0.1); }
          50%       { box-shadow: 0 0 28px rgba(255,255,255,0.3); }
        }
        @keyframes featureSlidein {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0);     }
        }
        @keyframes orbitDot {
          from { transform: rotate(0deg)   translateX(10px); }
          to   { transform: rotate(360deg) translateX(10px); }
        }
        @keyframes tagPop {
          0%, 100% { transform: scale(1); }
          40%       { transform: scale(1.08) rotate(-1deg); }
        }
        @keyframes rollingCar {
          0%   { transform: translateX(0)    rotate(0deg);   }
          40%  { transform: translateX(44px) rotate(360deg); }
          50%  { transform: translateX(44px) rotate(380deg); }
          90%  { transform: translateX(0px)  rotate(20deg);  }
          100% { transform: translateX(0)    rotate(0deg);   }
        }
        @keyframes wheelSpin {
          0%   { transform: rotate(0deg);   }
          40%  { transform: rotate(360deg); }
          90%  { transform: rotate(20deg);  }
          100% { transform: rotate(0deg);   }
        }
        @keyframes cardFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>

      {/* Decorative blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/5 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

        {/* ══ Card 1: Modern Style ══ */}
        <div 
          onClick={() => navigateWithTransition('/pricing', '#ffffff')}
          className="group relative flex flex-col justify-between p-8 rounded-2xl glass-card text-left transition-all duration-500 hover:scale-[1.02] cursor-pointer"
        >
          <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/60 tracking-wider font-semibold uppercase">
            {tiers[0].tag}
          </div>
          <div>
            <div className="mb-6">
              {tiers[0].icon}
            </div>
            <h3 className="font-display font-black text-2xl text-white mb-1">{tiers[0].title}</h3>
            <p className="text-xs font-semibold text-white/40 mb-4">{tiers[0].subtitle}</p>
            <div className="mb-6 flex items-baseline gap-1">
              <span className="font-display font-black text-4xl text-white">{tiers[0].price}</span>
              <span className="text-xs text-white/40">/ project</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed font-light mb-6">{tiers[0].description}</p>

            {/* Package breakdown */}
            <div className="mb-6 rounded-xl border border-white/8 bg-white/[0.03] overflow-hidden">
              <p className="px-4 pt-3 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Package Includes</p>
              <div className="px-4 pb-2 space-y-2">
                {[
                  { label: 'Website & Mobile App Development', price: '₹50,000' },
                  { label: 'Standard Logo Design',             price: '₹10,000' },
                  { label: 'Basic Packaging Design',           price: '₹12,000' },
                  { label: 'Business Stationeries',            price: '₹3,000'  },
                  { label: 'Social Media Poster Design (10×)', price: '₹10,000' },
                ].map(({ label, price }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-xs text-white/45 font-light">{label}</span>
                    <span className="text-xs text-white/55 font-semibold font-display tabular-nums">{price}</span>
                  </div>
                ))}
              </div>
              <div className="mx-4 h-[1px] bg-white/8 my-2" />
              <div className="px-4 pb-2 flex items-center justify-between">
                <span className="text-xs text-white/40 font-light">Individual Total</span>
                <span className="text-xs text-white/50 font-semibold font-display line-through tabular-nums">₹85,000</span>
              </div>
              <div className="px-4 pb-3 flex items-center justify-between">
                <span className="text-xs font-bold text-white/70 uppercase tracking-wider">You Save</span>
                <span className="text-xs font-black font-display text-white">₹5,000</span>
              </div>
            </div>

            <ul className="space-y-3.5 mb-6">
              {tiers[0].features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-4 h-4 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Explore Package Link */}
            <div className="mt-5 flex items-center gap-1.5 text-sm font-bold text-white/70 group-hover:text-white transition-colors duration-300">
              <span>Explore Package</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* ══ Card 2: Professional Style — 3D Tilt ══ */}
        <div
          ref={tiltCardRef}
          onMouseMove={handleMouseMove3D}
          onMouseLeave={handleMouseLeave3D}
          style={tiltStyle}
          onClick={() => navigateWithTransition('/pricing', '#ffffff')}
          className="group relative flex flex-col justify-between p-8 rounded-2xl glass-card text-left transition-all duration-200 border-white/20 bg-brand-charcoal/30 cursor-pointer"
        >
          <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-[10px] text-white tracking-wider font-semibold uppercase shadow-neon-glow">
            {tiers[1].tag}
          </div>
          <div>
            <div
              style={{ transform: `translate3d(${parallaxOffset.x * 0.5}px, ${parallaxOffset.y * 0.5}px, 0)` }}
              className="mb-6"
            >
              {tiers[1].icon}
            </div>
            <div style={{ transform: `translate3d(${parallaxOffset.x * 0.3}px, ${parallaxOffset.y * 0.3}px, 0)` }}>
              <h3 className="font-display font-black text-2xl text-white mb-1">{tiers[1].title}</h3>
              <p className="text-xs font-semibold text-white/40 mb-4">{tiers[1].subtitle}</p>
            </div>
            <div
              style={{ transform: `translate3d(${parallaxOffset.x * 0.4}px, ${parallaxOffset.y * 0.4}px, 0)` }}
              className="mb-6 flex items-baseline gap-1"
            >
              <span className="font-display font-black text-4xl text-white text-glow">{tiers[1].price}</span>
              <span className="text-xs text-white/40">/ project</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed font-light mb-6">{tiers[1].description}</p>

            {/* Package breakdown */}
            <div className="mb-6 rounded-xl border border-white/10 bg-white/[0.04] overflow-hidden">
              <p className="px-4 pt-3 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Package Includes</p>
              <div className="px-4 pb-2 space-y-2">
                {[
                  { label: 'Website & Mobile App Development', price: '₹65,000' },
                  { label: 'Premium Logo Design',              price: '₹20,000' },
                  { label: 'Premium Packaging Design',         price: '₹30,000' },
                  { label: 'Business Stationeries',            price: '₹5,000'  },
                  { label: 'Social Media Poster Design (20×)', price: '₹15,000' },
                ].map(({ label, price }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-xs text-white/50 font-light">{label}</span>
                    <span className="text-xs text-white/65 font-semibold font-display tabular-nums">{price}</span>
                  </div>
                ))}
              </div>
              <div className="mx-4 h-[1px] bg-white/10 my-2" />
              <div className="px-4 pb-2 flex items-center justify-between">
                <span className="text-xs text-white/45 font-light">Individual Total</span>
                <span className="text-xs text-white/55 font-semibold font-display line-through tabular-nums">₹1,35,000</span>
              </div>
              <div className="px-4 pb-3 flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase tracking-wider">You Save</span>
                <span className="text-xs font-black font-display text-white text-glow">₹15,000</span>
              </div>
            </div>

            <ul className="space-y-3.5 mb-6">
              {tiers[1].features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Explore Package Link */}
            <div className="mt-5 flex items-center gap-1.5 text-sm font-bold text-white/70 group-hover:text-white transition-colors duration-300">
              <span>Explore Package</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* ══ Card 3: Custom Quote — alert style ══ */}
        <div className="group relative flex flex-col justify-between p-8 rounded-2xl glass-card text-left transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/60 tracking-wider font-semibold uppercase">
            {tiers[2].tag}
          </div>

          <div>
            <div className="mb-6">
              {tiers[2].icon}
            </div>
            <h3 className="font-display font-black text-2xl text-white mb-1">{tiers[2].title}</h3>
            <p className="text-xs font-semibold text-white/40 mb-4">{tiers[2].subtitle}</p>
            <div className="mb-6 flex items-baseline gap-1">
              <span className="font-display font-black text-4xl text-white">{tiers[2].price}</span>
            </div>

            {/* Alert notice banner */}
            <div className="mb-6 flex items-start gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.04]">
              <Bell className="w-4 h-4 text-white/50 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-white/50 leading-relaxed font-light">
                This tier is scoped after a discovery call. Pricing and timeline are defined
                collaboratively based on your exact requirements.
              </p>
            </div>

            <p className="text-sm text-white/50 leading-relaxed font-light mb-8">{tiers[2].description}</p>
            <ul className="space-y-3.5 mb-8">
              {tiers[2].features.map((feature, i) => (
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
            href="mailto:graphoriacreativitydesign@gmail.com"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-display font-semibold text-sm transition-all duration-300 group-hover:bg-white group-hover:text-brand-black group-hover:border-white group-hover:shadow-neon-glow"
          >
            <span>Request a Quote</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* ══════════════════════════════════════════
          ADDITIONAL SERVICES
      ══════════════════════════════════════════ */}
      <div className="mt-20 w-full">

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
            Individual Services
          </h3>
          <p className="font-sans text-white/50 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Standalone creative, branding, animation, and development services available individually
            or as part of a complete project.
          </p>
      </div>

      {/* Services CTA button */}
      <div className="flex justify-center py-6">
        <button
          onClick={() => navigateWithTransition('/pricing', '#ffffff')}
          className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-display font-bold text-base bg-white text-black transition-all duration-300 hover:scale-[1.03] shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        >
          <span>Explore All Services & Pricing</span>
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </div>
      <div className="mt-16 max-w-2xl mx-auto flex flex-col items-center">
        <div className="w-12 h-[1px] bg-white/20 mb-6" />
        <p className="font-sans text-white/50 text-sm md:text-base font-light leading-relaxed mb-4 text-center">
          Have custom features or complex enterprise requirements? We design tailored solutions
          specifically structured for your scaling needs, custom integrations, and branding systems.
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
};

export default Showcase;
