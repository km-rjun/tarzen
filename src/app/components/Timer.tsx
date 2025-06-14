"use client";
import { useState, useEffect } from "react";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false); // whether the timer is running

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const reset = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60); // reset to 25 minutes
  };

  return (
    <div className="flex flex-col justify-center items-center h-[70%] text-white">
      <h2 className="text-xl font-semibold mb-4">Pomodoro Timer</h2>
      <div className="text-5xl font-mono mb-6">{formatTime(timeLeft)}</div>
      <div className="flex gap-4">
        {isRunning ? (
          <button
            onClick={() => setIsRunning(false)}
            className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded text-white"
          >
            <FaPause />
          </button>
        ) : (
          <button
            onClick={() => setIsRunning(true)}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white"
          >
            <FaPlay />
          </button>
        )}
        <button
          onClick={reset}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white"
        >
          <FaRedo />
        </button>
      </div>
    </div>
  );
}

