"use client";

import { motion } from "framer-motion";
import { ExternalLink, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { GithubIcon } from "@/components/icons";
import { featuredProjects, otherProjects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
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
            What I&apos;ve Built
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Projects</h2>
          <div className="mt-3 w-16 h-1 rounded-full bg-primary" />
        </motion.div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Card className="h-full flex flex-col hover:border-primary/60 hover:shadow-md transition-all group">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <div>
                      <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                        {project.name}
                      </CardTitle>
                      <p className="text-xs text-muted-foreground mt-0.5 italic">
                        {project.subtitle}
                      </p>
                    </div>
                    {project.isLive && (
                      <span className="shrink-0 flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-primary text-sm font-semibold">
                    <Users size={14} />
                    {project.stat}
                  </div>

                  <CardDescription className="leading-relaxed mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {project.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-primary shrink-0 mt-1">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1.5 w-full">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 w-full">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                      >
                        <ExternalLink size={13} />
                        Live Site
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary hover:underline transition-colors"
                      >
                        <GithubIcon size={13} />
                        GitHub
                      </a>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-3">
            More on GitHub
            <div className="flex-1 h-px bg-border" />
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, i) => (
              <motion.a
                key={project.id}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group block rounded-xl border border-border bg-card p-4 hover:border-primary/50 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {project.name}
                  </h4>
                  <GithubIcon size={14} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs py-0">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <a
            href="https://github.com/alyanany97"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary border border-border rounded-full px-6 py-2.5 hover:border-primary transition-all"
          >
            <GithubIcon size={16} />
            See all repositories
          </a>
        </motion.div>
      </div>
    </section>
  );
}
