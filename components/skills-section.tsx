"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Customer Support", level: 95 },
  { name: "Technical Troubleshooting", level: 90 },
  { name: "CRM Systems", level: 88 },
  { name: "Communication", level: 95 },
  { name: "Problem Solving", level: 92 },
];

const technologies = [
  "Zendesk",
  "Salesforce",
  "Intercom",
  "Slack",
  "JIRA",
  "Confluence",
  "Microsoft 365",
  "Google Workspace",
  "Freshdesk",
  "HubSpot",
];

const recognitions = [
  { title: "Top Performer", year: "2023" },
  { title: "Customer Champion", year: "2022" },
  { title: "Excellence Award", year: "2021" },
];

export function SkillsSection() {
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
      id="skills"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-1/3 -right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
            02
          </span>
          <span className="w-12 h-px bg-border" />
          <span className="font-mono text-xs text-primary uppercase tracking-wider">
            Skills & Expertise
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Progress Bars */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold mb-8">Core Competencies</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm">{skill.name}</span>
                  <span className="font-mono text-sm text-primary">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out ${
                      isVisible ? "animate-progress-fill" : ""
                    }`}
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 150}ms`,
                      boxShadow: "0 0 10px var(--neon-glow)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Technologies & Recognition */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Technologies */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full glass-card border border-border/50 font-mono text-sm transition-all duration-300 hover:border-primary hover:text-primary hover:neon-border cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Recognition Card */}
            <div className="glass-card rounded-2xl p-6 neon-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
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
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Recognition</h4>
                  <p className="text-xs text-muted-foreground font-mono">
                    Recent achievements
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {recognitions.map((rec) => (
                  <div
                    key={rec.title}
                    className="flex items-center justify-between py-2 border-b border-border/30 last:border-0"
                  >
                    <span className="text-sm">{rec.title}</span>
                    <span className="font-mono text-xs text-primary">
                      {rec.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
