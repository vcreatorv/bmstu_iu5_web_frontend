import { FC, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Button, Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IProviderService } from "../../core/api/service/typing";
import { getProviderServiceById } from "../../core/api/service";
import { ProviderServiceList as PROVIDER_SERVICE_LIST_MOCK} from "../../core/mock/porivderServicesList";
import { Breadcrumbs } from "../../components/BreadCrumbs";

export const ProviderServicePage: FC = () => {
    const {id} = useParams();
    const [providerServiceData, setProviderServiceData] = useState<IProviderService | null>(null);
    
    useEffect(() => {
        if (id) {
            getProviderServiceById(id)
                .then((data) => {
                    setProviderServiceData(data);
                })
                .catch(() => {
                    const providerService = PROVIDER_SERVICE_LIST_MOCK.find(
                        (providerService) => providerService.id === Number(id)
                    );
                    setProviderServiceData(providerService || null);
                });
        }
    }, [id]);

    if (!providerServiceData) {
        return (
            <>
                <Navbar/>
            </>
        );
    }
    
    const renderPrice = () => {
        if (providerServiceData.monthlyPayment) {
          return `от ${providerServiceData.price} ₽/мес`;
        } else {
          return `от ${providerServiceData.price} ₽ за ${providerServiceData.unit}`;
        }
    };
    
    return (
        <>
            <Navbar/>
            <Container className="mt-4 ms-3">
                <Breadcrumbs
                        middleItems={[
                            {
                                name: "Каталог",
                                link: "/provider-duties"
                            }
                        ]}
                        endItem={providerServiceData.title}
                />
            </Container>
            
            <Container fluid className="mt-5 pb-4 d-flex flex-column align-items-center mx-auto">
                <Card className="col-5 rounded-4 shadow-sm"  style={{ overflow: 'hidden' }}>
                    <Card.Img variant="top" src={providerServiceData.imgUrl} 
                        style={{ 
                            width: '100%', 
                            height: '400px', 
                            objectFit: 'cover'
                        }}   
                    />
                    <Card.Body className="d-flex flex-column">
                        <Card.Title>{providerServiceData.title}</Card.Title>
                        <Card.Text className="fw-medium mb-4" dangerouslySetInnerHTML={{ __html: providerServiceData.description }}></Card.Text>
                        <div className="mt-auto d-flex justify-content-between">
                            <Button variant="warning" className=" w-50 btn-lg me-2"
                                style={{ transition: "transform 550ms", backgroundColor: "#fed305", borderColor: "#fed305" }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                            >Купить</Button>
                            <Card.Text className="w-50 fw-medium fs-4 text-center align-self-center">{renderPrice()}</Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
  };