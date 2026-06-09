import React, { useEffect, useRef, useState, createContext } from 'react';
import Lenis from 'lenis';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FlowArtDefaultDemo from './components/ui/demo';
import ServicePage from './components/ServicePage';
import PricingPage from './components/PricingPage';

gsap.registerPlugin(ScrollTrigger);

export const PageTransitionContext = createContext();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // Refresh ScrollTrigger when path changes to clean up any leftover pinning states
    ScrollTrigger.refresh();
  }, [pathname]);
  return null;
}

function AppContent() {
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Only initialize Lenis on non-touch devices or screens without touch capability
    const isTouchDevice = 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      window.matchMedia('(pointer: coarse)').matches;

    if (isTouchDevice) {
      console.log('Touch device detected. Skipping Lenis smooth scroll initialization to support native scrolling.');
      return;
    }

    // Initialize Lenis Smooth Scroll for desktop
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const navigateWithTransition = (toUrl, accentColor = '#050505') => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    // Stop Lenis scroll interactions during page transition sweeps
    lenisRef.current?.stop();

    const pageContainer = document.querySelector('main');

    // Set transition color and show overlay
    if (overlayRef.current) {
      overlayRef.current.style.backgroundColor = accentColor;
      overlayRef.current.style.display = 'block';
      gsap.set(overlayRef.current, { yPercent: 100 });
    }

    gsap.timeline({
      onComplete: () => {
        navigate(toUrl);
        window.scrollTo(0, 0);

        // Slide overlay up and out of screen
        gsap.to(overlayRef.current, {
          yPercent: -100,
          duration: 0.6,
          ease: 'power3.inOut',
          onComplete: () => {
            gsap.set(overlayRef.current, { yPercent: 100, display: 'none' });
            setIsTransitioning(false);

            // Allow Lenis scrolling again
            lenisRef.current?.start();

            // Force recalculations of scroll heights and pins
            ScrollTrigger.refresh();
            lenisRef.current?.resize();
          }
        });

        // Entrance scale for new content
        if (pageContainer) {
          gsap.fromTo(pageContainer, 
            { scale: 0.96, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' }
          );
        }
      }
    })
    .to(overlayRef.current, {
      yPercent: 0,
      duration: 0.6,
      ease: 'power3.inOut'
    })
    .to(pageContainer, {
      scale: 0.96,
      opacity: 0.2,
      duration: 0.6,
      ease: 'power3.inOut'
    }, 0);
  };

  return (
    <PageTransitionContext.Provider value={{ navigateWithTransition }}>
      <div className="bg-[#050505] text-white min-h-screen w-full relative">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<FlowArtDefaultDemo />} />
          <Route path="/services/:serviceId" element={<ServicePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          {/* Fallback route */}
          <Route path="*" element={<FlowArtDefaultDemo />} />
        </Routes>

        {/* Global GSAP page transition sweep overlay */}
        <div
          ref={overlayRef}
          className="fixed inset-0 w-full h-full pointer-events-none z-[9999]"
          style={{
            backgroundColor: '#050505',
            display: 'none',
          }}
        />
      </div>
    </PageTransitionContext.Provider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

