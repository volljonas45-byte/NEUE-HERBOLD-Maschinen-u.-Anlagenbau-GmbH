"use client";

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ─── Easing ───────────────────────────────────────────────────────────── */
const ease = [0.21, 0.47, 0.32, 0.98] as const;

/* ─── Shared variants ──────────────────────────────────────────────────── */
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};
const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};
const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};
const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};
const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

/* ─── Base props ───────────────────────────────────────────────────────── */
type MotionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* ─── Components ───────────────────────────────────────────────────────── */

/** Fade + slide up on scroll */
export function FadeUp({ children, className, delay = 0 }: MotionProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Simple opacity fade on scroll */
export function FadeIn({ children, className, delay = 0 }: MotionProps) {
  return (
    <motion.div
      className={className}
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Slide in from left */
export function SlideLeft({ children, className, delay = 0 }: MotionProps) {
  return (
    <motion.div
      className={className}
      variants={slideLeftVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Slide in from right */
export function SlideRight({ children, className, delay = 0 }: MotionProps) {
  return (
    <motion.div
      className={className}
      variants={slideRightVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Scale + fade in */
export function ScaleUp({ children, className, delay = 0 }: MotionProps) {
  return (
    <motion.div
      className={className}
      variants={scaleUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger container — wraps a list; children using <StaggerItem> animate in sequence.
 */
export function StaggerGroup({
  children,
  className,
  delay = 0,
}: MotionProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Direct child of StaggerGroup */
export function StaggerItem({ children, className }: Omit<MotionProps, "delay">) {
  return (
    <motion.div
      className={className}
      variants={fadeUpVariants}
      transition={{ duration: 0.5, ease }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Hero text — animates immediately on mount (no scroll trigger).
 */
export function HeroLine({
  children,
  className,
  delay = 0,
}: MotionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
