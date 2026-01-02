import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Letter = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [letterContent, setLetterContent] = useState(
    `Моя дорогая Кира,

Эти слова идут из самой глубины моего сердца. Каждый день рядом с тобой — это подарок, который я ценю больше всего на свете.

Ты делаешь мою жизнь ярче, наполняешь её смыслом и счастьем. Твоя улыбка освещает даже самые темные дни, а твоя поддержка даёт силы преодолевать любые трудности.

Я создал этот сайт, чтобы ты знала: ты — самая важная часть моей жизни. 87 причин — это лишь малая часть того, что я чувствую. На самом деле, причин любить тебя бесконечно много.

Спасибо за то, что ты есть. Спасибо за каждый момент, проведённый вместе. Спасибо за то, что ты выбрала меня.

Я люблю тебя больше, чем могут выразить любые слова.

Всегда твой,
С любовью 💝`
  );

  const [tempContent, setTempContent] = useState(letterContent);

  const handleSave = () => {
    setLetterContent(tempContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempContent(letterContent);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block p-6 bg-gradient-to-br from-pink-200 via-purple-200 to-peach-200 rounded-full mb-6">
            <Icon name="Mail" size={48} className="text-primary" />
          </div>
          <h2 className="text-5xl md:text-6xl font-cormorant font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Письмо для тебя
          </h2>
          <p className="text-xl text-muted-foreground">
            Слова, которые живут в моём сердце
          </p>
        </div>

        <Card className="p-8 md:p-12 backdrop-blur-sm bg-white/80 border-purple-200 shadow-2xl animate-scale-in">
          {isEditing ? (
            <div className="space-y-4">
              <Textarea 
                value={tempContent}
                onChange={(e) => setTempContent(e.target.value)}
                rows={20}
                className="resize-none font-serif text-lg leading-relaxed"
              />
              <div className="flex gap-2 justify-end">
                <Button onClick={handleSave} className="gap-2">
                  <Icon name="Check" size={18} />
                  Сохранить
                </Button>
                <Button onClick={handleCancel} variant="outline">
                  Отмена
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-end mb-6">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsEditing(true)}
                  className="hover:scale-110 transition-transform"
                >
                  <Icon name="Pencil" size={16} className="mr-2" />
                  Редактировать
                </Button>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <div className="font-cormorant text-xl leading-relaxed whitespace-pre-wrap text-foreground">
                  {letterContent}
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-purple-200">
                <div className="flex items-center justify-center gap-4 text-muted-foreground">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
                  <Icon name="Heart" size={24} className="text-primary animate-pulse" />
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
                </div>
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Letter;
