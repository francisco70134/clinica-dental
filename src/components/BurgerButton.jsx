import React from "react";
import styled from "styled-components";

export default function BurguerButton({ clicked, handleClick }) {
    
  return (
    <Burguer>
      <div className={`hamburger ${clicked ? 'is-active' : ''}`} onClick={handleClick}>
        <div className="_layer -top"></div>
        <div className="_layer -mid"></div>
        <div className="_layer -bottom"></div>
      </div>
    </Burguer>
  );
}



const Burguer = styled.div`

  .hamburger {
    background-color: transparent;
    left: 0;
    top: 0;
    height: 30px;
    width: 30px;
    padding: 05px 05px;
    transform: translate3d(0, 0, 0);
    transition: transform 0.25s cubic-bezier(0.05, 1.04, 0.72, 0.98);
    z-index: 1002;
    cursor: pointer;
    user-select: none;
    border: none; /* Elimina bordes si los hay */
    outline: none; /* Elimina el outline por defecto */
    cursor: pointer;
  }


  &:focus {
      outline: none; /* Evita el outline en focus */
    }

    &:active {
      background-color: transparent; /* Evita el fondo azul al hacer clic */
      outline: none; /* Asegúrate de que no tenga outline en active */
    }
  .hamburger.is-active {
    background-color: none;
  }

  ._layer {
    background: #333333;
    margin-bottom: 4px;
    border-radius: 2px;
    width: 28px;
    height: 4px;
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: all 0.25s cubic-bezier(0.05, 1.04, 0.72, 0.98);
  }

  .hamburger:hover .-top {
    transform: translateY(-100%);
  }

  .hamburger:hover .-bottom {
    transform: translateY(100%);
  }

  .hamburger.is-active .-top {
    transform: translateY(200%) rotate(45deg) !important;
  }

  .hamburger.is-active .-mid {
    opacity: 0;
  }

  .hamburger.is-active .-bottom {
    transform: translateY(-200%) rotate(135deg) !important;
  }

  .menuppal.is_active {
    transform: translate3d(0px, 0px, 0px);
  }

  .menuppal {
    background-color: rgba(255, 255, 255, 0.95);
    bottom: 0;
    height: 100%;
    left: 0;
    overflow-y: scroll;
    position: fixed;
    top: 0;
    transform: translate3d(0px, -100%, 0px);
    transition: transform 0.35s cubic-bezier(0.05, 1.04, 0.72, 0.98) 0s;
    width: 100%;
    z-index: 1001;
  }

  .menuppal ul {
    margin: 0;
    padding: 0;
  }

  .menuppal ul li {
    list-style: none;
    text-align: center;
    font-family: Verdana, Arial, Helvetica;
    font-size: 1.5rem;
    line-height: 3em;
    height: 3em;
    color: #369;
    font-weight: bold;
  }

  .menuppal ul li a {
    text-decoration: none;
    color: #369;
  }

  .menuppal ul li a:hover {
    text-decoration: none;
    color: #333;
  }
`;
