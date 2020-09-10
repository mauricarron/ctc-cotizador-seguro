import React, { Fragment } from "react";

const Resumen = ({ datos }) => {
  const { marca, anio, plan } = datos;
  if (marca === "" || anio === "" || plan === "") {
    return null;
  }
  return (
    <Fragment>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Marca: {marca}</li>
        <li>Año: {anio}</li>
        <li>Plan: {plan}</li>
      </ul>
    </Fragment>
  );
};

export default Resumen;
