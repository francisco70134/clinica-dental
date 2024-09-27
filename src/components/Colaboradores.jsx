import React from "react";
import styled from "styled-components";
import bannerImage from "../assets/img/bannerPrincipal.jpeg";

export default function Colaboradores() {
  return (
    <>
      <ColaboradoresSection>
        <div className="ContainerColab">
          <h2>
            Nuestros <span>Colaboradores</span>
          </h2>

          <div className="Colaboradores">
            <div className="Marcas">
              <img src="https://via.placeholder.com/150" alt="Colaborador 1" />
              <h5>Colaborador 1</h5>
            </div>
            <div className="Marcas">
              <img src="https://via.placeholder.com/150" alt="Colaborador 1" />
              <h5>Colaborador 1</h5>
            </div>
            <div className="Marcas">
              <img src="https://via.placeholder.com/150" alt="Colaborador 1" />
              <h5>Colaborador 1</h5>
            </div>
            <div className="Marcas">
              <img src="https://via.placeholder.com/150" alt="Colaborador 1" />
              <h5>Colaborador 1</h5>
            </div>
          </div>
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

    h2 {
      text-align: center;
      font-weight: 400;
      font-size: 30px;
      line-height: 1.2;

      margin-bottom: 40px;

      span {
        font-weight: 700;
        color: #4093d6;
      }
    }
  }
  .Colaboradores {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(250px, 1fr)
    ); 
    grid-gap: 20px; 
    margin: 0 auto;

    width: 100%; 
    max-width: 1200px; 

    .Marcas {
      background-color: white;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
      max-width: 250px; 
      margin: 0 auto;
    }

    h5 {
      text-align: center;
    }
  }
`;
