// Promesas en JS
const miFuncionAsincronaConPromesas = (nombre, apellido) => {
  const nombreCompleto = `${nombre} ${apellido}`;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!nombre || !apellido) {
        reject("Se ha producido un error al procesar");
      } else {
        resolve(nombreCompleto);
      }
    }, 2000);
  });
};

miFuncionAsincronaConPromesas("María", 0)
  .then((resultadoDeLaPromesa) => {
    console.log("Este es el resultado de mi promesa", resultadoDeLaPromesa);
    // const resultado2 = otraFuncionAsincrona(resultadoDeLaPromesa)
    // return resultado2;
  })
  // .then((resultadoDelAnteriorThen) => {
  //   console.log(resultadoDelAnteriorThen)
  // })
  .catch((posibleErrorDeLaPromesa) => {
    // Enviar un email al administrador informándole de que se ha producido un error
    console.log("Error en la promesa:", posibleErrorDeLaPromesa);
  });

console.log("Último console.log");

// Async - Await
const obtenerNombreCompleto = async () => {
  try {
    const resultado = await miFuncionAsincronaConPromesas("Pepe", "Ramírez");
    console.log("Resultado:", resultado);

    const resultadoDeLlamarALaApi = await llamadaAApi(resultado);
  } catch (error) {
    console.log("Se ha producido un error:", error);
  }
};

obtenerNombreCompleto();
