import Image from "next/image"
import {formatearDinero} from "../helpers/index"
import useQuiosco from "../hooks/useQuiosco"


const ResumenPedido = ({producto}) => {

    const{handleEditarCantidad,handleEliminarProducto} = useQuiosco()
  return (
    <div className="p-5 shadow m-3 flex gap-10 items-center">
        <div className="md:w-1/6">
            <Image 
                    src={`/assets/img/${producto.imagen}.jpg`}
                    width={300}
                    height={400}
                    alt={"img producto"}
                    />
        </div>
        <div className="md:w-4/6">
            <p className="text-3xl font-bold">{producto.nombre}</p>
            <p className="mt-2 text-xl font-bold">Cantidad:{producto.cantidad}</p>
            <p className="mt-2 text-xl font-bold text-amber-800">Precio unidad:{formatearDinero(producto.precio)}</p>
            <p className="mt-2 text-2xl font-bold text-amber-500">Subtotal:{formatearDinero(producto.precio * producto.cantidad)}</p>
        </div>

        <div>
            <button
                className="px-5 py-2 text-white  bg-sky-700 flex gap-2 rounded-md font-bold uppercase shadow-md w-full "
                type="button"
                onClick={() => handleEditarCantidad(producto.id)}
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
                Editar
            </button>
            <button
                className="mt-4 px-5 py-2 text-white  bg-red-600 flex gap-2 rounded-md font-bold uppercase shadow-md w-full "
                type="button"
                onClick={() => handleEliminarProducto(producto.id)}
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                Eliminar
            </button>

        </div>
    </div>
  )
}

export default ResumenPedido