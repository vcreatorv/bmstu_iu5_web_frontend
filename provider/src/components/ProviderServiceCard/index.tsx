import { FC } from "react";
import { IProviderServiceProps } from "./typing";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import unknownImage from "/images/image_placeholder.jpg"


export const ProviderServiceCard: FC<IProviderServiceProps>= (providerService: IProviderServiceProps) => {
    
    const renderPrice = () => {
        if (providerService.monthlyPayment) {
          return `от ${providerService.price} ₽/мес`;
        } else {
          return `от ${providerService.price} ₽ за ${providerService.unit}`;
        }
    };
      
    return (
        <Card className="w-100 rounded-4 shadow-sm" style={{ overflow: 'hidden' }}>
            <Card.Img variant="top" src={providerService.imgUrl ? (providerService.imgUrl) : (unknownImage)}
            style={{ 
                width: '100%', 
                height: '300px', 
                objectFit: 'cover'
            }}   
            
            />
            <Card.Body className="d-flex flex-column">
            <Card.Title>{providerService.title}</Card.Title>
            <Card.Text className="fw-medium fs-5">{renderPrice()}</Card.Text>
            <div className="mt-auto d-flex justify-content-between">
                <Button variant="warning" className="w-100 btn-lg me-2"
                style={{ transition: "transform 550ms", backgroundColor: "#fed305", borderColor: "#fed305", fontWeight: "500", color: "#373737"}}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >Добавить</Button>
                
                <Link 
                className="btn btn-secondary w-100 btn-lg"
                style={{ transition: "transform 550ms", backgroundColor: "#adadad", borderColor: "#adadad", fontWeight: "500", color: "#373737"}}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                to={'/provider-duties/' + providerService.id}
                >
                Подробнее
                </Link>
            </div>
            </Card.Body>
        </Card>
    );
}