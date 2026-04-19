"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, BookOpen, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { education } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
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
            Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Education</h2>
          <div className="mt-3 w-16 h-1 rounded-full bg-primary" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Degree card */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <GraduationCap size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">{education.degree}</h3>
                <p className="text-primary font-medium text-sm">{education.institution}</p>
              </div>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground mb-5">
              <div className="flex items-center gap-2">
                <MapPin size={13} />
                {education.location}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-foreground font-semibold">GPA:</span>
                {education.gpa}
              </div>
              <div className="text-foreground/70">{education.period}</div>
            </div>

            {/* Courses */}
            <div>
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5 mb-3">
                <BookOpen size={12} className="text-primary" />
                Relevant Courses
              </p>
              <div className="flex flex-wrap gap-1.5">
                {education.courses.map((course) => (
                  <Badge key={course} variant="secondary" className="text-xs">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Awards card */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.15 } },
            }}
            className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-amber-500/10">
                <Trophy size={22} className="text-amber-500" />
              </div>
              <h3 className="font-semibold text-foreground">Scholarships & Awards</h3>
            </div>

            <div className="space-y-4">
              {education.awards.map((award, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between gap-3 pb-4 border-b border-border last:border-0 last:pb-0"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground leading-snug">
                      {award.name}
                    </p>
                    {award.note && (
                      <p className="text-xs text-muted-foreground mt-0.5">{award.note}</p>
                    )}
                  </div>
                  <span className="shrink-0 text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {award.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Total awarded</span>
              <span className="text-base font-bold text-primary">$45,000</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
