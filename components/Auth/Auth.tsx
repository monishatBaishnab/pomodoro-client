import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import Login from "./Login";
import { useEffect, useState } from "react";
import Register from "./Register";

type TAuthProps = {
  open: boolean;
  setOpen: (key: boolean) => void;
  title: string;
};

const Auth = ({ open, setOpen, title }: TAuthProps) => {
  const [mode, setMode] = useState<"login" | "register">("login");

  useEffect(() => {
    setMode("login");
  }, [open]);
  return (
    <Dialog open={open}>
      <DialogContent className="max-w-sm">
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
            <div className="space-y-10">
              {mode === "login" ? (
                <Login setOpen={setOpen} setMode={setMode} />
              ) : (
                <Register setOpen={setOpen} setMode={setMode} />
              )}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Auth;
