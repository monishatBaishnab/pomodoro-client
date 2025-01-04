import { ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

const PTooltip = ({
  children,
  trigger,
  align = "end",
  side = "top",
  content,
}: {
  children?: ReactNode;
  content?: ReactNode;
  trigger: string | ReactNode;
  align?: "center" | "end" | "start" | undefined;
  side?: "top" | "right" | "bottom" | "left" | undefined;
}) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>{trigger}</TooltipTrigger>
        <TooltipContent
          align={align}
          side={side}
          className="text-sm bg-m-bg-light/5 border-m-t-light/5 shadow-none"
        >
          {children || content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default PTooltip;
