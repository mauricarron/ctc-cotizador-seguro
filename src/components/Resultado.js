import React, { Fragment } from "react";
import styled from "@emotion/styled";

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
      <TextoCotizacion>El total es: {resultado}</TextoCotizacion>
    </ResultadoCotizacion>
  );
};

export default Resultado;
