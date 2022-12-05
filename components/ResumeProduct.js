import Image from "next/image"
import useRestaurant from "../hooks/useRestaurant"

const ResumeProduct = ({product}) => {

    const {hanlerChangeEdit, hanlerDelete}= useRestaurant()

    return (
        <div className="p-3 shadow flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-2/6 rounded-lg">
            <Image src={`/assets/img/${product.image}.jpg`} width={300} height={200} alt="img product"/>
            </div>
            <div className="md:w-2/6 ">
                <p className="text-3xl font-bold">
                    {product.name}
                </p>
                <p className="text-xl font-bold">
                    Cantidad: {product.quantity}
                </p>
                <p className="text-xl font-bold text-amber-500">
                    Precio: {product.price}€
                </p>
                <p className="text-sm font-bold">
                    Subtotal: {product.price * product.quantity}€
                </p>
            </div>
            <div>
                <button
                    type="button"
                    className="px-5  bg-amber-400  flex gap-2 items-center rounded-md font-bold text-white shadow-md w-full uppercase"
                    onClick={() => hanlerChangeEdit(product.id)}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    Cambiar
                </button>
                <button
                    type="button"
                    className="mt-5 px-5  bg-red-400  flex gap-2 items-center rounded-md font-bold text-white shadow-md w-full uppercase"
                    onClick={() => hanlerDelete(product.id)}
               >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    Eliminar
                </button>
                
            </div>
        </div>
  )
}

export default ResumeProduct