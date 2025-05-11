// import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Heart, List, Plus, Search, Volume2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const libraryItems = [
  {
    id: 1,
    name: "Liked Songs",
    type: "Playlist",
    meta: "117 songs",
    icon: <Heart className="h-4 w-4 fill-green-500 text-green-500" />,
    active: false,
  },
  {
    id: 2,
    name: "<Ishi />",
    type: "Playlist",
    meta: "DataStruct",
    icon: null,
    active: true,
  },
  {
    id: 3,
    name: "Luke Chiang",
    type: "Artist",
    meta: "",
    icon: null,
    active: false,
  },
  {
    id: 4,
    name: "Milk",
    type: "Album",
    meta: "Goose house",
    icon: null,
    active: false,
  },
  {
    id: 5,
    name: "Yorushika",
    type: "Artist",
    meta: "",
    icon: null,
    active: false,
  },
  {
    id: 6,
    name: "STRAY SHEEP",
    type: "Album",
    meta: "Kenshi Yonezu",
    icon: null,
    active: false,
  },
  {
    id: 7,
    name: "<Playlist good={vibes!}/>",
    type: "Playlist",
    meta: "DataStruct",
    icon: null,
    active: false,
  },
  {
    id: 8,
    name: "有華",
    type: "Artist",
    meta: "",
    icon: null,
    active: false,
  },
  {
    id: 9,
    name: "Jin Dogg",
    type: "Artist",
    meta: "",
    icon: null,
    active: false,
  },
  {
    id: 10,
    name: "ENCORE - 半文字 / AFTER THE SHOW",
    type: "Playlist",
    meta: "Filtr Japan",
    icon: null,
    active: false,
  },
  {
    id: 11,
    name: "seventeen hype/upbeat playlist 2023",
    type: "Playlist",
    meta: "h e e d d e u n g",
    icon: null,
    active: false,
  },
  {
    id: 12,
    name: "1nonly",
    type: "Artist",
    meta: "",
    icon: null,
    active: false,
  },
  {
    id: 13,
    name: "Officially Missing You",
    type: "Music video",
    meta: "Tamia",
    icon: null,
    active: false,
    playing: true,
  },
];

export function LibrarySidebar() {
  // const [activeTab, setActiveTab] = useState("playlists");

  return (
    <div className="flex flex-col h-full bg-black">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Your Library</h2>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Plus className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="playlists" className="mb-4">
          <TabsList className="bg-black">
            <TabsTrigger
              value="playlists"
              className="rounded-full text-xs px-3 py-1 data-[state=active]:bg-neutral-800 data-[state=active]:text-white"
            >
              Playlists
            </TabsTrigger>
            <TabsTrigger
              value="albums"
              className="rounded-full text-xs px-3 py-1 data-[state=active]:bg-neutral-800 data-[state=active]:text-white"
            >
              Albums
            </TabsTrigger>
            <TabsTrigger
              value="artists"
              className="rounded-full text-xs px-3 py-1 data-[state=active]:bg-neutral-800 data-[state=active]:text-white"
            >
              Artists
            </TabsTrigger>
            <TabsTrigger
              value="downloaded"
              className="rounded-full text-xs px-3 py-1 data-[state=active]:bg-neutral-800 data-[state=active]:text-white"
            >
              Downloaded
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-xs">
            Recents <List className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="px-2">
          {libraryItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center gap-3 p-2 rounded-md hover:bg-neutral-800 cursor-pointer ${
                item.active ? "bg-neutral-800" : ""
              }`}
            >
              {item.icon ? (
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 rounded-md">
                  {item.icon}
                </div>
              ) : (
                <Avatar className="w-12 h-12 rounded-md">
                  <AvatarImage
                    src={`/placeholder.svg?height=48&width=48&text=${item.name.charAt(
                      0
                    )}`}
                  />
                  <AvatarFallback className="rounded-md bg-neutral-700">
                    {item.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              )}
              <div className="flex-1 min-w-0">
                <p
                  className={`text-sm truncate ${
                    item.playing ? "text-green-500" : "text-white"
                  }`}
                >
                  {item.name}
                </p>
                <p className="text-xs text-neutral-400 flex items-center gap-1">
                  {item.type} {item.meta && <span>• {item.meta}</span>}
                </p>
              </div>
              {item.active && <Volume2 className="h-4 w-4 text-green-500" />}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
