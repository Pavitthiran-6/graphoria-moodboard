import FlowArt, { FlowSection } from './story-scroll';
import Showcase from '../Showcase';

export default function FlowArtDefaultDemo() {
  return (
    <FlowArt aria-label="Présentation Flow Art">
      <FlowSection 
        aria-label="Home" 
        style={{ backgroundColor: '#022c22', color: '#ffffff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">01 — Introduction</p>
        <hr className="my-[2vw] border-none border-t border-white/30" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          >
            Grphoria
            <br />
            Creative
            <br />
            Design
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/30" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Crafting powerful brand identities, stunning digital experiences, and high-performance applications. From logo design and packaging to social media creatives, 3D animation, and full-stack web & mobile development — we bring every dimension of your brand to life.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/30" />
        <p className="max-w-[50ch] text-[clamp(0.85rem,1.8vw,1.35rem)] font-normal leading-relaxed opacity-80">
          Curated and directed by our principal design lead. Explore our creative background, featured case studies, and end-to-end service capabilities across branding, motion, and technology.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/30" />
        <div className="flex">
          <a
            href="https://graphoria-platform.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-3xl font-extrabold tracking-wider text-white hover:text-white/80 transition-all duration-300 border-b-2 border-white pb-1 gap-2.5 group"
          >
            <span>Grphoria</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </a>
        </div>
      </FlowSection>

      <FlowSection 
        aria-label="La mission" 
        style={{ backgroundColor: '#000000', color: '#ffffff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">02 — Service Tiers</p>
        <hr className="my-[2vw] border-none border-t border-white/20" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          >
            Brand
            <br />
            Packages
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/20" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Complete branding and digital packages crafted for every stage of business growth — from startup launch to full-scale brand expansion.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/20" />
        <Showcase />
      </FlowSection>

      <FlowSection aria-label="Comment ça marche" style={{ backgroundColor: '#F5F0E8', color: '#000' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">03 — Our Services & Process</p>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          >
            Brand.
            <br />
            Build.
            <br />
            Animate.
            <br />
            Scale.
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          From logo conception and packaging design to social media creatives, 3D animation, and full-stack digital products — we deliver a complete creative ecosystem for your brand.
        </p>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">01 — Logo Design</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Crafting iconic brand marks, wordmarks, and complete visual identity systems that make a lasting impression.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">02 — Packaging Design</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Designing product packaging that commands shelf presence and communicates your brand story at first glance.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">03 — Business Stationeries</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Business cards, letterheads, invoices, envelopes, and branded corporate collateral for a cohesive identity.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">04 — Social Media Design</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              High-impact marketing creatives and promotional poster designs crafted to grow engagement across all platforms.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">05 — 3D & Ad Animation</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Premium 3D animation and motion graphics for product showcases, brand films, and advertising campaigns.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">06 — Web & App Development</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Building lightning-fast, fully responsive websites and high-performance native iOS & Android mobile applications.
            </p>
          </div>
        </div>
      </FlowSection>

      <FlowSection aria-label="La vision" style={{ backgroundColor: '#1A3DE8', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">04 — The vision</p>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          >
            Future
            <br />
            Of
            <br />
            Brand
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          We are not just building products. We are crafting complete brand universes — identities, experiences, and stories that resonate across every touchpoint.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">500+</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Creative deliverables across branding, packaging, digital, and motion successfully completed.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">99%</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Client satisfaction rate built on seamless transparency and creative partnership.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">10M+</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Monthly active users engaging with interfaces, creatives, and products designed by our studio.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Generic templates do not build brands. Weak visuals lose customers. We are here to change that — delivering custom logos, packaging, creatives, animations, and premium digital experiences under one roof.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Full Brand Identity</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Logo, packaging, stationeries, and brand guidelines — every asset your business needs to look premium.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Motion & Animation</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              3D product animations and advertising videos that drive engagement and boost conversion rates.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Digital Products</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Scalable websites and mobile apps engineered for performance, growth, and exceptional user experience.
            </p>
          </div>
        </div>
      </FlowSection>

      <FlowSection aria-label="Nous rejoindre" style={{ backgroundColor: '#fd5200', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">05 — Get In Touch</p>
        <hr className="my-[2vw] border-none border-t border-white/20" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          >
            Ready
            <br />
            To
            <br />
            Begin?
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/20" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Partner with us to build your complete brand identity — from logo and packaging to social media, animation, and a powerful digital presence. Let's create something exceptional together.
        </p>
      </FlowSection>
    </FlowArt>
  );
}
