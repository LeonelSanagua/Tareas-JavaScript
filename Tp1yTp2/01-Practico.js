//Ejercicio 1
// console.log(alert("Alerta ejercicio 1"));

//Ejercicio 2

document.write("Hello word");


//Ejercicio 3
// document.write("<br>")
// document.write(3 + 5);

//Ejercicio 4

// let nombre = prompt("Ingrese el nombre del usuario:")
// document.write("<br>")
// document.write("Hola" + nombre)

//Ejercicio 5

// let numero1 = prompt("Escribe un número");
// let numero2 = prompt("Escribe otro número");
// document.write("<br>")
// document.write("La suma es: "+ ( parseInt(numero1)+ parseInt(numero2) ) );

//Ejercicio 6
//  let n1 = prompt("Escribe un número");
//  let n2 = prompt("Escribe otro número");
// let primermayor = n1>n2
// let segundomayor = n2>n1
// console.log(`Este numero es mayor ${n1} que este numero ${n2}  ${primermayor}`)
// console.log(`Este numero es mayor ${n2} que este numero ${n1}  ${segundomayor}`)

//Ejercicio 7
    // let n1 = prompt("Escribe un número");
    // let n2 = prompt("Escribe otro número");
    // let n3 = prompt("Escribe otro número");
 
    // let num1 = n1>n2 && n1>n3
    // let num2 = n2>n1 && n2>n3
    // let num3 = n3>n1 && n3>n
    // console.log(`El primer numero ${n1} es mayor que el segundo ${n2} y mayor que el tercero ${n3} ${num1}`)
    // console.log(`El segundo numero ${n2} es mayor que el segundo ${n1} y mayor que el tercero ${n3} ${num2}`)
    // console.log(`El tercer numero ${n3} es mayor que el segundo ${n2} y mayor que el tercero ${n1} ${num3}`)

//Ejercicio 8

// let n1 = prompt("Ingrese un numero:")

// if(n1 % 2 ===0){
//     console.log("Es divisible por 2")
// } else{
//     console.log("No es divisible por 2")
// }

// 10 -Escribe un programa que pida un número y nos diga si es divisible por 
// 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
//  let n1 = prompt("Ingrese un numero:")
//  if(n1 % 2 ==0 || n1 % 3 ==0|| n1 % 5 ==0 || n1 % 7 ==0){
//      console.log("Es divisible por 2,3,5,7")
//  } else{
//      console.log("No es divisible por 2,3,5,7")
//  }

//Ejercicio 11
let n1 = prompt("Ingrese un numero:")
 if(n1 % 2 ==0 || n1 % 3 ==0|| n1 % 5 ==0 || n1 % 7 ){
    if(n1 % 2 == 0){
        console.log("Es divisible por 2")
    }
    if(n1 % 3 == 0){
        console.log("Es divisible por 3")
    }
    if(n1 % 5 ==0){
        console.log("Es divisible por 5")
    }
    if(n1 % 7 == 0){
        console.log("Es divisible por 7")
    }
  } else{
      console.log("No es divisible por 2,3,5,7")
  }