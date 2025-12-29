'use client';
import { Baby, Wine, Building2, Sparkles, Star, Check } from "lucide-react";
import { Button } from "./button";
const TeachingSection = () => {
  const offerings = [
    {
      icon: Baby,
      title: "Kids Art Classes",
      age: "5-12 years",
      description: "Fun, colorful sessions that spark imagination and build confidence in young artists.",
      features: ["Safe, non-toxic materials", "Age-appropriate techniques", "Creative exploration"],
      color: "border-coral",
      tagColor: "bg-coral/20 text-coral",
      rotation: -1,
    },
    {
      icon: Wine,
      title: "Sip & Paint",
      age: "Adults 18+",
      description: "Relaxing evenings where adults can unwind with a brush, canvas, and good company.",
      features: ["Step-by-step guidance", "Social atmosphere", "BYOB friendly"],
      color: "border-sage",
      tagColor: "bg-sage/30 text-ink",
      rotation: 1,
    },
    {
      icon: Building2,
      title: "School Programs",
      age: "All levels",
      description: "Structured art curriculum for schools looking to enrich their creative education.",
      features: ["Flexible scheduling", "Curriculum aligned", "Progress tracking"],
      color: "border-mustard",
      tagColor: "bg-mustard/30 text-ink",
      rotation: 0,
    },
  ];

  // Button Component
  // const Button = ({ 
  //   children, 
  //   variant = "default", 
  //   size = "md", 
  //   className = "",
  //   onClick 
  // }: { 
  //   children: React.ReactNode; 
  //   variant?: "default" | "sketch" | "marker";
  //   size?: "sm" | "md" | "lg" | "xl";
  //   className?: string;
  //   onClick?: () => void;
  // }) => {
  //   const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none";
    
  //   const sizeStyles = {
  //     sm: "px-4 py-2 text-sm",
  //     md: "px-6 py-3 text-base",
  //     lg: "px-8 py-4 text-lg",
  //     xl: "px-10 py-5 text-xl"
  //   };

  //   const variantStyles = {
  //     default: "bg-primary text-white hover:bg-primary/90",
  //     sketch: "bg-transparent text-ink border-2 border-ink hover:bg-ink/5",
  //     marker: "bg-mustard text-ink hover:bg-mustard/90 shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.1)]"
  //   };

  //   return (
  //     <button
  //       onClick={onClick}
  //       className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className} relative group`}
  //     >
  //       {variant === "marker" && (
  //         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
  //       )}
  //       <span className="relative z-10">{children}</span>
  //     </button>
  //   );
  // };

  return (
    <section id="teaching" className="py-24 bg-paper relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,#e5e7eb_10px,#e5e7eb_11px)]" />
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-handwritten text-lg text-primary">available for hire</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-ink leading-tight">
            Teaching{" "}
            <span className="font-handwritten text-primary">Art</span>
            <br />
            is my passion
          </h2>
          <p className="text-xl text-muted-foreground mt-6 font-body">
            I believe everyone has creativity within them. My teaching approach focuses on 
            creating a <span className="font-handwritten text-2xl text-ink">judgment-free space</span> where 
            exploration and self-expression flourish.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {offerings.map((offering, i) => (
            <div
              key={offering.title}
              className={`bg-white p-8 border-2 ${offering.color} rounded-sm shadow-lg relative`}
              style={{ transform: `rotate(${offering.rotation}deg)` }}
            >
              {/* Tape decoration */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-mustard/50 -rotate-3" />
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-4">
                <offering.icon className="w-7 h-7 text-ink" />
              </div>

              <span className={`inline-block ${offering.tagColor} px-3 py-1 rounded-full text-sm font-handwritten mb-3`}>
                {offering.age}
              </span>

              <h3 className="font-display text-2xl text-ink mb-3">{offering.title}</h3>
              <p className="text-muted-foreground mb-6">{offering.description}</p>

              <ul className="space-y-2">
                {offering.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-sage" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative inline-block">
            <div className="bg-background p-8 rounded-sm border-2 border-dashed border-border">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-mustard text-mustard" />
                ))}
              </div>
              <p className="text-xl text-foreground italic font-body mb-4">
                "My daughter couldn't stop talking about her painting! The way you engage 
                with kids is absolutely wonderful."
              </p>
              <p className="font-handwritten text-lg text-muted-foreground">
                — Parent, Kids Workshop
              </p>
            </div>
            {/* Quote marks */}
            <span className="absolute -top-4 -left-4 text-6xl text-primary/30 font-display">"</span>
            <span className="absolute -bottom-8 -right-4 text-6xl text-primary/30 font-display">"</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="sketch" size="xl" className="font-handwritten text-2xl">
            Book a Session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;