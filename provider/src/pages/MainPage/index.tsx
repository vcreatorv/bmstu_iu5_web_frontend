import { FC } from "react";
import { Navbar } from "../../components/Navbar";
import { Container } from "react-bootstrap";

export const MainPage: FC = () => {
    return (
        <>
        <Navbar />
        <Container className="mt-5 px-4">
            <div className="intro">
                <h1 className="text-center mb-4">
                    Интернет и технологии для вашего дома и бизнеса
                </h1>
                <div className="mx-auto fs-5" style={{ 
                    maxWidth: '900px',
                    textAlign: 'justify',
                    hyphens: 'auto',
                    lineHeight: '1.6'
                }}>
                    <p className="mb-4">
                        Наши услуги созданы для комфорта и безопасности: быстрый интернет, статические IP-адреса, система видеонаблюдения и многое другое. 
                        Доверьтесь нашим экспертам, и мы проведём кабель, подключим необходимое оборудование и настроим все технологии под ваши потребности.
                    </p>
                    <p className="mb-4">
                        Будь то подключение нового офиса или улучшение домашней сети, мы обеспечим надёжное и стабильное соединение, чтобы вы могли 
                        сосредоточиться на важных делах, а мы позаботимся о вашем цифровом комфорте.
                    </p>
                </div>
            </div>
        </Container>
        </>
    );
  };