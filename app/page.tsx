import { Brain, Coffee } from "lucide-react";
import Navbar from "./_components/Navbar";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="bg-zink-50 min-h-screen">
      <div className="max-w-screen-md mx-auto px-10">
        <Navbar />
        <div className="p-5">
          <div className="flex items-center justify-center gap-3">
            <button
              className={cn(
                "bg-cyan-50 font-medium border border-cyan-500 px-3 py-1 text-cyan-500 rounded-md flex items-center gap-2 transition-all",
                "hover:bg-cyan-500 hover:text-white",
                "focus:bg-cyan-500 focus:text-white",
                "active:bg-cyan-500 active:text-white"
              )}
            >
              <Brain className="size-4" />
              Focus
            </button>
            <button
              className={cn(
                "bg-lime-50 font-medium border border-lime-500 px-3 py-1 text-lime-500 rounded-md flex items-center gap-2 transition-all",
                "hover:bg-lime-500 hover:text-white",
                "focus:bg-lime-500 focus:text-white",
                "active:bg-lime-500 active:text-white"
              )}
            >
              <Coffee className="size-4" />
              Short Break
            </button>
            <button
              className={cn(
                "bg-purple-50 font-medium border border-purple-500 px-3 py-1 text-purple-500 rounded-md flex items-center gap-2 transition-all",
                "hover:bg-purple-500 hover:text-white",
                "focus:bg-purple-500 focus:text-white",
                "active:bg-purple-500 active:text-white"
              )}
            >
              <Coffee className="size-4" />
              Long Break
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
