import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco";
import {formatearDinero} from "../helpers/index"
import { useState, useEffect } from "react";


const ModalProductos = () => {
    
    const{producto, handleChangeModal,handleAgragarPedido, pedido}= useQuiosco();
    const[cantidad,setCantidad]=useState(1)
    const[edicion,setEdicion]=useState(false)

    useEffect(() =>{
      if(pedido.some(pedidoState => pedidoState.id === producto.id)){

        const productoEdicion =pedido.find((pedidoState ) => pedidoState.id === producto.id)
        setEdicion(true)
        setCantidad(productoEdicion.cantidad)
     }

    },[producto, pedido])


  return (
    <div className="md:flex gap-10">
            <div className="md:w-1/3">
                <Image
                src={`/assets/img/${producto.imagen}.jpg`}
                width={300}
                height={400}
                alt="img modal"
                />
            </div>
            <div className="md:w-2/3">
              <div className="flex justify-end">
                <button
                    onClick={handleChangeModal}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
              </div>
                <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>

                <p className="mt-5  font-black text-5xl text-amber-500">
                    {formatearDinero(producto.precio)}
                </p>

                <div className="flex gap-4 mt-5">
                    <button
                    type="button"
                    onClick={() => {
                      if(cantidad <= 1) return
                      setCantidad(cantidad -1)
                    }}
                    >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                    </button>
                    <p className="text-3xl">{cantidad}</p>
                    <button
                    type="button"
                    onClick={() => {
                      if(cantidad >= 9) return
                      setCantidad(cantidad  + 1)
                    }}
                    >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
                    </button>
                </div>

                <button
                type="button"
                className="mt-5  px-5 py-2  bg-green-500 hover:bg-green-600 text-white font-bold uppercase rounded-lg"
                    onClick={() => handleAgragarPedido({...producto,cantidad})}
               >
                  
                  {edicion ? 'Guardar Cambios' : 'Añadir'}
                </button>
            </div>
    </div>
  )
}

export default ModalProductos