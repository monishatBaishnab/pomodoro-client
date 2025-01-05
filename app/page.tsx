
import Navbar from "../components/Navbar";
import Pomodoro from "./_components/Pomodoro";

export default async function Home() {

  return (
    <div className="bg-zink-50 min-h-screen">
      <div className="max-w-screen-md mx-auto space-y-5 py-10 px-10">
        <Navbar />
        <Pomodoro />
      </div>
    </div>
  );
}
