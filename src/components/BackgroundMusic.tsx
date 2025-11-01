import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Try to autoplay when component mounts
    const playAudio = async () => {
      try {
        await audio.play();
        setIsLoaded(true);
      } catch (error) {
        // Autoplay might be blocked by browser, user will need to click
        console.log("Autoplay blocked, user interaction required");
        setIsLoaded(true);
      }
    };

    playAudio();

    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  const toggleMute = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      // Unmute with fade in
      audio.volume = 0;
      audio.muted = false;
      setIsMuted(false);
      
      // If paused, play it
      if (audio.paused) {
        await audio.play();
      }
      
      // Fade in
      let volume = 0;
      const fadeIn = setInterval(() => {
        if (volume < 0.7) {
          volume += 0.05;
          audio.volume = Math.min(volume, 0.7);
        } else {
          clearInterval(fadeIn);
        }
      }, 50);
    } else {
      // Fade out then mute
      let volume = audio.volume;
      const fadeOut = setInterval(() => {
        if (volume > 0) {
          volume -= 0.05;
          audio.volume = Math.max(volume, 0);
        } else {
          audio.muted = true;
          setIsMuted(true);
          clearInterval(fadeOut);
        }
      }, 50);
    }
  };

  if (!isLoaded) return null;

  return (
    <>
      <audio
        ref={audioRef}
        loop
        autoPlay
        muted={isMuted}
        preload="auto"
      >
        <source src="/audio/main-theme.webm" type="audio/webm" />
      </audio>

      <Button
        onClick={toggleMute}
        variant="outline"
        size="icon"
        className="fixed bottom-8 right-8 z-50 bg-background/80 backdrop-blur-sm border-white/10 hover:border-white/20 hover:bg-background/90 transition-all duration-300"
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        {isMuted ? (
          <VolumeX className="h-5 w-5 text-muted-foreground" />
        ) : (
          <Volume2 className="h-5 w-5 text-foreground" />
        )}
      </Button>
    </>
  );
};

export default BackgroundMusic;
