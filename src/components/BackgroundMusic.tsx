import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(70);
  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const hasInteractedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial volume
    audio.volume = volume / 100;

    // Try to autoplay immediately
    const tryAutoplay = async () => {
      try {
        await audio.play();
        console.log("Audio autoplay started");
      } catch (error) {
        console.log("Autoplay blocked by browser, waiting for user interaction");
        // Fallback: play on first user interaction if autoplay is blocked
        const handleInteraction = async () => {
          if (!hasInteractedRef.current) {
            hasInteractedRef.current = true;
            try {
              await audio.play();
              console.log("Audio started after user interaction");
            } catch (err) {
              console.error("Playback failed:", err);
            }
          }
        };
        
        const events = ['click', 'keydown', 'touchstart', 'scroll'];
        events.forEach(event => {
          document.addEventListener(event, handleInteraction, { once: true });
        });
      }
    };

    tryAutoplay();

    return () => {
      if (audio) {
        audio.pause();
      }
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
    };
  }, []);

  const toggleMute = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    // Clear any existing fade interval
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }

    if (isMuted) {
      // Unmute with fade in
      const targetVolume = volume / 100;
      audio.volume = 0;
      audio.muted = false;
      setIsMuted(false);
      
      // If paused, play it
      if (audio.paused) {
        await audio.play();
      }
      
      // Fade in
      let currentVolume = 0;
      fadeIntervalRef.current = setInterval(() => {
        if (currentVolume < targetVolume) {
          currentVolume += 0.05;
          audio.volume = Math.min(currentVolume, targetVolume);
        } else {
          if (fadeIntervalRef.current) {
            clearInterval(fadeIntervalRef.current);
            fadeIntervalRef.current = null;
          }
        }
      }, 50);
    } else {
      // Fade out then mute
      let currentVolume = audio.volume;
      fadeIntervalRef.current = setInterval(() => {
        if (currentVolume > 0) {
          currentVolume -= 0.05;
          audio.volume = Math.max(currentVolume, 0);
        } else {
          audio.muted = true;
          setIsMuted(true);
          if (fadeIntervalRef.current) {
            clearInterval(fadeIntervalRef.current);
            fadeIntervalRef.current = null;
          }
        }
      }, 50);
    }
  };

  const handleVolumeChange = (newValue: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newVolume = newValue[0];
    setVolume(newVolume);
    
    if (!isMuted) {
      audio.volume = newVolume / 100;
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/audio/main-theme.webm" type="audio/webm" />
      </audio>

      <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3 animate-fade-in">
        {/* Volume Slider */}
        <div className="bg-background/80 backdrop-blur-sm border border-white/10 rounded-md px-4 py-3 transition-all duration-300 hover:bg-background/90 hover:border-white/20">
          <Slider
            value={[volume]}
            onValueChange={handleVolumeChange}
            min={0}
            max={100}
            step={1}
            className="w-24"
            disabled={isMuted}
          />
        </div>

        {/* Mute/Unmute Button */}
        <Button
          onClick={toggleMute}
          variant="outline"
          size="icon"
          className="bg-background/80 backdrop-blur-sm border-white/10 hover:border-white/20 hover:bg-background/90 transition-all duration-300"
          aria-label={isMuted ? "Unmute music" : "Mute music"}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5 text-muted-foreground" />
          ) : (
            <Volume2 className="h-5 w-5 text-foreground" />
          )}
        </Button>
      </div>
    </>
  );
};

export default BackgroundMusic;
