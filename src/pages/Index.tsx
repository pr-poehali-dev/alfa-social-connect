import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['it', 'design', 'sales']);

  const posts = [
    {
      id: 1,
      author: 'Анна Петрова',
      avatar: 'АП',
      role: 'Product Manager',
      time: '2 часа назад',
      content: 'Запустили новый проект с командой! 🚀 Интересно применить agile-подход в финтехе. Кто работает с похожими задачами?',
      likes: 24,
      comments: 8,
      tags: ['product', 'agile', 'fintech'],
    },
    {
      id: 2,
      author: 'Дмитрий Соколов',
      avatar: 'ДС',
      role: 'Senior Developer',
      time: '4 часа назад',
      content: 'Наконец-то разобрался с микросервисами на Go. Кто-нибудь внедрял event-driven архитектуру в production?',
      likes: 42,
      comments: 15,
      tags: ['development', 'golang', 'architecture'],
    },
    {
      id: 3,
      author: 'Елена Волкова',
      avatar: 'ЕВ',
      role: 'UX Designer',
      time: '6 часов назад',
      content: 'Провела исследование пользователей для нового приложения. Удивительно, как меняются паттерны взаимодействия! 🎨',
      likes: 31,
      comments: 12,
      tags: ['design', 'ux', 'research'],
    },
  ];

  const communities = [
    {
      id: 1,
      name: 'IT & Development',
      members: 2847,
      icon: 'Code2',
      gradient: 'from-red-600 to-black',
      description: 'Обсуждаем технологии, архитектуру и код',
    },
    {
      id: 2,
      name: 'Design & UX',
      members: 1523,
      icon: 'Palette',
      gradient: 'from-lime-400 to-green-500',
      description: 'Тренды дизайна и пользовательский опыт',
    },
    {
      id: 3,
      name: 'Product Management',
      members: 1891,
      icon: 'Target',
      gradient: 'from-black to-gray-800',
      description: 'Продуктовые стратегии и метрики',
    },
    {
      id: 4,
      name: 'Sales & Marketing',
      members: 2134,
      icon: 'TrendingUp',
      gradient: 'from-red-500 to-lime-400',
      description: 'Продажи, маркетинг и развитие бизнеса',
    },
  ];

  const skills = [
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'TypeScript', level: 78, category: 'Frontend' },
    { name: 'Product Design', level: 92, category: 'Design' },
    { name: 'Team Leadership', level: 67, category: 'Soft Skills' },
  ];

  const interests = [
    { id: 'it', label: 'IT', active: true },
    { id: 'design', label: 'Дизайн', active: true },
    { id: 'sales', label: 'Продажи', active: true },
    { id: 'hr', label: 'HR', active: false },
    { id: 'finance', label: 'Финансы', active: false },
    { id: 'marketing', label: 'Маркетинг', active: false },
  ];

  const toggleInterest = (id: string) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== id));
    } else {
      setSelectedInterests([...selectedInterests, id]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
                Alfa People
              </h1>
              <nav className="hidden md:flex gap-1">
                <Button
                  variant={activeTab === 'feed' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('feed')}
                  className="gap-2"
                >
                  <Icon name="Home" size={18} />
                  Лента
                </Button>
                <Button
                  variant={activeTab === 'communities' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('communities')}
                  className="gap-2"
                >
                  <Icon name="Users" size={18} />
                  Сообщества
                </Button>
                <Button
                  variant={activeTab === 'skills' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('skills')}
                  className="gap-2"
                >
                  <Icon name="Award" size={18} />
                  Компетенции
                </Button>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Поиск по людям, навыкам..."
                  className="pl-10 w-64 bg-white/50"
                />
              </div>
              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
              <Avatar className="h-10 w-10 ring-2 ring-red-600 ring-offset-2">
                <AvatarFallback className="bg-gradient-to-br from-red-600 to-black text-white font-semibold">
                  ВИ
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'feed' && (
          <div className="grid lg:grid-cols-[1fr_320px] gap-6">
            <div className="space-y-6">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-red-600 to-black text-white overflow-hidden">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-2">Персонализируйте свою ленту</h2>
                  <p className="text-white/90 mb-4">
                    Выберите интересы, чтобы видеть релевантный контент
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <Badge
                        key={interest.id}
                        variant="secondary"
                        className={`cursor-pointer transition-all hover:scale-105 ${
                          selectedInterests.includes(interest.id)
                            ? 'bg-lime-400 text-black hover:bg-lime-300'
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                        onClick={() => toggleInterest(interest.id)}
                      >
                        {interest.label}
                        {selectedInterests.includes(interest.id) && (
                          <Icon name="Check" size={14} className="ml-1" />
                        )}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardContent className="pt-6">
                  <div className="flex gap-3 mb-4">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-to-br from-red-600 to-black text-white">
                        ВИ
                      </AvatarFallback>
                    </Avatar>
                    <Input placeholder="Чем хотите поделиться?" className="flex-1" />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Icon name="Image" size={16} />
                      Фото
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Icon name="Video" size={16} />
                      Видео
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Icon name="FileText" size={16} />
                      Документ
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {posts.map((post) => (
                <Card key={post.id} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-gradient-to-br from-red-600 to-black text-white font-semibold">
                            {post.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-base font-semibold">{post.author}</CardTitle>
                          <CardDescription>{post.role}</CardDescription>
                          <p className="text-xs text-gray-500 mt-1">{post.time}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Icon name="MoreHorizontal" size={18} />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">{post.content}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-normal">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-6 pt-2 border-t">
                      <Button variant="ghost" size="sm" className="gap-2 text-gray-600 hover:text-red-600">
                        <Icon name="Heart" size={18} />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2 text-gray-600 hover:text-red-600">
                        <Icon name="MessageCircle" size={18} />
                        {post.comments}
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2 text-gray-600 hover:text-red-600">
                        <Icon name="Share2" size={18} />
                        Поделиться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              <Card className="shadow-lg border-0 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Рекомендуем подписаться</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-gradient-to-br from-lime-400 to-green-500 text-black">
                            {['МК', 'ИС', 'АЛ'][i - 1]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">
                            {['Мария Козлова', 'Игорь Смирнов', 'Алиса Лебедева'][i - 1]}
                          </p>
                          <p className="text-xs text-gray-500">
                            {['Designer', 'Tech Lead', 'HR Manager'][i - 1]}
                          </p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Icon name="UserPlus" size={14} />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'communities' && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
                Профессиональные сообщества
              </h2>
              <p className="text-gray-600">Находите единомышленников и развивайтесь вместе</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {communities.map((community) => (
                <Card
                  key={community.id}
                  className="shadow-lg border-0 overflow-hidden group hover:shadow-2xl transition-all cursor-pointer"
                >
                  <div className={`h-32 bg-gradient-to-br ${community.gradient} relative`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute bottom-4 left-6">
                      <div className="bg-white rounded-full p-3 shadow-lg">
                        <Icon name={community.icon as any} size={24} className="text-gray-800" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{community.name}</CardTitle>
                    <CardDescription>{community.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Icon name="Users" size={16} />
                        {community.members.toLocaleString('ru-RU')} участников
                      </div>
                      <Button size="sm" className="gap-2">
                        Вступить
                        <Icon name="ArrowRight" size={14} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
                Центр компетенций
              </h2>
              <p className="text-gray-600">Отслеживайте развитие навыков и достигайте целей</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-red-600 to-black text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Target" size={20} />
                    Навыков освоено
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">24</p>
                  <p className="text-white/80 text-sm mt-1">+3 за последний месяц</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-br from-lime-400 to-green-500 text-black">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} />
                    Средний прогресс
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">78%</p>
                  <p className="text-white/80 text-sm mt-1">Отличная динамика</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-br from-black to-gray-800 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Award" size={20} />
                    Достижений
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">12</p>
                  <p className="text-white/80 text-sm mt-1">Продолжайте в том же духе</p>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg border-0 mb-8">
              <CardHeader>
                <CardTitle>Ваши навыки</CardTitle>
                <CardDescription>Развивайте компетенции для достижения карьерных целей</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{skill.name}</p>
                        <p className="text-sm text-gray-500">{skill.category}</p>
                      </div>
                      <Badge variant="secondary">{skill.level}%</Badge>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BookOpen" size={20} />
                  Рекомендуемые курсы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {['Advanced React Patterns', 'System Design for Frontend', 'Leadership in Tech'].map(
                  (course, i) => (
                    <div
                      key={course}
                      className="flex items-center justify-between p-4 border rounded-lg hover:border-red-600 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-red-600 to-black flex items-center justify-center text-white font-bold">
                          {course[0]}
                        </div>
                        <div>
                          <p className="font-semibold">{course}</p>
                          <p className="text-sm text-gray-500">{[8, 12, 6][i]} часов обучения</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Начать
                      </Button>
                    </div>
                  )
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;