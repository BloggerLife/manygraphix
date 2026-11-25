"use client";
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const companyEmail =
    process.env.NEXT_PUBLIC_COMPANY_EMAIL || "info@manygraphix.com";
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus(null);
    const service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!service || !template || !key) {
      setStatus({
        type: "error",
        message:
          "EmailJS is not configured yet. Add your service ID, template ID and public key to .env.local.",
      });
      return;
    }
    setLoading(true);
    try {
      await emailjs.sendForm(service, template, form, { publicKey: key });
      form.reset();
      setStatus({
        type: "success",
        message:
          "Thanks for reaching out. Your message has been sent successfully.",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "We couldn't send your message. Please try again or contact us on WhatsApp.",
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <form onSubmit={submit} className="space-y-4">
      <input type="hidden" name="to_email" value={companyEmail} />
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className="form-field"
          name="from_name"
          placeholder="Your name"
          required
        />
        <input
          className="form-field"
          type="email"
          name="reply_to"
          placeholder="Email address"
          required
        />
      </div>
      <input
        className="form-field"
        name="subject"
        placeholder="What do you need help with?"
        required
      />
      <select className="form-field" name="service" defaultValue="">
        <option value="" disabled>
          Select a service
        </option>
        <option>Computer networking</option>
        <option>Computer systems</option>
        <option>IT support</option>
        <option>Other enquiry</option>
      </select>
      <textarea
        className="form-field min-h-36 resize-y"
        name="message"
        placeholder="Tell us a little about your project or issue..."
        required
      />
      <button
        disabled={loading}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
        type="submit"
      >
        {loading ? (
          <>
            <LoaderCircle className="animate-spin" size={18} /> Sending...
          </>
        ) : (
          <>
            Send message <ArrowUpRight size={17} />
          </>
        )}
      </button>
      {status && (
        <p
          role="status"
          className={`flex items-start gap-2 text-sm ${status.type === "success" ? "text-emerald-700" : "text-red-600"}`}
        >
          {status.type === "success" && (
            <CheckCircle2 size={18} className="shrink-0" />
          )}
          {status.message}
        </p>
      )}
    </form>
  );
}
