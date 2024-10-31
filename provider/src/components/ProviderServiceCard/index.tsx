import { FC } from "react";
import { ProviderServiceProps } from "./typing";
import { Button, Card } from "react-bootstrap";


export const ProviderServiceCard: FC<ProviderServiceProps>= (providerService: ProviderServiceProps) => {
    return (
        <Card className="w-100 rounded-4 shadow-sm">
            <Card.Img variant="top" src={"/src/" + providerService.id + ".png"} style={{ height: '300px', objectFit: 'contain' }} />
            <Card.Body className="d-flex flex-column">
            <Card.Title>{providerService.title}</Card.Title>
            <Card.Text className="fw-medium">${providerService.price} в месяц</Card.Text>
            <div className="mt-auto d-flex justify-content-between">
                <Button variant="warning" className="w-100 btn-lg me-2"
                style={{ transition: "transform 550ms" }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >Купить</Button>
                
                <Button variant="secondary" className="w-100 btn-lg"
                style={{ transition: "transform 550ms" }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >Подробнее</Button>
            </div>
            </Card.Body>
        </Card>
    );

}