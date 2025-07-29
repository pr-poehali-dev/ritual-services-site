import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  const monuments = [
    {
      id: 1,
      title: "Классический памятник",
      material: "Гранит черный",
      price: "от 25 000 ₽",
      description: "Традиционный памятник из черного гранита с гравировкой"
    },
    {
      id: 2,
      title: "Памятник с крестом",
      material: "Мрамор белый",
      price: "от 35 000 ₽",
      description: "Элегантный мраморный памятник с православным крестом"
    },
    {
      id: 3,
      title: "Семейный памятник",
      material: "Гранит серый",
      price: "от 45 000 ₽",
      description: "Большой семейный памятник для двух усопших"
    }
  ];

  const services = [
    {
      title: "Изготовление памятников",
      description: "Высококачественные памятники из натурального камня",
      icon: "Mountain"
    },
    {
      title: "Доставка и установка",
      description: "Бережная доставка и профессиональная установка в любой регион",
      icon: "Truck"
    },
    {
      title: "Гравировка и портреты",
      description: "Художественная гравировка портретов и надписей",
      icon: "Edit3"
    },
    {
      title: "Благоустройство могил",
      description: "Комплексное благоустройство места захоронения",
      icon: "Flower"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Cross" size={32} className="text-primary" />
              <div>
                <h1 className="text-2xl font-cormorant font-bold text-primary">Вечная Память</h1>
                <p className="text-sm text-muted-foreground">Ритуальные услуги</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#monuments" className="text-foreground hover:text-primary transition-colors">Памятники</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button variant="outline" className="hidden md:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-cormorant font-bold text-primary mb-6">
              Достойная память о близких
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Создаём памятники, которые хранят память о ваших близких на века. 
              Качественные материалы, профессиональная работа, индивидуальный подход.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Search" size={20} className="mr-2" />
                Выбрать памятник
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Monuments Section */}
      <section id="monuments" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-cormorant font-bold text-primary mb-4">Каталог памятников</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий выбор памятников из натурального камня. Каждый памятник изготавливается вручную с особым вниманием к деталям.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {monuments.map((monument) => (
              <Card key={monument.id} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="aspect-[4/3] bg-gray-100 rounded-md mb-4 overflow-hidden group-hover:bg-gray-50 transition-colors">
                    <img 
                      src={monument.id === 1 ? "/img/2e21d17b-72cd-4d6e-aa95-bee4cb49ff3f.jpg" : 
                           monument.id === 2 ? "/img/d6947168-f046-46b6-b32e-56f32cc08720.jpg" : 
                           "/img/bc7b5d2e-37d3-4edb-aad7-9953115d8f4d.jpg"} 
                      alt={monument.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="font-cormorant text-xl">{monument.title}</CardTitle>
                  <CardDescription className="text-base">{monument.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{monument.material}</Badge>
                    <span className="text-2xl font-bold text-primary font-cormorant">{monument.price}</span>
                  </div>
                  <Button className="w-full">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-cormorant font-bold text-primary mb-4">Наши услуги</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный комплекс ритуальных услуг от изготовления до установки памятников
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-cormorant text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Delivery Info */}
          <div className="mt-12 bg-white rounded-lg p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-cormorant font-bold text-primary mb-4">
                  Доставка и установка
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mt-1" />
                    <div>
                      <p className="font-medium">Бесплатная доставка</p>
                      <p className="text-sm text-muted-foreground">В пределах 50 км от города</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mt-1" />
                    <div>
                      <p className="font-medium">Профессиональная установка</p>
                      <p className="text-sm text-muted-foreground">Опытные мастера, гарантия качества</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mt-1" />
                    <div>
                      <p className="font-medium">Сроки изготовления</p>
                      <p className="text-sm text-muted-foreground">От 14 до 30 рабочих дней</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h5 className="font-cormorant font-bold text-lg mb-4">Условия доставки</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    <span>По всей России</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span>Согласованное время</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Shield" size={16} className="text-primary" />
                    <span>Страхование груза</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-cormorant font-bold text-primary mb-4">Галерея работ</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры наших работ - памятники, которые мы изготовили с любовью и профессионализмом
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden group cursor-pointer">
                <div className="w-full h-full flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                  <Icon name="Image" size={48} className="text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-cormorant font-bold text-primary mb-4">Контакты</h3>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами для консультации и заказа памятника
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-cormorant">Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">+7 (999) 123-45-67</p>
                <p className="text-sm text-muted-foreground">Круглосуточно</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-cormorant">Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">ул. Памяти, 15</p>
                <p className="text-sm text-muted-foreground">г. Москва</p>
              </CardContent>
            </Card>

            <Card className="text-center md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-cormorant">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">info@memory.ru</p>
                <p className="text-sm text-muted-foreground">Ежедневно</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Cross" size={28} className="text-primary-foreground" />
                <h4 className="text-xl font-cormorant font-bold">Вечная Память</h4>
              </div>
              <p className="text-primary-foreground/80 mb-4">
                Мы создаём памятники, которые достойно хранят память о ваших близких. 
                Более 15 лет опыта в сфере ритуальных услуг.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-primary-foreground/80">
                  <Icon name="Phone" size={16} />
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-primary-foreground/80">
                  <Icon name="Mail" size={16} />
                </Button>
              </div>
            </div>
            
            <div>
              <h5 className="font-cormorant font-bold text-lg mb-4">Услуги</h5>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Памятники из гранита</li>
                <li>Памятники из мрамора</li>
                <li>Доставка и установка</li>
                <li>Гравировка портретов</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-cormorant font-bold text-lg mb-4">Информация</h5>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>О компании</li>
                <li>Гарантии</li>
                <li>Доставка</li>
                <li>Контакты</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-primary-foreground/20" />
          
          <div className="text-center text-sm text-primary-foreground/60">
            <p>&copy; 2024 Вечная Память. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}