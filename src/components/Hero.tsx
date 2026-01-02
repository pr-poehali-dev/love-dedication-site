import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero = ({ setActiveSection }: HeroProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8 animate-scale-in">
          <div className="inline-block p-8 bg-gradient-to-br from-pink-200 via-purple-200 to-peach-200 rounded-full mb-6">
            <Icon name="Heart" size={80} className="text-primary animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-cormorant font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
          Моей любимой Кире
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light max-w-2xl mx-auto">
          Этот сайт создан, чтобы рассказать о том, как сильно я тебя люблю. 
          Здесь 87 причин, почему ты — самая особенная для меня.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={() => setActiveSection('about')}
            className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform"
          >
            Читать причины 💝
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => setActiveSection('letter')}
            className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform"
          >
            Личное письмо
            <Icon name="Mail" size={20} className="ml-2" />
          </Button>
        </div>
        
        <div className="mt-16 text-sm text-muted-foreground animate-bounce">
          <Icon name="ChevronDown" size={24} className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
