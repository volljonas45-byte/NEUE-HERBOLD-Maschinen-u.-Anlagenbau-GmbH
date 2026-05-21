"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, ChevronRight } from "lucide-react";

const schema = z.object({
  company: z.string().min(2, "Bitte Firma angeben"),
  name: z.string().min(2, "Bitte Namen angeben"),
  email: z.string().email("Bitte gültige E-Mail angeben"),
  phone: z.string().optional(),
  subject: z.enum(["maschine", "anlage", "probemahlung", "ersatzteile", "sonstiges"] as const, {
    error: "Bitte Betreff wählen",
  }),
  material: z.string().optional(),
  throughput: z.string().optional(),
  message: z.string().min(10, "Bitte Nachricht eingeben (min. 10 Zeichen)"),
  honeypot: z.string().max(0),
});

type FormData = z.infer<typeof schema>;

const WEB3FORMS_KEY = "YOUR_WEB3FORMS_KEY";

export function AnfrageForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          email_subject: `Anfrage (${data.subject}) von ${data.company}`,
          from_name: data.name,
          ...data,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Fehler beim Senden. Bitte versuchen Sie es später noch einmal.");
      }
    } catch {
      setError("Netzwerkfehler. Bitte versuchen Sie es später noch einmal.");
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-16">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle2 className="size-7 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-brand-blue">Anfrage gesendet!</h2>
        <p className="mt-2 text-graphite-600 max-w-sm">
          Vielen Dank. Wir melden uns innerhalb eines Werktages bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Honeypot */}
      <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-graphite-700 mb-1.5">
            Firma *
          </label>
          <input
            {...register("company")}
            placeholder="Ihre Firma"
            className="w-full border border-graphite-200 rounded-lg px-3.5 py-2.5 text-sm text-graphite-800 placeholder-graphite-400 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition"
          />
          {errors.company && (
            <p className="text-xs text-red-500 mt-1">{errors.company.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-graphite-700 mb-1.5">
            Ihr Name *
          </label>
          <input
            {...register("name")}
            placeholder="Vor- und Nachname"
            className="w-full border border-graphite-200 rounded-lg px-3.5 py-2.5 text-sm text-graphite-800 placeholder-graphite-400 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition"
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-graphite-700 mb-1.5">
            E-Mail *
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="ihre@email.de"
            className="w-full border border-graphite-200 rounded-lg px-3.5 py-2.5 text-sm text-graphite-800 placeholder-graphite-400 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-graphite-700 mb-1.5">
            Telefon
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+49 ..."
            className="w-full border border-graphite-200 rounded-lg px-3.5 py-2.5 text-sm text-graphite-800 placeholder-graphite-400 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-graphite-700 mb-1.5">
          Betreff *
        </label>
        <select
          {...register("subject")}
          className="w-full border border-graphite-200 rounded-lg px-3.5 py-2.5 text-sm text-graphite-800 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition bg-white"
        >
          <option value="">Bitte wählen…</option>
          <option value="maschine">Maschinen-Anfrage</option>
          <option value="anlage">Komplettanlage</option>
          <option value="probemahlung">Probemahlung / Technikum</option>
          <option value="ersatzteile">Ersatzteile</option>
          <option value="sonstiges">Sonstiges</option>
        </select>
        {errors.subject && (
          <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-graphite-700 mb-1.5">
            Material (falls bekannt)
          </label>
          <input
            {...register("material")}
            placeholder="z.B. PET-Flaschen, PE-Folien"
            className="w-full border border-graphite-200 rounded-lg px-3.5 py-2.5 text-sm text-graphite-800 placeholder-graphite-400 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-graphite-700 mb-1.5">
            Durchsatz (falls bekannt)
          </label>
          <input
            {...register("throughput")}
            placeholder="z.B. 500 kg/h"
            className="w-full border border-graphite-200 rounded-lg px-3.5 py-2.5 text-sm text-graphite-800 placeholder-graphite-400 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-graphite-700 mb-1.5">
          Nachricht *
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Beschreiben Sie Ihre Anfrage…"
          className="w-full border border-graphite-200 rounded-lg px-3.5 py-2.5 text-sm text-graphite-800 placeholder-graphite-400 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition resize-none"
        />
        {errors.message && (
          <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-steel disabled:opacity-50 text-white font-semibold px-6 py-3 rounded-full transition-colors"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Wird gesendet…
          </>
        ) : (
          <>
            Anfrage senden
            <ChevronRight className="size-4" />
          </>
        )}
      </button>

      <p className="text-xs text-graphite-400">
        * Pflichtfelder. Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage
        verwendet und nicht an Dritte weitergegeben.
      </p>
    </form>
  );
}
