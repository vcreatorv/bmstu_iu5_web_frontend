import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'
import { Navbar } from '../../components/Navbar'
import { Cart } from '../../components/Cart'
import { ProviderServiceProps } from '../../components/ProviderServiceCard/typing'
import { ProviderServiceCard } from '../../components/ProviderServiceCard';

export default function ResponsiveCards() {
  const cards = [
    { 
        id: 1, 
        title: "Облачное видеонаблюдение", 
        imageURL: "/src/1.png", 
        price: 1129, 
        monthlyPayment: true, 
        unit: "шт", 
        amountDescription: "количество камер", 
        description: "Система видеонаблюдения помогает предотвращать преступления, контролировать сотрудников и отслеживать поток посетителей.\n- Хранение записи в облаке до 14 дней\n- Уведомления о движениях и звуках", 
        active: true 
    },
    { 
        id: 2, 
        title: "Виртуальная АТС", 
        imageURL: "/src/2.png", 
        price: 350, 
        monthlyPayment: true, 
        unit: "шт", 
        amountDescription: "количество номеров", 
        description: "Виртуальная АТС даёт возможность обрабатывать до 100 входящих вызовов одновременно, настроить голосовое приветствие и умное распределение вызовов между отделами, сотрудниками или регионами.\n- До 20 входящих звонков одновременно\n- Статистика по принятым и пропущенным звонкам", 
        active: true 
    },
    { 
        id: 3, 
        title: "Прокладка интернет-кабеля", 
        imageURL: "/src/3.png", 
        price: 500, 
        monthlyPayment: false, 
        unit: "метр", 
        amountDescription: "длина кабеля в метрах", 
        description: "Наши специалисты проведут кабель от точки входа в дом до вашего устройства и настроят интернет-соединение, чтобы вы могли пользоваться всеми преимуществами скоростного интернета.\n- Тип подключения FTTB\n- Оптоволоконный материал", 
        active: true 
    },
    { 
        id: 4, 
        title: "Подключение статического IP-адреса", 
        imageURL: "/src/4.png", 
        price: 150, 
        monthlyPayment: true, 
        unit: "шт", 
        amountDescription: "количество IP-адресов", 
        description: "Постоянный IP-адрес с уникальным идентификатором, который определяется глобально во всей сети.\n- Интернет-протокол ipv4", 
        active: true 
    },
    { 
        id: 5, 
        title: "Установка и подключение PLC-адаптера", 
        imageURL: "/src/5.png", 
        price: 2899, 
        monthlyPayment: false, 
        unit: "шт", 
        amountDescription: "количество PLC-адаптеров", 
        description: "PLC-адаптеры – оптимальное решение, которое позволит подключить Домашнее телевидение без прокладки дополнительных проводов и наслаждаться просмотром телеканалов и видеофильмов в цифровом и HD-качестве в любом удобном месте вашей квартиры.\n- Скорость до 900 Мбит/с", 
        active: true 
    },
    { 
        id: 6, 
        title: "Аренда двухдиапазонного роутера", 
        imageURL: "/src/6.png", 
        price: 599, 
        monthlyPayment: true, 
        unit: "шт", 
        amountDescription: "количество роутеров", 
        description: "Роутер максимального уровня. Имеет WAN-порт 2,5Гбит/с и 3 порта 1Гбит/с для ваших устройств. Максимальная скорость Wi-Fi более 2 Гбит/с.\n- Скорость до 2,5Гбит/с\n- Поддержка 2.4 и 5 Ггц", 
        active: true 
    },
];

  return (
    <>
      <Navbar/>
      <Container fluid className="pb-4 d-flex flex-column w-75 mx-auto" >
        <Cart/>
        <div className="d-flex justify-content-center mb-4">
            <Form className="d-flex col-8">
            <Form.Control
                type="search"
                placeholder="Поиск"
                className="me-2 form-control-lg"
                aria-label="Search"
            />
            <Button variant="secondary">Найти</Button>
            </Form>
          </div>
          <Row xs={1} sm={2} lg={3} className="g-4 justify-content-center">
          {cards.map((card, id) => {
            const props: ProviderServiceProps = {
              id: card.id,
              title: card.title,
              description: card.description,
              monthlyPayment: card.monthlyPayment,
              active: card.active,
              price: card.price,
              unit: card.unit,
              amountDescription: card.amountDescription,
              imgUrl: card.imageURL,
            };
            return (
              <Col key={card.id} className="d-flex align-items-stretch" >
                  <ProviderServiceCard key={id} {...props} /> 
              </Col>
            );
          })}          
          </Row>
      </Container>
    </>
  )
}
