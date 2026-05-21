import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  narrow?: boolean;
}

export function Container({
  children,
  className,
  as: Component = "div",
  narrow = false,
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full",
        "px-4 sm:px-8 lg:px-12 3xl:px-24",
        narrow
          ? "max-w-4xl"
          : "max-w-screen-xl 3xl:max-w-screen-3xl 4xl:max-w-screen-4xl",
        className,
      )}
    >
      {children}
    </Component>
  );
}
