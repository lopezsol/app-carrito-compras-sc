import { useContext } from 'react'
import { Card } from '../components/Card'
import { ProductosContext } from '../context/ProductosContext'
import { CarritoContext } from '../context/CarritoContext'

export const ComprasPage = () => {
    const { productos } = useContext(ProductosContext)
    const { listaCompras, agregarCompra, eliminarCompra } = useContext(CarritoContext)

    const handleAgregar = (producto) => {
        agregarCompra(producto)

    }
    const handleEliminar = (id) => {
        eliminarCompra(id)

    }
    return (
        <>
            <h1>Compras</h1>
            <hr />
            {
                productos.map(producto => {
                    return (
                        <Card
                            key={producto.id}
                            id = {producto.id}
                            imagen={producto.image}
                            titulo={producto.title}
                            descripcion={producto.description}
                            precio={producto.price}
                            listaCompras= {listaCompras}
                            handleAgregar={() => handleAgregar(producto)}
                            handleEliminar={() => handleEliminar(producto.id)}
                        >

                        </Card>
                    )
                })
            }
        </>
    )
}
