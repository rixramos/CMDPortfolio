"use client";

import { useEffect, useRef, useState } from "react";

const certifications = [
  "ITIL Foundation",
  "Zendesk Admin",
  "Salesforce Certified",
  "Google Analytics",
  "HubSpot Inbound",
];

export function EducationSection() {
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
      id="education"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
            04
          </span>
          <span className="w-12 h-px bg-border" />
          <span className="font-mono text-xs text-primary uppercase tracking-wider">
            Education
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Main Education Card */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="glass-card rounded-2xl p-8 neon-border h-full">
              {/* Corner Decorations */}
              <div className="absolute -top-px -right-px w-20 h-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-px h-12 bg-gradient-to-b from-primary to-transparent" />
                <div className="absolute top-0 right-0 h-px w-12 bg-gradient-to-l from-primary to-transparent" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-xs text-primary uppercase tracking-wider">
                    2014 - 2018
                  </span>
                  <h3 className="text-xl font-bold">State University</h3>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Bachelor of Science in{" "}
                <span className="text-primary neon-text">
                  Business Administration
                </span>
              </h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Specialized in Customer Relationship Management and Business 
                Communication. Graduated with honors and participated in 
                various leadership programs and community service initiatives.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary font-mono text-xs">
                  Cum Laude
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground font-mono text-xs">
                  Dean&apos;s List
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground font-mono text-xs">
                  Student Leader
                </span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert}
                  className="glass-card rounded-xl p-4 flex items-center justify-between transition-all duration-300 hover:neon-border hover:translate-x-2 group cursor-default"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                    <span className="font-medium">{cert}</span>
                  </div>
                  <svg
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
