import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume } from "lucide-react";

const FooterPlayer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="icon">
          <Shuffle className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon">
          <SkipBack className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon">
          <Play className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon">
          <SkipForward className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon">
          <Repeat className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex-1 mx-4">
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="icon">
          <Volume className="h-5 w-5" />
        </Button>
        <Slider defaultValue={[50]} max={100} step={1} className="w-24" />
      </div>
    </div>
  );
};

export default FooterPlayer;