"use client";

import PTooltip from "@/components/custom/PTooltip";
import { ChartArea, LogIn } from "lucide-react";
import { useState } from "react";
import Statistics from "./Statistics/Statistics";
import Auth from "./Auth/Auth";
import { useUserInfo } from "@/providers/UserInfoProvider";

const Navbar = () => {
  const [openStatistics, setOpenStatistics] = useState(false);
  const [openAuthForm, setOpenAuthForm] = useState(false);
const user = useUserInfo();

  return (
    <div className="flex items-center justify-between">
      <div className="spy-2">
        <h2>Pomodoro</h2>
        <p className="text-zink-500">Manage your time in a magical way!</p>
      </div>
      <div className="flex items-center gap-2">
        <PTooltip
          trigger={
            <span onClick={() => setOpenStatistics(true)} className="bg-zink-100/80 p-2 rounded block">
              <ChartArea className="text-zinc-400 size-4" />
            </span>
          }
          content="Statistics"
        />

        <PTooltip
          trigger={
            <span onClick={() => setOpenAuthForm(true)} className="bg-zink-100/80 block p-2 rounded">
              <LogIn className="text-zinc-400 size-4" />
            </span>
          }
          content="Login"
        />
      </div>

      <Statistics title="Statistics" open={openStatistics} setOpen={setOpenStatistics} />
      <Auth title="Auth" open={openAuthForm} setOpen={setOpenAuthForm} />
    </div>
  );
};

export default Navbar;
