import React from "react";
import styled from "styled-components";
import bannerImage from "../../../assets/img/bannerPrincipal.jpeg";
import TituloPrincipal from "../../Encabezados/TituloPrincipal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Colaboradores() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <ColaboradoresSection>
        <div className="ContainerColab">
          <TituloPrincipal
            text="Nuestros"
            textStyle="Colaboradores"
            alineacion=""
          />
          <br />
          <br />

          {/* Carrusel */}
          <Carousel responsive={responsive} infinite={true} autoPlay={false}>
            <div className="Marcas">
              <img src="https://via.placeholder.com/150" alt="Colaborador 1" />
              <h5>Colaborador 1</h5>
            </div>
            <div className="Marcas">
              <img src="https://via.placeholder.com/150" alt="Colaborador 2" />
              <h5>Colaborador 2</h5>
            </div>
            <div className="Marcas">
              <img src="https://via.placeholder.com/150" alt="Colaborador 3" />
              <h5>Colaborador 3</h5>
            </div>
            <div className="Marcas">
              <img src="https://via.placeholder.com/150" alt="Colaborador 4" />
              <h5>Colaborador 4</h5>
            </div>
          </Carousel>
        </div>
      </ColaboradoresSection>
    </>
  );
}

const ColaboradoresSection = styled.section`
  position: relative;
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: auto;
  text-align: center;
  margin: 0 auto;
  margin-top: -165px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(245, 245, 245, 0.96);
    z-index: 1;
  }

  .ContainerColab {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 20px;
    position: relative;
    z-index: 2;
  }

  .Marcas {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    max-width: 250px;
    margin: 0 auto;

    @media (max-width: 768px) {
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    }
  }

  h5 {
    text-align: center;
  }

  button.react-multiple-carousel__arrow.react-multiple-carousel__arrow--right{
    right: calc(1% + 1px);
    background-color: #4093d6;
  }

  button.react-multiple-carousel__arrow.react-multiple-carousel__arrow--left{
    left: calc(1% + 1px);
    background-color: #4093d6;
  }
`;
