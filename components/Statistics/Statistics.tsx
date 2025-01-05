import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Activity, Calendar, Clock, Flame, X } from "lucide-react";
import FocusChart from "./FocusChart";

type TStatisticsProps = {
  open: boolean;
  setOpen: (key: boolean) => void;
  title: string;
};

const statistics = [
  { date: '2024-12-01', total_price: "2400", order_count: "3" },
  { date: '2024-12-02', total_price: "1300", order_count: "12" },
  { date: '2024-12-03', total_price: "9800", order_count: "9" },
  { date: '2024-12-04', total_price: "3900", order_count: "7" },
  { date: '2024-12-05', total_price: "4800", order_count: "3" },
  { date: '2024-12-06', total_price: "3800", order_count: "4" },
  { date: '2024-12-07', total_price: "4300", order_count: "13" },
];


const Statistics = ({ open, setOpen, title }: TStatisticsProps) => {
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
                    <Clock className="size-8 text-cyan-500" />
                  </div>
                  <div className="text-right">
                    <h3>5</h3>
                    <p className="text-zinc-500">Hours Focused</p>
                  </div>
                </div>
                <div className="flex gap-2 justify-between p-4 border border-zinc-200 rounded-md">
                  <div>
                    <Calendar className="size-8 text-lime-500" />
                  </div>
                  <div className="text-right">
                    <h3>5</h3>
                    <p className="text-zinc-500">Days Focused</p>
                  </div>
                </div>
                <div className="flex gap-2 justify-between p-4 border border-zinc-200 rounded-md">
                  <div>
                    <Activity className="size-8 text-purple-500" />
                  </div>
                  <div className="text-right">
                    <h3>5</h3>
                    <p className="text-zinc-500">Current Streak</p>
                  </div>
                </div>
                <div className="flex gap-2 justify-between p-4 border border-zinc-200 rounded-md">
                  <div>
                    <Flame className="size-8 text-green-500" />
                  </div>
                  <div className="text-right">
                    <h3>5</h3>
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
