import React from "react";
import styled from "styled-components";

export default function PiePagina() {
  return (
    <>
      <PiedePagina>
        <p>
          ©2023 Clinica Dental Cayetano. Todos los derechos reservados |
          Desarrollado con ❤ por Francisco Olortegui.
        </p>
      </PiedePagina>
    </>
  );
}

const PiedePagina = styled.footer`

  padding: 20px;
  text-align: center;
  background-color: #4093d6;

  p {
    margin: 0;
    font-size: 14px;
    color: black;
    color: #fff;

    @media (max-width: 768px) {
        font-size: 12px;
    }
  }
`;