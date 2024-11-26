import { FC, useEffect, useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { ProviderDutyInRequestDTO } from "../../core/api/API";
import unknownImage from "/images/image_placeholder.jpg"
import binImage from "/images/bin.png"
import { ChangeEvent } from "../../App.typing";

interface ProviderServiceCardInConnectionRequestProps {
    providerService: ProviderDutyInRequestDTO;
    onAmountChange: (id: number, amount: number) => void;
    onDelete: (id: number) => void;
}
  
export const ProviderServiceCardInConnectionRequest: FC<ProviderServiceCardInConnectionRequestProps> = ({ providerService, onAmountChange, onDelete }) => {
    const [amount, setAmount] = useState(providerService.amount || 1);

    useEffect(() => {
        onAmountChange(providerService.id!, amount);
    }, [amount]);

    const handleAmountChange = (e: ChangeEvent) => {
        const newAmount = parseInt(e.target.value);
        if (newAmount > 0) {
            setAmount(newAmount);
        }
    };

    return (
        <div className="position-relative mb-3">
        <Card className="border-2" style={{ borderColor: "#DEE2E6"}}>
            <Card.Body>
            <Row>
                <Col xs={3}>
                <div style={{ height: '130px' }}>
                    <img
                    src={providerService.imgUrl || unknownImage}
                    alt={providerService.title}
                    className="rounded-1 img-fluid h-100 w-100 object-fit-cover"
                    />
                </div>
                </Col>
                <Col xs={9}>
                <h3 className="mb-4">{providerService.title}</h3>
                <Row className="align-items-center">
                    <Col xs={8}>
                    <InputGroup className="w-75">
                        <InputGroup.Text 
                        className="border-2 border-end-0"
                        style={{ borderColor: "#DEE2E6"}}
                        >
                        {providerService.unit ? `количество ${providerService.unit}` : 'количество'}
                        </InputGroup.Text>
                        <Form.Control
                        type="number"
                        min="1"
                        value={amount}
                        onChange={handleAmountChange}
                        className="border-2"
                        style={{ borderColor: "#DEE2E6"}}
                        />
                    </InputGroup>
                    </Col>
                    <Col xs={4} className="text-end">
                    <p className="mb-0 fw-bold fs-5">
                        {(providerService.price || 0) * amount} ₽{providerService.monthlyPayment ? '/мес' : ''}
                    </p>
                    </Col>
                </Row>
                </Col>
            </Row>
            </Card.Body>
        </Card>
        <Button 
            variant="link"
            className="position-absolute top-50 translate-middle-y"
            style={{ right: '-70px' }}
            onClick={() => onDelete(providerService.id!)}
        >
            <img 
            src={binImage}
            alt="Удалить" 
            style={{ width: "50px" }}
            />
        </Button>
        </div>
    );
};

