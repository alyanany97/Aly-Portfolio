"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = personalInfo.roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % personalInfo.roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const socialLinks = [
    { icon: GithubIcon, href: personalInfo.githubUrl, label: personalInfo.githubDisplay },
    { icon: LinkedinIcon, href: personalInfo.linkedinUrl, label: personalInfo.linkedinDisplay },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: personalInfo.email },
    { icon: Phone, href: `tel:${personalInfo.phone}`, label: personalInfo.phone },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden"
    >
      {/* Subtle gradient background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="max-w-4xl w-full text-center">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-primary font-medium text-base mb-4 tracking-widest uppercase"
        >
          Hi, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground mb-4"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6 h-9"
        >
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {displayed}
          </span>
          <span className="animate-pulse text-primary">|</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card hover:border-primary hover:text-primary hover:bg-accent transition-all text-sm font-medium text-muted-foreground"
            >
              <Icon size={16} />
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-10"
        >
          {[
            { value: "3.8", label: "GPA" },
            { value: "$45K", label: "Scholarships" },
            { value: "4", label: "Tech Roles" },
            { value: "🎾", label: "Varsity Squash" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-bold text-foreground">{value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-md"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-colors font-semibold"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
