import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;
const ResultadoCotizacion = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;
const TextoCotizacion = styled.p`
  margin: 0;
  padding: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #00838f;
`;

const Resultado = ({ resultado }) => {
  return resultado === 0 ? (
    <Mensaje>Elije Marca, Año y tipo de Plan</Mensaje>
  ) : (
    <ResultadoCotizacion>
      <TransitionGroup component="span" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={resultado}
          timeout={{ enter: 500, exit: 500 }}
        >
          <TextoCotizacion>El total es: {resultado}</TextoCotizacion>
        </CSSTransition>
      </TransitionGroup>
    </ResultadoCotizacion>
  );
};

Resultado.propTypes = {
  resultado: PropTypes.number.isRequired,
};

export default Resultado;
