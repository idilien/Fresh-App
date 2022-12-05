import Image from "next/image"
import { useState, useEffect } from "react"
import useRestaurant from "../hooks/useRestaurant"


const ModalProduct = () => {
     const {product, handlerChangeModal,  handlerAddOrder, order} =  useRestaurant()
     const [quantity, setQuantity] =  useState(1)
     const [edit, setEdit] =  useState(false)

     useEffect(() => {
         if(order.some(orderState => orderState.id === product.id)){
            console.log('SI EXISTE')  
            setEdit(true)   
            const productEdit = order.find(orderState => orderState.id === product.id)
            setQuantity(productEdit.quantity)  
        }
     }, [product, order])
     

    return (
        <div className="md:flex gap-10">
        <div className="md:w-1/3">
                <Image className="rounded-xl" src={`/assets/img/${product.image}.jpg`} width={800} height={600} alt=""img product/>
        </div>
        <div className="p-3 md:w-2/3" >
            <div className=" flex justify-end" >
                <button 
                    onClick={handlerChangeModal}
                >
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
            <h1 className=" text-3xl font-bold">{product.name}</h1>
            <p className="mt-2 text-3xl text-amber-600 font-bold">{product.price}€</p>
            <div className="mt-2 flex gap-3" >
                <button   
                    type="button"  
                    onClick={() => {
                        if(quantity <= 1) return
                        setQuantity(quantity - 1)
                    } }            
                >
                     <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </button>
                <p className="text-3xl">{quantity}</p>
                <button 
                  type="button"  
                  
                  onClick={() => {
                    if(quantity > 9) return
                    setQuantity(quantity + 1)
                  } }                      
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </button>
                </div>
                <button className="mt-5 py-1 px-3  border rounded-lg bg-green-400  hover:bg-green-700 hover:text-white  uppercase font-bold"
                                type="button"
                                onClick={() => handlerAddOrder({...product, quantity})}
                >
                    {edit ? 'Guardar Cambios' : 'Añadir al Carrito'}
                      
                </button>
        </div>
    </div>
  )
}

export default ModalProduct