'use client'

import PTooltip from "@/components/custom/PTooltip";
import { ChartArea, Settings, LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="spy-2">
        <h2>Pomodoro</h2>
        <p className="text-zink-500">Manage your time in a magical way!</p>
      </div>
      <div className="flex items-center gap-2">
        <PTooltip
          trigger={
            <button className="bg-zink-100/80 p-2 rounded">
              <ChartArea className="text-zinc-400 size-4" />
            </button>
          }
          content="Statistics"
        />

        <PTooltip
          trigger={
            <button className="bg-zink-100/80 p-2 rounded">
              <Settings className="text-zinc-400 size-4" />
            </button>
          }
          content="Settings"
        />

        <PTooltip
          trigger={
            <button className="bg-zink-100/80 p-2 rounded">
              <LogIn className="text-zinc-400 size-4" />
            </button>
          }
          content="Login"
        />
      </div>
    </div>
  );
};

export default Navbar;
