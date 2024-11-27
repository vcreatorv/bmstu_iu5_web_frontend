import { Container } from "react-bootstrap";
import { ICartProps } from "./typing";
import { FC } from "react";
import cartImage from "/images/bee.png"
import { Link } from "react-router-dom";
import "./CartIcon.css"

export const CartIcon: FC<ICartProps> = (cartData: ICartProps) => {
  const isDisabled = cartData.connectionRequestId === 0;
  
  return (
    <Container className="m-0 border border-2 shadow-sm rounded p-2 align-self-end"
      style={{ width: "150px", height: "95px", transition: "transform 550ms", backgroundColor: "#ffffff"}}
      onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
    >
      <Link 
        to={`/connection-request/${cartData.connectionRequestId}/`} 
        // className={cartData.connectionRequestId != 0 
        //   ? "d-flex flex-column align-items-center text-dark text-decoration-none fw-medium" 
        //   : "d-flex flex-column align-items-center text-dark text-decoration-none fw-medium disable" }
        className={`d-flex flex-column align-items-center text-dark text-decoration-none fw-medium ${isDisabled ? 'disabled-link' : ''}`}
      >
        <img 
          src={ cartImage }
          alt="Bee Icon" 
          className="mb-2" 
          style={{ width: "40px" }}
        />
        <p className="m-0"><small>Выбрано услуг: {cartData.itemsInCart}</small></p>
      </Link>
    </Container>
  );
};
