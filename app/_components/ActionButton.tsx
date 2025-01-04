import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const ActionButton = ({
  children,
  onClick,
  variant = "cyan",
  isActive = false,
}: {
  children: ReactNode;
  onClick: () => void;
  variant?: "cyan" | "purple" | "lime";
  isActive?: boolean;
}) => {
  const buttonStyles = {
    cyan: "bg-cyan-50 border-cyan-500 text-cyan-500 hover:bg-cyan-500 focus:bg-cyan-500 active:bg-cyan-500",
    lime: "bg-lime-50 border-lime-500 text-lime-500 hover:bg-lime-500 focus:bg-lime-500 active:bg-lime-500",
    purple:
      "bg-purple-50 border-purple-500 text-purple-500 hover:bg-purple-500 focus:bg-purple-500 active:bg-purple-500",
  };
  const buttonActiveStyles = {
    cyan: "bg-cyan-500 text-white",
    lime: "bg-lime-500 text-white",
    purple: "bg-purple-500 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        `font-medium border px-3 py-1 rounded-md flex items-center gap-2 transition-all`,
        `hover:text-white focus:text-white active:text-white`,
        buttonStyles[variant],
        isActive ? buttonActiveStyles[variant] : ""
      )}
    >
      {children}
    </button>
  );
};
export default ActionButton;
