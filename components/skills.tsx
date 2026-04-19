"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, Database, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Cloud,
  Database,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">
            My Toolkit
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Skills</h2>
          <div className="mt-3 w-16 h-1 rounded-full bg-primary" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon] ?? Code2;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
