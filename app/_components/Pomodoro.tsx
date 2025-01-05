"use client";

import { Brain, ChevronRight, Coffee, Pause, Play, TimerReset } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ActionButton from "./ActionButton";
import ProgressBar from "../../components/custom/Progress";

type TMode = "focus" | "short_break";

const Pomodoro = () => {
  const [mode, setMode] = useState<TMode>("focus");
  const [focusDuration] = useState(25);
  const [breakDuration] = useState(10);
  const [activeColor, setActiveColor] = useState("#06b6d4");
  const [time, setTime] = useState<number>(focusDuration);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleReset = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsActive(false);
    setIsPaused(true);
    setTime(mode === "focus" ? focusDuration : breakDuration);
  };

  const handlePlayPause = (action: "play" | "pause" | "reset") => {
    if (action === "play") {
      setIsActive(true);
      setIsPaused(false);
    } else if (action === "pause") {
      clearInterval(timerRef.current);
      setIsActive(false);
      setIsPaused(true);
    } else if (action === "reset") {
      handleReset();
    }
  };

  const handleSwitchMode = (action: TMode) => {
    setMode(action);
    handleReset();
  };

  const formattedTime = `${String(Math.floor(time / 60)).padStart(2, "0")}:${String(
    time % 60
  ).padStart(2, "0")}`;

  const totalDuration = mode === "focus" ? focusDuration : breakDuration;
  const completed = ((totalDuration - time) / totalDuration) * 100;

  useEffect(() => {
    if (mode === "focus") {
      setActiveColor("#06b6d4");
      setTime(focusDuration);
    }
    if (mode === "short_break") {
      setActiveColor("#84cc16");
      setTime(breakDuration);
    }
    if (time === 0) {
      setIsActive(true);
      setIsPaused(false);
    }
  }, [mode]);

  useEffect(() => {
    if (isActive && !isPaused) {
      timerRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev === 1) {
            audioRef?.current?.play();
          }
          if (prev === 0) {
            clearInterval(timerRef.current);
            setMode(() => (mode === "focus" ? "short_break" : "focus"));

            return 0;
          } else {
            return prev - 1;
          }
        });
      }, 1000);
    }

    // Cleanup interval when component unmounts or timer is reset
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, isPaused, time === 0]);

  return (
    <>
      {/* Progress Bar */}
      <div>
        <ProgressBar bgColor={activeColor} isLabelVisible={false} completed={completed} />
      </div>
      <audio ref={audioRef} src="/bell.mp3" />
      {/* Body */}
      <div className="p-5 space-y-10">
        <div className="flex items-center justify-center gap-3">
          <ActionButton
            isActive={mode === "focus"}
            variant="cyan"
            onClick={() => handleSwitchMode("focus")}
          >
            <Brain className="size-4" />
            Focus
          </ActionButton>
          <ActionButton
            isActive={mode === "short_break"}
            onClick={() => handleSwitchMode("short_break")}
            variant="lime"
          >
            <Coffee className="size-4" />
            Break
          </ActionButton>
        </div>
        <div>
          <h1 className={`text-center font-bold text-9xl !text-zinc-800/90 font-rajdhani`}>
            {formattedTime}
          </h1>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <button
            disabled={time === focusDuration || time === breakDuration}
            onClick={() => handlePlayPause("reset")}
            className="p-2.5 bg-zinc-100 hover:bg-zinc-200/80 rounded-md border border-zinc-200 text-zinc-500 transition-all hover:text-zinc-700 hover:shadow-sm disabled:hover:bg-zinc-100 disabled:hover:text-zinc-500 disabled:opacity-60"
          >
            <TimerReset className="size-5" />
          </button>
          <button
            disabled={time === 0}
            onClick={() => handlePlayPause(isActive ? "pause" : "play")}
            className="p-3 bg-zinc-100 hover:bg-zinc-200/80 rounded-md border border-zinc-200 transition-all hover:text-zinc-700 hover:shadow-sm disabled:hover:bg-zinc-100 disabled:hover:text-zinc-500 disabled:opacity-60"
            style={{ color: activeColor }}
          >
            {isActive ? <Pause /> : <Play />}
          </button>
          <button
            onClick={() => handleSwitchMode(mode === "focus" ? "short_break" : "focus")}
            className="p-2.5 bg-zinc-100 hover:bg-zinc-200/80 rounded-md border border-zinc-200 text-zinc-500 transition-all hover:text-zinc-700 hover:shadow-sm"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </>
  );
};
export default Pomodoro;
