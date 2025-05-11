import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Download, Heart, MoreHorizontal, Pause, Play } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const playlistSongs = [
  {
    id: 1,
    number: 1,
    title: "Trying",
    artist: "Ella Mai",
    album: "Heart On My Sleeve",
    dateAdded: "1 week ago",
    duration: "3:17",
    explicit: true,
  },
  {
    id: 2,
    number: 2,
    title: "universe",
    artist: "thúy",
    album: "i hope u see this",
    dateAdded: "1 week ago",
    duration: "3:07",
    explicit: false,
  },
  {
    id: 3,
    number: 3,
    title: "Juno",
    artist: "Sabrina Carpenter",
    album: "Short n' Sweet",
    dateAdded: "1 week ago",
    duration: "3:43",
    explicit: true,
  },
  {
    id: 4,
    number: 4,
    title: "NVMD",
    artist: "Denise Julia",
    album: "NVMD",
    dateAdded: "1 week ago",
    duration: "3:01",
    explicit: true,
  },
  {
    id: 5,
    number: 5,
    title: "so into you - Spotify Singles",
    artist: "thúy",
    album: "Spotify Singles",
    dateAdded: "1 week ago",
    duration: "2:53",
    explicit: false,
  },
  {
    id: 6,
    number: 6,
    title: "Wicked Games",
    artist: "Kiana Ledé",
    album: "Selfless",
    dateAdded: "1 week ago",
    duration: "3:01",
    explicit: true,
  },
  {
    id: 7,
    number: 7,
    title: "High School Sweethearts",
    artist: "Melanie Martinez",
    album: "K-12",
    dateAdded: "1 week ago",
    duration: "5:11",
    explicit: true,
  },
  {
    id: 8,
    number: 8,
    title: "Out of Time",
    artist: "The Weeknd",
    album: "Dawn FM",
    dateAdded: "1 week ago",
    duration: "3:34",
    explicit: false,
  },
];

export function MainContent() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="h-full bg-gradient-to-b from-red-900/80 to-black">
      <ScrollArea className="h-full">
        <div className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6 mb-6">
            <div className="w-48 h-48 min-w-48 shadow-lg">
              <img
                src="/assets/ishi.jpg"
                alt="Playlist cover"
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium mb-2">Public Playlist</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                &lt;Ishi /&gt;
              </h1>
              <div className="flex items-center gap-2 text-sm text-neutral-300">
                <span>DataStruct</span>
                <span className="text-xs">•</span>
                <span>60 songs, 3 hr 36 min</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <Button
              className="rounded-full w-12 h-12 bg-green-500 hover:bg-green-400 text-black"
              size="icon"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6 ml-0.5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full w-10 h-10"
            >
              <Heart className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full w-10 h-10"
            >
              <Download className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full w-10 h-10"
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-[auto_1fr_1fr_auto] md:grid-cols-[auto_1fr_1fr_auto_auto] gap-4 px-4 py-2 text-neutral-400 text-sm border-b border-neutral-800">
              <div className="w-6">#</div>
              <div>Title</div>
              <div className="hidden md:block">Album</div>
              <div className="hidden md:block">Date added</div>
              <div className="flex justify-end">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 3.5V12.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5 8H3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {playlistSongs.map((song) => (
              <div
                key={song.id}
                className="grid grid-cols-[auto_1fr_1fr_auto] md:grid-cols-[auto_1fr_1fr_auto_auto] gap-4 px-4 py-2 hover:bg-white/10 rounded-md group"
              >
                <div className="w-6 flex items-center text-neutral-400">
                  <span className="group-hover:hidden">{song.number}</span>
                  <Play className="h-3 w-3 hidden group-hover:block" />
                </div>
                <div className="flex items-center gap-3 min-w-0">
                  <Avatar className="w-10 h-10 rounded-md">
                    <AvatarImage
                      src={`/placeholder.svg?height=40&width=40&text=${song.title.charAt(
                        0
                      )}`}
                    />
                    <AvatarFallback className="rounded-md bg-neutral-700">
                      {song.title.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="text-white truncate">{song.title}</p>
                    <div className="flex items-center gap-1">
                      {song.explicit && (
                        <span className="bg-neutral-600 text-black text-[10px] px-1 rounded">
                          E
                        </span>
                      )}
                      <p className="text-sm text-neutral-400 truncate">
                        {song.artist}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex items-center text-neutral-400 text-sm">
                  {song.album}
                </div>
                <div className="hidden md:flex items-center text-neutral-400 text-sm">
                  {song.dateAdded}
                </div>
                <div className="flex items-center justify-end text-neutral-400 text-sm">
                  {song.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
