import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { X } from "lucide-react";

const queueSongs = [
  {
    id: 1,
    title: "Officially Missing You",
    artist: "Tamia",
    type: "Music video",
    explicit: true,
    nowPlaying: true,
  },
  {
    id: 2,
    title: "Perfect Night",
    artist: "LE SSERAFIM",
    type: "",
    explicit: false,
  },
  {
    id: 3,
    title: "Please Please Please",
    artist: "Sabrina Carpenter",
    type: "Music video",
    explicit: true,
  },
  {
    id: 4,
    title: "cindy lou who",
    artist: "Sabrina Carpenter",
    type: "",
    explicit: false,
  },
  {
    id: 5,
    title: "Snowman",
    artist: "Sia",
    type: "Music video",
    explicit: true,
  },
  {
    id: 6,
    title: "Sugar n' Spice",
    artist: "Denise Julia",
    type: "Music video",
    explicit: true,
  },
  {
    id: 7,
    title: "Pity Ya",
    artist: "Denise Julia",
    type: "",
    explicit: true,
  },
  {
    id: 8,
    title: "Session 32",
    artist: "Summer Walker",
    type: "",
    explicit: false,
  },
  {
    id: 9,
    title: "butterflies",
    artist: "Denise Julia",
    type: "",
    explicit: true,
  },
  {
    id: 10,
    title: "Roster (feat. HILLARI)",
    artist: "Denise Julia, HILLARI",
    type: "",
    explicit: false,
  },
  {
    id: 11,
    title: "Tattoo",
    artist: "Jordin Sparks",
    type: "Music video",
    explicit: true,
  },
  {
    id: 12,
    title: "Brown Eyes",
    artist: "Destiny's Child",
    type: "",
    explicit: false,
  },
];

interface QueueSidebarProps {
  onClose: () => void;
}

export function QueueSidebar({ onClose }: QueueSidebarProps) {
  return (
    <div className="flex flex-col h-full bg-black pt-16">
      <div className="flex items-center justify-between p-4 border-b border-neutral-800">
        <Tabs defaultValue="queue" className="w-full">
          <TabsList className="bg-transparent w-full justify-start gap-4 h-auto p-0">
            <TabsTrigger
              value="queue"
              className="rounded-none text-sm px-0 py-2 h-auto data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-green-500"
            >
              Queue
            </TabsTrigger>
            <TabsTrigger
              value="recently-played"
              className="rounded-none text-sm px-0 py-2 h-auto data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-green-500"
            >
              Recently played
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="md:hidden"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4">
          <h3 className="text-base font-bold mb-4">Now playing</h3>

          {queueSongs
            .filter((song) => song.nowPlaying)
            .map((song) => (
              <div
                key={song.id}
                className="flex items-center gap-3 p-2 rounded-md hover:bg-neutral-800 cursor-pointer"
              >
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
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-green-500 truncate">
                    {song.title}
                  </p>
                  <div className="flex items-center gap-1">
                    {song.explicit && (
                      <span className="bg-neutral-600 text-black text-[10px] px-1 rounded">
                        E
                      </span>
                    )}
                    <p className="text-xs text-neutral-400 truncate">
                      {song.type && `${song.type} • `}
                      {song.artist}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          <h3 className="text-base font-bold mt-6 mb-4">
            Next from: &lt;Ishi /&gt;
          </h3>

          {queueSongs
            .filter((song) => !song.nowPlaying)
            .map((song) => (
              <div
                key={song.id}
                className="flex items-center gap-3 p-2 rounded-md hover:bg-neutral-800 cursor-pointer"
              >
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
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate">{song.title}</p>
                  <div className="flex items-center gap-1">
                    {song.explicit && (
                      <span className="bg-neutral-600 text-black text-[10px] px-1 rounded">
                        E
                      </span>
                    )}
                    <p className="text-xs text-neutral-400 truncate">
                      {song.type && `${song.type} • `}
                      {song.artist}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </ScrollArea>
    </div>
  );
}
