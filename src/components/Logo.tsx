import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  asLink?: boolean;
}

const sizeMap = {
  sm: { main: "text-lg font-black tracking-tight", sub: "text-xs" },
  md: { main: "text-xl font-black tracking-tight", sub: "text-xs" },
  lg: { main: "text-2xl font-black tracking-tight", sub: "text-sm" },
};

export function Logo({
  variant = "dark",
  size = "md",
  className,
  asLink = true,
}: LogoProps) {
  const isDark = variant === "dark";
  const s = sizeMap[size];

  const content = (
    <div className={cn("flex flex-col leading-none select-none", className)}>
      <span className={cn(s.main)}>
        <span className="text-brand-cyan">NEUE</span>
        <span className={isDark ? " text-white" : " text-brand-blue"}>
          {" "}
          HERBOLD
        </span>
      </span>
      <span
        className={cn(
          s.sub,
          "font-normal tracking-widest uppercase mt-0.5",
          isDark ? "text-white/60" : "text-graphite-600",
        )}
      >
        Maschinen &amp; Anlagenbau
      </span>
    </div>
  );

  if (!asLink) return content;

  return (
    <Link href="/" aria-label="NEUE HERBOLD – Startseite">
      {content}
    </Link>
  );
}
