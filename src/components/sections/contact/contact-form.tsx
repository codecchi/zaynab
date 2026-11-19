"use client";

import { useId, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { CircleCheck, Info, LoaderCircle, Mail, MessageCircle, Send, TriangleAlert } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site-config";
import { mailtoLink, whatsappLink } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Fields = { name: string; email: string; phone: string; service: string; message: string; company: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = "idle" | "submitting" | "sent" | "prepared" | "error";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^\+?[\d\s()-]{7,20}$/;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!EMAIL.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (!PHONE.test(f.phone.trim())) e.phone = "Please enter a valid phone number, e.g. +92 300 1234567.";
  if (!f.service) e.service = "Please select the service you need.";
  if (f.message.trim().length < 15) e.message = "Please share a few details (at least 15 characters).";
  return e;
}

function summary(f: Fields) {
  const service = services.find((s) => s.slug === f.service)?.title ?? f.service;
  return `Name: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nService: ${service}\n\n${f.message}`;
}

export function ContactForm() {
  const params = useSearchParams();
  const preset = params.get("service");
  const id = useId();
  const [fields, setFields] = useState<Fields>({
    name: "",
    email: "",
    phone: "",
    service: services.some((s) => s.slug === preset) ? (preset as string) : "",
    message: "",
    company: "", // honeypot
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const endpoint = siteConfig.contactForm.endpoint;

  const set =
    (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFields((f) => ({ ...f, [k]: e.target.value }));
      if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
    };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (fields.company) return; // bot
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.getElementById(`${id}-${first}`)?.focus();
      return;
    }

    if (!endpoint) {
      setStatus("prepared");
      return;
    }

    setStatus("submitting");
    try {
      const { company: _hp, ...payload } = fields;
      void _hp;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const subject = "Consultation inquiry";
  const mail = mailtoLink(subject, summary(fields));
  const wa = whatsappLink(`Hello, I would like to make an inquiry.\n\n${summary(fields)}`);

  if (status === "sent" || status === "prepared") {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={status}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          role="status"
          aria-live="polite"
          className="glass rounded-[2rem] p-8 sm:p-10"
        >
          <CircleCheck className="text-accent-2 size-10" strokeWidth={1.4} aria-hidden />
          {status === "sent" ? (
            <>
              <h3 className="text-gradient mt-6 pb-1 text-2xl font-bold tracking-tight sm:text-3xl">
                Thank you, your inquiry has been sent.
              </h3>
              <p className="text-muted mt-4 leading-relaxed">
                We will review your message and respond as soon as possible during business hours.
              </p>
            </>
          ) : (
            <>
              <h3 className="text-gradient mt-6 pb-1 text-2xl font-bold tracking-tight sm:text-3xl">
                Your inquiry is ready to send.
              </h3>
              <p className="text-muted mt-4 leading-relaxed">
                Online delivery for this form is not connected yet, so nothing has been sent. Choose how you would like
                to send your message — it has been filled in for you.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {mail && (
                  <Button href={mail}>
                    <Mail className="size-4" aria-hidden /> Send by Email
                  </Button>
                )}
                {wa && (
                  <Button href={wa} variant="secondary">
                    <MessageCircle className="size-4" aria-hidden /> Send on WhatsApp
                  </Button>
                )}
              </div>
              {!mail && !wa && (
                <p className="border-accent/30 text-muted mt-6 rounded-xl border border-dashed px-4 py-3 text-sm">
                  Email and WhatsApp details have not been configured yet. Once they are added in{" "}
                  <code>site-config.ts</code>, buttons to send the inquiry will appear here.
                </p>
              )}
            </>
          )}
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-fg mt-8 min-h-11 cursor-pointer text-sm font-semibold underline underline-offset-4"
          >
            Edit inquiry
          </button>
        </motion.div>
      </AnimatePresence>
    );
  }

  const field =
    "mt-2 block w-full rounded-2xl border border-line-strong bg-surface/70 px-4 py-3.5 text-base text-fg transition-[border-color,background-color,box-shadow] duration-300 placeholder:text-subtle hover:border-accent/30 focus:border-accent/50 focus:bg-surface focus:shadow-[0_0_0_4px_rgba(141,181,150,0.15)] focus:outline-none";
  const label = "text-sm font-semibold text-fg";
  const err = (k: keyof Fields) =>
    errors[k] ? (
      <p id={`${id}-${k}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-[#ff9b8f]">
        <TriangleAlert className="size-3.5 shrink-0" aria-hidden /> {errors[k]}
      </p>
    ) : null;
  const aria = (k: keyof Fields) => ({
    id: `${id}-${k}`,
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${id}-${k}-error` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="glass relative rounded-[2rem] p-6 sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-name`} className={label}>
            Full Name <span className="text-highlight">*</span>
          </label>
          <input
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={set("name")}
            className={cn(field, errors.name && "border-[#ff9b8f]/60")}
            {...aria("name")}
          />
          {err("name")}
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={label}>
            Email Address <span className="text-highlight">*</span>
          </label>
          <input
            type="email"
            autoComplete="email"
            inputMode="email"
            value={fields.email}
            onChange={set("email")}
            className={cn(field, errors.email && "border-[#ff9b8f]/60")}
            {...aria("email")}
          />
          {err("email")}
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className={label}>
            Phone Number <span className="text-highlight">*</span>
          </label>
          <input
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+92 3XX XXXXXXX"
            value={fields.phone}
            onChange={set("phone")}
            className={cn(field, errors.phone && "border-[#ff9b8f]/60")}
            {...aria("phone")}
          />
          {err("phone")}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-service`} className={label}>
            Service Required <span className="text-highlight">*</span>
          </label>
          <select
            value={fields.service}
            onChange={set("service")}
            className={cn(
              field,
              "bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 fill=%22none%22><path d=%22M1 1l5 5 5-5%22 stroke=%22%23A8CDB0%22 stroke-width=%221.5%22/></svg>')] cursor-pointer appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10",
              errors.service && "border-[#ff9b8f]/60",
            )}
            {...aria("service")}
          >
            <option value="" className="bg-surface">
              Select a service…
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug} className="bg-surface">
                {s.title}
              </option>
            ))}
            <option value="other" className="bg-surface">
              Other / Not sure
            </option>
          </select>
          {err("service")}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-message`} className={label}>
            Message <span className="text-highlight">*</span>
          </label>
          <textarea
            rows={6}
            value={fields.message}
            onChange={set("message")}
            placeholder="Briefly describe your situation or question."
            className={cn(field, "resize-y", errors.message && "border-[#ff9b8f]/60")}
            {...aria("message")}
          />
          {err("message")}
        </div>
        {/* Honeypot — hidden from people, catches bots */}
        <div aria-hidden className="absolute -left-[9999px]">
          <label>
            Company{" "}
            <input type="text" tabIndex={-1} autoComplete="off" value={fields.company} onChange={set("company")} />
          </label>
        </div>
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-6 flex gap-3 rounded-2xl border border-[#ff9b8f]/30 bg-[#ff9b8f]/[0.08] p-4 text-sm text-[#ff9b8f]"
        >
          <TriangleAlert className="size-4 shrink-0" aria-hidden />
          Your inquiry could not be sent. Please try again, or contact us directly using the details on this page.
        </p>
      )}

      <div className="mt-8 flex flex-col-reverse gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-subtle text-xs leading-relaxed">
          Your details are kept confidential and used only to respond to your inquiry. See our{" "}
          <a href="/privacy-policy" className="hover:text-fg underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </p>
        <Button type="submit" size="lg" disabled={status === "submitting"} className="shrink-0">
          {status === "submitting" ? (
            <LoaderCircle className="size-4 animate-spin" aria-hidden />
          ) : (
            <Send className="size-4" aria-hidden />
          )}
          {status === "submitting" ? "Sending…" : "Submit Inquiry"}
        </Button>
      </div>

      {!endpoint && (
        <p className="border-line text-subtle mt-6 flex gap-3 border-t pt-6 text-xs leading-relaxed">
          <Info className="text-accent-2 size-4 shrink-0" aria-hidden />
          This form checks your details and then lets you send your inquiry by email or WhatsApp. It does not store or
          send anything on its own.
        </p>
      )}
    </form>
  );
}
