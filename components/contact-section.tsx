"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "john.doe@email.com",
    href: "mailto:john.doe@email.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    value: "New York, USA",
    href: "#",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/johndoe",
    href: "https://linkedin.com",
  },
];

export function ContactSection() {
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
      id="contact"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
            05
          </span>
          <span className="w-12 h-px bg-border" />
          <span className="font-mono text-xs text-primary uppercase tracking-wider">
            Contact
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* CTA Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Let&apos;s work{" "}
              <span className="text-primary neon-text">together</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I&apos;m always interested in hearing about new opportunities and 
              collaborations. Whether you have a question or just want to say hi, 
              feel free to reach out!
            </p>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card neon-border mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
              </span>
              <span className="font-mono text-sm text-primary">
                Available for new projects
              </span>
            </div>

            {/* Email Button */}
            <div>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="mailto:john.doe@email.com">
                  Send me an email
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Cards */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {contactInfo.map((info, index) => (
              <a
                key={info.label}
                href={info.href}
                className="glass-card rounded-xl p-5 transition-all duration-300 hover:neon-border hover:scale-105 group block"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4 text-primary group-hover:bg-primary/30 transition-colors">
                  {info.icon}
                </div>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {info.label}
                </p>
                <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                  {info.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
