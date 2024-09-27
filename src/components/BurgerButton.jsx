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
    position: relative;
    height: 30px;
    width: 30px;
    padding: 5px;
    z-index: 101; /* Asegura que el botón de hamburguesa esté encima de todo */
    cursor: pointer;
    user-select: none;
    border: none;
    outline: none;
    transition: transform 0.25s cubic-bezier(0.05, 1.04, 0.72, 0.98);
  }

  .hamburger.is-active {
    background-color: transparent;
  }

  ._layer {
    background: #333;
    margin-bottom: 4px;
    border-radius: 2px;
    width: 28px;
    height: 4px;
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: all 0.25s cubic-bezier(0.05, 1.04, 0.72, 0.98);
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
`;
