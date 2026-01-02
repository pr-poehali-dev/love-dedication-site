import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const MusicPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(50);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playlist = [
    { title: 'Романтическая мелодия 1', artist: 'Добавь свою музыку' },
    { title: 'Наша песня', artist: 'Загрузи треки' },
    { title: 'Любимая композиция', artist: 'Используй YouTube/Spotify' }
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  return (
    <>
      <audio ref={audioRef} loop />
      
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
              <p className="font-semibold text-lg mb-1">{playlist[currentTrack].title}</p>
              <p className="text-sm text-muted-foreground">{playlist[currentTrack].artist}</p>
            </div>

            <div className="flex items-center justify-center gap-4 mb-6">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={prevTrack}
                className="hover:scale-110 transition-transform"
              >
                <Icon name="SkipBack" size={20} />
              </Button>
              
              <Button
                onClick={togglePlay}
                size="lg"
                className="rounded-full w-14 h-14 hover:scale-110 transition-transform"
              >
                <Icon name={isPlaying ? "Pause" : "Play"} size={24} />
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                onClick={nextTrack}
                className="hover:scale-110 transition-transform"
              >
                <Icon name="SkipForward" size={20} />
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
              />
              <span className="text-sm text-muted-foreground w-10">{volume}%</span>
            </div>

            <div className="mt-4 p-3 bg-secondary/50 rounded-lg text-sm text-center">
              <p className="text-muted-foreground">
                💡 Добавь свои любимые треки через YouTube или загрузи файлы
              </p>
            </div>
          </Card>
        )}
      </div>
    </>
  );
};

export default MusicPlayer;
