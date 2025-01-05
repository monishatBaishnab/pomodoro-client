import { getCurrentUser } from "@/services/auth";
import Navbar from "../components/Navbar";
import Pomodoro from "./_components/Pomodoro";
import { TUser } from "@/types";

export default async function Home() {
  const user = await getCurrentUser();

  return (
    <div className="bg-zink-50 min-h-screen">
      <div className="max-w-screen-md mx-auto space-y-5 py-10 px-10">
        <Navbar user={user as TUser} />
        <Pomodoro />
      </div>
    </div>
  );
}
