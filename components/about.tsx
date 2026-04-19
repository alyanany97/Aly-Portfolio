"use client";

import { motion } from "framer-motion";
import { personalInfo, hobbies, varsityAthlete } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">
            Get To Know Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">About Me</h2>
          <div className="mt-3 w-16 h-1 rounded-full bg-primary" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-4 text-muted-foreground leading-relaxed"
          >
            <p>
              I&apos;m <span className="text-foreground font-semibold">Aly Anany</span>, a
              Computer Engineering student at the{" "}
              <span className="text-primary font-medium">University of Guelph</span>{" "}
              with a 3.8
              GPA. I&apos;ve had paid technical roles since my first year, mostly in AI, cloud
              infrastructure, and robotics.
            </p>
            <p>
              In the last two years I went from annotating images for a strawberry-picking robot to
              shipping a production AI legal assistant used at a real consulting firm. I like working
              on things that are actually deployed and used by real people.
            </p>
            <p>
              Outside of engineering, I play varsity squash for the{" "}
              <span className="text-foreground font-medium">UoG Gryphons</span>{" "}and have coached
              squash at the YMCA. I&apos;ve also lifeguarded, volunteered at Hope House, and stayed
              involved on campus through the Muslim Student Association.
            </p>

            {/* Quick facts */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { label: "Location", value: personalInfo.location },
                { label: "GPA", value: "3.8 / 4.0" },
                { label: "Degree", value: "B.Eng. Computer Engineering" },
                { label: "Grad", value: "May 2028" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-xl border border-border bg-card p-3">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                    {label}
                  </p>
                  <p className="text-sm font-semibold text-foreground mt-0.5">{value}</p>
                </div>
              ))}

              {/* Varsity athlete highlight — full width */}
              <div className="col-span-2 rounded-xl border border-primary/30 bg-primary/5 p-3 flex items-center gap-3">
                <span className="text-2xl" role="img" aria-label="Squash">🎾</span>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                    Athletics
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    Varsity Squash,{" "}
                    <span className="text-primary">{varsityAthlete.team}</span>
                  </p>
                </div>
                <span className="ml-auto shrink-0 text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 px-2.5 py-1 rounded-full">
                  Active
                </span>
              </div>
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.15 } },
            }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-5">Hobbies & Interests</h3>
            <div className="grid grid-cols-2 gap-3">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.label}
                  className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card hover:border-primary hover:bg-accent transition-all group"
                >
                  <span className="text-2xl" role="img" aria-label={hobby.label}>
                    {hobby.emoji}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {hobby.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
