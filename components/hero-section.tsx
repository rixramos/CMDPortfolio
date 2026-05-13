"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const roles = [
  "Technical Support",
  "Content Moderator",
  "Freelance",
];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,100,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,100,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card neon-border mb-8 animate-float">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs text-primary uppercase tracking-wider">
              Available for Hire
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-foreground">John Rick</span>{" "}
            <span className="text-primary neon-text">Ramos</span>
          </h1>

          {/* Typing Animation */}
          <div className="h-12 flex items-center justify-center mb-8">
            <span className="font-mono text-xl md:text-2xl text-muted-foreground">
              {displayText}
            </span>
            <span className="w-0.5 h-6 bg-primary ml-1 animate-typing-cursor" />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Dedicated professional with expertise in delivering exceptional customer experiences 
            and technical solutions. Passionate about problem-solving and continuous improvement.
          </p>

          {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">

  <Button
    size="lg"
    className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-105"
  >
    Download CV
  </Button>

  <Button
    asChild
    variant="outline"
    size="lg"
    className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-105"
  >
    <a href="#contact">
      Get in Touch
    </a>
  </Button>

</div>
          {/* Contact Metadata */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>johnrick.ramos999@email.com</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Pangasinan, PH</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent animate-scroll-indicator" />
      </div>
    </section>
  );
}
