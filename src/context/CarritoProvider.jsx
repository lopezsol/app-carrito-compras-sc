import React, { useReducer } from 'react'
import { CarritoContext } from './CarritoContext'

const initialState = []
export const CarritoProvider = ({ children }) => {



    //acciones
    const agregarCompra = (compra) => {
        compra.cantidad = 1
        const action = {
            type: '[CARRITO] Agregar Compra',
            payload: compra
        }
        dispatch(action)
    }
    const aumentarCantidad = (id) => {
        const action = {
            type: '[CARRITO] Aumentar Cantidad',
            payload: id
        }
        dispatch(action)
    }
    const disminuirCantidad = (id) => {
        const action = {
            type: '[CARRITO] Disminuir Cantidad',
            payload: id
        }
        dispatch(action)
    }
    const eliminarCompra = (id) => {
        const action = {
            type: '[CARRITO] Eliminar Compra',
            payload: id
        }
        dispatch(action)
    }
    const comprasReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CARRITO] Agregar Compra':
                return [...state, action.payload]
            case '[CARRITO] Aumentar Cantidad':
                return state.map((producto) => {
                    if (producto.id == action.payload ) {
                        return {
                            ...producto,
                            cantidad: producto.cantidad + 1
                        }
                    } return producto
                })
            case '[CARRITO] Disminuir Cantidad':
                return state.map((producto) => {
                    if (producto.id == action.payload && producto.cantidad > 1) {
                        return {
                            ...producto,
                            cantidad: producto.cantidad - 1
                        }
                    }
                    return producto

                })
            case '[CARRITO] Eliminar Compra':
                return state.filter((producto) => producto.id != action.payload);

            default:
                return state;
        }
    }
    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)



    return (
        <CarritoContext.Provider value={{ listaCompras, agregarCompra, disminuirCantidad, aumentarCantidad, eliminarCompra }}>
            {children}
        </CarritoContext.Provider>
    )
}
