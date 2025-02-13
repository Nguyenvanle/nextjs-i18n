import React, { JSX } from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/libs";

const typographyVariants = cva("text-foreground", {
  variants: {
    size: {
      "110": "text-[110px] leading-[115px] font-inter tracking-[0.04em]",
      "90": "text-[90px] leading-[98px] font-inter tracking-[0.04em]",
      "64": "text-[64px] leading-[68px] font-inter tracking-[0.04em]",
      "54": "text-[54px] leading-[64px] font-inter tracking-[0.04em]",
      "48": "text-[48px] leading-[60px] font-inter tracking-[0.04em]",
      "36": "text-[36px] leading-[48px] font-inter tracking-[0.04em]",
      "24": "text-[24px] leading-[24px]",
      "20": "text-[20px] leading-[24px]",
      "16": "text-[16px] leading-[24px]",
      "14": "text-[14px] leading-[20px]",
      "12": "text-[12px] leading-[16px]",
    },
    weight: {
      regular: "font-normal", // 400
      medium: "font-medium", // 500
      semibold: "font-semibold", // 600
      bold: "font-bold", // 700
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    size: "16",
    weight: "regular",
    align: "left",
  },
});

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, size, weight, align, as, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : as || "p";

    return React.createElement(Comp, {
      className: cn(typographyVariants({ size, weight, align, className })),
      ref,
      ...props,
    });
  }
);

Typography.displayName = "Typography";

const Heading = {
  H110: ({
    children,
    className,
    ...props
  }: React.PropsWithChildren<Omit<TypographyProps, "size" | "weight">>) => (
    <Typography size="110" weight="bold" className={className} {...props}>
      {children}
    </Typography>
  ),
  H90: ({
    children,
    className,
    ...props
  }: React.PropsWithChildren<Omit<TypographyProps, "size" | "weight">>) => (
    <Typography size="90" weight="bold" className={className} {...props}>
      {children}
    </Typography>
  ),
  H48: ({
    children,
    className,
    ...props
  }: React.PropsWithChildren<Omit<TypographyProps, "size" | "weight">>) => (
    <Typography size="48" weight="semibold" className={className} {...props}>
      {children}
    </Typography>
  ),
  H36: ({
    children,
    className,
    ...props
  }: React.PropsWithChildren<Omit<TypographyProps, "size" | "weight">>) => (
    <Typography size="36" weight="semibold" className={className} {...props}>
      {children}
    </Typography>
  ),
};

export { Heading, Typography, typographyVariants, type TypographyProps };
