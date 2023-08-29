// 1. Cambiar el color de fondo de un elemento:
// - Crea un botón en tu HTML con un ID único.
// - Al hacer clic en el botón, cambia el color de fondo de un elemento (por
// ejemplo, un párrafo) a un color aleatorio.

// let parr1 = document.querySelector("#parr1")

//  const changecolor = ()=> {
//      if (parr1.style.background=="blue") {
//   parr1.style.background="red"
//      }
//  else {parr1.style.background="blue"}
//  }

//  2. Contador de clics:
// - Crea un botón en tu HTML con un ID único y un párrafo para mostrar el
// número de clics.
// - Al hacer clic en el botón, incrementa el contador y muestra el número de
// clics en el párrafo

// let parr2 = document.querySelector("#parr2");
// let clics = 0;
// const countClics = () => {
//   clics++;
//   parr2.innerText = "Hiciste " + clics + " clics en el boton 2";
// };





// 3. Cambiar el estilo de un elemento con el mouse:
// - Crea un párrafo en tu HTML con un ID único.
// - Al pasar el mouse sobre el párrafo, cambia el color de fondo y el color del
// texto del párrafo.

// let parr3 = document.querySelector("#parr3");

// const cambiarColorDeFondo = (hover) => {
//  if (hover) {
//      parr3.style.backgroundColor = '#3239ad'
//      parr3.style.color = 'white'
//    }else{
//     parr3.style.backgroundColor = ''
//      parr3.style.color = ''
//    };
//  }






// 4. Reloj digital:
// - Crea un párrafo en tu HTML con un ID único.
// - Utilizando JavaScript, actualiza el contenido del párrafo para mostrar la
// hora actualizada cada segundo.
// let reloj = document.querySelector('#reloj')

// let intervalo = null

// const fechaActual =()=>{
// let fecha = ""
// intervalo = setInterval(() => {
//     fecha = new Date();
//     reloj.innerText=fecha;
// }, 1000);
// }
// const detener = () => clearInterval(intervalo);





// Lista de tareas:
// - Crea un formulario con un campo de texto y un botón en tu HTML.
// - Al hacer clic en el botón, agrega el contenido del campo de texto como un
// nuevo elemento de lista <li> a una lista <ul> existente en la página.

let input1 = document.querySelector('#input1')
let listaDeTareas = document.querySelector('#listaDeTareas')

const agregarTarea=(event)=>{
event.preventDefault();
const tarea = input1.value;
let tareaItem = document.createElement("li")
tareaItem.innerText=tarea;
listaDeTareas.appendChild(tareaItem)
}