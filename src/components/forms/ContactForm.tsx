"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, Check, ChevronDown, Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  budgetRanges,
  hasErrors,
  projectTypes,
  validateContact,
  type ContactPayload,
  type FieldErrors,
} from "@/lib/validation";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const emptyForm: ContactPayload = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const uid = useId();
  const params = useSearchParams();
  const [values, setValues] = useState<ContactPayload>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const mountedAt = useRef<number | null>(null);
  const successRef = useRef<HTMLDivElement>(null);

  // Recorded after mount so the render pass stays pure. Used to reject
  // submissions that arrive impossibly fast — a reliable bot signal.
  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  // The careers page links through with ?role=…; pre-fill the message.
  // Adjusted during render rather than in an effect, so there is no
  // flash of an empty form before the prefill lands.
  const role = params.get("role");
  const [prefilledRole, setPrefilledRole] = useState<string | null>(null);
  if (role && role !== prefilledRole) {
    setPrefilledRole(role);
    setValues((v) => ({
      ...v,
      projectType: "Other",
      message: `I'd like to apply for the ${role} role. `,
    }));
  }

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const field = (key: keyof ContactPayload) => ({
    id: `${uid}-${key}`,
    name: key,
    value: (values[key] as string) ?? "",
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      const next = { ...values, [key]: e.target.value };
      setValues(next);
      if (touched[key]) setErrors(validateContact(next));
    },
    onBlur: () => {
      setTouched((t) => ({ ...t, [key]: true }));
      setErrors(validateContact(values));
    },
    "aria-invalid": Boolean(errors[key]) || undefined,
    "aria-describedby": errors[key] ? `${uid}-${key}-error` : undefined,
  });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError(null);

    const found = validateContact(values);
    setErrors(found);
    setTouched(
      Object.fromEntries(Object.keys(emptyForm).map((k) => [k, true])) as Record<
        string,
        boolean
      >,
    );

    if (hasErrors(found)) {
      const firstKey = Object.keys(found)[0];
      document.getElementById(`${uid}-${firstKey}`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          elapsed: mountedAt.current ? Date.now() - mountedAt.current : undefined,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        errors?: FieldErrors;
        message?: string;
      };

      if (!res.ok || !data.ok) {
        if (data.errors) setErrors(data.errors);
        setServerError(
          data.message ??
            "We couldn't send that just now. Please try again, or email us directly.",
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      setValues(emptyForm);
      setTouched({});
      setErrors({});
    } catch {
      setServerError(
        "We couldn't reach the server. Check your connection and try again, or email us directly.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="glass glass-rim rounded-[var(--radius-md)] p-10 text-center sm:p-14"
      >
        <span className="mx-auto grid size-12 place-items-center rounded-full bg-[var(--accent)] text-[var(--on-accent)]">
          <Check className="size-5" aria-hidden />
        </span>
        <h3 className="mt-7 text-[1.5rem] font-bold tracking-[-0.03em]">
          Thanks — your enquiry is in.
        </h3>
        <p className="mx-auto mt-3 max-w-[44ch] text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
          We read every enquiry ourselves and reply within one business day. If it is
          urgent, reply to the confirmation and say so.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="link-underline mt-8 text-[0.875rem] font-medium text-[var(--accent)]"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass = (key: keyof ContactPayload) =>
    cn(
      "h-12 w-full rounded-[var(--radius-sm)] border bg-[var(--surface)] px-4 text-[0.9375rem] transition-colors duration-300 placeholder:text-[var(--fg-subtle)]",
      errors[key]
        ? "border-[var(--accent)]"
        : "border-[var(--line)] hover:border-[var(--line-strong)] focus:border-[var(--accent)]",
    );

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      {/* Honeypot — hidden from users, catches naive bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${uid}-website`}>Leave this field empty</label>
        <input
          id={`${uid}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => setValues((v) => ({ ...v, website: e.target.value }))}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" required error={errors.name} id={`${uid}-name`} errorId={`${uid}-name-error`}>
          <input
            {...field("name")}
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            className={inputClass("name")}
          />
        </Field>

        <Field label="Company name" error={errors.company} id={`${uid}-company`} errorId={`${uid}-company-error`}>
          <input
            {...field("company")}
            type="text"
            autoComplete="organization"
            placeholder="Optional"
            className={inputClass("company")}
          />
        </Field>

        <Field label="Email address" required error={errors.email} id={`${uid}-email`} errorId={`${uid}-email-error`}>
          <input
            {...field("email")}
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            className={inputClass("email")}
          />
        </Field>

        <Field label="Phone number" error={errors.phone} id={`${uid}-phone`} errorId={`${uid}-phone-error`}>
          <input
            {...field("phone")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Optional"
            className={inputClass("phone")}
          />
        </Field>

        <Field label="Project type" required error={errors.projectType} id={`${uid}-projectType`} errorId={`${uid}-projectType-error`}>
          <div className="relative">
            <select {...field("projectType")} required className={cn(inputClass("projectType"), "pr-10")}>
              <option value="">Select a project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-[var(--fg-subtle)]"
              aria-hidden
            />
          </div>
        </Field>

        <Field label="Budget range" error={errors.budget} id={`${uid}-budget`} errorId={`${uid}-budget-error`}>
          <div className="relative">
            <select {...field("budget")} className={cn(inputClass("budget"), "pr-10")}>
              <option value="">Prefer not to say</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-[var(--fg-subtle)]"
              aria-hidden
            />
          </div>
        </Field>
      </div>

      <Field
        label="Project description"
        required
        error={errors.message}
        id={`${uid}-message`}
        errorId={`${uid}-message-error`}
        hint="What are you building, what problem is it solving, and where are you now?"
      >
        <textarea
          {...field("message")}
          rows={6}
          required
          placeholder="Tell us about the project…"
          className={cn(
            "w-full resize-y rounded-[var(--radius-sm)] border bg-[var(--surface)] p-4 text-[0.9375rem] leading-[1.6] transition-colors duration-300 placeholder:text-[var(--fg-subtle)]",
            errors.message
              ? "border-[var(--accent)]"
              : "border-[var(--line)] hover:border-[var(--line-strong)] focus:border-[var(--accent)]",
          )}
        />
      </Field>

      <AnimatePresence>
        {status === "error" && serverError && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="alert"
            className="flex items-start gap-3 rounded-[var(--radius-sm)] border border-[var(--accent)] bg-[var(--accent-soft)] p-4 text-[0.875rem]"
          >
            <AlertCircle className="mt-0.5 size-4 shrink-0 text-[var(--accent)]" aria-hidden />
            <span>{serverError}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-4 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[42ch] text-[0.75rem] leading-relaxed text-[var(--fg-subtle)]">
          We use what you send here only to respond to your enquiry. See our{" "}
          <a href="/privacy" className="link-underline text-[var(--fg-muted)]">
            privacy policy
          </a>
          .
        </p>

        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          loading={status === "submitting"}
          withArrow={status !== "submitting"}
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? "Sending" : "Start a Conversation"}
        </Button>
      </div>

      {/* Live region for assistive technology during submission. */}
      <p aria-live="polite" className="sr-only">
        {status === "submitting" ? "Sending your enquiry" : ""}
      </p>
    </form>
  );
}

function Field({
  label,
  id,
  errorId,
  required,
  error,
  hint,
  children,
}: {
  label: string;
  id: string;
  errorId: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[0.8125rem] font-medium">
        {label}
        {required && (
          <span className="ml-1 text-[var(--accent)]" aria-hidden>
            *
          </span>
        )}
        {!required && <span className="ml-2 text-[var(--fg-subtle)]">(optional)</span>}
      </label>
      {hint && <p className="-mt-1 text-[0.75rem] text-[var(--fg-subtle)]">{hint}</p>}
      {children}
      {error && (
        <p id={errorId} className="flex items-center gap-1.5 text-[0.75rem] text-[var(--accent)]">
          <AlertCircle className="size-3" aria-hidden />
          {error}
        </p>
      )}
    </div>
  );
}

/** Exported for the Suspense fallback on the contact page. */
export function ContactFormSkeleton() {
  return (
    <div className="flex items-center gap-3 py-24 text-[var(--fg-muted)]">
      <Loader2 className="size-4 animate-spin" aria-hidden />
      <span className="text-sm">Loading form…</span>
    </div>
  );
}
