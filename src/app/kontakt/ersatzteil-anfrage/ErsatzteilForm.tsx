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
  machine: z.string().min(2, "Bitte Maschinentyp angeben"),
  serialNumber: z.string().optional(),
  partName: z.string().min(2, "Bitte Ersatzteil angeben"),
  quantity: z.string().optional(),
  urgency: z.enum(["normal", "express", "sofort"] as const).optional(),
  message: z.string().optional(),
  honeypot: z.string().max(0),
});

type FormData = z.infer<typeof schema>;

const WEB3FORMS_KEY = "YOUR_WEB3FORMS_KEY";

export function ErsatzteilForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Ersatzteil-Anfrage: ${data.partName} für ${data.machine}`,
          from_name: data.name,
          ...data,
        }),
      });
      if (res.ok) setSubmitted(true);
      else setError("Fehler beim Senden. Bitte versuchen Sie es später noch einmal.");
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
          Wir prüfen die Verfügbarkeit und melden uns umgehend.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-graphite-200 rounded-lg px-3.5 py-2.5 text-sm text-graphite-800 placeholder-graphite-400 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-graphite-700 mb-1.5">Firma *</label>
          <input {...register("company")} placeholder="Ihre Firma" className={inputClass} />
          {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-graphite-700 mb-1.5">Ihr Name *</label>
          <input {...register("name")} placeholder="Vor- und Nachname" className={inputClass} />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-graphite-700 mb-1.5">E-Mail *</label>
          <input {...register("email")} type="email" placeholder="ihre@email.de" className={inputClass} />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-graphite-700 mb-1.5">Telefon</label>
          <input {...register("phone")} type="tel" placeholder="+49 ..." className={inputClass} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-graphite-700 mb-1.5">Maschinentyp *</label>
          <input {...register("machine")} placeholder="z.B. SM 800/1000" className={inputClass} />
          {errors.machine && <p className="text-xs text-red-500 mt-1">{errors.machine.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-graphite-700 mb-1.5">Serien-Nr. (falls vorhanden)</label>
          <input {...register("serialNumber")} placeholder="Seriennummer" className={inputClass} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-graphite-700 mb-1.5">Ersatzteil *</label>
          <input {...register("partName")} placeholder="z.B. Rotormesser, Siebeinlage" className={inputClass} />
          {errors.partName && <p className="text-xs text-red-500 mt-1">{errors.partName.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-graphite-700 mb-1.5">Menge</label>
          <input {...register("quantity")} placeholder="z.B. 4 Stück" className={inputClass} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-graphite-700 mb-1.5">Dringlichkeit</label>
        <select {...register("urgency")} className={`${inputClass} bg-white`}>
          <option value="normal">Normal</option>
          <option value="express">Express</option>
          <option value="sofort">Sofort (Stillstand)</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-graphite-700 mb-1.5">Weitere Infos</label>
        <textarea
          {...register("message")}
          rows={3}
          placeholder="Weitere Angaben…"
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">{error}</div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-steel disabled:opacity-50 text-white font-semibold px-6 py-3 rounded-full transition-colors"
      >
        {isSubmitting ? (
          <><Loader2 className="size-4 animate-spin" /> Wird gesendet…</>
        ) : (
          <>Anfrage senden <ChevronRight className="size-4" /></>
        )}
      </button>

      <p className="text-xs text-graphite-400">
        * Pflichtfelder. Ihre Daten werden nicht an Dritte weitergegeben.
      </p>
    </form>
  );
}
