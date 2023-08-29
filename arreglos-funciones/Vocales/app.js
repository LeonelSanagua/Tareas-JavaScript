//  Escribe un programa que pida una frase, 
// devuelva la cantidad de vocales que tiene la frase y muestre en consola cuales son.
const encontrarVocales = function (frase = prompt("Ingrese una frase")) {
    let vocales = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú"];
    let vocalesEncontradas = [];
  
    if (frase == null) {
      return `El usuario canceló la ejecución`;
    }
  
    if (frase == "") {
      return `No ingresó ninguna frase`;
    }
  
    let arrayLetras = frase.toLowerCase().split("");
  
    for (let i = 0; i < arrayLetras.length; i++) {
      if (vocales.includes(arrayLetras[i])) {
        vocalesEncontradas.push(arrayLetras[i]);
      }
    }
  
    if (vocalesEncontradas.length > 0) {
      return `Se encontraron ${vocalesEncontradas.length} vocales, las mismas son ${vocalesEncontradas}`;
    } else {
      return `No Se encontraron vocales`;
    }
  };
  console.log(encontrarVocales())