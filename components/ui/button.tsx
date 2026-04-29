import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        variant === "default" && "bg-[#341342] text-white hover:bg-[#4A1F5E]",
        variant === "outline" && "border border-[#CFC1B6] bg-white/55 text-[#341342] hover:bg-white",
        className
      )}
      {...props}
    />
  );
}
