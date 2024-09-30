import React from "react";
import styled from "styled-components";
import Doctor2 from "../../../assets/img/doctor2.png";
import Diente from "../../../assets/img/diente-ico.png";
import Verificado from "../../../assets/img/verficado-ico.png";
import CustomButton from "../../Button/CustomButton";
import TituloPrincipal from "../../Encabezados/TituloPrincipal";

export default function Nosotross() {
  return (
    <>
      <Nosotros>
        <div className="nosotros-left">
          <img src={Doctor2} alt="Doctor2" />
          <img src={Verificado} className="verificado-ico" alt="Verified" />
        </div>
        <div className="nosotros-right">

          <div className="title-ico-nosotros">
            <TituloPrincipal text="Acerca de" textStyle="Nosotros" alineacion="left"/>
            <img src={Diente} alt="Diente" />
          </div>

          {/* Parrafo */}
          <p className="parrafo-nosotros">
            En Clínica Dental Cayetano, nos especializamos en ofrecer soluciones
            odontológicas personalizadas, adaptadas a las necesidades de cada
            paciente. Con más de 12 años de experiencia, nuestro equipo de
            profesionales altamente capacitados se dedica a brindar una atención
            de primera calidad, enfocada en el bienestar y la salud dental de
            toda la familia. <br /> <br />
            Nuestra misión es garantizar una sonrisa saludable y radiante para
            cada paciente, combinando tecnología avanzada con un trato cercano y
            humano. Estamos comprometidos con la excelencia en cada tratamiento
            que realizamos, desde la prevención hasta la atención especializada.
            <br /> <br />
          </p>

          <CustomButton text="Leer más" link="#" id="" />
        </div>
      </Nosotros>
    </>
  );
}

const Nosotros = styled.section`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap-reverse;
  }

  .title-ico-nosotros {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .nosotros-right {
    width: 100%; /* Asegura que el contenido no se expanda */

    p {
      margin: 15px 0 35px 0;
      text-align: justify;
    }
  }

  .nosotros-left {
    @media (max-width: 768px) {
      min-width: 200px; /* Limita el ancho del lado derecho */
    }

    img {
      width: 100%;
      height: auto;
    }

    .verificado-ico {
      position: relative;
      bottom: 80%;
      width: 70px;
      height: auto;
    }
  }
`;
