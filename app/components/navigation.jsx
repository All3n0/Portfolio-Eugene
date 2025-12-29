"use client";

import { useState, useEffect } from "react";
import { Menu, X, Palette } from "lucide-react";

const SketchNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#teaching", label: "Teaching" },
    { href: "#code", label: "Code" },
    { href: "#contact", label: "Say Hi" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-paper/90 backdrop-blur-sm border-b border-black/10 py-4"
            : "py-7"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo - Increased font size */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <Palette className="w-10 h-10 text-orange-500 transition-transform group-hover:rotate-12" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full" />
          </div>
          <span className="font-handwritten text-3xl md:text-4xl text-black tracking-tight">
            Oredi Eugene
          </span>
        </a>

        {/* Desktop Links - Increased font size */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="px-5 py-2.5 font-handwritten text-xl md:text-2xl
                         text-black/80 hover:text-black
                         transition-colors relative group"
              style={{ transform: `rotate(${(i - 2) * 1.5}deg)` }}
            >
              {link.label}
              <span
                className="absolute bottom-1.5 left-4 right-4 h-1
                           bg-yellow-400 scale-x-0
                           group-hover:scale-x-100
                           transition-transform origin-left duration-300"
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button - Increased size */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 text-black hover:text-black/80"
        >
          {isOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu - Increased font sizes */}
      {isOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0
                     bg-paper border-b border-black/10 shadow-lg"
        >
          <div className="container mx-auto px-6 py-8 flex flex-col gap-2">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-4 font-handwritten text-2xl
                           text-black/80 hover:text-black
                           transition-all duration-200 hover:pl-4
                           border-b-2 border-dashed border-black/10 last:border-0"
                style={{
                  transform: `rotate(${(i % 2 === 0 ? 1 : -1) * 0.5}deg)`,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default SketchNav;