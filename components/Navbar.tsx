"use client";

import PTooltip from "@/components/custom/PTooltip";
import { ChartArea, LogIn, LogOut, User } from "lucide-react";
import { useState } from "react";
import Statistics from "./Statistics/Statistics";
import Auth from "./Auth/Auth";
import { TUser } from "@/types";
import { logoutUser } from "@/services/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = ({ user }: { user: TUser }) => {
  const [openStatistics, setOpenStatistics] = useState(false);
  const [openAuthForm, setOpenAuthForm] = useState(false);
  const handleLogout = async () => {
    await logoutUser();
  };

  return (
    <div className="flex items-center justify-between">
      <div className="spy-2">
        <h2>Pomodoro</h2>
        <p className="text-zink-500">Manage your time in a magical way!</p>
      </div>
      <div className="flex items-center gap-2">
        <PTooltip
          disabled={!user}
          trigger={
            <span
              onClick={() => setOpenStatistics(true)}
              className="bg-zink-100/80 p-2 rounded block"
            >
              <ChartArea className="text-zinc-400 size-4" />
            </span>
          }
          content={user? "Statistics":"Please login for see statistics."}
        />

        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <div className="size-9 rounded-full overflow-hidden flex items-center justify-center bg-zink-100">
                {user?.profile ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="size-full object-contain" src={user?.profile} alt={user?.email} />
                ) : (
                  <User className="size-5 text-zink-500" />
                )}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                <LogOut />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <PTooltip
            trigger={
              <span
                onClick={() => setOpenAuthForm(true)}
                className="bg-zink-100/80 block p-2 rounded"
              >
                <LogIn className="text-zinc-400 size-4" />
              </span>
            }
            content={"Login"}
          />
        )}
      </div>

      <Statistics title="Statistics" open={openStatistics} setOpen={setOpenStatistics} />
      <Auth title="Auth" open={openAuthForm} setOpen={setOpenAuthForm} />
    </div>
  );
};

export default Navbar;
