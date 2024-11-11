import { FC } from "react";
import { Navbar } from "../../components/Navbar";
import { Container } from "react-bootstrap";

export const MainPage: FC = () => {
    return (
        <>
        <Navbar />
        <Container className="w-100 mt-5">
            <Container className="intro text-center">
                <h1>Интернет и технологии для вашего дома и бизнеса</h1>
                <Container className="w-75 fs-5 mt-3">
                    <p>
                        Наши услуги созданы для комфорта и безопасности: быстрый интернет, статические IP-адреса, система видеонаблюдения и многое другое. 
                        Доверьтесь нашим экспертам, и мы проведём кабель, подключим необходимое оборудование и настроим все технологии под ваши потребности.
                    </p>
                    <p>
                        Будь то подключение нового офиса или улучшение домашней сети, мы обеспечим надёжное и стабильное соединение, чтобы вы могли 
                        сосредоточиться на важных делах, а мы позаботимся о вашем цифровом комфорте.
                    </p>
                </Container>
            </Container>
        </Container>
        </>
    );
  };