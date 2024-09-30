import React from "react";
import styled from "styled-components";
import bannerImage from "../../../assets/img/bannerPrincipal.jpeg";
import icoReloj from "../../../assets/img/ico-reloj.png";
import doctor from "../../../assets/img/doctor.png";
import CustomButton from "../../Button/CustomButton";

export default function Inicio() {
  return (
    <>
      <BannerPrincipal>
        <div className="contenedor-secundary">
          {/* Column Left */}
          <div className="BannerContenido__left">
            <h2>
              Clínica
              <br /> <span>Dental Cayetano</span>
            </h2>

            <p>
              Nuestro objetivo es brindar una atención de primera, garantizando
              un servicio personalizado, confiable y adaptado a las necesidades
              de cada paciente.
            </p>

            {/* ESPACIADOR */}
            <br />

            <div className="componentes_left">
              {/* boton */}
              <CustomButton text="Contáctenos" link="#" id="" />

              <div className="horarioAtencion">
                <img src={icoReloj} alt="Reloj" />
                <p>
                  <span>Horarios de atención</span> <br />
                  Lunes a Viernes: 08:00 a 18:00
                </p>
              </div>
            </div>
          </div>

          {/* Column Right */}
          <div className="BannerContenido__right">
            <img src={doctor} alt="doctor" />
          </div>
        </div>
      </BannerPrincipal>
    </>
  );
}

const BannerPrincipal = styled.div`
  position: relative;
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 450px;
  text-align: center;
  margin: 0 auto;
  height: auto;

  /* Añadir una capa blanca con opacidad */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(
      255,
      255,
      255,
      0.84
    ); /* Blanco con 95% de opacidad */
    z-index: 1; /* Asegura que la capa esté detrás del contenido */
  }

  @media (max-width: 768px) {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(
        255,
        255,
        255,
        0.9
      ); /* Blanco con 95% de opacidad */
      z-index: 1; /* Asegura que la capa esté detrás del contenido */
    }
  }

  .contenedor-secundary {
    position: relative; /* Para que el contenido esté encima de la capa */
    display: flex;
    justify-content: space-between;
    gap: 40px;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    z-index: 1; /* Asegura que el contenido esté encima de la capa */
    margin-top: -10px;

    @media (max-width: 768px) {
      height: 500px;
    }
  }

  .BannerContenido__left {
    h2 {
      text-align: left;
      font-weight: 400;
      font-size: 40px;
      line-height: 1.2;

      span {
        font-weight: 700;
        color: #4093d6;
      }
    }

    p {
      text-align: left;
    }

    @media (max-width: 768px) {
      h2 {
        text-align: left;
        font-weight: 400;
        font-size: 32px;
        line-height: 1.2;

        span {
          font-weight: 700;
          color: #4093d6;
        }
      }

      p {
        text-align: left;
        font-size: 14px;
      }
    }

    .componentes_left {
      display: flex;
      align-items: center;
      gap: 2rem;

      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: start;
      }
    }

    .horarioAtencion {
      display: flex;
      align-items: center;
      gap: 10px;
      background-color: white;
      padding: 0 10px;
      border-radius: 15px;
      box-shadow: 7px 2px 56px -7px rgba(227, 220, 227, 0.43);

      img {
        width: 48px;
        height: 48px;
        margin-right: 10px;
      }

      p {
        font-size: 15px;
      }

      span {
        color: #4093d6;
        font-weight: 600;
      }

      @media (max-width: 768px) {
        p {
          font-size: 14px;
        }

        span {
          color: #4093d6;
          font-weight: 600;
        }
      }
    }
  }

  .BannerContenido__right {
    img {
      margin-bottom: -27px;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  h1 {
    color: black; /* Cambia el color del texto para que contraste con la imagen */
  }
`;
