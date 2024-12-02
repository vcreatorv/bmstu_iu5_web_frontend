import { Navbar } from "../../components/Navbar";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { ProviderServiceCardInConnectionRequest } from "../../components/ProviderServiceCardInConnectionRequest";
import { useConnectionRequestPage } from "./useConnectionRequestPage";
import { Breadcrumbs } from "../../components/BreadCrumbs";


export const ConnectionRequestPage: React.FC = () => {
  const {
    providerServicesList,
    totalPrice,
    consumer,
    phoneNumber,
    notification,
    connectionRequestId,
    handleProviderServiceAmountChange,
    handleDelete,
    handleFormConnectionRequest,
    handleClearConnectionRequest,
    handleConsumerChange,
    handlePhoneNumberChange
  } = useConnectionRequestPage();

  return (
    <>
      <Navbar />
      <Container fluid className="pt-4">
        <Container className="mt-4" style={{ maxWidth: "1200px" }}>
          <Breadcrumbs
              middleItems={[
                  {
                      name: "Каталог",
                      link: "/provider-duties"
                  }
              ]}
              endItem={"Заявка на подключение интернет услуг № " + connectionRequestId}
          />
        </Container>
        
        <div className="position-relative mt-5">
          <div className="mx-auto" style={{ width: '950px' }}>
            <h1 className="text-center mb-4">Текущая заявка</h1>

            <Form onSubmit={handleFormConnectionRequest}>
              <Row className="g-2 mb-4">
                <Col md={6}>
                  <Form.Floating>
                    <Form.Control
                      id="consumer"
                      type="text"
                      className="border-2"
                      value={consumer}
                      onChange={(e) => handleConsumerChange(e.target.value)}
                      required
                    />
                    <label htmlFor="consumer">Организация/ФИО</label>
                  </Form.Floating>
                </Col>
                <Col md={6}>
                  <Form.Floating>
                    <Form.Control
                      id="phoneNumber"
                      type="text"
                      className="border-2"
                      value={phoneNumber}
                      onChange={(e) => handlePhoneNumberChange(e.target.value)}
                      required
                    />
                    <label htmlFor="phoneNumber">Номер для связи</label>
                  </Form.Floating>
                </Col>
              </Row>

              <div className="mb-4">
                {providerServicesList.map((service) => (
                  <ProviderServiceCardInConnectionRequest
                    key={service.id}
                    providerService={service}
                    onAmountChange={handleProviderServiceAmountChange}
                    onDelete={handleDelete}
                  />
                ))}

                <Card className="mb-4 border-2" style={{ borderColor: "#474747" }}>
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col>
                        <h5 className="mb-0">Итого:</h5>
                      </Col>
                      <Col className="text-end">
                        <p className="mb-0 fw-bold fs-5">{totalPrice} ₽</p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>

                <div className="d-flex justify-content-between gap-2">
                  <Button
                    className="btn-lg rounded-2"
                    style={{
                      backgroundColor: "#474747",
                      borderColor: "#474747",
                      transition: "transform 550ms"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                    onClick={handleClearConnectionRequest}
                  >
                    Очистить заявку
                  </Button>
                  <Button
                    type="submit"
                    className="btn-lg rounded-2 text-dark fw-medium"
                    style={{
                      backgroundColor: "#FED305",
                      borderColor: "#FED305",
                      transition: "transform 550ms"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                  >
                    Оформить подключение
                  </Button>
                </div>
              </div>
            </Form>
            {notification && (
              <div className="alert alert-danger mt-3">
                {notification}
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};
