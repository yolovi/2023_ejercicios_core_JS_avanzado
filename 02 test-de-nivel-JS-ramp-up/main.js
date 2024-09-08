// 1. Ejercicio 1 (1pts)
// Se debe trabajar con una variable que contiene la información: “The Bridge 2023”
// Muestra por consola la longitud de la variable

let theBridge = "The Bridge 2023";
console.log(theBridge.length);

// Utilizando esta variable muestra por consola solo “The Bridge”

console.log(theBridge.slice(0, 10));

// --------------------------------

//2. Ejercicio 2 (2pts)
// Define una variable culpable que sea de tipo booleano.
let culpable = true;

// Crea una condición en la que sí culpable es verdadero se muestre por consola “Es culpable” y sino que muestre por consola “No es culpable”
if (culpable === true) {
  console.log("Es culpable");
} else {
  console.log("No es culpable");
}

// --------------------------------

// 3. Ejercicio 3 (2pts)
// Crea una función que pasándole por argumento un nombre me devuelva "Hola" y el nombre que le he pasado.
// Ejemplo: Llamó a la función saludar(“Sofía”) y me muestra por consola:
// "Hola soy Sofía".

// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'

function nombre(nombre) {
  if (typeof nombre === "string") {
    console.log(`Hola ${nombre}`);
  } else {
    console.log("Debo ser ejecutada con un string");
  }
}

nombre("Yol");
nombre(5);

// --------------------------------

// 5. Ejercicio 5 (2pts)
// Dada la siguiente array: [1,2,3,4,5,6,7,8,9,10]; crea una función que devuelva solo los números pares. Resultado esperado: [2, 4, 6, 8, 10]



function soloPares(arr){
    return arr % 2 === 0
}

const pares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(soloPares)
console.log(pares)


//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//function pares(arr) {
//   const pares = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       pares += arr[i];
//     }
//   }
// }

// --------------------------------


// 6. Ejercicio 6 DOM (2 pts)
// Cambiar el contenido de un elemento HTML:
// Cambia el contenido de un elemento <p> HTML con el id "miParrafo" por el texto "Nuevo texto".
// Cambia el color y el grosor de la letra del párrafo con el id "miParrafo". El color debe ser rojo y el grosor debe ser negrita.

document.getElementById("miParrafo").innerHTML = "Nuevo texto";
document.getElementById("miParrafo").style.color = "red";
document.getElementById('miParrafo').style.fontWeight = "bold"

// Crea una lista desordenada en el HTML vacía con el id "miLista". Después añádele desde javascript un elemento de <li> a la lista. El nuevo elemento debe contener el texto "Nuevo elemento de lista".


const ul = document.querySelector(".miLista ul");
const li = document.createElement("li");

document.getElementById("miLista").innerHTML = "Nuevo elemento de lista";


// Crea una función que muestre una alerta con el mensaje "¡Has hecho clic en el botón!" cuando se haga clic en el botón con el id "miBoton".



