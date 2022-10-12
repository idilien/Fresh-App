import Image from "next/image"
import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

const Producto = ({producto}) => {

    const{handleSetProducto,handleChangeModal }=useQuiosco()
    const{nombre, imagen, precio}=producto

  return (
    <div className="border p-3 rounded-lg">
            <Image
            src={`/assets/img/${imagen}.jpg`}
            width={400}
            height={500}
            alt="img producto"
            />

            <div className="p-5">
                <h3 className="text-2xl font-bold">{nombre}</h3>
                <p className="mt-5 text-4xl font-black text-amber-500">{formatearDinero(precio)}</p>
            <button
                className="p-2 mt-5 w-full bg-green-500 hover:bg-green-600 text-white font-bold uppercase rounded-xl"
                type="button"
                onClick={() => {
                  handleChangeModal()
                  handleSetProducto(producto)
                }}
            >
              Agregar
            </button>
            </div>
    </div>

  )
}

export default Producto