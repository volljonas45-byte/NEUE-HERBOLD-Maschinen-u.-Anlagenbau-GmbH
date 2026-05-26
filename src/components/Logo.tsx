import Image from "@/components/ui/NHImage";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  asLink?: boolean;
}

const sizeMap = {
  sm: "h-14",
  md: "h-20",
  lg: "h-24",
};

export function Logo({
  variant = "dark",
  size = "md",
  className,
  asLink = true,
}: LogoProps) {
  const h = sizeMap[size];

  const content = (
    <div className={cn("inline-flex items-center shrink-0", className)}>
      <Image
        src={
          variant === "dark"
            ? "/images/neue-herbold-logo-white.png"
            : "/images/Neue Herold logo.png"
        }
        alt="NEUE HERBOLD Maschinen und Anlagenbau GmbH"
        width={280}
        height={90}
        className={cn("w-auto object-contain", h)}
        priority
      />
    </div>
  );

  if (!asLink) return content;

  return (
    <Link href="/" aria-label="NEUE HERBOLD – Startseite">
      {content}
    </Link>
  );
}
