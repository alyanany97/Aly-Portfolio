"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for browsers that block clipboard API
      const el = document.createElement("textarea");
      el.value = personalInfo.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      copyable: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:+12265006569`,
      color: "text-green-500",
      bg: "bg-green-500/10",
      copyable: false,
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: personalInfo.linkedinDisplay,
      href: personalInfo.linkedinUrl,
      color: "text-sky-500",
      bg: "bg-sky-500/10",
      copyable: false,
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: personalInfo.githubDisplay,
      href: personalInfo.githubUrl,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      copyable: false,
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">
            Let&apos;s Connect
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="mt-3 w-16 h-1 rounded-full bg-primary mx-auto" />
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Feel free to reach out, whether that&apos;s about a project, an opportunity, or just to
            say hi.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {contactItems.map(({ icon: Icon, label, value, href, color, bg, copyable }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-sm transition-all group text-left w-full"
              >
                <div className={`p-2.5 rounded-xl ${bg} shrink-0`}>
                  <Icon size={20} className={color} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {label}
                  </p>
                  <p className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                    {value}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-colors shrink-0"
                />
              </a>

              {/* Copy button for email */}
              {copyable && (
                <button
                  onClick={copyEmail}
                  className="absolute right-12 top-1/2 -translate-y-1/2 p-1.5 rounded-md text-muted-foreground hover:text-primary hover:bg-accent transition-all"
                  aria-label="Copy email"
                  title={copied ? "Copied!" : "Copy email"}
                >
                  {copied ? (
                    <Check size={14} className="text-emerald-500" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
          }}
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-md"
          >
            <Mail size={18} />
            Send me an email
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-20 pt-8 border-t border-border text-center text-xs text-muted-foreground"
      >
        <p>Built with Next.js, shadcn/ui &amp; Tailwind CSS &middot; Deployed on Vercel</p>
        <p className="mt-1">&copy; {new Date().getFullYear()} Aly Anany. All rights reserved.</p>
      </motion.div>
    </section>
  );
}
