import React, { useCallback } from "react";
import styled from "styled-components";
import bannerImage from "../assets/img/bannerPrincipal.jpeg";
import useEmblaCarousel from "embla-carousel-react";
import TituloPrincipal from "../components/Encabezados/TituloPrincipal";

export default function Colaboradores() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <ColaboradoresSection>
        <div className="ContainerColab">
          <TituloPrincipal text="Nuestros" textStyle="Colaboradores" alineacion="" />
          <br />
          <br />

          {/* Embla Carousel */}
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <div className="Marcas">
                  <img src="https://via.placeholder.com/150" alt="Colaborador 1" />
                  <h5>Colaborador 1</h5>
                </div>
              </div>
              <div className="embla__slide">
                <div className="Marcas">
                  <img src="https://via.placeholder.com/150" alt="Colaborador 2" />
                  <h5>Colaborador 2</h5>
                </div>
              </div>
              <div className="embla__slide">
                <div className="Marcas">
                  <img src="https://via.placeholder.com/150" alt="Colaborador 3" />
                  <h5>Colaborador 3</h5>
                </div>
              </div>
              <div className="embla__slide">
                <div className="Marcas">
                  <img src="https://via.placeholder.com/150" alt="Colaborador 4" />
                  <h5>Colaborador 4</h5>
                </div>
              </div>
              <div className="embla__slide">
                <div className="Marcas">
                  <img src="https://via.placeholder.com/150" alt="Colaborador 4" />
                  <h5>Colaborador 4</h5>
                </div>
              </div>
              <div className="embla__slide">
                <div className="Marcas">
                  <img src="https://via.placeholder.com/150" alt="Colaborador 4" />
                  <h5>Colaborador 4</h5>
                </div>
              </div>
              <div className="embla__slide">
                <div className="Marcas">
                  <img src="https://via.placeholder.com/150" alt="Colaborador 4" />
                  <h5>Colaborador 4</h5>
                </div>
              </div>
              <div className="embla__slide">
                <div className="Marcas">
                  <img src="https://via.placeholder.com/150" alt="Colaborador 4" />
                  <h5>Colaborador 4</h5>
                </div>
              </div>
            </div>
          </div>

          {/* Botones de navegación */}
          <div className="embla__buttons">
            <button className="embla__prev" onClick={scrollPrev}>
              «
            </button>
            <button className="embla__next" onClick={scrollNext}>
              »
            </button>
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
  }

  .embla {
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
  }

  .embla__container {
    display: flex;
  }

  .embla__slide {
    min-width: 250px;
    padding: 0 10px;
  }

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

  .embla__buttons {
    margin-top: 20px;
    text-align: center;
  }

  .embla__prev,
  .embla__next {
    background-color: #4093d6;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    margin: 0 10px;
    border-radius: 4px;
  }
`;
