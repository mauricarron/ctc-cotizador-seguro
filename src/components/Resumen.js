import React, { Fragment } from "react";
import { primerMayuscula } from "../helpers";
import styled from "@emotion/styled";

const ContenedorResumen = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #ffffff;
`;

const Resumen = ({ datos }) => {
  const { marca, anio, plan } = datos;
  if (marca === "" || anio === "" || plan === "") {
    return null;
  }
  return (
    <ContenedorResumen>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Marca: {primerMayuscula(marca)}</li>
        <li>Año: {primerMayuscula(anio)}</li>
        <li>Plan: {primerMayuscula(plan)}</li>
      </ul>
    </ContenedorResumen>
  );
};

export default Resumen;
