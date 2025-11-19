// let   a = 3;
// let  b = 5;
//  console.log(a+b);

// // let nombre = prompt("Ingresar tu nombre: ")
// // alert(nombre);
// // let formatear = confirm('Estas seguri que desea formatear ? ')
// // console.log(formatear);
// // console.warn("probando el warn")
// // console.error('tenemos un problema')
// const productos = ["Termostato", "Cámara WiFi", "Bombilla Smart", "Sensor de movimiento"];

// console.table(productos)

// let empresa = "tienda smart";

// const persona = 
// {
//     nombre: "Laura",
//     apellido: "Hernandez",
//     direccion: {calle: "Arias",numero : 129},
//     carrera: {
//         titulo: "programadora",
//         enCurso: true, 
//         cantMateriasAprobadas: 4,
//         materiasAprobadas:["Programacion ","estructura","introduccion a la información",]},
// };
// console.log(persona.nombre)
// console.log(persona.apellido)
// console.log(`recion ${persona.direccion.calle} ${persona.direccion.numero}`)

// console.log(persona.carrera.materiasAprobadas[0])

// for (const materias of persona.carrera.materiasAprobadas)
// {    console.log(materias)}

//import {productos} from "./productos.js"; 
import {agregarAlCarrito, } from "./funcionesCarritos.js";
import {obtenerCarrito, } from "./storage.js";
import { actualizarContador,} from "./ui.js";

document.addEventListener("DOMContentLoaded",()=> {
    const contenedor = document.getElementById("contenedor-productos");
    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    //usamos el fetch para usar la data de json y pasarla a codigo de java script 

    fetch("./data/productos.json").then((respuesta) => {
        console.log(respuesta);
        if (!respuesta.ok){
            throw new Error(`Error http status: ${respuesta.status}`);
        }
        
        return respuesta.json()

    }).then((data) =>{data.forEach((producto) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta-producto");

        const img = document.createElement("img");
        img.src = `./${producto.imagen}`;
        img.alt = producto.nombre;

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio}`;

        const  boton = document.createElement("button");
        boton.classList.add("btn");
        boton.textContent = "Agregar al carrito";

        boton.addEventListener("click",()=> {agregarAlCarrito(producto)});
     tarjeta.appendChild(img);
     tarjeta.appendChild(titulo);
     tarjeta.appendChild(precio);
     tarjeta.appendChild(boton);

     contenedor.appendChild(tarjeta);    
    });}).catch((error)=> {})

    
});

