import { FC } from "react";
import { Button, Card, Col, Container, FloatingLabel, Form, InputGroup, Row } from "react-bootstrap";
import { Navbar } from "../../components/Navbar";
import unknownImage from "/images/image_placeholder.jpg"

export const ConnectionRequestPage: FC = () => {
  return (
    <>
      <Navbar />
      <Container className="pt-4" style={{ maxWidth: '1000px' }}>
        <h2 className="text-center mb-4">Заявка №1</h2>

        {/* Контактная информация */}
        <Row className="mb-4 justify-content-center">
          <Col md={6} className="mb-3">
            <Form.Floating>
                <Form.Control
                id="organization"
                type="text"
                placeholder="Иванов Иван Иванович"
                defaultValue="Иванов Иван Иванович"
                />
                <label htmlFor="organization">Организация/ФИО</label>
            </Form.Floating>
          </Col>    
          <Col md={6}>
            <Form.Floating>
                <Form.Control
                id="phoneNumber"
                type="text"
                placeholder="+7 (XXX) XXX XX XX"
                defaultValue="+7 (999) 555 85 85"
                />
                <label htmlFor="phoneNumber">Номер для связи</label>
            </Form.Floating>
          </Col>
        </Row>

        {/* Карточки услуг */}
        <div className="mb-4 mx-auto">
          <Card className="mb-3">
            <Card.Body>
              <Row>
                <Col xs={3}>
                  <div style={{ height: '130px' }}>
                    <img
                      src={ unknownImage }
                      alt="Облачное видеонаблюдение"
                      className="rounded-1 img-fluid h-100 w-100 object-fit-cover"
                    />
                  </div>
                </Col>
                <Col xs={9}>
                  <h3 className="mb-4">Облачное видеонаблюдение</h3>
                  <Row className="align-items-center">
                    <Col xs={8}>
                        <InputGroup className="w-75">
                            <InputGroup.Text 
                                className="border-2 border-end-0"
                                id="basic-addon1"
                                style={{ borderColor: "#b3b3b3"}}
                            >
                                количество камер
                            </InputGroup.Text>
                            <Form.Control
                                type="number"
                                min="1"
                                default-value="1"
                                placeholder="1"
                                className="border-2"
                                style={{ borderColor: "#b3b3b3"}}
                            />
                        </InputGroup>
                    </Col>
                    <Col xs={4} className="text-end">
                      <p className="mb-0 fw-bold fs-5">1129 ₽/мес</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Row>
                <Col xs={3}>
                  <div style={{ height: '130px' }}>
                    <img
                      src={ unknownImage }
                      alt="Виртуальная АТС"
                      className="rounded-1 img-fluid h-100 w-100 object-fit-cover"
                    />
                  </div>
                </Col>
                <Col xs={9}>
                  <h3 className="mb-4">Виртуальная АТС</h3>
                  <Row className="align-items-center">
                    <Col xs={8}>
                        <InputGroup className="w-75">
                            <InputGroup.Text 
                                className="border-2 border-end-0"
                                id="basic-addon1"
                                style={{ borderColor: "#b3b3b3"}}
                            >
                                количество номеров
                            </InputGroup.Text>
                            <Form.Control
                                type="number"
                                min="1"
                                default-value="1"
                                placeholder="1"
                                className="border-2"
                                style={{ borderColor: "#b3b3b3"}}
                            />
                        </InputGroup>
                    </Col>
                    <Col xs={4} className="text-end">
                      <p className="mb-0 fw-bold fs-5">350 ₽/мес</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* Итого */}
          <Card className="mb-4 border-2" style={{ borderColor: "#474747" }}>
            <Card.Body>
              <Row className="align-items-center">
                <Col>
                  <h5 className="mb-0">Итого:</h5>
                </Col>
                <Col className="text-end">
                  <p className="mb-0 fw-bold fs-5">1479 ₽</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* Кнопка удаления */}
          <div>
            <Button className="btn-lg rounded-2" 
                style={{ backgroundColor: "#474747", borderColor: "#474747", transition: "transform 550ms"}}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
                Удалить заявку
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};