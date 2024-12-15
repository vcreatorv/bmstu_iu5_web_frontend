import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import { Navbar } from '../../components/Navbar';
import { Breadcrumbs } from '../../components/BreadCrumbs';
import { CartIcon } from '../../components/CartIcon';
import { ProviderServiceCard } from '../../components/ProviderServiceCardInCatalog';
import { useProviderCatalogPage } from './useProviderCatalogPage';
import { FC } from 'react';
import { ProviderDuty } from '../../core/api/API';
import {BeatLoader} from "react-spinners"

export const ProviderCatalogPage: FC = () => {
  const {
    providerServiceList,
    connectionRequestId,
    itemsInCart,
    handleSearchProviderServiceClick,
    handleSearchTitleChange,
    handleTariffTypeChange,
    searchTitle,
    tariffType,
    isActive,
  } = useProviderCatalogPage();

  return (
    <>
      <Navbar/>
      <Container className="pb-4 d-flex flex-column mx-auto" style={{maxWidth:'1200px'}}>
        <Container className="d-flex flex-row m-0 mt-5 mb-5 p-0" style={{maxWidth:'1200px'}}>
          <Breadcrumbs endItem="Интернет услуги провайдера"/>
          <div className='ms-auto'>
            <CartIcon connectionRequestId={connectionRequestId ? connectionRequestId : 0} itemsInCart={itemsInCart} />
          </div>
        </Container>
        <div className="d-flex flex-column flex-md-row gap-3 mb-4 justify-content-center">
          <div className="d-flex flex-row col-12 col-md-8 gap-2">
            <input
              type="text"
              className="input form-control"
              onChange={handleSearchTitleChange}
              placeholder="Поиск"
              aria-label="Поиск"
              value={searchTitle}
            />
            <Button
              onClick={handleSearchProviderServiceClick}
              className="btn btn-secondary ml-3 mr-3"
            >
              Поиск
            </Button>  
          </div>
          <div className="col-12 col-md-auto">
            <Dropdown onSelect={handleTariffTypeChange} className="w-100">
              <Dropdown.Toggle variant="success" id="dropdown-basic" className="w-100">
                {tariffType === null ? "Тип оплаты" : tariffType ? "Ежемесячный платеж" : "Разовый платеж"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="all">Все типы</Dropdown.Item>
                <Dropdown.Item eventKey="false">Разовый платеж</Dropdown.Item>
                <Dropdown.Item eventKey="true">Ежемесячный платеж</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        { isActive? 
        <>
          <Row xs={1} sm={2} lg={3} className="g-4 justify-content-start">
            {providerServiceList.map((providerService: ProviderDuty) => (
              <Col key={providerService.id} className="d-flex align-items-stretch">
                <ProviderServiceCard {...providerService} />
              </Col>
            ))}          
          </Row>
        </>
        
        : 
        <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
          <BeatLoader />
        </div>
        } 
      </Container>
    </>
  )

}