import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Heart,
  ListMusic,
  Maximize2,
  Mic2,
  Pause,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";

interface BottomBarProps {
  currentSong: {
    title: string;
    artist: string;
    duration: string;
    currentTime: string;
    isPlaying: boolean;
  };
  onPlayPause: () => void;
  onQueueToggle: () => void;
  isQueueOpen: boolean;
}

export function BottomBar({
  currentSong,
  onPlayPause,
  onQueueToggle,
  isQueueOpen,
}: BottomBarProps) {
  const [volume, setVolume] = useState(70);
  const [progress, setProgress] = useState(1);

  const timeToSeconds = (timeStr: string) => {
    const [minutes, seconds] = timeStr.split(":").map(Number);
    return minutes * 60 + seconds;
  };

  useEffect(() => {
    const currentTimeInSeconds = timeToSeconds(currentSong.currentTime);
    const totalTimeInSeconds = timeToSeconds(currentSong.duration);
    const percentage = (currentTimeInSeconds / totalTimeInSeconds) * 100;
    setProgress(percentage);
  }, [currentSong.currentTime, currentSong.duration]);

  return (
    <div className="w-full h-full px-4 flex items-center">
      <div className="w-[30%] min-w-[180px] max-w-[300px]">
        <div className="flex items-center gap-3">
          <Avatar className="w-14 h-14 rounded-md">
            <AvatarImage src="/placeholder.svg?height=56&width=56&text=T" />
            <AvatarFallback className="rounded-md bg-neutral-700">
              T
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="text-sm font-medium truncate">{currentSong.title}</p>
            <p className="text-xs text-neutral-400 truncate">
              {currentSong.artist}
            </p>
          </div>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 max-w-[722px] mx-auto px-4">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-5 justify-center w-full">
            <Button
              variant="ghost"
              size="icon"
              className="text-neutral-400 hover:text-white"
            >
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-neutral-400 hover:text-white"
            >
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button
              className="rounded-full w-8 h-8 bg-white hover:bg-white/90 text-black"
              size="icon"
              onClick={onPlayPause}
            >
              {currentSong.isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4 ml-0.5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-neutral-400 hover:text-white"
            >
              <SkipForward className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-neutral-400 hover:text-white"
            >
              <Repeat className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2 w-full">
            <span className="text-xs text-neutral-400 w-10 text-right">
              {currentSong.currentTime}
            </span>
            <Slider
              value={[progress]}
              max={100}
              step={0.1}
              className="flex-1"
            />
            <span className="text-xs text-neutral-400 w-10">
              {currentSong.duration}
            </span>
          </div>
        </div>
      </div>

      <div className="w-[30%] min-w-[180px] max-w-[300px] flex items-center justify-end gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="text-neutral-400 hover:text-white hidden md:flex"
        >
          <Mic2 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={`text-neutral-400 hover:text-white ${
            isQueueOpen ? "text-green-500" : ""
          }`}
          onClick={onQueueToggle}
        >
          <ListMusic className="h-4 w-4" />
        </Button>
        <div className="hidden md:flex items-center gap-2 w-32">
          <Volume2 className="h-4 w-4 text-neutral-400" />
          <Slider
            value={[volume]}
            max={100}
            step={1}
            onValueChange={(value) => setVolume(value[0])}
            className="flex-1"
          />
        </div>
      </div>
    </div>
  );
}
