import { FC } from "react";
import { IConnectionRequestsTableProps } from "./typing";
import { Card, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ConnectionRequestsTable: FC<IConnectionRequestsTableProps> = (props: IConnectionRequestsTableProps) => {
    return (
    <div>
        {/* <Card className="mb-2">
            <Card.Body className="py-2 px-3">
                <Row className="d-flex align-items-center" style={{ fontSize: "14px" }}>
                    <Col xs={12} sm={1} className="text-center">
                        <Card.Text><strong>№</strong></Card.Text>
                    </Col>
                    <Col xs={12} sm={1} className="text-center">
                        <Card.Text><strong>Статус</strong></Card.Text>
                    </Col>
                    <Col xs={12} sm={2} className="text-center">
                        <Card.Text><strong>Дата создания</strong></Card.Text>
                    </Col>
                    <Col xs={12} sm={2} className="text-center">
                        <Card.Text><strong>Дата оформления</strong></Card.Text>
                    </Col>
                    <Col xs={12} sm={2} className="text-center">
                        <Card.Text><strong>Дата завершения</strong></Card.Text>
                    </Col>
                    <Col xs={12} sm={2} className="text-center">
                        <Card.Text><strong>Стоимость</strong></Card.Text>
                    </Col>
                    <Col xs={12} sm={2} className="text-center">
                        <Card.Text><strong>Заказчик</strong></Card.Text>
                    </Col>
                    <Col xs={12} sm={3} className="text-center">
                        <Card.Text><strong>Контакт</strong></Card.Text>
                    </Col>
                </Row>
            </Card.Body>
            </Card> */}
            <Card className="mb-2">
                <Card.Body className="py-2 px-3">
                    <Row className="d-flex align-items-center" style={{ fontSize: "14px" }}>
                        <Col xs={12} sm={1} className="text-center no-wrap">
                            <Card.Text><strong>№</strong></Card.Text>
                        </Col>
                        <Col xs={12} sm={1} className="text-center no-wrap">
                            <Card.Text><strong>Статус</strong></Card.Text>
                        </Col>
                        <Col xs={12} sm={2} className="text-center no-wrap">
                            <Card.Text><strong>Создано</strong></Card.Text>
                        </Col>
                        <Col xs={12} sm={2} className="text-center no-wrap">
                            <Card.Text><strong>Оформление</strong></Card.Text>
                        </Col>
                        <Col xs={12} sm={2} className="text-center no-wrap">
                            <Card.Text><strong>Завершение</strong></Card.Text>
                        </Col>
                        <Col xs={12} sm={2} className="text-center no-wrap">
                            <Card.Text><strong>Стоимость</strong></Card.Text>
                        </Col>
                        <Col xs={12} sm={2} className="text-center no-wrap">
                            <Card.Text><strong>Заказчик</strong></Card.Text>
                        </Col>
                        {/* <Col xs={12} sm={2} className="text-center no-wrap">
                            <Card.Text><strong>Контакт</strong></Card.Text>
                        </Col> */}
                    </Row>
                </Card.Body>
            </Card>

            {props.rows.map((row) => (
                <Card key={row.number} className="mb-2">
                    <Card.Body className="py-2 px-3">
                        <Row className="d-flex align-items-center" style={{ fontSize: "14px" }}>
                            <Col xs={12} sm={1} className="text-center">
                                <Card.Text>
                                    <Link to={"/connection-requests/" + row.number} className="text-black">
                                        {row.number}
                                    </Link>
                                </Card.Text>
                            </Col>
                            <Col xs={12} sm={1} className="text-center">
                                <Card.Text>{row.status}</Card.Text>
                            </Col>
                            <Col xs={12} sm={2} className="text-center">
                                <Card.Text>{row.creationDate}</Card.Text>
                            </Col>
                            <Col xs={12} sm={2} className="text-center">
                                <Card.Text>{row.formationDate || "---"}</Card.Text>
                            </Col>
                            <Col xs={12} sm={2} className="text-center">
                                <Card.Text>{row.completionDate || "---"}</Card.Text>
                            </Col>
                            <Col xs={12} sm={2} className="text-center">
                                <Card.Text>{row.totalPrice}</Card.Text>
                            </Col>
                            <Col xs={12} sm={2} className="text-center">
                                <Card.Text>{row.consumer}</Card.Text>
                            </Col>
                            {/* <Col xs={12} sm={3} className="text-center">
                                <Card.Text>{row.phoneNumber}</Card.Text>
                            </Col> */}
                        </Row>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};