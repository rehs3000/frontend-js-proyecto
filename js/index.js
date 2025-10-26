let   a = 3;
let  b = 5;
 console.log(a+b);

// let nombre = prompt("Ingresar tu nombre: ")
// alert(nombre);
// let formatear = confirm('Estas seguri que desea formatear ? ')
// console.log(formatear);
// console.warn("probando el warn")
// console.error('tenemos un problema')
// const productos = ["Termostato", "Cámara WiFi", "Bombilla Smart", "Sensor de movimiento"];

console.table(productos)

let empresa = "tienda smart";

const persona = {
    nombre: "Laura",
    apellido: "Hernandez",
    direccion: {calle: "Arias",numero : 129},
    carrera: {titulo: programadora, enCurso: true, cantMateriasAprobadas: 4, materiasAprobadas: ["Programacion ","estructura","introduccion a la información"]}
}
console.log(persona.nombre)
console.log(persona.apellido)
console.log(`recion ${persona.direccion.calle} ${persona.direccion.numero}`)
