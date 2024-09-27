import styled from "styled-components";
import "./App.css";
import Home from "./components/Home.jsx";
import Nosotros from "./components/Nosotros.jsx";
import Colaboradores from "./components/Colaboradores.jsx";
import Especialidades from "./components/Especialidades.jsx";
import PiePagina from "./components/PiePagina.jsx";


function App() {
  return (
    <>
      {/* Cabecera nueva avance */}
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

        <ContainerSecundario $bgColor="#4093D6">
        
          <PiePagina />
         
        </ContainerSecundario>

   
        
      </ContainerPrincipal>
    </>
  );
}

export default App;

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
