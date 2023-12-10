import { useEffect, useState } from "react"
import '../styles/card.css'
export const Card = ({ id, imagen, titulo, descripcion, precio, listaCompras, handleAgregar,
  handleEliminar }) => {

  const estaAgregado = () => {
    return listaCompras.some(producto => producto.id === id)
  }
  const [agregado, setAgregado] = useState(estaAgregado())

  const agregarProducto = () => {
    handleAgregar()
    setAgregado(true)
  }
  const quitarProducto = () => {
    handleEliminar()
    setAgregado(false)
  }

  return (
    <div className="tarjeta">
      <img src={imagen} alt="titulo" className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="tarjeta-precio">{precio}</p>

        {agregado
          ?
          <button
            type="button"
            className="boton-quitar"
            onClick={quitarProducto}
          >
            Quitar del carrito
          </button>
          :
          <button
            type="button"
            className="boton-agregar"
            onClick={agregarProducto}
          >
            Agregar al carrito
          </button>
        }
      </div>
    </div>
  )
}
