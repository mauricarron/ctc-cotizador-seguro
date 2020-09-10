export function obtenerDiferenciaAnios(anio) {
  return new Date().getFullYear() - anio;
}

export function calcularDiferenciaMarca(marca) {
  let incremento;
  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;
    case "americano":
      incremento = 1.15;
      break;
    case "asiatico":
      incremento = 1.05;
      break;
    default:
      break;
  }

  return incremento;
}

export function calcularPlan(plan) {
  let incremento;
  plan === "basico" ? (incremento = 1.2) : (incremento = 1.5);
  return incremento;
}

export function primerMayuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
