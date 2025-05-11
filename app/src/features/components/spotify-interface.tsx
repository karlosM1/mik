import { useState } from "react";
import { LibrarySidebar } from "./library-sidebar";
import { MainContent } from "./main-content";
import { QueueSidebar } from "./queue-sidebar";
import { TopBar } from "./top-bar";
import { BottomBar } from "./buttom-bar";
import { cn } from "@/lib/utils";

export default function SpotifyInterface() {
  const [isQueueOpen, setIsQueueOpen] = useState(true);
  const [currentSong, setCurrentSong] = useState({
    title: "Officially Missing You",
    artist: "Tamia",
    duration: "4:02",
    currentTime: "0:04",
    isPlaying: false,
  });

  return (
    <div className="flex h-full flex-col bg-black text-white">
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:block md:w-[280px] lg:w-[320px] border-r border-neutral-800">
          <LibrarySidebar />
        </div>

        <div
          className={cn(
            "flex-1 overflow-hidden",
            isQueueOpen ? "md:mr-[320px]" : ""
          )}
        >
          <MainContent />
        </div>

        <div
          className={cn(
            "fixed right-0 top-0 bottom-[90px] w-full md:w-[320px] bg-black border-l border-neutral-800 transform transition-transform duration-300 z-10",
            isQueueOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <QueueSidebar onClose={() => setIsQueueOpen(false)} />
        </div>
      </div>

      <div className="h-[90px] border-t border-neutral-800 flex items-center">
        <BottomBar
          currentSong={currentSong}
          onPlayPause={() =>
            setCurrentSong({
              ...currentSong,
              isPlaying: !currentSong.isPlaying,
            })
          }
          onQueueToggle={() => setIsQueueOpen(!isQueueOpen)}
          isQueueOpen={isQueueOpen}
        />
      </div>
    </div>
  );
}
