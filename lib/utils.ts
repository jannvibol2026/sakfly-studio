/**
 * lib/utils.ts
 * Small, dependency-light helper functions shared across SAKFLY Studio.
 */

import { type ClassValue, clsx } from "clsx";

/**
 * Merge conditional class names together. Thin wrapper around clsx so
 * components can write `cn("base", condition && "extra")`.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Format an ISO date string / Date object into a short human readable date,
 * e.g. "Aug 23, 2026".
 */
export function formatDate(date: string | number | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Format an ISO date string / Date object into a date + time string,
 * e.g. "Aug 23, 2026, 7:15 PM".
 */
export function formatDateTime(date: string | number | Date): string {
  const d = new Date(date);
  return d.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

/**
 * Format a number of bytes into a human readable string (KB, MB, GB).
 */
export function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${units[i]}`;
}

/**
 * Format a plain number as USD currency, e.g. 9 -> "$9.00".
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

/**
 * Truncate a string to a maximum length, appending an ellipsis if needed.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}

/**
 * Generate a simple pseudo-unique id for mock/demo records
 * (not cryptographically secure — for UI demo data only).
 */
export function generateId(prefix = "id"): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}${Date.now()
    .toString(36)
    .slice(-4)}`;
}

/**
 * Sleep helper used to simulate network / generation latency in mock flows.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Clamp a number between a minimum and maximum value.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Get initials from a full name, e.g. "Chea Soksan" -> "CS".
 */
export function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}
