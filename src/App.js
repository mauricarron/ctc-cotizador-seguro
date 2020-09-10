import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import styled from "@emotion/styled";
import Resumen from "./components/Resumen";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContendorFormulario = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      anio: "",
      plan: "",
    },
  });
  const { datos } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />;
      <ContendorFormulario>
        <Formulario guardarResumen={guardarResumen} />
        <Resumen datos={datos} />
      </ContendorFormulario>
    </Contenedor>
  );
}

export default App;
