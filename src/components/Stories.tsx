import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface Story {
  id: number;
  title: string;
  date: string;
  content: string;
}

const Stories = () => {
  const [stories, setStories] = useState<Story[]>([
    {
      id: 1,
      title: 'Наша первая встреча',
      date: 'Добавь дату',
      content: 'Здесь ты можешь рассказать историю о том, как вы впервые встретились...'
    },
    {
      id: 2,
      title: 'Незабываемый вечер',
      date: 'Добавь дату',
      content: 'Расскажи о самом романтичном вечере, который вы провели вместе...'
    },
    {
      id: 3,
      title: 'Наше путешествие',
      date: 'Добавь дату',
      content: 'Опиши самое яркое путешествие или приключение, которое вы пережили вместе...'
    }
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDate, setEditDate] = useState('');
  const [editContent, setEditContent] = useState('');

  const startEdit = (story: Story) => {
    setEditingId(story.id);
    setEditTitle(story.title);
    setEditDate(story.date);
    setEditContent(story.content);
  };

  const saveEdit = () => {
    if (editingId) {
      setStories(stories.map(story => 
        story.id === editingId 
          ? { ...story, title: editTitle, date: editDate, content: editContent }
          : story
      ));
      setEditingId(null);
    }
  };

  const addNewStory = () => {
    const newStory: Story = {
      id: Date.now(),
      title: 'Новая история',
      date: new Date().toLocaleDateString('ru-RU'),
      content: 'Расскажи свою историю здесь...'
    };
    setStories([...stories, newStory]);
  };

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-cormorant font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Наши истории
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Моменты, которые мы храним в сердце
          </p>
          <Button onClick={addNewStory} className="gap-2">
            <Icon name="Plus" size={18} />
            Добавить историю
          </Button>
        </div>

        <div className="space-y-8">
          {stories.map((story, index) => (
            <Card 
              key={story.id}
              className="p-8 backdrop-blur-sm bg-white/60 border-purple-200 hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {editingId === story.id ? (
                <div className="space-y-4">
                  <Input 
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="text-2xl font-cormorant font-bold"
                  />
                  <Input 
                    value={editDate}
                    onChange={(e) => setEditDate(e.target.value)}
                    className="text-sm"
                  />
                  <Textarea 
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    rows={6}
                    className="resize-none"
                  />
                  <div className="flex gap-2">
                    <Button onClick={saveEdit} size="sm">
                      <Icon name="Check" size={16} className="mr-2" />
                      Сохранить
                    </Button>
                    <Button onClick={() => setEditingId(null)} size="sm" variant="outline">
                      Отмена
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-3xl font-cormorant font-bold text-primary mb-2">
                        {story.title}
                      </h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Icon name="Calendar" size={16} />
                        {story.date}
                      </p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => startEdit(story)}
                      className="hover:scale-110 transition-transform"
                    >
                      <Icon name="Pencil" size={16} />
                    </Button>
                  </div>
                  <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                    {story.content}
                  </p>
                </>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
