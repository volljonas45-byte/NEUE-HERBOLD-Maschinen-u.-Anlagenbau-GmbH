import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        /* Brand variants */
        primary:
          "bg-brand-cyan text-brand-blue font-semibold hover:bg-brand-cyan-bright active:bg-brand-cyan-dark",
        "primary-dark":
          "bg-brand-blue text-white font-semibold hover:bg-brand-steel border-brand-steel/30",
        secondary:
          "border-brand-cyan text-brand-cyan bg-transparent hover:bg-brand-cyan/10 font-semibold",
        "secondary-dark":
          "border-white/40 text-white bg-transparent hover:bg-white/10 font-semibold",
        dark: "bg-white/10 text-white hover:bg-white/20 border-white/20",
        ghost:
          "text-brand-blue hover:bg-brand-blue/5 hover:text-brand-blue font-medium",
        "ghost-dark": "text-white/80 hover:bg-white/10 hover:text-white",
        /* shadcn defaults (kept for compatibility) */
        default:
          "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
        link: "text-brand-cyan underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        xs: "h-7 gap-1 rounded-md px-3 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-lg px-4 text-sm",
        default: "h-10 gap-2 px-5 text-sm",
        lg: "h-12 gap-2 px-7 text-base",
        xl: "h-14 gap-2.5 px-9 text-lg rounded-xl",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
