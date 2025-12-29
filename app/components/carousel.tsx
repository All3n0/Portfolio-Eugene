// app/components/Carousel3D.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

// Add type declarations for the global variables
declare global {
  interface Window {
    gsap: any;
    jQuery: any;
  }
}

const Carousel3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fpsRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const animationRefs = useRef({
    ticker: null as NodeJS.Timeout | null,
    mouseMoveListener: null as ((e: MouseEvent) => void) | null,
    resizeListener: null as (() => void) | null
  });

  // Art images with your links
  const carouselItems = [
    { id: 1, title: "Grotesque", image: "https://i.ibb.co/35HGhRd7/Whats-App-Image-2025-12-29-at-19-22-28-2.jpg" },
    { id: 2, title: "Chiaroscuro", image: "https://i.ibb.co/gFtGH1yZ/Whats-App-Image-2025-12-29-at-19-22-28-1.jpg" },
    { id: 3, title: "Fresco", image: "https://i.ibb.co/fVB4ZW10/Whats-App-Image-2025-12-29-at-19-22-28.jpg" },
    { id: 4, title: "Impasto", image: "https://i.ibb.co/Jj7LYXn9/Whats-App-Image-2025-12-29-at-19-22-27-1.jpg" },
    { id: 5, title: "Sfumato", image: "https://i.ibb.co/bj9MS5jB/Whats-App-Image-2025-12-29-at-19-22-27.jpg" },
    { id: 6, title: "Cubism", image: "https://i.ibb.co/JjhgQPrR/Whats-App-Image-2025-12-29-at-19-22-26.jpg" },
    { id: 7, title: "Surrealism", image: "https://i.ibb.co/2YLgXXp2/Whats-App-Image-2025-12-29-at-19-22-25-1.jpg" },
    { id: 8, title: "Baroque", image: "https://i.ibb.co/zTs8SGNG/Whats-App-Image-2025-12-29-at-19-22-25.jpg" },
    { id: 9, title: "Rococo", image: "https://i.ibb.co/nMzMC4sH/Whats-App-Image-2025-12-29-at-19-22-24.jpg" },
    { id: 10, title: "Minimalism", image: "https://i.ibb.co/NM2KCcG/Whats-App-Image-2025-12-29-at-19-22-23.jpg" },
    { id: 11, title: "Expressionism", image: "https://i.ibb.co/zVY1W8yx/Whats-App-Image-2025-12-29-at-19-22-22.jpg" },
    { id: 12, title: "Fauvism", image: "https://i.ibb.co/ZQ30SJR/Whats-App-Image-2025-12-29-at-19-22-21-1.jpg" },
    { id: 13, title: "Pointillism", image: "https://i.ibb.co/Cpt8jDcf/Whats-App-Image-2025-12-29-at-19-22-21.jpg" },
    { id: 14, title: "Neoclassicism", image: "https://i.ibb.co/rfFHyfGV/Whats-App-Image-2025-12-29-at-19-22-20.jpg" },
    { id: 15, title: "Romanticism", image: "https://i.ibb.co/7JgNpMNP/Whats-App-Image-2025-12-29-at-19-22-19.jpg" }
  ];

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Simple GSAP and jQuery loading
  useEffect(() => {
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (src.includes('jquery') && window.jQuery) {
          resolve();
          return;
        }
        if (src.includes('gsap') && window.gsap) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const initCarousel = () => {
      // Initialize variables
      let mouseX = 0;
      let mouseY = 0;
      let mouseZ = 0;
      let addX = 0;
      let radius = 0;
      
      const itemLength = carouselItems.length;
      const rY = 360 / itemLength;
      radius = Math.round((isMobile ? 180 : 250) / Math.tan(Math.PI / itemLength));

      // FPS counter
      const fps_counter = {
        times: [] as number[],
        span: 20,
        tick: function() {
          this.times.push(Date.now());
          if (this.times.length > this.span + 1) {
            this.times.shift();
            const seconds = (this.times[this.times.length - 1] - this.times[0]) / 1000;
            return Math.round(this.span / seconds);
          }
          return null;
        }
      };
      
      const counter = Object.create(fps_counter);

      // Get DOM elements
      const container = document.getElementById('contentContainer');
      const carousel = document.getElementById('carouselContainer');
      const items = document.querySelectorAll('.carouselItem');
      
      if (!container || !carousel || items.length === 0) return;

      // Set container 3D props
      window.gsap.set(container, { perspective: isMobile ? 400 : 600 });
      window.gsap.set(carousel, { z: -radius });

      // Create carousel item props
      items.forEach((item: any, i: number) => {
        window.gsap.set(item, {
          rotationY: rY * i,
          z: radius,
          transformOrigin: "50% 50% " + -radius + "px",
          autoAlpha: 0
        });

        // Animate in with delay
        window.gsap.to(item, {
          autoAlpha: 1,
          delay: i * 0.1,
          duration: 1,
          ease: "power2.out"
        });
      });

      // Mouse move handler
      const onMouseMove = (event: MouseEvent) => {
        const carouselSection = document.getElementById('carouselSection');
        if (!carouselSection) return;
        
        const rect = carouselSection.getBoundingClientRect();
        const isInCarouselSection = 
          event.clientX >= rect.left && 
          event.clientX <= rect.right && 
          event.clientY >= rect.top && 
          event.clientY <= rect.bottom;
        
        if (!isInCarouselSection) {
          mouseX *= 0.9;
          mouseY *= 0.9;
          return;
        }
        
        const carouselCenterX = rect.left + rect.width / 2;
        const carouselCenterY = rect.top + rect.height / 2;
        
        const sensitivity = isMobile ? 0.0015 : 0.0025;
        mouseX = (carouselCenterX - event.clientX) * sensitivity;
        mouseY = (carouselCenterY - event.clientY) * (isMobile ? 0.005 : 0.01);
        mouseZ = -radius - (Math.abs(carouselCenterY - event.clientY) - (isMobile ? 100 : 200));
      };

      // Touch handler for mobile
      const onTouchMove = (event: TouchEvent) => {
        if (!isMobile) return;
        
        event.preventDefault();
        const touch = event.touches[0];
        const carouselSection = document.getElementById('carouselSection');
        if (!carouselSection) return;
        
        const rect = carouselSection.getBoundingClientRect();
        const carouselCenterX = rect.left + rect.width / 2;
        const carouselCenterY = rect.top + rect.height / 2;
        
        mouseX = (carouselCenterX - touch.clientX) * 0.005;
        mouseY = (carouselCenterY - touch.clientY) * 0.02;
      };

      // Store listeners
      animationRefs.current.mouseMoveListener = onMouseMove;
      window.addEventListener("mousemove", onMouseMove);
      
      if (isMobile) {
        window.addEventListener("touchmove", onTouchMove, { passive: false });
      }

      // Animation loop
      const looper = () => {
        addX += mouseX;
        
        window.gsap.to(carousel, 1, { 
          rotationY: addX, 
          rotationX: mouseY, 
          ease: "power2.out" 
        });
        
        window.gsap.set(carousel, { z: mouseZ });
        
        const fpsValue = counter.tick();
        if (fpsValue && fpsRef.current) {
          fpsRef.current.textContent = `Framerate: ${fpsValue}/60 FPS`;
        }
      };

      // Start animation loop
      animationRefs.current.ticker = setInterval(looper, 1000 / 60);
      setIsLoaded(true);
    };

    const loadLibraries = async () => {
      try {
        await loadScript('https://code.jquery.com/jquery-3.6.0.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js');
        
        // Initialize carousel after libraries are loaded
        setTimeout(() => {
          initCarousel();
        }, 100);
      } catch (error) {
        console.error('Failed to load libraries:', error);
      }
    };

    loadLibraries();

    // Cleanup
    return () => {
      if (animationRefs.current.ticker) {
        clearInterval(animationRefs.current.ticker);
      }
      
      if (animationRefs.current.mouseMoveListener) {
        window.removeEventListener("mousemove", animationRefs.current.mouseMoveListener);
      }
      
      window.removeEventListener("touchmove", () => {});
    };
  }, [isMobile]); // Re-run when isMobile changes

  return (
    <section id="carouselSection" className="relative w-full min-h-screen bg-[#1a948d] overflow-hidden">
      <style jsx global>{`
        #carouselSection {
          background-image: url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200');
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          position: relative;
        }
        
        #carouselSection::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(252, 252, 232, 0.8);
          z-index: 1;
        }
        
        #carouselSection > * {
          position: relative;
          z-index: 2;
        }
        
        .trans3d {
          transform-style: preserve-3d;
          transform: translate3d(0, 0, 0);
        }
        
        /* Desktop styles */
        #contentContainer {
          position: absolute;
          margin-left: -500px;
          margin-top: -500px;
          left: 50%;
          top: 50%;
          width: 1000px;
          height: 1000px;
        }
        
        #carouselContainer {
          position: absolute;
          margin-left: -500px;
          margin-top: -500px;
          left: 50%;
          top: 50%;
          width: 1000px;
          height: 1000px;
        }
        
        .carouselItem {
          width: 320px;
          height: 220px;
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -160px;
          margin-top: -110px;
          opacity: 0;
        }
        
        .carouselItemInner {
          width: 320px;
          height: 220px;
          position: absolute;
          background-color: rgba(0, 0, 0, 0.1);
          border: 2px solid rgba(0, 0, 0, 0.3);
          color: white;
          font-size: 48px;
          left: 50%;
          top: 50%;
          margin-left: -160px;
          margin-top: -110px;
          text-align: center;
          padding-top: 20px;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: transform 0.3s ease;
        }
        
        .carouselItemInner:hover {
          transform: scale(1.05);
          border-color: rgba(0, 0, 0, 0.6);
        }
        
        .carouselItemInner img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          background: linear-gradient(to bottom, 
            rgba(0,0,0,0.3) 0%, 
            rgba(0,0,0,0.1) 50%,
            rgba(0,0,0,0.3) 100%);
          padding: 8px;
        }
        
        .carouselItemInner .number {
          position: relative;
          z-index: 2;
          font-weight: bold;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
          margin-bottom: 10px;
          font-size: 56px;
          color: #333;
        }
        
        .carouselItemInner .title {
          position: relative;
          z-index: 2;
          font-size: 24px;
          font-weight: bold;
          text-shadow: 2px 2px 8px rgba(255, 255, 255, 0.5);
          letter-spacing: 1px;
          color: #222;
        }
        
        .carouselItemInner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, 
            rgba(255,255,255,0.3) 0%, 
            rgba(255,255,255,0.6) 50%,
            rgba(255,255,255,0.8) 100%);
          z-index: 1;
        }
        
        header {
          margin-top: 30px;
          position: absolute;
          z-index: 50;
          width: 100%;
          max-width: 420px;
          padding-top: 10px;
          padding-bottom: 10px;
        }
        
        #fps {
          margin-top: 5px;
          margin-left: 35px;
          font-family: 'Courier New', monospace;
          font-size: 14px;
          color: #333;
        }
        
        /* Mobile styles */
        @media (max-width: 768px) {
          #contentContainer {
            width: 600px !important;
            height: 600px !important;
            margin-left: -300px !important;
            margin-top: -300px !important;
          }
          
          #carouselContainer {
            width: 600px !important;
            height: 600px !important;
            margin-left: -300px !important;
            margin-top: -300px !important;
          }
          
          .carouselItem {
            width: 200px !important;
            height: 150px !important;
            margin-left: -100px !important;
            margin-top: -75px !important;
          }
          
          .carouselItemInner {
            width: 200px !important;
            height: 150px !important;
            margin-left: -100px !important;
            margin-top: -75px !important;
            font-size: 32px;
            padding-top: 10px;
          }
          
          .carouselItemInner img {
            object-fit: contain;
            padding: 4px;
          }
          
          .carouselItemInner .number {
            font-size: 36px !important;
            margin-bottom: 5px;
          }
          
          .carouselItemInner .title {
            font-size: 16px !important;
            letter-spacing: 0.5px;
          }
          
          header {
            margin-top: 20px;
            max-width: 90%;
            padding: 10px;
          }
          
          #fps {
            font-size: 12px;
            margin-left: 15px;
            margin-top: 3px;
          }
        }
        
        /* Tablet styles */
        @media (min-width: 769px) and (max-width: 1024px) {
          #contentContainer {
            width: 800px;
            height: 800px;
            margin-left: -400px;
            margin-top: -400px;
          }
          
          #carouselContainer {
            width: 800px;
            height: 800px;
            margin-left: -400px;
            margin-top: -400px;
          }
          
          .carouselItem {
            width: 280px;
            height: 200px;
            margin-left: -140px;
            margin-top: -100px;
          }
          
          .carouselItemInner {
            width: 280px;
            height: 200px;
            margin-left: -140px;
            margin-top: -100px;
          }
          
          .carouselItemInner img {
            object-fit: contain;
            padding: 6px;
          }
          
          .carouselItemInner .number {
            font-size: 48px;
          }
          
          .carouselItemInner .title {
            font-size: 20px;
          }
        }
      `}</style>

      {/* Header */}
      <header>
        <div id="fps" ref={fpsRef}>
          Framerate: {isLoaded ? '0/60 FPS' : 'Loading...'}
        </div>
      </header>

      {/* Carousel Container */}
      <div id="contentContainer" className="trans3d" ref={containerRef}>
        <section id="carouselContainer" className="trans3d">
          {carouselItems.map((item) => (
            <figure
              key={item.id}
              id={`item${item.id}`}
              className="carouselItem trans3d"
            >
              <div className="carouselItemInner trans3d">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="number">{String(item.id).padStart(2, '0')}</div>
                <div className="title">{item.title}</div>
              </div>
            </figure>
          ))}
        </section>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-center text-black/80 text-xs md:text-sm px-4 text-center">
        {isMobile ? (
          "Swipe or touch to rotate the 3D carousel"
        ) : (
          "Move mouse over this section to rotate the 3D carousel"
        )}
      </div>
    </section>
  );
};

export default Carousel3D;