"use client";

import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    title: "Senior Customer Success Manager",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    description: [
      "Led a team of 12 support specialists, improving response times by 40%",
      "Implemented new CRM workflows that increased customer satisfaction scores",
      "Developed training programs for onboarding new team members",
    ],
    skills: ["Leadership", "CRM", "Training", "Analytics"],
  },
  {
    title: "Technical Support Specialist",
    company: "GlobalTech Inc.",
    period: "2020 - 2022",
    description: [
      "Resolved complex technical issues with 98% first-contact resolution rate",
      "Created comprehensive knowledge base articles reducing ticket volume",
      "Collaborated with engineering teams to identify and fix product bugs",
    ],
    skills: ["Technical Support", "Documentation", "Bug Tracking"],
  },
  {
    title: "Customer Service Representative",
    company: "StartupHub",
    period: "2019 - 2020",
    description: [
      "Handled high-volume customer inquiries across multiple channels",
      "Achieved highest customer satisfaction ratings in the department",
      "Pioneered live chat support implementation for the organization",
    ],
    skills: ["Multi-channel Support", "Live Chat", "Customer Care"],
  },
  {
    title: "Content Moderator",
    company: "Social Media Co.",
    period: "2018 - 2019",
    description: [
      "Reviewed and moderated user-generated content following strict guidelines",
      "Maintained platform safety standards while ensuring positive user experience",
      "Trained new moderators on best practices and policy interpretation",
    ],
    skills: ["Content Moderation", "Policy Compliance", "Quality Assurance"],
  },
];

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger card animations
          experiences.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/4 -left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
            03
          </span>
          <span className="w-12 h-px bg-border" />
          <span className="font-mono text-xs text-primary uppercase tracking-wider">
            Experience
          </span>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div
            className={`absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ boxShadow: "0 0 10px var(--neon-glow)" }}
          />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-8 md:pl-20 transition-all duration-700 ${
                  visibleCards.includes(index)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary neon-glow" />

                {/* Card */}
                <div className="glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:neon-border group">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground font-mono text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full glass-card border border-primary/30 font-mono text-xs text-primary">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-secondary/50 text-xs font-mono text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
