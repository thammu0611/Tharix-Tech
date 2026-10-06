import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Width = "default" | "wide" | "narrow" | "prose";

const widths: Record<Width, string> = {
  narrow: "max-w-3xl",
  prose: "max-w-[68ch]",
  default: "max-w-[82rem]",
  wide: "max-w-[92rem]",
};

export function Container({
  children,
  className,
  width = "default",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  width?: Width;
  as?: ElementType;
}) {
  return (
    <Tag className={cn("mx-auto w-full px-5 sm:px-8 lg:px-12", widths[width], className)}>
      {children}
    </Tag>
  );
}
