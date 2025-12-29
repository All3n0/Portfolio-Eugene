'use client';
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-[255px_15px_225px_15px/15px_225px_15px_255px] border-2 border-ink/20",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md",
        outline: "border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-background rounded-[255px_15px_225px_15px/15px_225px_15px_255px]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full",
        ghost: "hover:bg-muted hover:text-foreground rounded-lg",
        link: "text-primary underline-offset-4 hover:underline",
        sketch: "bg-paper text-ink border-2 border-ink hover:bg-mustard/20 rounded-[255px_15px_225px_15px/15px_225px_15px_255px] shadow-[4px_4px_0_0_hsl(var(--ink))] hover:shadow-[2px_2px_0_0_hsl(var(--ink))] hover:translate-x-[2px] hover:translate-y-[2px]",
        marker: "bg-mustard/40 text-ink font-handwritten text-lg hover:bg-mustard/60 rounded-sm px-4",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-14 px-10 text-lg",
        xl: "h-16 px-12 text-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };