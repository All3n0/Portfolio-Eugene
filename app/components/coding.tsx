'use client'
import { Github, ExternalLink, Code2 } from "lucide-react";
import { Button } from "./button";
const CodeSection = () => {
  const projects = [
    {
      name: "Furaha Initiative",
      type: "CBO Website",
      description: "Full website for a community-based organization focused on empowerment and education.",
      tech: ["React", "TypeScript", "Tailwind"],
      color: "bg-sage/20",
      rotation: -1,
    },
    {
      name: "Portfolio Projects",
      type: "Web Development",
      description: "Various responsive websites showcasing modern design and functionality.",
      tech: ["JavaScript", "CSS3", "HTML5"],
      color: "bg-coral/20",
      rotation: 0,
    },
    {
      name: "Creative Tools",
      type: "Web Apps",
      description: "Digital tools bridging technology and artistic expression.",
      tech: ["Canvas API", "React", "Node.js"],
      color: "bg-mustard/20",
      rotation: 1,
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
  //   variant?: "default" | "sketch" | "marker" | "outline";
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
  //     marker: "bg-mustard text-ink hover:bg-mustard/90 shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.1)]",
  //     outline: "bg-transparent text-ink border-2 border-gray-300 hover:border-primary hover:text-primary"
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
    <section id="code" className="py-24 relative overflow-hidden">
      {/* Decorative code brackets */}
      <div className="absolute top-20 left-10 text-8xl font-mono text-gray-300/20 select-none">{"{"}</div>
      <div className="absolute bottom-20 right-10 text-8xl font-mono text-gray-300/20 select-none">{"}"}</div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-handwritten text-2xl text-sage">the other side</span>
          <h2 className="font-display text-5xl md:text-6xl text-ink mt-2">
            I also <span className="font-mono text-primary">{`<code/>`}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-body">
            Full Stack Developer creating functional, user-centered digital experiences.
          </p>
        </div>

        {/* Skills bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["JavaScript", "TypeScript", "React", "Node.js", "HTML5", "CSS3", "Git", "Tailwind"].map((skill, i) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white border border-gray-300 rounded-sm font-mono text-sm text-foreground hover:bg-gray-100 transition-colors"
              style={{ transform: `rotate(${(i % 2 === 0 ? 1 : -1) * 1}deg)` }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className={`${project.color} p-6 border-2 border-ink/10 rounded-sm group hover:border-primary/50 transition-colors`}
              style={{ transform: `rotate(${project.rotation}deg)` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Code2 className="w-8 h-8 text-ink/60" />
                <ExternalLink className="w-5 h-5 text-ink/40 group-hover:text-primary transition-colors" />
              </div>

              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                {project.type}
              </span>
              <h3 className="font-display text-2xl text-ink mt-1 mb-3">{project.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 bg-background/50 rounded-sm text-xs font-mono text-ink/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2 font-mono">
            <Github className="w-5 h-5" />
            view on github
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CodeSection;