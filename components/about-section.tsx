"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "1", label: "Awards Won" },
  { value: "2", label: "Companies" },
];

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Card */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative glass-card rounded-2xl p-8 neon-border">
              {/* Corner Decoration */}
              <div className="absolute -top-px -right-px w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-primary to-transparent" />
                <div className="absolute top-0 right-0 h-px w-8 bg-gradient-to-l from-primary to-transparent" />
              </div>
              <div className="absolute -bottom-px -left-px w-16 h-16 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-px h-8 bg-gradient-to-t from-primary to-transparent" />
                <div className="absolute bottom-0 left-0 h-px w-8 bg-gradient-to-r from-primary to-transparent" />
              </div>

              {/* Avatar */}
			  <div className="relative w-32 h-32 mx-auto mb-6">
  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-accent/30 p-1">
    
    <div className="relative w-full h-full rounded-full overflow-hidden bg-card border border-primary/20">
      <Image
        src="/CMDPortfolio/profile.png"
        alt="John Rick Ramos"
        fill
        className="object-cover rounded-full"
        priority
      />
    </div>

  </div>

  {/* Top Agent Badge */}
  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full glass-card border border-primary/50 text-[10px] font-mono text-primary uppercase tracking-wider whitespace-nowrap">
    Top Agent
  </div>
</div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">John Rick Ramos</h3>
                <p className="text-muted-foreground font-mono text-sm mb-4">
                  Customer Experience Expert
                </p>
                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground font-mono">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Online
                  </span>
                  <span>Discord ID: 416852234396106754</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                01
              </span>
              <span className="w-12 h-px bg-border" />
              <span className="font-mono text-xs text-primary uppercase tracking-wider">
                About
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              I build{" "}
              <span className="relative">
                exceptional
                <span className="absolute -right-6 -top-2 text-red-500 text-xl">+</span>
              </span>{" "}
              <span className="text-primary neon-text">customer</span>{" "}
              experiences
            </h2>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              With over five years of experience in customer support and technical assistance, 
              I specialize in transforming challenging situations into positive outcomes. 
              My approach combines empathy with efficiency, ensuring every interaction leaves 
              a lasting positive impression.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              I thrive in fast-paced environments and am passionate about leveraging technology 
              to enhance customer satisfaction. Whether it&apos;s troubleshooting complex issues or 
              streamlining processes, I bring dedication and expertise to every project.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-4 text-center transition-all duration-300 hover:neon-border hover:scale-105 cursor-default"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
