import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"

export const CarritoPage = () => {
  const { listaCompras, disminuirCantidad,
    aumentarCantidad, eliminarCompra } = useContext(CarritoContext)

  const calcularTotal = () => {
    return listaCompras.reduce((total, producto) => total + producto.price * producto.cantidad, 0).toFixed(2)
  }
  const handleImpresion = () => {
    print()
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {listaCompras.map((producto) => {
            return (
              <tr key={producto.id}>
                <th >{producto.title}</th>
                <td>{producto.price}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-ouline-primary"
                    onClick={() => disminuirCantidad(producto.id)}
                  >-</button>
                  <button
                    className="btn btn-primary"
                  >{producto.cantidad}</button>
                  <button
                    type="button"
                    className="btn btn-ouline-primary"
                    onClick={() => aumentarCantidad(producto.id)}

                  >+</button>

                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => { eliminarCompra(producto.id) }}
                  >Eliminar
                  </button>
                </td>
              </tr>

            )
          })}
          <tr>

            <th> <b>Total</b></th>
            <td></td>
            <td></td>
            <td>{calcularTotal()}</td>
          </tr>


        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button type="button" className="btn btn-primary" onClick={handleImpresion} disabled={listaCompras.length < 1}>Comprar</button>
      </div>

    </>

  )
}
