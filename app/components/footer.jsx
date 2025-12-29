'use client';
import { Palette, Heart, Brush, Sparkles, Coffee, Mail, Instagram, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t-2 border-dashed border-primary/20 bg-gradient-to-b from-background to-secondary/10 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Floating brush strokes */}
      <div className="absolute -top-6 left-10 opacity-10 rotate-12">
        <Brush size={40} className="text-primary" />
      </div>
      <div className="absolute -top-8 right-20 opacity-10 -rotate-12">
        <Sparkles size={36} className="text-mustard" />
      </div>
      
      {/* Ink splatter effects */}
      <div className="absolute bottom-4 left-5 w-16 h-16 bg-primary/5 rounded-full blur-md" />
      <div className="absolute bottom-8 right-10 w-12 h-12 bg-accent/5 rounded-full blur-md" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Enhanced Logo */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2 group">
              <div className="relative">
                <Palette className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-mustard/40 rounded-full blur-sm" />
              </div>
              <span className="font-handwritten text-2xl text-ink relative">
                the creative one
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>
            </div>
            <p className="text-muted-foreground text-sm pl-10 italic">
              where art meets technology
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a 
              href="mailto:hello@example.com" 
              className="p-3 rounded-full bg-white/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              className="p-3 rounded-full bg-white/5 border border-accent/10 hover:bg-accent/10 hover:border-accent/30 transition-all duration-300 group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              className="p-3 rounded-full bg-white/5 border border-sage/10 hover:bg-sage/10 hover:border-sage/30 transition-all duration-300 group"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-sage group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              className="p-3 rounded-full bg-white/5 border border-muted/10 hover:bg-muted/10 hover:border-muted/30 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Navigation Links with decorative dots */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 font-handwritten text-lg relative">
          <div className="absolute left-0 top-1/2 w-4 h-1 bg-primary/20 rounded-full -translate-x-6" />
          <div className="absolute right-0 top-1/2 w-4 h-1 bg-primary/20 rounded-full translate-x-6" />
          
          <a 
            href="#about" 
            className="text-muted-foreground hover:text-primary transition-all duration-300 px-4 py-2 rounded-lg hover:bg-primary/5 relative group"
          >
            about
            <div className="absolute -bottom-1 left-4 right-4 h-0.5 bg-primary/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </a>
          
          <div className="w-1 h-1 bg-primary/30 rounded-full" />
          
          <a 
            href="#gallery" 
            className="text-muted-foreground hover:text-primary transition-all duration-300 px-4 py-2 rounded-lg hover:bg-primary/5 relative group"
          >
            gallery
            <div className="absolute -bottom-1 left-4 right-4 h-0.5 bg-primary/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </a>
          
          <div className="w-1 h-1 bg-primary/30 rounded-full" />
          
          <a 
            href="#carousel" 
            className="text-muted-foreground hover:text-primary transition-all duration-300 px-4 py-2 rounded-lg hover:bg-primary/5 relative group"
          >
            3D carousel
            <div className="absolute -bottom-1 left-4 right-4 h-0.5 bg-primary/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </a>
          
          <div className="w-1 h-1 bg-primary/30 rounded-full" />
          
          <a 
            href="#contact" 
            className="text-muted-foreground hover:text-primary transition-all duration-300 px-4 py-2 rounded-lg hover:bg-primary/5 relative group"
          >
            contact
            <div className="absolute -bottom-1 left-4 right-4 h-0.5 bg-primary/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </a>
        </div>

        {/* Made with love section - enhanced */}
        <div className="text-center border-t border-dashed border-primary/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Coffee className="w-4 h-4" />
              <span className="font-body">fueled by creativity & coffee</span>
            </div>
            
            <div className="hidden md:block w-1 h-1 bg-primary/30 rounded-full mx-2" />
            
            {/* <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-sm font-body">crafted with</span>
              <Heart className="w-5 h-5 fill-coral text-coral animate-pulse" />
              <span className="text-muted-foreground text-sm font-body">in</span>
              <span className="font-handwritten text-primary px-2 py-1 bg-primary/10 rounded-full text-sm">
                Kenya 🇰🇪
              </span>
            </div> */}
          </div>
          
          {/* Copyright */}
          <p className="text-muted-foreground/70 text-xs font-mono">
            © {new Date().getFullYear()} Oredi Eugene. All art and code is original.
            <span className="block mt-1">
              Built with Next.js, GSAP & lots of imagination.
            </span>
          </p>
          
          {/* Back to top */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-6 text-xs text-muted-foreground hover:text-primary transition-colors font-mono border border-primary/10 hover:border-primary/30 rounded-full px-4 py-2"
          >
            ↑ back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;