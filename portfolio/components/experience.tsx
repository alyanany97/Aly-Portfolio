"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { techExperiences, nonTechExperiences, varsityAthlete } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

type Experience = {
  id: number;
  company: string;
  role: string;
  subRoles?: string[];
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
};

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.08 } },
      }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
      {/* Timeline dot */}
      <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-primary border-2 border-background" />

      <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 hover:border-primary/40 hover:shadow-sm transition-all">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
          <div>
            <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
            <p className="text-primary font-medium text-sm">{exp.company}</p>

            {/* Sub-roles for YMCA-style multi-role entries */}
            {exp.subRoles && exp.subRoles.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {exp.subRoles.map((r) => (
                  <span
                    key={r}
                    className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {r}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col sm:items-end gap-1 text-xs text-muted-foreground shrink-0">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {exp.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} />
              {exp.location}
            </span>
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-2 mb-4">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
              <span className="text-primary shrink-0 mt-1">▸</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        {exp.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {exp.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function VarsityCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <div className="relative overflow-hidden rounded-2xl border-2 border-primary/25 bg-gradient-to-br from-primary/8 to-cyan-500/8 p-6">
        {/* Decorative blob */}
        <div className="pointer-events-none absolute -top-8 -right-8 w-40 h-40 rounded-full bg-primary/10 blur-2xl" />

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Left: sport + info */}
          <div className="flex items-center gap-4 flex-1">
            <div className="text-5xl select-none" role="img" aria-label="Squash">
              🎾
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                <h3 className="text-lg font-bold text-foreground">Varsity Squash</h3>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 rounded-full">
                  Active
                </span>
              </div>
              <p className="text-primary font-medium text-sm">{varsityAthlete.team}</p>
              <p className="text-sm text-muted-foreground mt-1">{varsityAthlete.description}</p>
            </div>
          </div>

          {/* Right: stats */}
          <div className="flex sm:flex-col gap-3 sm:gap-2 sm:text-right shrink-0 flex-wrap">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar size={12} />
              {varsityAthlete.period}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Users size={12} />
              {varsityAthlete.sport} &bull; Varsity
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">
            What I&apos;ve Done
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Experience</h2>
          <div className="mt-3 w-16 h-1 rounded-full bg-primary" />
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="tech">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <TabsList className="mb-10">
              <TabsTrigger value="tech" className="flex items-center gap-2">
                <Briefcase size={14} />
                Tech Experience
              </TabsTrigger>
              <TabsTrigger value="non-tech" className="flex items-center gap-2">
                <Users size={14} />
                Beyond Tech
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="tech">
            <div>
              {techExperiences.map((exp, i) => (
                <ExperienceCard key={exp.id} exp={exp} index={i} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="non-tech">
            <div>
              {/* Varsity athlete featured card */}
              <VarsityCard />

              {/* Regular non-tech experience timeline */}
              {nonTechExperiences.map((exp, i) => (
                <ExperienceCard key={exp.id} exp={exp} index={i} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
