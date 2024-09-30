import React from "react";
import styled from "styled-components";
import Home from "./Secciones/Home";
import Nosotros from "./Secciones/Nosotros";
import Especialidades from "./Secciones/Especialidades";
import Colaboradores from "./Secciones/Colaboradores";

export default function Template() {
  return (
    <div>   

      <Home />

      <ContainerPrincipal>
        {/* Sección con color diferente */}
        <ContainerSecundario $bgColor="#fff">
          <SubContainer>
            <Nosotros />
          </SubContainer>
        </ContainerSecundario>

        {/* Colaboladores */}
        <Colaboradores />

        <ContainerSecundario $bgColor="#fff">
          <SubContainer>
            <Especialidades />
          </SubContainer>
        </ContainerSecundario>

        {/* footer */}

      </ContainerPrincipal>
    </div>
  );
}

// Componente principal que agrupa todo
const ContainerPrincipal = styled.div`
  margin: 0 auto;
`;

// Componente secundario que recibe un color de fondo por props
const ContainerSecundario = styled.div`
  max-width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.$bgColor || "white"};
`;

const SubContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
`;
