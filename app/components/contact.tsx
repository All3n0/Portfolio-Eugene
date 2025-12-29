'use client';
import { useState } from "react";
import { Send, Mail, MapPin, Phone, Instagram, Linkedin } from "lucide-react";
import { Button } from "./button";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple toast simulation
    alert("Thanks! I'll get back to you soon 🎨");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  // Button Component
  

  // Input Component
  const Input = ({ 
    placeholder, 
    value, 
    onChange, 
    className = "", 
    type = "text",
    required = false 
  }: { 
    placeholder: string; 
    value: string; 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    type?: string;
    required?: boolean;
  }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors ${className}`}
      />
    );
  };

  // Textarea Component
  const Textarea = ({ 
    placeholder, 
    value, 
    onChange, 
    className = "", 
    required = false 
  }: { 
    placeholder: string; 
    value: string; 
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
    required?: boolean;
  }) => {
    return (
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none ${className}`}
      />
    );
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1200 40" className="w-full h-10 text-background" preserveAspectRatio="none">
          <path d="M0 40 Q150 0, 300 30 T600 20 T900 35 T1200 15 L1200 0 L0 0 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div>
            <span className="font-handwritten text-2xl text-primary">say hello!</span>
            <h2 className="font-display text-5xl md:text-6xl text-gray-900 mt-2 mb-6">
              Let's <span className="italic">create</span>
              <br />
              together
            </h2>

            <p className="text-xl text-gray-600 mb-8 font-body">
              Looking for an art teacher? Want to book a sip-and-paint? 
              Need a website? I'm here for it all.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, value: "hello@creativesoul.com" },
                { icon: Phone, value: "+254 XXX XXX XXX" },
                { icon: MapPin, value: "Nairobi, Kenya" },
              ].map((item) => (
                <div key={item.value} className="flex items-center gap-3 text-gray-900">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-body">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-4">
            
 {[Instagram, Linkedin].map((Icon, i) => (
  <div
    key={i}
    className="text-primary w-12 h-12 border-2 border-gray-900/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all cursor-pointer"
    onClick={() => console.log("Clicked")}
  >
    <Icon className="w-5 h-5 text-current" />
  </div>
))}



            </div>

            {/* Available note */}
            <div className="mt-12 inline-block bg-yellow-300/20 px-6 py-4 rotate-1 border-l-4 border-yellow-400">
              <p className="font-handwritten text-xl text-gray-900">
                📌 Currently available for:
              </p>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>• Part-time art teaching positions</li>
                <li>• Private & group art sessions</li>
                <li>• Web development projects</li>
              </ul>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white p-8 border-2 border-gray-900/10 rounded-sm shadow-lg relative">
            {/* Tape */}
            <div className="absolute -top-3 left-8 w-20 h-6 bg-green-400/50 rotate-2" />
            <div className="absolute -top-3 right-8 w-16 h-6 bg-green-400/50 -rotate-3" />

            <h3 className="font-handwritten text-3xl text-gray-900 mb-6">drop me a line</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-handwritten text-lg text-gray-900 mb-1 block">name</label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="font-handwritten text-lg text-gray-900 mb-1 block">email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="font-handwritten text-lg text-gray-900 mb-1 block">what's this about?</label>
                <Input
                  placeholder="Art Teaching / Sip & Paint / Web Project"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="font-handwritten text-lg text-gray-900 mb-1 block">your message</label>
                <Textarea
                  placeholder="Tell me what you're looking for..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[120px]"
                  required
                />
              </div>

              <Button variant="sketch" size="lg" type="submit" className="w-full font-handwritten text-xl">
                <Send className="w-5 h-5 mr-2" />
                send message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;