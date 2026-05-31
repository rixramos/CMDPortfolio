"use client";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/rixramos",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
{
  name: "Discord",
  href: "https://discord.com/users/416852234396106754",
  icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.369A19.791 19.791 0 0016.558 3c-.177.32-.384.75-.526 1.086a18.27 18.27 0 00-8.064 0A11.42 11.42 0 007.442 3a19.736 19.736 0 00-3.76 1.369C1.306 7.947.664 11.437.985 14.877A19.9 19.9 0 006.067 18c.49-.67.926-1.382 1.3-2.132-.711-.269-1.389-.604-2.03-.997.17-.126.336-.257.497-.393 3.92 1.84 8.172 1.84 12.046 0 .162.136.327.267.497.393-.642.393-1.321.728-2.031.997.375.75.811 1.462 1.301 2.132a19.87 19.87 0 005.081-3.123c.377-3.99-.644-7.449-2.411-10.508z" />
    </svg>
  ),
},
  
];

export function Footer() {
  return (
    <footer className="py-12 relative">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#"
            className="font-mono text-lg font-bold tracking-wider text-primary hover:neon-text transition-all duration-300"
          >
            {"<JR />"}
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono order-3 md:order-2">
            © {new Date().getFullYear()} John Rick Ramos. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 order-2 md:order-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary hover:neon-border transition-all duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
