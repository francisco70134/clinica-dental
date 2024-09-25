import styled from "styled-components";
import "./App.css";
import Home from "./components/Home.jsx";

function App() {
  return (
    <>
      {/* Cabecera nueva avance*/}
      <Home />

      <ContainerPrincipal>
        <ContainerSecundario>
        
        </ContainerSecundario>
      </ContainerPrincipal>
    </>
  );
}

export default App;

const ContainerPrincipal = styled.div`
 ${'' /*  background-color: blue; */}
  margin: 0 auto;
`;

const ContainerSecundario = styled.div`
${'' /*  background-color: red; */}
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;


`;
