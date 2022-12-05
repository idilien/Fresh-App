import { useEffect, useCallback } from "react"
import useRestaurant from "../hooks/useRestaurant"
import Layout from "../layout/Layout"


export default function Total() {
    
   const {order, name, setName, handlerOrder, total} = useRestaurant()

    const checkOrder = useCallback(() => {
        return order.length === 0 || name === '' || name.length < 3
    },[order, name])
    
    useEffect(() => {
        checkOrder()
    }, [order, checkOrder])


  return (
    <Layout page={Total}
    >
        <h1 className="text-4xl font-black">Total</h1>
        <p className="text-2xl my-10">Datos de envio</p>

        <form onSubmit={handlerOrder}>
            <div>
                <label
                    className="block uppercase text-slate-800 font-bold text-xl" 
                    htmlFor="name"
                >
                    Nombre:
                </label>
                <input className="mt-3 p-2 bg-gray-200 w-full lg:w-1/3 rounded-md"
                        type="text" 
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="mt-10">
                <p className="text-2xl">
                    Total a pagar {' '} <span className="font-bold">{total}€</span>
                </p>
            </div>
            <div  className="mt-5">
                <input className={ `${checkOrder() ? 'bg-green-200': 'bg-green-500 hover:bg-green-700'}   px-5 py-2 w-full lg:w-auto text-center rounded-lg uppercase font-bold text-white`}
                        type="submit" 
                        value="Confirmar pedido"
                        disabled={checkOrder()}
                />
            </div>
        </form>

    </Layout>
)
  
}
