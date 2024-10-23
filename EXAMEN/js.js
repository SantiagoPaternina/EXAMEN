//1

// let frutas = ["Manzana", "Chontaduro", "Durazno", "Fresa", "Borojo", "Sandía"];

// let frutasPares = [];
// let frutasImpares = [];

// // Recorremos el array de frutas
// for (let i = 0; i < frutas.length; i++) {
//   // Si el índice es par
//   if (i % 2 === 0) {
//     frutasPares.push(frutas[i]);
//   } else {
//     // Si el índice es impar
//     frutasImpares.push(frutas[i]);
//   }
// }

// document.write("Frutas en posiciones pares:", frutasPares + "<br>");
// document.write("Frutas en posiciones impares:", frutasImpares + "<br>");

//2

// const numeros = []; // Array vacío
// const cantidad = 5; // Necesitamos 5 números

// for (let i = 0; i < cantidad; i++) {
//     const numero = prompt("Ingrese un número:"); // Pedir número
//     if (numero) { // Si hay entrada
//         numeros.push(Number(numero)); // Agregar al array
//     } else {
//         alert("Ingrese un número válido."); // Mensaje de error
//         i--; // Repetir
//     }
// }

// // Inicializar mayor y menor
// let mayor = numeros[0];
// let menor = numeros[0];
// let suma = 0;

// for (let j = 0; j < numeros.length; j++) {
//     if (numeros[j] > mayor) {
//         mayor = numeros[j]; // Encontrar mayor
//     }
//     if (numeros[j] < menor) {
//         menor = numeros[j]; // Encontrar menor
//     }
//     suma += numeros[j]; // Sumar
// }

// const promedio = suma / numeros.length; // Calcular promedio

// // Mostrar resultados usando document.write
// document.write("<h2>Resultados</h2>");
// document.write("<p>Números ingresados: " + numeros.join(", ") + "</p>"); // Lista de números
// document.write("<p>Mayor: " + mayor + "</p>");
// document.write("<p>Menor: " + menor + "</p>");
// document.write("<p>Promedio: " + promedio.toFixed(2) + "</p>");

//3

// const arreglo = ["zanahoria", "banano", "manzana", "pera", "cebolla", "papa", "fresas", "Ajo", "Sandia"];

// function esFruta(elemento) {
//     const frutas = ["banano", "manzana", "pera", "fresas", "sandia"];
//     return frutas.includes(elemento.toLowerCase());
// }

// // Filtramos solo las frutas
// const frutasFiltradas = arreglo.filter(esFruta);

// document.write (frutasFiltradas);

//4

// let empleados = [
//     {nombre: "Pedro", salario: 5000000, profesion: "Abogado"},
//     {nombre: "Angie", salario: 3900000, profesion: "Odontóloga"},
//     {nombre: "Luis", salario: 2500000, profesion: "Asesor Bancario"},
//     {nombre: "Lina", salario: 4500000, profesion: "Psicóloguita"}
// ];

// let sumaSalarios = 0;
// for (let i = 0; i < empleados.length; i++) {
//     sumaSalarios += empleados[i].salario;
//     let area_de_trabajo = prompt(`Ingrese el área de trabajo de ${empleados[i].nombre}: `)
//     empleados[i].area_de_trabajo = area_de_trabajo;
// }

// document.write("SUMA TOTAL DE LOS SALARIOS: " + sumaSalarios + "<br>");
// for (let i = 0; i < empleados.length; i++) {
//     document.write("Nombre: " + empleados[i].nombre + ", Salario: " + empleados[i].salario + ", Profesión: " + empleados[i].profesion + ", Área de trabajo: " + empleados[i].area_de_trabajo + "<br>");
// } 

// //5

// for (let i = 0; i < empleados.length; i++) {
//     for (let j = i + 1; j < empleados.length; j++) {
//         if (empleados[i].salario < empleados[j].salario) {
//             let temp = empleados[i];
//             empleados[i] = empleados[j];
//             empleados[j] = temp;
//         }
//     }
// }

// document.write("Empleados ordenados por salario (de mayor a menor):<br>");
// for (let i = 0; i < empleados.length; i++) {
//     document.write("Nombre: " + empleados[i].nombre + ", Salario: " + empleados[i].salario + ", Profesión: " + empleados[i].profesion + ", Área de trabajo: " + empleados[i].area_de_trabajo + "<br>");
// } 


//EJERCICIOS COMPUESTOS
//1 compuestos

// let productos = [];
// for (let i = 0; i < 3; i++) {
//     let producto = prompt("Ingresa el nombre del producto:");
//     let precio = parseFloat(prompt("Ingresa el precio del producto:"));
//     let cantidad = parseInt(prompt("Ingresa la cantidad del producto:"));
//     productos.push({producto, precio, cantidad});
// }

// let total = 0;
// for (let i = 0; i < productos.length; i++) {
//     total += productos[i].precio * productos[i].cantidad;
// }

// for (let i = 0; i < productos.length; i++) {
//     document.write("Producto: " + productos[i].producto + ", Precio: " + productos[i].precio + ", Cantidad: " + productos[i].cantidad + "<br>");
// }
// document.write("Total a pagar: " + total); 

//2 compuestos

// function calcularDescuento(totalCompra) {
//     if (totalCompra >= 100000) {
//         return "Tienes un descuento del 10%";
//     } else {
//         return "No tienes descuento";
//     }
// }

// let totalCompra = parseFloat(prompt("Ingresa el valor total de la compra:"));
// document.write(calcularDescuento(totalCompra));
