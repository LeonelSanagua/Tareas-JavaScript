// let auto ={
// color:"Azul",
// marca:"Fiat",
// modelo:"2014",
// encendido: false,

// encender: function() {
//     if (this.encendido==false ) {
//         this.encendido=true
//         console.log(`El auto  esta encendido`)
//     }
// },

// apagar: function () {
//     if (this.encendido==true) {
//         this.encendido=false
//         console.log(`El auto esta apagado`)

//     }
// }

// }

/*3-Escribe una clase que permita crear distintos objetos
 “rectángulos”, con las propiedades de alto y ancho,
  mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área*/

// class Rectangulo {
//   constructor(alto, ancho) {
//     this.alto = alto;
//     this.ancho = ancho;
//   }
//   mostrarPropiedades() {
//     console.log(
//       `El rectangulo tiene de alto:${this.alto} y tiene de ancho: ${this.ancho}`
//     );
//   }

//   calcularPerimetro() {
//     let perimetro = 2 * (this.alto + this.ancho);
//     console.log(`El perimetro del rectangulo es ${perimetro}`);
//   }
//   calcularArea() {
//     let area = this.alto * this.ancho;
//     console.log(`El área del rectangulo es ${area}`);
//   }
// }
// let rectangulo1 = new Rectangulo(10, 20);



/*4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, 
además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.*/


// class Producto{
//     constructor(codigo,nombre,precio){
//         this.codigo=codigo,
//         this.nombre=nombre,
//         this.precio=precio

//     }
//     imprimeDatos(){
//         console.log(`Codigo:${this.codigo} Nombre:${this.nombre} Precio:${this.precio}`);
//     }
// }

// let producto01= new Producto("001", "Leche", 20)
// let producto02= new Producto("001", "Leche", 20)
// let producto03= new Producto("001", "Leche", 20)

// let productos =[producto01,producto02,producto03]

// productos.forEach(Producto=>productos.imprimeDatos())

/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
        Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
        Los métodos que se debe poder utilizar  son:
        mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
        Para realizar este método tener en cuenta la siguiente tabla de generaciones:*/

        class Persona {
            constructor(nombre, edad, sexo, peso, altura, nacimiento, dni = "") {
              this.nombre = nombre;
              this.edad = edad;
              this.dni = dni;
              this.sexo = sexo;
              this.peso = peso;
              this.altura = altura;
              this.nacimiento = nacimiento;
            }
            mostrarGeneracion() {
              switch (true) {
                case this.nacimiento >= 1930 && this.nacimiento <= 1948:
                  console.log("Perteneces a la generacion Silent Gernation");
          
                  break;
                case this.nacimiento >= 1949 && this.nacimiento <= 1968:
                  console.log("Perteneces a la generacion Baby Boom");
          
                  break;
                case this.nacimiento >= 1969 && this.nacimiento <= 1980:
                  console.log("Perteneces a la generacion X ");
          
                  break;
                case this.nacimiento >= 1981 && this.nacimiento <= 1993:
                  console.log("Perteneces a la generacion Y");
          
                  break;
                  case this.nacimiento >= 1994 && this.nacimiento <= 2010:
                    console.log("Perteneces a la generacion Y");
            
                    break;
          
                default:
                  console.log('Su generacion no esta contemplada')
                  break;
              }
            }
            mostrarDatos(){
              console.log('-----Datos personales------')
              for (const prop in this) {
                console.log(`${prop} ${this[prop]}`)
              }
            }
            esMayorDeEdad(){
              if (this.edad >= 18) {
                console.log(`${this.nombre} eres mayor de edad`)
              }else{
                console.log(`${this.nombre} no eres mayor de edad`)
              }
            }
            generarDni(){
              if (!this.dni) {
                 
              }
            }
          }