import React, { useRef, useState } from 'react';
import { Check, ArrowUpRight, Layout, Scroll, Clapperboard } from 'lucide-react';

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

  /* Animation-card hover state (for jump trigger) */
  const [animCardHovered, setAnimCardHovered] = useState(false);

  const tiers = [
    {
      id: 'modern',
      title: 'Modern Style',
      subtitle: 'Website + Mobile App',
      price: '₹45,000',
      description:
        'Clean layouts tailored for agile startups wanting high speed and visual excellence.',
      features: ['Minimal Design', 'Fast Performance', 'Modern UI', 'Startup Friendly'],
      icon: <Layout className="w-5 h-5 text-white" />,
      tag: 'Startup Friendly',
    },
    {
      id: 'professional',
      title: 'Professional Style',
      subtitle: 'Website + Mobile App',
      price: '₹60,000',
      description:
        'Sophisticated brand frameworks and advanced UX structures for scaled firms.',
      features: [
        'Premium Design System',
        'Advanced UX',
        'Brand Identity',
        'Professional Animations',
      ],
      icon: <Scroll className="w-5 h-5 text-white" />,
      tag: 'Best Value',
    },
    {
      id: 'animation',
      title: 'Animation Style',
      subtitle: 'Website + Mobile App',
      price: '₹75,000+',
      description:
        'Cinematic storytelling with bespoke fluid interactions, custom shaders, and rich motion graphics.',
      features: [
        'Premium Motion Design',
        'Storytelling Experience',
        'Advanced Interactions',
        'Luxury Brand Feel',
      ],
      icon: <Clapperboard className="w-5 h-5 text-white" />,
      tag: 'Cinematic',
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
      `}</style>

      {/* Decorative blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/5 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

        {/* ══ Card 1: Modern Style ══ */}
        <div className="group relative flex flex-col justify-between p-8 rounded-2xl glass-card text-left transition-all duration-500 hover:scale-[1.02]">
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
            <p className="text-sm text-white/50 leading-relaxed font-light mb-8">{tiers[0].description}</p>
            <ul className="space-y-3.5 mb-8">
              {tiers[0].features.map((feature, i) => (
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
            href="https://www.magnific.com/free-photos-vectors/food-website-design"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-display font-semibold text-sm transition-all duration-300 group-hover:bg-white group-hover:text-brand-black group-hover:border-white group-hover:shadow-neon-glow"
          >
            <span>Explore Modern Tier</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* ══ Card 2: Professional Style — 3D Tilt ══ */}
        <div
          ref={tiltCardRef}
          onMouseMove={handleMouseMove3D}
          onMouseLeave={handleMouseLeave3D}
          style={tiltStyle}
          className="group relative flex flex-col justify-between p-8 rounded-2xl glass-card text-left transition-all duration-200 border-white/20 bg-brand-charcoal/30"
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
            <p className="text-sm text-white/50 leading-relaxed font-light mb-8">{tiers[1].description}</p>
            <ul className="space-y-3.5 mb-8">
              {tiers[1].features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="https://wildgrain.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ transform: `translate3d(${parallaxOffset.x * 0.2}px, ${parallaxOffset.y * 0.2}px, 0)` }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-brand-black border border-white font-display font-bold text-sm transition-all duration-300 hover:shadow-neon-glow-strong"
          >
            <span>Build Professional</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* ══ Card 3: Animation Style — hover-activated jump letters ══ */}
        <div
          className="group relative flex flex-col justify-between p-8 rounded-2xl glass-card text-left overflow-hidden"
          style={{ animation: 'glowPulse 3s ease-in-out infinite' }}
          onMouseEnter={() => setAnimCardHovered(true)}
          onMouseLeave={() => setAnimCardHovered(false)}
        >
          {/* Tag badge — pops gently */}
          <div
            className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-[10px] text-white/70 tracking-wider font-semibold uppercase"
            style={{ animation: animCardHovered ? 'tagPop 1.6s ease-in-out infinite' : 'none' }}
          >
            {tiers[2].tag}
          </div>

          <div>
            {/* Icon with pulse rings — only on hover */}
            <div className="relative inline-flex mb-6">
              <div
                style={{
                  animation: animCardHovered
                    ? 'rollingCar 2s cubic-bezier(0.45,0,0.55,1) infinite'
                    : 'none',
                }}
              >
                <Clapperboard
                  className="w-6 h-6 text-white"
                  style={{
                    animation: animCardHovered
                      ? 'wheelSpin 2s cubic-bezier(0.45,0,0.55,1) infinite'
                      : 'none',
                  }}
                />
              </div>
            </div>

            {/* ── Jumping title (hover only) ── */}
            <div className="mb-1 overflow-hidden">
              <JumpText
                text="Animation Style"
                active={animCardHovered}
                className="font-display font-black text-2xl text-white"
              />
            </div>

            <p className="text-xs font-semibold text-white/40 mb-4">{tiers[2].subtitle}</p>

            {/* Shimmer price on hover */}
            <div className="mb-6 flex items-baseline gap-1">
              <span
                className="font-display font-black text-4xl"
                style={
                  animCardHovered
                    ? {
                        background:
                          'linear-gradient(90deg,#fff 0%,#999 40%,#fff 60%,#999 100%)',
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        animation: 'shimmerBar 2s linear infinite',
                      }
                    : { color: '#fff' }
                }
              >
                {tiers[2].price}
              </span>
              <span className="text-xs text-white/40">/ starting</span>
            </div>

            <p className="text-sm text-white/50 leading-relaxed font-light mb-8">
              {tiers[2].description}
            </p>

            {/* Feature list — slide in on hover */}
            <ul className="space-y-3.5 mb-8">
              {tiers[2].features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-white/80"
                  style={
                    animCardHovered
                      ? {
                          animation: 'featureSlidein 0.5s ease both',
                          animationDelay: `${i * 0.1}s`,
                        }
                      : {}
                  }
                >
                  <div className="w-4 h-4 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-white" />
                    </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA — jumping text on hover, shimmer sweep */}
          <a
            href="https://www.landing.love/categories/food-drink/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-display font-bold text-sm overflow-hidden transition-all duration-300 group-hover:bg-white group-hover:text-brand-black group-hover:border-white group-hover:shadow-neon-glow"
          >
            {/* shimmer sweep on hover */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <JumpText text="Commission Cinema" active={animCardHovered} className="relative z-10" />
            <ArrowUpRight
              className="w-4 h-4 relative z-10"
              style={{ animation: animCardHovered ? 'floatIcon 1.5s ease-in-out infinite' : 'none' }}
            />
          </a>
        </div>

      </div>

      {/* Footnote */}
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
