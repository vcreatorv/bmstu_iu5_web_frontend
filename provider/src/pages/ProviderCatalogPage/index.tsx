import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import { Navbar } from '../../components/Navbar';
import { Breadcrumbs } from '../../components/BreadCrumbs';
import { Cart } from '../../components/Cart';
import { ProviderServiceCard } from '../../components/ProviderServiceCard';
import { useProviderCatalogPage } from './useProviderCatalogPage';
import { IProviderServiceProps } from '../../components/ProviderServiceCard/typing';
import { FC } from 'react';

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
  } = useProviderCatalogPage();

  return (
    <>
    <Navbar/>
    <Container className="pb-4 d-flex flex-column mx-auto" style={{maxWidth:'1200px'}}>
      <Container className="d-flex flex-row m-0 mt-5 mb-5 p-0" style={{maxWidth:'1200px'}}>
        <Breadcrumbs endItem="Каталог"/>
        <div className='ms-auto'>
        <Cart connectionRequestId={connectionRequestId ? connectionRequestId : 0} itemsInCart={itemsInCart} />
        </div>
        
      </Container>
      <div className="d-flex flex-column flex-md-row gap-3 mb-4 justify-content-center">
          <div className=" d-flex flex-row col-12 col-md-8 gap-2">
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
      <Row xs={1} sm={2} lg={3} className="g-4 justify-content-start">
        {providerServiceList.map((providerService) => {
          const props: IProviderServiceProps = {
            id: providerService.id,
            title: providerService.title,
            monthlyPayment: providerService.monthlyPayment,
            price: providerService.price,
            unit: providerService.unit,
            imgUrl: providerService.imgUrl,
          };
          return (
            <Col key={providerService.id} className="d-flex align-items-stretch">
              <ProviderServiceCard {...props} /> 
            </Col>
          );
        })}          
      </Row>
    </Container>
  </>
  )
}