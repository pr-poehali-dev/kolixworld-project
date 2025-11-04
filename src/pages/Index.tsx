import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const donatPackages = [
    {
      id: 1,
      name: 'VIP',
      price: '299₽',
      image: 'https://cdn.poehali.dev/projects/390cba9d-ddc0-4998-babf-8adefc8eb816/files/c8577492-8085-4d1b-a6bc-580b809e32c5.jpg',
      features: ['Префикс [VIP]', 'Доступ к /fly', '5 точек дома', 'Приват 10 регионов', 'Цветной ник'],
      badge: 'Популярно'
    },
    {
      id: 2,
      name: 'PREMIUM',
      price: '599₽',
      image: 'https://cdn.poehali.dev/projects/390cba9d-ddc0-4998-babf-8adefc8eb816/files/b3af6aa8-2944-41d3-b9b1-d87ee7431185.jpg',
      features: ['Префикс [PREMIUM]', 'Доступ к /fly', '10 точек дома', 'Приват 25 регионов', 'Цветной ник', 'Кит раз в день'],
      badge: 'Выгодно'
    },
    {
      id: 3,
      name: 'DELUXE',
      price: '999₽',
      image: 'https://cdn.poehali.dev/projects/390cba9d-ddc0-4998-babf-8adefc8eb816/files/b3af6aa8-2944-41d3-b9b1-d87ee7431185.jpg',
      features: ['Префикс [DELUXE]', 'Доступ к /fly', 'Неограниченные дома', 'Приват без лимитов', 'Анимированный ник', 'Супер кит 2 раза в день', 'Доступ к /god'],
      badge: 'ТОП'
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
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent pixel-corners flex items-center justify-center">
                <Icon name="Pickaxe" size={24} className="text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-white">KOLIXWORLD</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => setActiveSection('home')} className="text-white hover:text-accent transition-colors font-medium">
                Главная
              </button>
              <button onClick={() => setActiveSection('donates')} className="text-white hover:text-accent transition-colors font-medium">
                Донаты
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
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-7xl font-bold text-primary drop-shadow-lg">
                KOLIXWORLD
              </h2>
              <p className="text-2xl text-secondary font-semibold">
                Лучший Minecraft сервер для приключений
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="bg-white/90 px-6 py-3 pixel-corners shadow-xl">
                  <p className="text-sm text-muted-foreground">IP адрес сервера:</p>
                  <p className="text-xl font-bold text-primary">play.kolixworld.ru</p>
                </div>
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg px-8 py-6 pixel-corners shadow-xl">
                  <Icon name="Users" className="mr-2" size={24} />
                  Играть сейчас
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {[
                  { icon: 'Users', label: 'Онлайн', value: '247+' },
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
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {donatPackages.map((pkg, index) => (
                <Card 
                  key={pkg.id} 
                  className={`pixel-corners border-4 hover:scale-105 transition-all hover:shadow-2xl ${
                    index === 1 ? 'border-accent md:-mt-4 md:scale-105' : 'border-primary/30'
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
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold pixel-corners mt-4">
                      Купить сейчас
                    </Button>
                  </CardContent>
                </Card>
              ))}
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
                  <div className="flex justify-center gap-4">
                    <Button variant="outline" size="icon" className="pixel-corners border-2 hover:bg-primary hover:text-white">
                      <Icon name="MessageCircle" size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="pixel-corners border-2 hover:bg-primary hover:text-white">
                      <Icon name="Mail" size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="pixel-corners border-2 hover:bg-primary hover:text-white">
                      <Icon name="Globe" size={20} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <footer className="bg-primary/95 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">KOLIXWORLD © 2024</p>
          <p className="text-sm text-white/80">Лучший Minecraft сервер для твоих приключений</p>
        </div>
      </footer>
    </div>
  );
}
