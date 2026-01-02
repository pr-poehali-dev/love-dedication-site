import { useState } from 'react';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import AboutKira from '@/components/AboutKira';
import Stories from '@/components/Stories';
import Letter from '@/components/Letter';
import MusicPlayer from '@/components/MusicPlayer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-peach-50 -z-10" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-peach-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }} />

      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <MusicPlayer />

      <div className="relative z-10">
        {activeSection === 'hero' && <Hero setActiveSection={setActiveSection} />}
        {activeSection === 'about' && <AboutKira />}
        {activeSection === 'stories' && <Stories />}
        {activeSection === 'letter' && <Letter />}
      </div>
    </div>
  );
};

export default Index;
