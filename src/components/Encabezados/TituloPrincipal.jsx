import React from "react";
import styled from "styled-components";

export default function TituloPrincipal({ text, textStyle, alineacion }) {
  return (
    <TituloComponent $alineacion={alineacion}>
      {text}
      <span> {textStyle}</span>
    </TituloComponent>
  );
}

const TituloComponent = styled.h2`
  text-align: ${(props) => props.$alineacion || "center"};
  font-weight: 400;
  font-size: 30px;
  line-height: 1.2;

  span {
    font-weight: 700;
    color: #4093d6;
  }
`;
