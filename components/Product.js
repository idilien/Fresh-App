import Image from "next/image"
import useRestaurant from "../hooks/useRestaurant"


const Product = ({product}) => {

    const{handlerSetProduct,    handlerChangeModal} = useRestaurant()

    const{name, image, price} = product
    return (
        <div className=" p-3 border">
             <Image className="rounded-xl" src={`/assets/img/${image}.jpg`} width={300} height={200} alt="img product"/>
            <div className="pt-2">
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className=" text-2xl ">{price}€</p>
                <button className="mt-5 p-1  border rounded-lg hover:bg-green-700 hover:text-white w-full uppercase font-bold"
                            type="button"
                            onClick={() => { 
                                handlerChangeModal()
                                handlerSetProduct(product)
                            
                            }}
                >
                    añadir al carrito
                </button>
            </div>
         </div>
  )
}

export default Product