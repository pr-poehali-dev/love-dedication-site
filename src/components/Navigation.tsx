import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const navItems = [
    { id: 'hero', label: 'Главная', icon: 'Home' },
    { id: 'about', label: 'О Кире', icon: 'Heart' },
    { id: 'stories', label: 'Истории', icon: 'BookOpen' },
    { id: 'letter', label: 'Письмо', icon: 'Mail' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 border-b border-purple-200/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-cormorant font-bold text-primary">Моя Кира 💝</h1>
          
          <div className="flex gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveSection(item.id)}
                className="gap-2 transition-all hover:scale-105"
              >
                <Icon name={item.icon as any} size={18} />
                <span className="hidden sm:inline">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
