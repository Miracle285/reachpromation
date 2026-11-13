import type { ReactNode } from "react";
import { Label } from "@/components/ui/label";

export function FormField({ id, label, required, error, children }: { id: string; label: string; required?: boolean; error?: string | undefined; children: ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-sm font-semibold text-primary">
        {label} {required ? <span className="text-accent">*</span> : <span className="font-normal text-muted-foreground">(optional)</span>}
      </Label>
      {children}
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
    </div>
  );
}

export const fieldClass =
  "h-11 w-full rounded-md border border-input bg-card px-3 text-base text-foreground shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
