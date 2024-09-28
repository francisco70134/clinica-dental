import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/img/logo-white.png";
import BurguerButton from "./BurgerButton";
import CustomButton from "./Button/CustomButton";

export default function HeaderPrincipal() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked); // Alterna el estado.
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

  // Deshabilita el scroll cuando el menú está activo
  useEffect(() => {
    if (clicked) {
      document.body.style.overflow = "hidden"; // Deshabilita el scroll
    } else {
      document.body.style.overflow = "auto"; // Habilita el scroll
    }
  }, [clicked]);

  return (
    <>
      <ContainerSecundario>
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
              <CustomButton text="Resevar cita" link="#" id="" />
            </li>
          </ul>

          <div className="burger">
            <BurguerButton clicked={clicked} handleClick={handleClick} />
          </div>
        </NavbarContainer>

        <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
      </ContainerSecundario>
    </>
  );
}

// Estilos del Navbar
const NavbarContainer = styled.nav`
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 5px 5px -3px rgba(0, 0, 0, 0.04);
  z-index: 100; /* Asegura que el Header esté encima del contenido */

  img {
    width: 190px;
    height: 90px;
  }

  .burger {
    z-index: 101; /* Asegura que el botón de hamburguesa esté siempre encima */
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
    }

    span {
      background-color: #4093d6;
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
    z-index: 99; /* Asegura que los links del menú estén por debajo del Header pero encima del contenido */

    li {
      margin: 25px 0;

      a {
        color: white;
      }
    }
  }
`;

const BgDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 50; /* Asegura que esté debajo del Header y los botones */
  transition: all 0.6s ease;

  &.active {
    position: fixed;
    background-color: #0e51b5;
    border-radius: 0 0 70% 0;
    width: 100%;
    height: 100%;
    z-index: 50; /* Mantiene el z-index cuando está activo */
    overflow-y: hidden; /* Oculta el scroll vertical */
  }
`;

const ContainerSecundario = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  background-color: white;
  margin-bottom: 13px;
`;
