import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Activity, BriefcaseBusiness, Calendar, Flame, X } from "lucide-react";
import FocusChart from "./FocusChart";
import { useFetchAllStreaksQuery } from "@/redux/features/streak/streak.api";

type TStatisticsProps = {
  open: boolean;
  setOpen: (key: boolean) => void;
  title: string;
};

type DataItem = {
  id: string;
  timestamps: string;
  duration: number;
  isDeleted: boolean;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

type GroupedByDay = {
  [day: string]: number;
};

const Statistics = ({ open, setOpen, title }: TStatisticsProps) => {
  const { data: streaksData } = useFetchAllStreaksQuery([]);

  const groupedByDay = streaksData?.data?.sessions?.reduce((acc: GroupedByDay, item: DataItem) => {
    const date = new Date(item.timestamps).toISOString().split("T")[0]; // Extract date
    if (!acc[date]) {
      acc[date] = 0;
    }
    acc[date] += item.duration; // Add duration
    return acc;
  }, {});

  const statistics: {
    day: string;
    totalDuration: string;
  }[] = Object.entries(groupedByDay || {}).map(([day, totalDuration]) => ({
    day,
    totalDuration: totalDuration as string,
  }));

  return (
    <Dialog open={open}>
      <DialogContent className="max-w-screen-md">
        <DialogHeader>
          <DialogTitle className="mb-5 border-b border-b-athens-gray-100 pb-5">
            <div className="flex items-center justify-between">
              <span className="block">{title}</span>
              <button onClick={() => setOpen(false)} className="rounded-md">
                <X />
              </button>
            </div>
          </DialogTitle>
          <DialogDescription>
            <div className="space-y-5">
              <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                <div className="flex gap-2 justify-between p-4 border border-zinc-200 rounded-md">
                  <div>
                    <BriefcaseBusiness className="size-8 text-cyan-500" />
                  </div>
                  <div className="text-right">
                    <h3>{streaksData?.data?.total_sessions}</h3>
                    <p className="text-zinc-500">Total Session</p>
                  </div>
                </div>
                <div className="flex gap-2 justify-between p-4 border border-zinc-200 rounded-md">
                  <div>
                    <Calendar className="size-8 text-lime-500" />
                  </div>
                  <div className="text-right">
                    <h3>{statistics?.length}</h3>
                    <p className="text-zinc-500">Days Focused</p>
                  </div>
                </div>
                <div className="flex gap-2 justify-between p-4 border border-zinc-200 rounded-md">
                  <div>
                    <Activity className="size-8 text-purple-500" />
                  </div>
                  <div className="text-right">
                    <h3>{streaksData?.data?.streaks?.currentStreak}</h3>
                    <p className="text-zinc-500">Current Streak</p>
                  </div>
                </div>
                <div className="flex gap-2 justify-between p-4 border border-zinc-200 rounded-md">
                  <div>
                    <Flame className="size-8 text-green-500" />
                  </div>
                  <div className="text-right">
                    <h3>{streaksData?.data?.streaks?.longestStreak}</h3>
                    <p className="text-zinc-500">Longest Streak</p>
                  </div>
                </div>
              </div>
              <FocusChart statistics={statistics} />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Statistics;
