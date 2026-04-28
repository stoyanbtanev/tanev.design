type ClassValue =
  | string
  | number
  | null
  | false
  | undefined
  | ClassValue[]
  | { [key: string]: unknown };

function toVal(mix: ClassValue): string {
  if (!mix) return "";
  if (typeof mix === "string" || typeof mix === "number") return String(mix);
  if (Array.isArray(mix)) {
    return mix.map(toVal).filter(Boolean).join(" ");
  }
  if (typeof mix === "object") {
    return Object.keys(mix)
      .filter((k) => Boolean((mix as Record<string, unknown>)[k]))
      .join(" ");
  }
  return "";
}

export function cn(...inputs: ClassValue[]): string {
  return inputs.map(toVal).filter(Boolean).join(" ");
}
