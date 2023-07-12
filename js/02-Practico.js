//Ejercicio 1

// let edad = parseInt(prompt("Ingrese la edad:"))
// if(edad >= 18){
// console.log("Es mayor de 18 años y puede conducir ")
// }else{
// alert("Ingrese un numero valido")
// }

//Ejercicio 2 

//     let nota = parseInt(prompt("Ingrese un numero"))
//     if(nota >= 0 && nota <= 10){
//       if (nota < 3) {
//            alert("Muy deficiente")
           
//        }else if (nota < 5) {
   
//           alert("Insuficiente")
//       }else if (nota <= 6) {
//           alert("Suficiente")
//       }else if (nota == 7) {
//            alert("Bien")
//        }else if (nota <=9) {
//            alert("Notable")
//        }else if (nota == 10) {
//            alert("Excelente")
//        }
    
//    }
//    else{
//        alert("Numero erroneo")
//    }
//    if (isNaN(nota)) {
//     alert("Ingrese un numero valido")
//    }

   //Ejercicio 3
//    let texto = prompt("Ingrese un texto ");
//    let cadenaDeTexto = "";
//    while (texto) {
//     cadenaDeTexto = cadenaDeTexto + texto + " - "
//     let respuesta = confirm("Desea agregar otro texto?") 
//      if(respuesta){
//      texto = prompt("Ingrese otro texto ");
//    }
//    else {
//        break
//    }
//    }
//    alert(cadenaDeTexto)

//Ejercicio 4
// let numero = parseInt(prompt("Ingrese un numero "));
//    let cadenaDeNumero = 0;
//   while (numero) {
//     cadenaDeNumero += numero
//     let respuesta = confirm("Desea agregar otro numero?") 
//      if(respuesta){
//      numero = parseInt(prompt("Ingrese otro numero "));    }
//     else {
//        break
//    }
//    }
//    alert(cadenaDeNumero)

//Ejercicio 5
let numerodni = prompt("Ingrese el dni")
let resto = 0;
let letra = "";
if (numerodni >= 0 && numerodni <= 99999) {
    resto = parseInt(numerodni % 23)
    switch (resto) {
        case 0:
            letra = "T";
            break;
        case 1:
            letra = "R";
            break;
        case 2:
            letra = "W";
            break;
        case 3:
            letra = "A";
            break;
        case 4:
            letra = "G";
            break;
        case 5:
            letra = "M";
            break;
        case 6:
            letra = "Y";
            break;
        case 7:
            letra = "F";
            break;
        case 8:
            letra = "P";
            break;
        case 9:
            letra = "D";
            break;
        case 10:
            letra = "X";
            break;
        case 11:
            letra = "B";
            break;
        case 12:
            letra = "N";
            break;
        case 13:
            letra = "J";
            break;
        case 14:
            letra = "Z";
            break;
        case 15:
            letra = "S";
            break;
        case 16:
            letra = "Q";
            break;
        case 17:
            letra = "V";
            break;
        case 18:
            letra = "H";
            break;
        case 19:
            letra = "L";
            break;
        case 20:
            letra = "C";
            break;
        case 21:
            letra = "K";
            break;
        case 22:
            letra = "E";
            break;
        default:
            alert("Numero erroneo");
    }
    alert(`Numero: ${numerodni} Letra: ${letra}`)
}
else {
    // SI SE PULSÓ ACEPTAR SIN PONER UN NÚMERO
    if (isNaN(numerodni)) {
        alert(`${numerodni} No es un numero`);
    }
}
 


  
