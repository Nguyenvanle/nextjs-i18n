import React from "react";

import Link from "next/link";

import * as Icons from "lucide-react";

import { cn } from "~/libs";

import { Spinner } from "~/components/reui";
import { Button as ShadButton, ButtonProps } from "~/components/ui";

function Button({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ShadButton>) {
  return (
    <ShadButton className={cn("w-fit px-12 py-4", className)} {...props}>
      {children}
    </ShadButton>
  );
}

function LinkButton({
  children,
  href,
  ...props
}: { children: React.ReactNode; href: string } & ButtonProps) {
  return (
    <Link href={href} passHref>
      <ShadButton {...props}>{children}</ShadButton>
    </Link>
  );
}

type LoadingButtonProps = React.ComponentPropsWithoutRef<typeof Button> & {
  isLoading?: boolean;
};

const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading,
  children,
  className,
  ...props
}) => (
  <ShadButton
    className={cn("flex items-center justify-center", className)}
    disabled={isLoading}
    {...props}
  >
    {isLoading ? (
      <span className="">
        <Spinner />
      </span>
    ) : (
      children
    )}
  </ShadButton>
);

type IconButtonProps = ButtonProps & {
  iconName: IconType;
  iconClassName?: string;
  iconPosition?: "left" | "right";
};

type IconType = Exclude<keyof typeof Icons, "createLucideIcon" | "icons">;

const IconButton = ({
  iconName,
  children,
  iconClassName,
  iconPosition = "left",
  className,
  ...props
}: IconButtonProps) => {
  const Icon = Icons[iconName] as React.FC<React.ComponentProps<"svg">>;

  const content = (
    <>
      {iconPosition === "left" && (
        <Icon className={cn("size-4", iconClassName)} />
      )}
      {children && <span className={cn("mx-2")}>{children}</span>}
      {iconPosition === "right" && (
        <Icon className={cn("size-4", iconClassName)} />
      )}
    </>
  );

  return (
    <ShadButton
      variant="link"
      className={cn("flex items-center justify-center p-0", className)}
      {...props}
    >
      {content}
    </ShadButton>
  );
};

export { Button, IconButton, LinkButton, LoadingButton };
