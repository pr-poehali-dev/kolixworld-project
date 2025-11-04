import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();
  const serverIP = 'g1.yukicore.org:25331';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP);
    toast({
      title: "IP скопирован!",
      description: serverIP,
    });
  };

  const donatPackages = [
    {
      id: 1,
      name: 'HERO',
      price: '20₽',
      image: 'https://cdn.poehali.dev/projects/390cba9d-ddc0-4998-babf-8adefc8eb816/files/c8577492-8085-4d1b-a6bc-580b809e32c5.jpg',
      features: ['Уникальный кит /kit hero', 'Виртуальный верстак /craft', 'Узнать крафт /recipe', 'Узнать координаты /getpos', '5 слотов на аукционе', '2 привата', 'Префикс [HERO]'],
      badge: 'Старт'
    },
    {
      id: 2,
      name: 'TITAN',
      price: '50₽',
      image: 'https://cdn.poehali.dev/projects/390cba9d-ddc0-4998-babf-8adefc8eb816/files/c8577492-8085-4d1b-a6bc-580b809e32c5.jpg',
      features: ['Уникальный кит /kit titan', 'Надеть блок /hat', 'Восполнить голод /feed', 'РТП на большое расстояние', 'Узнать ID предмета /itemdb', '7 слотов на аукционе', '4 привата', 'Префикс [TITAN]']
    },
    {
      id: 3,
      name: 'AVENGER',
      price: '100₽',
      image: 'https://cdn.poehali.dev/projects/390cba9d-ddc0-4998-babf-8adefc8eb816/files/c8577492-8085-4d1b-a6bc-580b809e32c5.jpg',
      features: ['Уникальный кит /kit avenger', 'Эндер-сундук /enderchest', 'Потушить огонь /ext', 'Игнорировать игрока /ignore', 'Очистить инвентарь /clear', '9 слотов на аукционе', '8 приватов', '6 домов /sethome', 'Префикс [AVENGER]']
    },
    {
      id: 4,
      name: 'OVERLORD',
      price: '200₽',
      image: 'https://cdn.poehali.dev/projects/390cba9d-ddc0-4998-babf-8adefc8eb816/files/b3af6aa8-2944-41d3-b9b1-d87ee7431185.jpg',
      features: ['Уникальный кит /kit overlord', 'Доступ к префиксам /prefix', 'Починить предмет /repair', 'Найти игрока /near', 'Личное время /ptime', 'x2 валюты за убийства', '14 слотов на аукционе', '16 приватов', '12 домов', 'Префикс [OVERLORD]'],
      badge: 'Популярно'
    },
    {
      id: 5,
      name: 'MAGISTER',
      price: '250₽',
      image: 'https://cdn.poehali.dev/projects/390cba9d-ddc0-4998-babf-8adefc8eb816/files/b3af6aa8-2944-41d3-b9b1-d87ee7431185.jpg',
      features: ['Уникальный кит /kit magister', 'Префиксы /prefix', 'Сменить ник /nick', 'Инвентарь игрока /invsee', 'Починить все /repair all', 'Пополнить здоровье /heal', 'Отключить телепортации /tptoggle', 'x2 валюты за убийства', '22 слота на аукционе', '48 приватов', '32 дома', 'Префикс [MAGISTER]']
    },
    {
      id: 6,
      name: 'IMPERATOR',
      price: '400₽',
      image: 'https://cdn.poehali.dev/projects/390cba9d-ddc0-4998-babf-8adefc8eb816/files/b3af6aa8-2944-41d3-b9b1-d87ee7431185.jpg',
      features: ['Уникальный кит /kit imperator', 'Дополнительный набор /kit plus', 'Объявление /broadcast', 'Узнать имя /realname', 'Ударить молнией /lightning', 'РТП рядом с игроками', 'x4 валюты за убийства', 'Заход на заполненный сервер', '36 слотов на аукционе', '96 приватов', '48 домов', 'Префикс [IMPERATOR]'],
      badge: 'Выгодно'
    },
    {
      id: 7,
      name: 'DRAGON',
      price: '650₽',
      image: 'https://cdn.poehali.dev/projects/390cba9d-ddc0-4998-babf-8adefc8eb816/files/b3af6aa8-2944-41d3-b9b1-d87ee7431185.jpg',
      features: ['Уникальный кит /kit dragon', 'Мега-набор /kit pluspro', 'Режим полета /fly', 'Выдавать донат /grant', 'Управление погодой и временем', 'x6 валюты за убийства', 'Заход на заполненный сервер', '999 слотов на аукционе', '999+ приватов', '999+ домов', 'Префикс [DRAGON]'],
      badge: 'ТОП'
    },
    {
      id: 8,
      name: 'GOD',
      price: '1000₽',
      image: 'https://cdn.poehali.dev/projects/390cba9d-ddc0-4998-babf-8adefc8eb816/files/b3af6aa8-2944-41d3-b9b1-d87ee7431185.jpg',
      features: ['Уникальный кит /kit god', 'Все возможности DRAGON', 'Полное управление сервером', 'x6 валюты за убийства', '999 слотов на аукционе', '999+ приватов и домов', 'Префикс [GOD]'],
      badge: 'МАКСИМУМ'
    }
  ];

  const cases = [
    {
      id: 1,
      name: 'Кейс с донатом',
      price: '149₽',
      icon: 'Gift',
      description: 'Может выпасть любая привилегия соответствующего режима'
    },
    {
      id: 2,
      name: 'Кейс с монетами',
      price: '99₽',
      icon: 'Coins',
      description: 'Может выпасть от 1000 до 20000 игровых монет'
    },
    {
      id: 3,
      name: 'Кейс с префиксами',
      price: '79₽',
      icon: 'Tag',
      description: 'ГЕОГРАФ, АНТРОПОЛОГ, ЛЕОН, ВОРОН, ХЕЙТЕР, АНАРХИСТ, SUPREME, ПОВЕЛИТЕЛЬ, MARVEL или МАЙНКРАФТЕР'
    },
    {
      id: 4,
      name: 'Кейс с риликами',
      price: '59₽',
      icon: 'Cookie',
      description: 'Может выпасть от 10 до 15000 риликов/печенек'
    },
    {
      id: 5,
      name: 'Кейс с вещами',
      price: '89₽',
      icon: 'Sword',
      description: 'Алмазное или железное снаряжение с рандомным зачарованием'
    }
  ];

  const services = [
    {
      id: 1,
      name: 'Разбан',
      price: '299₽',
      icon: 'UserCheck',
      description: 'Снятие запрета на вход на сервер'
    },
    {
      id: 2,
      name: 'Размут',
      price: '149₽',
      icon: 'MessageSquare',
      description: 'Снятие запрета на использование чата'
    },
    {
      id: 3,
      name: 'Рилики/Печеньки',
      price: 'от 49₽',
      icon: 'Coins',
      description: 'Внутриигровая валюта для покупки ресурсов'
    },
    {
      id: 4,
      name: 'Ключи к кейсам',
      price: 'от 29₽',
      icon: 'Key',
      description: 'Ключи для открытия сундуков удачи'
    }
  ];

  const rules = [
    { title: 'Общие правила', content: 'Запрещено использование читов, багов и эксплойтов. Уважайте других игроков и администрацию.' },
    { title: 'Правила чата', content: 'Запрещен мат, спам, флуд, реклама других серверов, оскорбления и угрозы.' },
    { title: 'Правила строительства', content: 'Запрещено строить неприличные постройки, гриферство и разрушение чужих построек.' },
    { title: 'Правила торговли', content: 'Мошенничество при торговле строго запрещено. Все сделки на вашу ответственность.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-50">
      <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b-4 border-primary/80 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/9ffa7a43-a98c-4375-be7a-9b31e0876144.jpg" 
                alt="KH Logo"
                className="w-12 h-12 object-contain"
              />
              <h1 className="text-2xl font-bold text-white">KOLIXWORLD</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => setActiveSection('home')} className="text-white hover:text-accent transition-colors font-medium">
                Главная
              </button>
              <button onClick={() => setActiveSection('donates')} className="text-white hover:text-accent transition-colors font-medium">
                Донаты
              </button>
              <button onClick={() => setActiveSection('cases')} className="text-white hover:text-accent transition-colors font-medium">
                Кейсы
              </button>
              <button onClick={() => setActiveSection('rules')} className="text-white hover:text-accent transition-colors font-medium">
                Правила
              </button>
              <button onClick={() => setActiveSection('contacts')} className="text-white hover:text-accent transition-colors font-medium">
                Контакты
              </button>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-primary font-bold pixel-corners">
              Играть
            </Button>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://cdn.poehali.dev/projects/390cba9d-ddc0-4998-babf-8adefc8eb816/files/4b9615b0-0f35-4a17-a0b8-c79459f7c973.jpg" 
              alt="Minecraft World"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <img 
              src="https://cdn.poehali.dev/files/9ffa7a43-a98c-4375-be7a-9b31e0876144.jpg" 
              alt="KH Logo"
              className="w-96 h-96 object-contain"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-7xl font-bold text-primary drop-shadow-lg">
                KOLIXWORLD
              </h2>
              <p className="text-2xl text-secondary font-semibold">
                Лучший Minecraft сервер для приключений
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="bg-white/90 px-6 py-3 pixel-corners shadow-xl relative group">
                  <p className="text-sm text-muted-foreground">IP адрес сервера:</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xl font-bold text-primary">{serverIP}</p>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={copyToClipboard}
                      className="hover:bg-primary/10 pixel-corners"
                    >
                      <Icon name="Copy" size={18} className="text-primary" />
                    </Button>
                  </div>
                </div>
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg px-8 py-6 pixel-corners shadow-xl">
                  <Icon name="Users" className="mr-2" size={24} />
                  Играть сейчас
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {[
                  { icon: 'Users', label: 'Онлайн', value: '10' },
                  { icon: 'Shield', label: 'Защита', value: '100%' },
                  { icon: 'Zap', label: 'Без лагов', value: 'TPS 20' },
                  { icon: 'Heart', label: 'Рейтинг', value: '5.0' }
                ].map((stat) => (
                  <Card key={stat.label} className="pixel-corners border-2 border-primary/20 hover:scale-105 transition-transform">
                    <CardContent className="p-4 text-center">
                      <Icon name={stat.icon as any} className="mx-auto mb-2 text-primary" size={32} />
                      <p className="font-bold text-2xl text-primary">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'donates' && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Донат-пакеты</h2>
              <p className="text-xl text-muted-foreground">Выбери свой пакет привилегий</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {donatPackages.map((pkg, index) => (
                <Card 
                  key={pkg.id} 
                  className={`pixel-corners border-4 hover:scale-105 transition-all hover:shadow-2xl ${
                    index === 6 ? 'border-accent lg:-mt-4' : 'border-primary/30'
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="relative">
                    {pkg.badge && (
                      <Badge className="absolute top-4 right-4 bg-accent text-primary pixel-corners">
                        {pkg.badge}
                      </Badge>
                    )}
                    <div className="w-24 h-24 mx-auto mb-4 pixel-corners overflow-hidden">
                      <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                    </div>
                    <CardTitle className="text-3xl text-primary text-center">{pkg.name}</CardTitle>
                    <CardDescription className="text-center">
                      <span className="text-4xl font-bold text-secondary">{pkg.price}</span>
                      <span className="text-muted-foreground"> / навсегда</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-secondary flex-shrink-0 mt-1" size={20} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    <div className="space-y-2 mt-4">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold pixel-corners">
                        <Icon name="CreditCard" className="mr-2" size={20} />
                        Оплата по карте
                      </Button>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold pixel-corners">
                        Купить сейчас
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'cases' && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Кейсы и услуги</h2>
              <p className="text-xl text-muted-foreground">Испытай удачу или купи нужную услугу</p>
            </div>
            
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-secondary mb-6 text-center">🎁 Кейсы удачи</h3>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                {cases.map((caseItem, index) => (
                  <Card 
                    key={caseItem.id}
                    className="pixel-corners border-4 border-accent/30 hover:scale-105 transition-all hover:shadow-2xl animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 bg-accent/20 pixel-corners flex items-center justify-center">
                        <Icon name={caseItem.icon as any} size={40} className="text-accent" />
                      </div>
                      <CardTitle className="text-xl text-primary">{caseItem.name}</CardTitle>
                      <CardDescription className="text-center">
                        <span className="text-3xl font-bold text-secondary">{caseItem.price}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center mb-4">{caseItem.description}</p>
                      <div className="space-y-2">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold pixel-corners text-sm">
                          <Icon name="CreditCard" className="mr-2" size={18} />
                          Оплата по карте
                        </Button>
                        <Button className="w-full bg-accent hover:bg-accent/90 text-primary font-bold pixel-corners">
                          Купить
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-secondary mb-6 text-center">⚙️ Услуги</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {services.map((service, index) => (
                  <Card 
                    key={service.id}
                    className="pixel-corners border-4 border-primary/30 hover:scale-105 transition-all hover:shadow-2xl animate-fade-in"
                    style={{ animationDelay: `${(index + 5) * 0.1}s` }}
                  >
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 bg-primary/20 pixel-corners flex items-center justify-center">
                        <Icon name={service.icon as any} size={32} className="text-primary" />
                      </div>
                      <CardTitle className="text-lg text-primary">{service.name}</CardTitle>
                      <CardDescription className="text-center">
                        <span className="text-2xl font-bold text-secondary">{service.price}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center mb-4">{service.description}</p>
                      <div className="space-y-2">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold pixel-corners text-sm">
                          <Icon name="CreditCard" className="mr-2" size={18} />
                          Оплата по карте
                        </Button>
                        <Button className="w-full bg-accent hover:bg-accent/90 text-primary font-bold pixel-corners">
                          Купить
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'rules' && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Правила сервера</h2>
              <p className="text-xl text-muted-foreground">Пожалуйста, ознакомься с правилами</p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {rules.map((rule, index) => (
                <AccordionItem 
                  key={index} 
                  value={`rule-${index}`}
                  className="pixel-corners border-2 border-primary/30 bg-white px-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="text-lg font-semibold text-primary hover:text-secondary">
                    <div className="flex items-center gap-3">
                      <Icon name="Book" size={24} />
                      {rule.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    {rule.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {activeSection === 'contacts' && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Связаться с нами</h2>
              <p className="text-xl text-muted-foreground">Есть вопросы? Напиши нам!</p>
            </div>
            <Card className="pixel-corners border-4 border-primary/30 animate-fade-in">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Твой ник в игре</label>
                    <Input 
                      placeholder="Steve123" 
                      className="pixel-corners border-2 border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Email</label>
                    <Input 
                      type="email" 
                      placeholder="steve@minecraft.com" 
                      className="pixel-corners border-2 border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Напиши нам что-нибудь..." 
                      rows={5}
                      className="pixel-corners border-2 border-primary/20 focus:border-primary resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold pixel-corners text-lg py-6">
                    <Icon name="Send" className="mr-2" />
                    Отправить
                  </Button>
                </form>
                <div className="mt-8 pt-8 border-t-2 border-primary/20">
                  <p className="text-center text-sm text-muted-foreground mb-4">Или найди нас здесь:</p>
                  <div className="flex justify-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="pixel-corners border-2 hover:bg-primary hover:text-white w-12 h-12"
                        onClick={() => window.open('https://t.me/kolixworld', '_blank')}
                      >
                        <Icon name="Send" size={20} />
                      </Button>
                      <span className="text-xs text-muted-foreground">Telegram</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="pixel-corners border-2 hover:bg-primary hover:text-white w-12 h-12"
                        onClick={() => window.open('https://discord.gg/YpmsSZJzY2', '_blank')}
                      >
                        <Icon name="MessageCircle" size={20} />
                      </Button>
                      <span className="text-xs text-muted-foreground">Discord</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="pixel-corners border-2 hover:bg-primary hover:text-white w-12 h-12"
                        onClick={() => window.open('https://vk.com/kolixworld', '_blank')}
                      >
                        <Icon name="Users" size={20} />
                      </Button>
                      <span className="text-xs text-muted-foreground">VK</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <footer className="bg-primary/95 text-white py-12 mt-20 border-t-4 border-accent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/9ffa7a43-a98c-4375-be7a-9b31e0876144.jpg" 
                  alt="KH Logo"
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-2xl font-bold">KOLIXWORLD</h3>
              </div>
              <p className="text-sm text-white/80">Лучший Minecraft сервер для твоих приключений</p>
              <p className="text-sm text-white/80 mt-2">IP: {serverIP}</p>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-bold mb-4">Навигация</h4>
              <div className="space-y-2">
                <button onClick={() => setActiveSection('home')} className="block w-full text-white/80 hover:text-accent transition-colors">Главная</button>
                <button onClick={() => setActiveSection('donates')} className="block w-full text-white/80 hover:text-accent transition-colors">Донаты</button>
                <button onClick={() => setActiveSection('cases')} className="block w-full text-white/80 hover:text-accent transition-colors">Кейсы</button>
                <button onClick={() => setActiveSection('rules')} className="block w-full text-white/80 hover:text-accent transition-colors">Правила</button>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h4 className="text-lg font-bold mb-4">Наши соцсети</h4>
              <div className="flex justify-center md:justify-end gap-4 mb-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="pixel-corners border-2 border-white/20 hover:bg-accent hover:text-primary hover:border-accent"
                  onClick={() => window.open('https://t.me/kolixworld', '_blank')}
                >
                  <Icon name="Send" size={20} />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="pixel-corners border-2 border-white/20 hover:bg-accent hover:text-primary hover:border-accent"
                  onClick={() => window.open('https://discord.gg/YpmsSZJzY2', '_blank')}
                >
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="pixel-corners border-2 border-white/20 hover:bg-accent hover:text-primary hover:border-accent"
                  onClick={() => window.open('https://vk.com/kolixworld', '_blank')}
                >
                  <Icon name="Users" size={20} />
                </Button>
              </div>
              <p className="text-xs text-white/60">Присоединяйся к сообществу!</p>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-6 text-center">
            <p className="text-sm text-white/80">KOLIXWORLD © 2024. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}