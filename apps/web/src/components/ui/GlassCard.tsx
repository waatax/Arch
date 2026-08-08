import * as React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hoverEffect = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white/70 dark:bg-slate-900/70 backdrop-blur-md",
          "border border-white/20 dark:border-slate-800/50",
          "shadow-xl rounded-2xl",
          hoverEffect && "transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]",
          className
        )}
        {...props}
      />
    );
  }
);

GlassCard.displayName = "GlassCard";
