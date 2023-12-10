import { ProductosContext } from './ProductosContext'
import { useState, useEffect } from 'react'

export const ProductosProvider = ({ children }) => {

    const [productos, setProductos] = useState([])
    const URL_PRODUCTOS = 'https://fakestoreapi.com/products'

    const fetchProductos = async () => {
        try {
            const respuesta = await fetch(URL_PRODUCTOS)
            const data = await respuesta.json()
            setProductos(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProductos()
    }, [])

    return (
        <ProductosContext.Provider value={{ productos }} >
            {children}
        </ProductosContext.Provider>
    )
}
