"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Frosted glass on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for whichever section is in view
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          {personalInfo.name}
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {/* Active indicator dot */}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right side: theme toggle + resume */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-1.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile: theme + hamburger */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            className="p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <ul className="flex flex-col px-6 py-4 gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="inline-block text-sm font-medium px-4 py-1.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
