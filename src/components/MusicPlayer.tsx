import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const MusicPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [player, setPlayer] = useState<any>(null);
  const [playerReady, setPlayerReady] = useState(false);

  const videoId = 'SPpxofqhF3U';

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = initializePlayer;
    } else if (!player) {
      initializePlayer();
    }

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  const initializePlayer = () => {
    if (window.YT && window.YT.Player) {
      const newPlayer = new window.YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          loop: 1,
          playlist: videoId
        },
        events: {
          onReady: (event: any) => {
            setPlayer(event.target);
            setPlayerReady(true);
            event.target.setVolume(50);
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (event.data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
            }
          }
        }
      });
    }
  };

  useEffect(() => {
    if (player && playerReady) {
      player.setVolume(volume);
    }
  }, [volume, player, playerReady]);

  const togglePlay = () => {
    if (player && playerReady) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
    }
  };

  return (
    <>
      <div id="youtube-player"></div>
      
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="rounded-full w-16 h-16 shadow-2xl hover:scale-110 transition-transform bg-gradient-to-br from-pink-500 to-purple-500"
          >
            <Icon name="Music" size={24} />
          </Button>
        ) : (
          <Card className="p-6 w-80 backdrop-blur-xl bg-white/90 border-purple-200 shadow-2xl animate-scale-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-cormorant font-bold text-xl">Музыкальное настроение</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsOpen(false)}
                className="hover:scale-110 transition-transform"
              >
                <Icon name="X" size={18} />
              </Button>
            </div>

            <div className="mb-6">
              <p className="font-semibold text-lg mb-1">Careless Whisper</p>
              <p className="text-sm text-muted-foreground">George Michael</p>
            </div>

            <div className="flex items-center justify-center gap-4 mb-6">
              <Button
                onClick={togglePlay}
                size="lg"
                disabled={!playerReady}
                className="rounded-full w-14 h-14 hover:scale-110 transition-transform disabled:opacity-50"
              >
                <Icon name={isPlaying ? "Pause" : "Play"} size={24} />
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <Icon name="Volume2" size={18} className="text-muted-foreground" />
              <Slider
                value={[volume]}
                onValueChange={(value) => setVolume(value[0])}
                max={100}
                step={1}
                className="flex-1"
                disabled={!playerReady}
              />
              <span className="text-sm text-muted-foreground w-10">{volume}%</span>
            </div>

            {!playerReady && (
              <div className="mt-4 p-3 bg-secondary/50 rounded-lg text-sm text-center">
                <p className="text-muted-foreground">
                  ⏳ Загрузка плеера...
                </p>
              </div>
            )}

            {playerReady && (
              <div className="mt-4 p-3 bg-secondary/50 rounded-lg text-sm text-center">
                <p className="text-muted-foreground">
                  🎵 Нажми Play для воспроизведения
                </p>
              </div>
            )}
          </Card>
        )}
      </div>
    </>
  );
};

export default MusicPlayer;
