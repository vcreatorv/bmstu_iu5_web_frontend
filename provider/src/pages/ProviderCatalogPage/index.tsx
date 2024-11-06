import { Container, Row, Col, Button, Form, Dropdown } from 'react-bootstrap'
import { Navbar } from '../../components/Navbar'
import { Cart } from '../../components/Cart'
import { ProviderServiceCard } from '../../components/ProviderServiceCard';
import { useProviderCatalogPage } from './useProviderCatalogPage';
import { IProviderServiceProps } from '../../components/ProviderServiceCard/typing';
import { FC } from 'react';
import { Breadcrumbs } from '../../components/BreadCrumbs';

// export const ProviderCatalogPage: FC = () => {
//   const {
//     providerServiceList,
//     connectionRequestId,
//     itemsInCart,
//     handleSearchProviderServiceClick,
//     handleSearchTitleChange,
//   } = useProviderCatalogPage();

//   return (
//     <>
//       <Navbar/>
//       {/* <Container fluid className="pb-4 d-flex flex-column w-75 mx-auto"> */}
      
//       <Container className="pb-4 d-flex flex-column mx-auto" style={{maxWidth:'1200px;'}}>
//         <Container className="d-flex flex-row justify-content-between mb-5 mt-5">
//           <Breadcrumbs endItem="Каталог"/>
//           <Cart connectionRequestId={connectionRequestId ? connectionRequestId : 0} itemsInCart={itemsInCart} />
//         </Container>
//         <div className="d-flex flex-row gap-3 mb-4 col-8 align-self-center">
//             <div className="flex-grow-1">
//                 <input
//                     type="text"
//                     className="input form-control"
//                     onChange={handleSearchTitleChange}
//                     placeholder="Поиск"
//                     aria-label="Поиск"
//                 />

//             </div>

//             <div>
//                 <Button
//                     onClick={handleSearchProviderServiceClick}
//                     className="btn btn-secondary ml-3 mr-3"
//                 >
//                     Поиск
//                 </Button>
//             </div>
//             <Dropdown>
//               <Dropdown.Toggle variant="success" id="dropdown-basic">
//                 Тарифы
//               </Dropdown.Toggle>

//               <Dropdown.Menu>
//                 <Dropdown.Item href="#/action-1">Разовый</Dropdown.Item>
//                 <Dropdown.Item href="#/action-2">Ежемесячный</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//         </div>
//           <Row xs={1} sm={1} lg={3} className="g-4 justify-content-start">
//             {providerServiceList.map((providerService) => {
//               const props: IProviderServiceProps = {
//                 id: providerService.id,
//                 title: providerService.title,
//                 monthlyPayment: providerService.monthlyPayment,
//                 price: providerService.price,
//                 unit: providerService.unit,
//                 imgUrl: providerService.imgUrl,
//               };
//               return (
//                 <Col className="d-flex align-items-stretch" >
//                     <ProviderServiceCard key={providerService.id} {...props} /> 
//                 </Col>
//               );
//             })}          
//           </Row>
//       </Container>
//     </>
//   )
// }

export const ProviderCatalogPage: FC = () => {
  const {
    providerServiceList,
    connectionRequestId,
    itemsInCart,
    handleSearchProviderServiceClick,
    handleSearchTitleChange,
    handleTariffTypeChange,
    tariffType,
  } = useProviderCatalogPage();

  return (
    <>
      <Navbar/>
      <Container className="pb-4 d-flex flex-column mx-auto" style={{maxWidth:'1200px;'}}>
        <Container className="d-flex flex-row justify-content-between mb-5 mt-5">
          <Breadcrumbs endItem="Каталог"/>
          <Cart connectionRequestId={connectionRequestId ? connectionRequestId : 0} itemsInCart={itemsInCart} />
        </Container>
        <div className="d-flex flex-row gap-3 mb-4 col-8 align-self-center">
            <div className="flex-grow-1">
                <input
                    type="text"
                    className="input form-control"
                    onChange={handleSearchTitleChange}
                    placeholder="Поиск"
                    aria-label="Поиск"
                />
            </div>
            <div>
                <Button
                    onClick={handleSearchProviderServiceClick}
                    className="btn btn-secondary ml-3 mr-3"
                >
                    Поиск
                </Button>
            </div>
            <Dropdown onSelect={handleTariffTypeChange}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {tariffType === null ? "Тип оплаты" : tariffType ? "Ежемесячный платеж" : "Разовый платеж"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="all">Все типы</Dropdown.Item>
                <Dropdown.Item eventKey="false">Разовый платеж</Dropdown.Item>
                <Dropdown.Item eventKey="true">Ежемесячный платеж</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
        <Row xs={1} sm={1} lg={3} className="g-4 justify-content-start">
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