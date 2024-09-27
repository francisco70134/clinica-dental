import React from "react";
import styled from "styled-components";
import CardsComponent from "../components/Cards/CardsComponent";
import Coronas from "../assets/img/coronas.png";
import Profilaxis from "../assets/img/profilaxis.png";
import Implantes from "../assets/img/implantes.png";
import Resinas from "../assets/img/resinas.png";
import CustomButton from "./CustomButton";

export default function Especialidades() {
  return (
    <>
      <EspecialidadesSection>
        <div className="ContainerEspe">
          <h2>
            Contamos con diferentes <span>Especialidades</span>
          </h2>

          <div className="Especialidades">
            <CardsComponent
              bg="#0E3257"
              id="card1"
              img={Coronas}
              title="Coronas"
              text="En nuestra clínica ofrecemos coronas dentales de alta calidad, diseñadas para restaurar la funcionalidad y estética de tus dientes. Las coronas están hechas a medida para asegurar un ajuste perfecto, brindando una solución duradera para problemas de desgaste o daño dental."
            />
            <CardsComponent
              bg="#4093d6"
              id="card2"
              img={Profilaxis}
              title="Profilaxis"
              text="La profilaxis dental es un tratamiento preventivo clave para mantener una boca sana. Nuestros especialistas eliminan la placa y el sarro acumulados, reduciendo el riesgo de caries y enfermedades periodontales, garantizando una sonrisa limpia y saludable."
            />
            <CardsComponent
              bg="#0E3257"
              id="card3"
              img={Implantes}
              title="Implantes Dentales"
              text="Los implantes dentales son la solución ideal para la pérdida de dientes. Con nuestros implantes, restauramos la funcionalidad y estética de tu sonrisa, proporcionando una solución estable y duradera, similar a los dientes naturales."
            />

            <CardsComponent
              bg="#4093d6"
              id="card4"
              img={Resinas}
              title="Resinas"
              text="Los implantes dentales son la solución ideal para la pérdida de dientes. Con nuestros implantes, restauramos la funcionalidad y estética de tu sonrisa, proporcionando una solución estable y duradera, similar a los dientes naturales."
            />
          </div>

          <div className="btnVermasEspecialidades">
            <CustomButton link="#" text="Ver más" id=''></CustomButton>
          </div>
        </div>
      </EspecialidadesSection>
    </>
  );
}

const EspecialidadesSection = styled.section`
  .btnVermasEspecialidades {
    margin: 60px auto;
    width: 100%;
    text-align: center;
  }

  .Especialidades {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
    margin: 0 auto;
    padding: 70px 0 0 0;
    max-width: 1200px;
  }

  .divisores {
    display: flex;
    gap: 1rem;
    margin: 20px auto;
  }

  .ContainerEspe {
    h2 {
      text-align: center;
      font-weight: 400;
      font-size: 30px;
      line-height: 1.2;

      span {
        font-weight: 700;
        color: #4093d6;
      }
    }
  }
`;
