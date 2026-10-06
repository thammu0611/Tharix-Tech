"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { Job } from "@/data/careers";
import { cn } from "@/lib/utils";

export function JobCard({ job }: { job: Job }) {
  const [open, setOpen] = useState(false);
  const panelId = `job-${job.id}`;

  return (
    <div className="border-b border-[var(--line)]">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="group flex w-full flex-col gap-4 py-7 text-left sm:flex-row sm:items-center sm:justify-between sm:gap-8"
      >
        <div className="min-w-0 flex-1">
          <p className="micro-label text-[var(--fg-subtle)]">{job.category}</p>
          <h3 className="mt-2.5 text-[1.25rem] font-semibold tracking-[-0.025em] transition-colors group-hover:text-[var(--accent)] sm:text-[1.375rem]">
            {job.title}
          </h3>
        </div>

        <div className="flex items-center gap-4 sm:gap-8">
          <dl className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[0.8125rem] text-[var(--fg-muted)]">
            <div className="flex gap-1.5">
              <dt className="sr-only">Location</dt>
              <dd>{job.location}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt className="sr-only">Employment type</dt>
              <dd>{job.type}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt className="sr-only">Experience</dt>
              <dd className="text-[var(--fg-subtle)]">{job.experience}</dd>
            </div>
          </dl>

          <span
            aria-hidden
            className={cn(
              "grid size-8 shrink-0 place-items-center rounded-full border border-[var(--line-strong)] transition-all duration-500 [transition-timing-function:var(--ease-out-expo)]",
              open && "rotate-45 border-[var(--accent)] bg-[var(--accent)] text-[var(--on-accent)]",
            )}
          >
            <Plus className="size-3.5" />
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.44, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-8 pb-8 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
              <div>
                <p className="max-w-[64ch] text-[0.9375rem] leading-[1.7] text-[var(--fg-muted)]">
                  {job.description}
                </p>
                <Link
                  href={`/contact?role=${encodeURIComponent(job.title)}`}
                  className="arrow-shift mt-6 inline-flex h-11 items-center gap-2 rounded-[var(--radius-sm)] bg-[var(--accent)] px-5 text-[0.9375rem] font-medium text-[var(--on-accent)] transition-colors hover:bg-[var(--accent-hover)]"
                >
                  Apply for this role
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>

              <div>
                <h4 className="micro-label text-[var(--fg-subtle)]">Skills</h4>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.75rem] text-[var(--fg-muted)]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
