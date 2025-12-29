'use client';
import { useEffect, useRef, useState } from "react";
import { Canvas as FabricCanvas, PencilBrush } from "fabric";
import { ArrowDown, Sparkles, Paintbrush, RotateCcw } from "lucide-react";
import { Button } from "./button";
const SketchHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null);
  const [activeColor, setActiveColor] = useState("#2d3436");
  const [brushSize, setBrushSize] = useState(3);

  const colors = ["#2d3436", "#e86b4a", "#74b49b", "#f6b93b", "#e84393", "#0984e3"];

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new FabricCanvas(canvasRef.current, {
      width: 280,
      height: 200,
      backgroundColor: "#fefcf8",
      isDrawingMode: true,
    });

    const brush = new PencilBrush(canvas);
    brush.color = activeColor;
    brush.width = brushSize;
    canvas.freeDrawingBrush = brush;

    setFabricCanvas(canvas);

    return () => {
      canvas.dispose();
    };
  }, []);

  useEffect(() => {
    if (!fabricCanvas?.freeDrawingBrush) return;
    fabricCanvas.freeDrawingBrush.color = activeColor;
    fabricCanvas.freeDrawingBrush.width = brushSize;
  }, [activeColor, brushSize, fabricCanvas]);

  const handleClear = () => {
    if (!fabricCanvas) return;
    fabricCanvas.clear();
    fabricCanvas.backgroundColor = "#fefcf8";
    fabricCanvas.renderAll();
  };

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
  //   size?: "sm" | "md" | "lg";
  //   className?: string;
  //   onClick?: () => void;
  // }) => {
  //   const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none";
    
  //   const sizeStyles = {
  //     sm: "px-4 py-2 text-sm",
  //     md: "px-6 py-3 text-base",
  //     lg: "px-8 py-4 text-lg"
  //   };

  //   const variantStyles = {
  //     default: "bg-gray-900 text-white hover:bg-gray-800 border-2 border-gray-900",
  //     sketch: "bg-transparent text-gray-900 border-2 border-gray-900 hover:bg-gray-900/5",
  //     marker: "bg-yellow-300 text-gray-900 hover:bg-yellow-400 border-2 border-gray-900 relative overflow-hidden"
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
    <section className="min-h-screen relative overflow-hidden pt-20 pb-12 bg-[#fefcf8]">
      {/* Navigation Bar - Based on your screenshot
      <div className="container mx-auto px-6 mb-8">
        <div className="flex items-center justify-between py-4 border-b border-gray-300">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">the creative one</h1>
          <nav className="hidden md:flex items-center gap-8">
            {['About', 'Gallery', 'Teaching', 'Code', 'Say Hi'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-gray-700 hover:text-gray-900 font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
        </div>
      </div> */}

      {/* Scattered decorative elements */}
      <div className="absolute w-20 h-20 bg-yellow-300/20 rounded-full top-32 left-10 rotate-12" />
      <div className="absolute w-16 h-16 bg-green-300/20 rounded-full top-64 right-20 -rotate-6" />
      <div className="absolute w-24 h-24 bg-pink-300/15 rounded-full bottom-48 left-1/4 rotate-45" />
      
      {/* Hand-drawn decorative elements */}
      <div className="absolute top-48 right-16 w-32 h-32 border-2 border-gray-300 rounded-full opacity-30 rotate-12" />
      <div className="absolute bottom-32 left-16 w-24 h-24 border border-gray-300 rounded-full opacity-40 -rotate-12" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Sticky note style intro */}
            <div className="inline-block bg-mustard/30 px-4 py-2 -rotate-2 mb-6">
              <span className="font-handwritten text-xl text-ink flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                hello there!
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-ink leading-[0.9] mb-6">
              I'm an{" "}
              <span className="hand-underline italic text-primary">Artist</span>
              <br />
              & a{" "}
              <span className="marker-highlight">Developer</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-lg leading-relaxed mb-10">
              I create with both <span className="font-bold text-gray-900">brushes</span> and{" "}
              <span className="font-bold text-gray-900">code</span>. 
              Currently seeking opportunities to teach art and inspire creativity.
            </p>

            <div className="flex flex-wrap gap-6 items-center mb-16">
               <Button variant="sketch" size="lg" className="font-handwritten text-2xl">
                See My Work
              </Button>
              <Button variant="marker" size="lg" className="font-handwritten text-2xl">
                hire me for teaching!
              </Button>
            </div>

            {/* Hand-drawn arrow */}
            <div className="flex items-center gap-4 text-gray-600">
              <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </div>
              <span className="text-lg font-medium">scroll to explore</span>
            </div>
          </div>

          {/* Right Side - Interactive Canvas + Polaroids */}
          <div className="relative hidden lg:block">
            {/* Main canvas container */}
            <div className="absolute top-4 right-4 z-20">
              <div className="bg-white p-4 shadow-xl rotate-2 inline-block relative border border-gray-300">
                {/* Tape effect */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gray-200/80 rounded-md border border-gray-300" />
                <p className="text-gray-600 text-sm mb-3 -rotate-1 font-medium">try drawing here! ↓</p>
                <div className="border-2 border-gray-300 rounded overflow-hidden mb-3">
                  <canvas ref={canvasRef} width={280} height={200} />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex gap-2">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setActiveColor(color)}
                        className={`w-7 h-7 rounded-full border-2 transition-all hover:scale-110 ${
                          activeColor === color ? "border-gray-900 scale-110 ring-2 ring-offset-1" : "border-transparent"
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setBrushSize(brushSize === 3 ? 8 : 3)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors border border-gray-200"
                      title="Brush size"
                    >
                      <Paintbrush className="w-4 h-4 text-gray-800" />
                    </button>
                    <button
                      onClick={handleClear}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors border border-gray-200"
                      title="Clear"
                    >
                      <RotateCcw className="w-4 h-4 text-gray-800" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Polaroid 1 */}
            <div className="absolute top-56 left-4 w-52 bg-white p-3 shadow-lg -rotate-6 border border-gray-300">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center border border-gray-200">
                <div className="text-5xl">🎨</div>
              </div>
              <p className="text-center text-gray-700 mt-3 text-sm font-medium">greenpeace project</p>
            </div>

            {/* Polaroid 2 */}
            <div className="absolute bottom-8 right-8 w-44 bg-white p-3 shadow-lg rotate-3 border border-gray-300">
              <div className="aspect-square bg-gradient-to-br from-yellow-100 to-pink-100 flex items-center justify-center border border-gray-200">
                <div className="text-4xl">👨‍🎨</div>
              </div>
              <p className="text-center text-gray-700 mt-3 text-sm font-medium">sip & paint</p>
            </div>

            {/* Brushstroke decoration */}
            <div className="absolute bottom-32 left-24">
              <svg width="120" height="40" viewBox="0 0 120 40" className="text-gray-900/20">
                <path
                  d="M10 30 Q30 10, 60 25 T110 20"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1200 120" className="w-full h-16 text-gray-100" preserveAspectRatio="none">
          <path
            d="M0 60 Q300 30, 600 60 T1200 60 L1200 120 L0 120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default SketchHero;