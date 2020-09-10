import React, { useState } from "react";
import styled from "@emotion/styled";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
  flex: 0 0 100px;
`;
const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;
const InputRadio = styled.input`
  margin-right: 0.5rem;
`;
const RadioLabel = styled.label`
  margin-right: 2rem;
`;
const Boton = styled.button`
  width: 100%;
  margin-top: 2rem;
  padding: 1rem;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #00838f;
  color: #ffffff;
  border: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  padding: 1rem;
  text-align: center;
  background-color: #ff0000;
  color: #ffffff;
`;

const Formulario = () => {
  const [datos, guardarDatos] = useState({
    marca: "",
    anio: "",
    plan: "",
  });
  const [error, guardarError] = useState(false);

  const { marca, anio, plan } = datos;

  const obtenerDatosFormulario = (e) => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const cotizarSeguro = (e) => {
    e.preventDefault();
    if (marca.trim() === "" || anio.trim() === "" || plan.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    // Obtener diferencia de años
    // Por cada año restar el 3%
    // Americano: 15%, Asiatico: 5%, Europeo 30%
    // Basico 20% / Completo 50%
    // Total
  };

  return (
    <form onSubmit={cotizarSeguro}>
      {error ? <Error>Todos los campos son obligatorios</Error> : null}
      <Campo>
        <Label>Marca</Label>
        <Select name="marca" value={marca} onChange={obtenerDatosFormulario}>
          <option value="">Seleccionar</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Año</Label>
        <Select name="anio" value={anio} onChange={obtenerDatosFormulario}>
          <option value="">Seleccionar</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          id="basico"
          cheked={plan === "basico"}
          onChange={obtenerDatosFormulario}
        />
        <RadioLabel htmlFor="basico">Basico</RadioLabel>
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          id="completo"
          cheked={plan === "completo"}
          onChange={obtenerDatosFormulario}
        />
        <RadioLabel htmlFor="completo">Completo</RadioLabel>
      </Campo>
      <Boton type="submit">Cotizar</Boton>
    </form>
  );
};

export default Formulario;
