import React, { useRef, useState } from 'react';
import { Check, ArrowUpRight, Compass, Scroll, Hourglass } from 'lucide-react';

const Showcase = () => {
  // Professional 3D Tilt States and Refs
  const tiltCardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' });
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove3D = (e) => {
    if (!tiltCardRef.current) return;
    const card = tiltCardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Mouse coords relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Center point of card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation limits (e.g., max 15 degrees)
    const rotateX = ((centerY - y) / centerY) * 12; 
    const rotateY = ((x - centerX) / centerX) * 12;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    });

    // Move inner element relative to mouse (parallax effect)
    setParallaxOffset({
      x: ((x - centerX) / centerX) * 15,
      y: ((y - centerY) / centerY) * 15
    });
  };

  const handleMouseLeave3D = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: 'all 0.5s ease'
    });
    setParallaxOffset({ x: 0, y: 0 });
  };

  const tiers = [
    {
      id: 'modern',
      title: 'Modern Style',
      subtitle: 'Website + Mobile App',
      price: '₹45,000',
      description: 'Clean layouts tailored for agile startups wanting high speed and visual excellence.',
      features: ['Minimal Design', 'Fast Performance', 'Modern UI', 'Startup Friendly'],
      icon: <Compass className="w-5 h-5 text-brand-green" />,
      tag: 'Startup Friendly'
    },
    {
      id: 'professional',
      title: 'Professional Style',
      subtitle: 'Website + Mobile App',
      price: '₹60,000',
      description: 'Sophisticated brand frameworks and advanced UX structures for scaled firms.',
      features: ['Premium Design System', 'Advanced UX', 'Brand Identity', 'Professional Animations'],
      icon: <Scroll className="w-5 h-5 text-brand-green" />,
      tag: 'Best Value'
    },
    {
      id: 'animation',
      title: 'Animation Style',
      subtitle: 'Website + Mobile App',
      price: '₹75,000+',
      description: 'Cinematic storytelling with bespoke fluid interactions, custom shaders, and rich motion graphics.',
      features: ['Premium Motion Design', 'Storytelling Experience', 'Advanced Interactions', 'Luxury Brand Feel'],
      icon: <Hourglass className="w-5 h-5 text-brand-green" />,
      tag: 'Cinematic'
    }
  ];

  return (
    <div className="w-full relative select-none z-10">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-green/5 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Tiers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* Card 1: Modern Style - Glass Lift & Glow Border */}
        <div className="group relative flex flex-col justify-between p-8 rounded-2xl glass-card text-left transition-all duration-500 hover:scale-[1.02]">
          {/* Tag Badge */}
          <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/60 tracking-wider font-semibold uppercase">
            {tiers[0].tag}
          </div>

          <div>
            {/* Header */}
            <div className="w-12 h-12 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-brand-green group-hover:shadow-neon-glow">
              {tiers[0].icon}
            </div>
            <h3 className="font-display font-black text-2xl text-white mb-1 group-hover:text-brand-green transition-colors duration-300">
              {tiers[0].title}
            </h3>
            <p className="text-xs font-semibold text-white/40 mb-4">{tiers[0].subtitle}</p>
            
            {/* Price */}
            <div className="mb-6 flex items-baseline gap-1">
              <span className="font-display font-black text-4xl text-white">{tiers[0].price}</span>
              <span className="text-xs text-white/40">/ project</span>
            </div>
            
            <p className="text-sm text-white/50 leading-relaxed font-light mb-8">{tiers[0].description}</p>
            
            {/* Features */}
            <ul className="space-y-3.5 mb-8">
              {tiers[0].features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-4 h-4 rounded-full bg-brand-green/15 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-brand-green" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTA */}
          <a
            href="https://share.google/Hq0S5NqZ5BgEtJGLg"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-display font-semibold text-sm transition-all duration-300 group-hover:bg-brand-green group-hover:text-brand-black group-hover:border-brand-green group-hover:shadow-neon-glow"
          >
            <span>Explore Modern Tier</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Card 2: Professional Style - 3D Tilt & Parallax */}
        <div 
          ref={tiltCardRef}
          onMouseMove={handleMouseMove3D}
          onMouseLeave={handleMouseLeave3D}
          style={tiltStyle}
          className="group relative flex flex-col justify-between p-8 rounded-2xl glass-card text-left transition-all duration-200 border-brand-green/20 bg-brand-charcoal/30"
        >
          {/* Tag Badge */}
          <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-brand-green/20 border border-brand-green/30 text-[10px] text-brand-green tracking-wider font-semibold uppercase shadow-neon-glow">
            {tiers[1].tag}
          </div>

          <div>
            {/* Parallax Icon Wrapper */}
            <div 
              style={{ transform: `translate3d(${parallaxOffset.x * 0.5}px, ${parallaxOffset.y * 0.5}px, 0)` }}
              className="w-12 h-12 rounded-xl bg-brand-green/10 border border-brand-green/30 flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-brand-green group-hover:shadow-neon-glow"
            >
              {tiers[1].icon}
            </div>

            {/* Title Parallax */}
            <div style={{ transform: `translate3d(${parallaxOffset.x * 0.3}px, ${parallaxOffset.y * 0.3}px, 0)` }}>
              <h3 className="font-display font-black text-2xl text-white mb-1 group-hover:text-brand-green transition-colors duration-300">
                {tiers[1].title}
              </h3>
              <p className="text-xs font-semibold text-white/40 mb-4">{tiers[1].subtitle}</p>
            </div>

            {/* Price Parallax */}
            <div 
              style={{ transform: `translate3d(${parallaxOffset.x * 0.4}px, ${parallaxOffset.y * 0.4}px, 0)` }}
              className="mb-6 flex items-baseline gap-1"
            >
              <span className="font-display font-black text-4xl text-white text-glow">{tiers[1].price}</span>
              <span className="text-xs text-white/40">/ project</span>
            </div>
            
            <p className="text-sm text-white/50 leading-relaxed font-light mb-8">{tiers[1].description}</p>
            
            {/* Features List */}
            <ul className="space-y-3.5 mb-8">
              {tiers[1].features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-4 h-4 rounded-full bg-brand-green/20 flex items-center justify-center shadow-[0_0_10px_rgba(0,255,102,0.1)]">
                    <Check className="w-2.5 h-2.5 text-brand-green" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTA with internal 3D glow shift */}
          <a
            href="https://locomotive.ca/en"
            target="_blank"
            rel="noopener noreferrer"
            style={{ transform: `translate3d(${parallaxOffset.x * 0.2}px, ${parallaxOffset.y * 0.2}px, 0)` }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-green text-brand-black border border-brand-green font-display font-bold text-sm transition-all duration-300 hover:shadow-neon-glow-strong"
          >
            <span>Build Professional</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Card 3: Animation Style - Cinematic Glow Sweep */}
        <div className="group relative flex flex-col justify-between p-8 rounded-2xl glass-card text-left transition-all duration-500 hover:scale-[1.02] overflow-hidden">
          {/* Background lightsweep flare */}
          <div className="absolute inset-0 w-[200%] h-full bg-[linear-gradient(45deg,transparent_45%,rgba(0,255,102,0.06)_50%,transparent_55%)] -translate-x-[100%] group-hover:translate-x-[50%] transition-transform duration-[1.5s] ease-in-out pointer-events-none" />

          {/* Tag Badge */}
          <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/60 tracking-wider font-semibold uppercase">
            {tiers[2].tag}
          </div>

          <div>
            {/* Header */}
            <div className="w-12 h-12 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-brand-green group-hover:shadow-neon-glow">
              {tiers[2].icon}
            </div>
            <h3 className="font-display font-black text-2xl text-white mb-1 group-hover:text-brand-green transition-colors duration-300">
              {tiers[2].title}
            </h3>
            <p className="text-xs font-semibold text-white/40 mb-4">{tiers[2].subtitle}</p>
            
            {/* Price */}
            <div className="mb-6 flex items-baseline gap-1">
              <span className="font-display font-black text-4xl text-white">{tiers[2].price}</span>
              <span className="text-xs text-white/40">/ starting</span>
            </div>
            
            <p className="text-sm text-white/50 leading-relaxed font-light mb-8">{tiers[2].description}</p>
            
            {/* Features */}
            <ul className="space-y-3.5 mb-8">
              {tiers[2].features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-4 h-4 rounded-full bg-brand-green/15 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-brand-green" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTA */}
          <a
            href="https://www.landing.love/categories/food-drink/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-display font-semibold text-sm transition-all duration-300 group-hover:bg-brand-green group-hover:text-brand-black group-hover:border-brand-green group-hover:shadow-neon-glow"
          >
            <span>Commission Cinema</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Footnote / Custom Quote Section */}
      <div className="mt-16 max-w-2xl mx-auto flex flex-col items-center">
        <div className="w-12 h-[1px] bg-white/20 mb-6" />
        <p className="font-sans text-white/50 text-sm md:text-base font-light leading-relaxed mb-4 text-center">
          Have custom features or complex enterprise requirements? We design tailored solutions specifically structured for your scaling needs, custom integrations, and branding systems.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-brand-green hover:text-white transition-colors duration-300 font-semibold text-sm border-b border-brand-green/30 pb-0.5 hover:border-white"
        >
          <span>Discuss Custom Requirements</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

    </div>
  );
};

export default Showcase;
