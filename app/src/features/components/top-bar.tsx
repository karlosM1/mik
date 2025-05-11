import { ArrowLeft, ArrowRight, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";
import { Maximize2, Minimize2, X } from "lucide-react";

export function TopBar() {
  return (
    <div className="h-16 flex items-center justify-between px-4 bg-black/90 sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 md:gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-black/90"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-black/90"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-black/90 hidden md:flex"
        >
          <Home className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 max-w-md mx-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <Input
            className="pl-10 bg-neutral-800 border-none rounded-full h-10 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="What do you want to play?"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-4 w-4" />
        </Button>
        <Avatar className="h-8 w-8 bg-green-500">
          <AvatarImage src="/placeholder.svg?height=32&width=32" />
          <AvatarFallback>O</AvatarFallback>
        </Avatar>
        <div className="hidden md:flex gap-2 ml-2">
          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
            <Minimize2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
            <Maximize2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
