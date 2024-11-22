import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface Heading2Props extends ComponentProps<"h2"> {
  children: React.ReactNode;
}

export const Heading2 = ({ children, className = "" }: Heading2Props) => {
  return (
    <h2 className={cn("text-[21px] leading-[25.41px] font-normal", className)}>
      {children}
    </h2>
  );
};
