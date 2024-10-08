import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/img/logo-white.png";
import BurguerButton from "./BurgerButton";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked); // Alterna el estado
  };

  // Efecto para cerrar el menú cuando la pantalla es redimensionada
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setClicked(false); // Cierra el menú si la pantalla es mayor a 768px
      }
    };

    window.addEventListener("resize", handleResize);

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <NavbarContainer>
        <img src={Logo} alt="Logo" />
        <ul className={`links ${clicked ? "active" : ""}`}>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Nosotros</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>

          <li>
            <a href="#">
              <span>Reservar</span>
            </a>
          </li>
        </ul>

        <div className="burger">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
      </NavbarContainer>
    </>
  );
}

// Estilos del Navbar
const NavbarContainer = styled.nav`
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 1px 5px 5px -3px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }

  img {
    width: 190px;
    height: 90px;
  }

  .burger {
    @media (min-width: 768px) {
      display: none;
    }
  }

  .links {

    display: flex;
    align-items: center;
    gap: 25px;
    transition: all 0.5s ease;

    li {
      list-style: none;

      a {
        color: #0e51b5;
        text-decoration: none;
        font-size: 13px;
      }
    }

    span {
      background-color: #1360d3;
      padding: 10px 25px;
      border-radius: 50px;
      color: white;
      transition: all 0.3s ease;
    }

    span:hover {
      background-color: #0e51b5;
      transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
      position: absolute;
      top: -700px;
      left: 0;
      width: 100%;
      flex-direction: column;
      text-align: center;
      li {
        margin: 25px 0;
      }
    }
  }

  .links.active {
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    display: block;
    flex-direction: column;
    text-align: center;
    padding: 0;

    li {
      margin: 25px 0;

      a {
        color: white;
      }
    }
  }
`;

const BgDiv = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  top: -700px;
  left: -200px;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.6s ease;
  &.active {
    background-color: #0e51b5;
    border-radius: 0 0 70% 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;
