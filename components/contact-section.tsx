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
    value: "johnrick.ramos999@gmail.com",
    href: "mailto:johnrick.ramos999@gmail.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+63 991-458-9271",
    href: "tel:+639914589271",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    value: "Tayug, Pangasinan, Philippines",
    href: "#",
  },
  {
  icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  label: "LinkedIn",
  value: "John Rick Ramos",
  href: "https://www.linkedin.com/in/rixramos999",
  external: true,
},
{
  icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.369A19.791 19.791 0 0016.558 3c-.177.32-.384.75-.526 1.086a18.27 18.27 0 00-8.064 0A11.42 11.42 0 007.442 3a19.736 19.736 0 00-3.76 1.369C1.306 7.947.664 11.437.985 14.877A19.9 19.9 0 006.067 18c.49-.67.926-1.382 1.3-2.132-.711-.269-1.389-.604-2.03-.997.17-.126.336-.257.497-.393 3.92 1.84 8.172 1.84 12.046 0 .162.136.327.267.497.393-.642.393-1.321.728-2.031.997.375.75.811 1.462 1.301 2.132a19.87 19.87 0 005.081-3.123c.377-3.99-.644-7.449-2.411-10.508z" />
    </svg>
  ),
  label: "Discord",
  value: "rixramos999",
  href: "https://discord.com/users/416852234396106754",
  external: true,
},
{
  icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.56 15.75c-.56.56-1.31.88-2.1.88-.8 0-1.55-.32-2.11-.88l-1.02-1.02 1.42-1.42 1.02 1.02a1 1 0 001.38 0 1 1 0 000-1.39l-2.89-2.88a1 1 0 00-1.39 0l-5.65 5.65a1 1 0 000 1.39l2.88 2.88a1 1 0 001.39 0l1.02-1.02 1.42 1.42-1.02 1.02a3 3 0 01-4.23 0l-2.88-2.88a3 3 0 010-4.23l5.65-5.65a3 3 0 014.23 0l2.89 2.88a3 3 0 010 4.23z" />
    </svg>
  ),
  label: "Upwork",
  value: "View Profile",
  href: "https://www.upwork.com/freelancers/rixramos",
  external: true,
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
                <a href="mailto:johnrick.ramos999@gmail.com">
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
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {contactInfo.map((info, index) => (
              <a
                key={info.label}
  href={info.href}
  target={info.external ? "_blank" : undefined}
  rel={info.external ? "noopener noreferrer" : undefined}
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
