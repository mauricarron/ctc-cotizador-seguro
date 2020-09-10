import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import styled from "@emotion/styled";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

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
    resultado: 0,
    datos: {
      marca: "",
      anio: "",
      plan: "",
    },
  });
  const [cargando, guardarCargando] = useState(false);
  const { resultado, datos } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContendorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        {cargando ? <Spinner /> : null}
        <Resumen datos={datos} />
        {!cargando ? <Resultado resultado={Number(resultado)} /> : null}
      </ContendorFormulario>
    </Contenedor>
  );
}

export default App;
