import { FC } from "react";
import { Navbar } from "../../components/Navbar";
import { Button, Card, Container } from "react-bootstrap";

export const ProviderServicePage: FC = () => {
    const provider_service = { 
        id: 1, 
        title: "Облачное видеонаблюдение", 
        imageURL: "/src/1.png", 
        price: 1129, 
        monthlyPayment: true, 
        unit: "шт", 
        amountDescription: "количество камер", 
        description: "Система видеонаблюдения помогает предотвращать преступления, контролировать сотрудников и отслеживать поток посетителей.\n- Хранение записи в облаке до 14 дней\n- Уведомления о движениях и звуках", 
        active: true 
    };
    
    return (
        <>
            <Navbar/>
            <Container fluid className="mt-5 pb-4 d-flex flex-column align-items-center mx-auto" >
                <Card className="col-5 rounded-4 shadow-sm">
                    <Card.Img variant="top" src={"/src/" + provider_service.id + ".png"} style={{ height: '300px', objectFit: 'contain' }} />
                    <Card.Body className="d-flex flex-column">
                        <Card.Title>{provider_service.title}</Card.Title>
                        <Card.Text className="fw-medium">{provider_service.description}</Card.Text>
                        <div className="mt-auto d-flex justify-content-between">
                            <Button variant="warning" className=" w-50 btn-lg me-2"
                            style={{ transition: "transform 550ms" }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                            >Купить</Button>
                            <Card.Text className="w-50 fw-medium fs-4 text-center align-self-center">{provider_service.price}₽ в месяц</Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
  };