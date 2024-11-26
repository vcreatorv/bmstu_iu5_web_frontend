import { FC, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Button, Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ProviderServiceList as PROVIDER_SERVICE_LIST_MOCK} from "../../core/mock/porivderServicesList";
import { Breadcrumbs } from "../../components/BreadCrumbs";
import { api } from "../../core/api";
import unknownImage from "/images/image_placeholder.jpg"
import { ProviderDuty } from "../../core/api/API";
import { useProviderServicePage } from "./useProviderServicePage";


export const ProviderServicePage: FC = () => {
    const { renderPrice, providerService, handleAddToConnectionRequest } = useProviderServicePage();

    if (!providerService) {
        return (
            <>
                <Navbar/>
            </>
        );
    }
    
    return (
      <>
      <Navbar/>
      <Container className="mt-4 px-3">
        <Breadcrumbs
          middleItems={[
            {
              name: "Каталог",
              link: "/provider-duties"
            }
          ]}
          endItem={providerService.title}
        />
      </Container>
      
      <Container className="mt-5 pb-4 d-flex flex-column align-items-center mx-auto">
        <Card className="col-12 col-md-8 col-lg-5 rounded-4 shadow-sm" style={{ overflow: 'hidden' }}>
          <Card.Img 
            variant="top" 
            src={providerService.imgUrl ? (providerService.imgUrl) : (unknownImage)}
            style={{ 
              width: '100%', 
              height: '300px',
              objectFit: 'cover'
            }}   
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="h4 mb-3">{providerService.title}</Card.Title>
            <Card.Text 
              className="fw-medium mb-4" 
              dangerouslySetInnerHTML={{ __html: String(providerService.description) }}
            />
            <div className="mt-auto d-flex flex-row gap-3 align-items-center">
              <Button 
                variant="warning" 
                className="w-100 w-sm-50 btn-lg fw-medium text-dark"
                style={{ 
                  transition: "transform 550ms", 
                  backgroundColor: "#fed305", 
                  borderColor: "#fed305" 
                }}
                onClick={handleAddToConnectionRequest}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
              >
                Добавить
              </Button>
              <Card.Text className="w-100 w-sm-50 fw-medium fs-4 text-center text-dark mb-0">
                {renderPrice()}
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
    );
  };