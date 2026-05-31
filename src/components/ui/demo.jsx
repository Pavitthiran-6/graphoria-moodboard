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
          Crafting exceptional web experiences and cutting-edge mobile applications. We merge highly aesthetic design with robust, high-performance development to bring your brand&apos;s digital vision to life.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/30" />
        <p className="max-w-[50ch] text-[clamp(0.85rem,1.8vw,1.35rem)] font-normal leading-relaxed opacity-80">
          Curated and directed by our principal design lead. Explore my creative background, featured case studies, and design philosophies.
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
            Design
            <br />
            Narratives
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/20" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          We craft immersive visual journeys. Select the tier that matches your studio strategy and interactive aspirations.
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
            Design.
            <br />
            Code.
            <br />
            Launch.
            <br />
            Scale.
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          From aesthetic moodboards to high-performance production code, we deliver flawless digital experiences.
        </p>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">01 — Moodboard & UI</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Defining color palettes, custom typography, and visual assets to establish a unique digital identity.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">02 — UX Architecture</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Mapping user pathways and crafting ultra-intuitive wireframes that optimize user engagement.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">03 — Web Development</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Building lightweight, lightning-fast, and fully responsive websites using bleeding-edge stacks.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">04 — Mobile Apps</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Developing stunning, sleek, and high-performance native iOS and Android applications.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">05 — Fluid Interaction</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Integrating premium micro-animations and motion design to make your products feel alive.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">06 — Optimization</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Providing deep performance auditing, SEO structuring, and cloud scaling for global reach.
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
            Design
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          We are not just designing products. We are crafting the future of modern digital interaction.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">150+</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              High-performance web and mobile solutions successfully designed & launched.
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
              Monthly active users engaging with user interfaces designed by our agency.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Standard templates do not move audiences. Slow performance loses modern users. We are here to change that — building custom, ultra-fast, and premium web & app solutions.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Tailored Design</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Bespoke visual research, interactive mockups, and identity guides built for your brand.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Bleeding-Edge Tech</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Supercharged search visibility, lightweight builds, and fluidly animated layouts.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Scale-Ready Build</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Engineered to handle scaling user traffic, continuous feature growth, and enterprise needs.
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
          Partner with us to redefine your brand&apos;s digital presence. Let&apos;s build something exceptional together.
        </p>
      </FlowSection>
    </FlowArt>
  );
}
