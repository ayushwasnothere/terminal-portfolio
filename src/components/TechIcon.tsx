import React from "react";
import StackIcon, { type IconName } from "tech-stack-icons";

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
  variant?: "light" | "dark" | "grayscale";
}

export const TechIcon: React.FC<TechIconProps> = ({
  name,
  size = 32,
  className = "",
  variant = "dark",
}) => {
  if (
    name.toLowerCase().includes("cloudflare") ||
    name.toLowerCase().includes("hono")
  ) {
    name = "cloudflare";
  }

  const safeName = name.toLowerCase() as IconName;

  return (
    <span className={className} style={{ width: size, height: size }}>
      <StackIcon name={safeName} variant={variant} />
    </span>
  );
};
