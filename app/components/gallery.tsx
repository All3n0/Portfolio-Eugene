'use client';
import { useState } from "react";
import { ExternalLink, Leaf, Users, Palette, Heart } from "lucide-react";

interface ArtPiece {
  id: number;
  title: string;
  category: string;
  description: string;
  color: string;
  icon?: React.ElementType;
  rotation: number;
  bgColor?: string;
  image?: string;
}

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const artPieces: ArtPiece[] = [
    {
      id: 1,
      title: "Climate Awareness Mural",
      category: "organizational",
      description: "Large-scale mural for Greenpeace Africa highlighting environmental conservation",
      color: "from-emerald-400 to-teal-600",
      icon: Leaf,
      rotation: -3,
      image:"https://i.postimg.cc/vm7zRNrx/Whats-App-Image-2025-12-29-at-22-49-40.jpg",
    },
    {
      id: 2,
      title: "Ocean Conservation Series",
      category: "organizational",
      description: "Collection of paintings depicting marine life and ocean preservation",
      color: "from-blue-400 to-cyan-600",
      icon: Palette,
      rotation: 2,
      image:"https://i.postimg.cc/WbhzQqG6/Whats-App-Image-2025-12-29-at-22-54-02-(1).jpg",
    },
    {
      id: 3,
      title: "Community Mural Project",
      category: "community",
      description: "Collaborative art piece with local children celebrating diversity",
      color: "from-primary to-accent",
      icon: Users,
      rotation: -1,
      image:"https://i.postimg.cc/6pqrbQ31/Whats-App-Image-2025-12-29-at-22-54-02.jpg",
    },
    {
      id: 4,
      title: "Nature's Harmony",
      category: "personal",
      description: "Abstract interpretation of the relationship between humans and nature",
      color: "from-amber to-orange-500",
      rotation: 3,
      image:"https://i.postimg.cc/g2xhqBtb/Whats-App-Image-2025-12-29-at-22-55-48.jpg",
    },
    {
      id: 5,
      title: "Sip & Paint Collection",
      category: "teaching",
      description: "Curated pieces created during interactive painting sessions",
      color: "from-pink-400 to-rose-600",
      icon: Heart,
      rotation: -2,
      image:"https://i.postimg.cc/sDNQX4jh/Whats-App-Image-2025-12-29-at-22-58-49.jpg",
    },
    {
      id: 6,
      title: "Wildlife Protection",
      category: "organizational",
      description: "Series created for environmental NGOs advocating for wildlife",
      color: "from-green-500 to-emerald-700",
      icon: Leaf,
      rotation: 1,
      bgColor: "from-green-500 to-emerald-700",
    },
  ];

  const categories = [
    { id: "all", label: "All Work" },
    { id: "organizational", label: "Organizations" },
    { id: "teaching", label: "Teaching" },
    { id: "community", label: "Community" },
    { id: "personal", label: "Personal" },
  ];

  const filteredPieces = activeCategory === "all" 
    ? artPieces 
    : artPieces.filter(piece => piece.category === activeCategory);

  return (
    <section id="art" className="pt-30 pb-24 bg-secondary relative overflow-hidden">
      {/* Decorative paint splashes */}
      <div className="absolute w-64 h-64 bg-primary/20 -top--5 left-10 rounded-full" />
      <div className="absolute w-48 h-48 bg-accent/15 bottom-20 right-20 rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Portfolio</span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mt-2 mb-6">
            My Artwork
          </h2>
          <p className="text-muted-foreground text-lg">
            A collection of pieces created for organizations, community events, and personal expression. 
            Each artwork tells a story of passion and purpose.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground border border-border"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid with angled cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPieces.map((piece, index) => (
            <div
              key={piece.id}
              className="group"
              style={{ 
                transform: `rotate(${piece.rotation}deg)`,
                transition: "transform 0.3s ease",
              }}
            >
              {/* Angled Artwork Preview */}
<div
  className={`aspect-[4/3] relative overflow-hidden border border-border/50
    ${piece.bgColor ? `bg-gradient-to-br ${piece.bgColor}` : "bg-muted"}
  `}
  style={
    piece.image
      ? {
          backgroundImage: `url(${piece.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      : undefined
  }
>
  {/* Pattern overlay (only visible on color cards) */}
  {!piece.image && (
    <div className="absolute inset-0 opacity-20">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <pattern
          id={`pattern-${piece.id}`}
          patternUnits="userSpaceOnUse"
          width="20"
          height="20"
        >
          <circle cx="10" cy="10" r="2" fill="white" />
        </pattern>
        <rect width="100" height="100" fill={`url(#pattern-${piece.id})`} />
      </svg>
    </div>
  )}

  {/* Dark overlay for image cards */}
  {piece.image && (
    <div className="absolute inset-0 bg-black/30" />
  )}

  {/* Icon
  <div className="absolute inset-0 flex items-center justify-center">
    {piece.icon ? (
      <piece.icon className="w-20 h-20 text-white/80 group-hover:scale-110 transition-transform duration-300" />
    ) : (
      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300" />
    )}
  </div> */}



                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                    <ExternalLink className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content below the angled card */}
              <div className="p-6 mt-4 -rotate-2 transform-gpu">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {piece.category}
                </span>
                <h3 className="font-display text-2xl text-foreground mt-1 mb-2">
                  {piece.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {piece.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Hand-drawn arrow to teaching */}
        <div className="text-center mt-16">
          <svg className="w-32 h-16 mx-auto text-primary/50" viewBox="0 0 120 60">
            <path
              d="M10 10 Q60 50, 110 30"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="8 4"
            />
            <path
              d="M100 25 L110 30 L105 40"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-handwritten text-xl text-muted-foreground">want me to teach art?</p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;