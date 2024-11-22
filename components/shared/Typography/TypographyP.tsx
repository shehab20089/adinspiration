import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export const TypographyP = ({
  children,
  className,
  ...props
}: { children: React.ReactNode } & ComponentProps<"p">) => {
  return (
    <p className={cn("text-sm text-[#64748B]", className)} {...props}>
      {children}
    </p>
  );
};
