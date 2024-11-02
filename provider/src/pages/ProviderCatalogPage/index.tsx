import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { Navbar } from '../../components/Navbar'
import { Cart } from '../../components/Cart'
import { ProviderServiceCard } from '../../components/ProviderServiceCard';
import { useProviderCatalogPage } from './useProviderCatalogPage';
import { IProviderServiceProps } from '../../components/ProviderServiceCard/typing';
import { FC } from 'react';

export const ProviderCatalogPage: FC = () => {
//   const cards = [
//     { 
//         id: 1, 
//         title: "Облачное видеонаблюдение", 
//         imageURL: "/src/1.png", 
//         price: 1129, 
//         monthlyPayment: true, 
//         unit: "шт", 
//         amountDescription: "количество камер", 
//         description: "Система видеонаблюдения помогает предотвращать преступления, контролировать сотрудников и отслеживать поток посетителей.\n- Хранение записи в облаке до 14 дней\n- Уведомления о движениях и звуках", 
//         active: true 
//     },
//     { 
//         id: 2, 
//         title: "Виртуальная АТС", 
//         imageURL: "/src/2.png", 
//         price: 350, 
//         monthlyPayment: true, 
//         unit: "шт", 
//         amountDescription: "количество номеров", 
//         description: "Виртуальная АТС даёт возможность обрабатывать до 100 входящих вызовов одновременно, настроить голосовое приветствие и умное распределение вызовов между отделами, сотрудниками или регионами.\n- До 20 входящих звонков одновременно\n- Статистика по принятым и пропущенным звонкам", 
//         active: true 
//     },
//     { 
//         id: 3, 
//         title: "Прокладка интернет-кабеля", 
//         imageURL: "/src/3.png", 
//         price: 500, 
//         monthlyPayment: false, 
//         unit: "метр", 
//         amountDescription: "длина кабеля в метрах", 
//         description: "Наши специалисты проведут кабель от точки входа в дом до вашего устройства и настроят интернет-соединение, чтобы вы могли пользоваться всеми преимуществами скоростного интернета.\n- Тип подключения FTTB\n- Оптоволоконный материал", 
//         active: true 
//     },
//     { 
//         id: 4, 
//         title: "Подключение статического IP-адреса", 
//         imageURL: "/src/4.png", 
//         price: 150, 
//         monthlyPayment: true, 
//         unit: "шт", 
//         amountDescription: "количество IP-адресов", 
//         description: "Постоянный IP-адрес с уникальным идентификатором, который определяется глобально во всей сети.\n- Интернет-протокол ipv4", 
//         active: true 
//     },
//     { 
//         id: 5, 
//         title: "Установка и подключение PLC-адаптера", 
//         imageURL: "/src/5.png", 
//         price: 2899, 
//         monthlyPayment: false, 
//         unit: "шт", 
//         amountDescription: "количество PLC-адаптеров", 
//         description: "PLC-адаптеры – оптимальное решение, которое позволит подключить Домашнее телевидение без прокладки дополнительных проводов и наслаждаться просмотром телеканалов и видеофильмов в цифровом и HD-качестве в любом удобном месте вашей квартиры.\n- Скорость до 900 Мбит/с", 
//         active: true 
//     },
//     { 
//         id: 6, 
//         title: "Аренда двухдиапазонного роутера", 
//         imageURL: "/src/6.png", 
//         price: 599, 
//         monthlyPayment: true, 
//         unit: "шт", 
//         amountDescription: "количество роутеров", 
//         description: "Роутер максимального уровня. Имеет WAN-порт 2,5Гбит/с и 3 порта 1Гбит/с для ваших устройств. Максимальная скорость Wi-Fi более 2 Гбит/с.\n- Скорость до 2,5Гбит/с\n- Поддержка 2.4 и 5 Ггц", 
//         active: true 
//     },
// ];

  const {
    providerServiceList,
    connectionRequestId,
    itemsInCart,
    handleSearchProviderServiceClick,
    handleSearchTitleChange,
  } = useProviderCatalogPage();

  return (
    <>
      <Navbar/>
      {/* <Container fluid className="pb-4 d-flex flex-column w-75 mx-auto"> */}
      <Container className="pb-4 d-flex flex-column mx-auto" style={{maxWidth:'1200px;'}}>
        <Cart connectionRequestId={connectionRequestId ? connectionRequestId : 0} itemsInCart={itemsInCart} />
        <div className="d-flex justify-content-center mb-4">
            <Form className="d-flex col-8">
            <Form.Control
                type="search"
                placeholder="Поиск"
                onChange={handleSearchTitleChange}
                className="me-2 form-control-lg"
                aria-label="Search"
            />
            <Button variant="secondary" onClick={handleSearchProviderServiceClick} >Найти</Button>
            </Form>
          </div>
          <Row xs={1} sm={1} lg={3} className="g-4 justify-content-start">
            {providerServiceList.map((providerService, index) => {
              const props: IProviderServiceProps = {
                id: providerService.id,
                title: providerService.title,
                monthlyPayment: providerService.monthlyPayment,
                price: providerService.price,
                unit: providerService.unit,
                imgUrl: providerService.imgUrl,
              };
              return (
                <Col className="d-flex align-items-stretch" >
                    <ProviderServiceCard key={index} {...props} /> 
                </Col>
              );
            })}          
          </Row>
      </Container>
    </>
  )
}
