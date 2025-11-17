import { guardarCarrito, obtenerCarrito, vaciarCarritoStorage} from "./storage.js"
import {actualizarContador, mostrarMensaje} from "./ui.js"
 
// quede en 1h 9 min 
export const agregarAlCarrito = (producto) => {

const carrito = obtenerCarrito()
carrito.push(producto)
guardarCarrito(carrito)
actualizarContador(carrito)
mostrarMensaje("Producto agregado al carrito")

}

export const eliminarProducto = (indice) => {
const carrito = obtenerCarrito()
carrito.splice(indice, 1)
guardarCarrito(carrito)
actualizarContador(carrito)
mostrarMensaje("Producto eleminado")

}

export const vaciarCarrito = () =>
{
vaciarCarritoStorage()
actualizarContador([])
mostrarMensaje("Carrito vaciado")
}