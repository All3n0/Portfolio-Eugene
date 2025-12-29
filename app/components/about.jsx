import { Leaf, Code2, Users, Brush } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-paper relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left - Heading */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-5xl md:text-6xl text-ink leading-tight sticky top-32">
              A bit
              <br />
              <span className="italic text-primary">about</span>
              <br />
              me
              <svg className="w-20 h-8 mt-2 text-mustard" viewBox="0 0 80 20">
                <path
                  d="M5 15 Q20 5, 40 12 T75 8"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </h2>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-3 space-y-8">
            <p className="text-xl text-foreground leading-relaxed font-body">
              I'm a certified <span className="marker-highlight font-semibold">Full Stack Software Developer</span> with 
              hands-on experience building websites and systems. I developed a website for{" "}
              <span className="font-handwritten text-2xl text-primary">Furaha Initiative</span>, a CBO focused on 
              community empowerment.
            </p>

            <div className="bg-card p-6 -rotate-1 shadow-md border-l-4 border-sage">
              <p className="text-lg text-foreground leading-relaxed">
                But here's the thing — I'm also an <span className="font-handwritten text-2xl text-primary">artist</span>. 
                I've led major art projects for organizations like{" "}
                <span className="font-semibold text-sage">Greenpeace Africa</span>, using creative expression to 
                amplify climate and environmental awareness.
              </p>
            </div>

            <p className="text-xl text-foreground leading-relaxed">
              Beyond organizational work, I host <span className="font-handwritten text-2xl text-coral">sip-and-paint events</span> for 
              children and adults, where I teach and inspire others to explore art in an interactive, welcoming environment.
            </p>

            {/* Skills as scattered tags */}
            <div className="pt-8 flex flex-wrap gap-3">
              {[
                { icon: Brush, label: "Art & Illustration", color: "bg-coral/20 text-coral" },
                { icon: Leaf, label: "Environmental Art", color: "bg-sage/30 text-ink" },
                { icon: Users, label: "Art Teaching", color: "bg-mustard/30 text-ink" },
                { icon: Code2, label: "Full Stack Dev", color: "bg-primary/20 text-primary" },
              ].map((skill, i) => (
                <div
                  key={skill.label}
                  className={`${skill.color} px-4 py-2 rounded-full flex items-center gap-2 font-handwritten text-2xl`}
                  style={{ transform: `rotate(${(i - 1.5) * 2}deg)` }}
                >
                  <skill.icon className="w-4 h-4" />
                  {skill.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;