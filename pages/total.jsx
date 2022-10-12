import { useEffect,useCallback } from "react";
import useQuiosco from "../hooks/useQuiosco";
import Layout from "../layout/layout"

export default function Total(){

    const{pedido,nombre,setNombre,colocarOrden, total}=useQuiosco()
    
    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === '' || nombre.length < 3;
    },[pedido, nombre])
    useEffect(() =>{
            comprobarPedido()
    },[pedido, comprobarPedido])

 

    return(
        <Layout pagina ="Total">
        <h1 className="text-4xl font-black">Confirmar</h1>
        <p className="text-2xl my-10">Introduce tus datos</p>
        <form
                onSubmit={colocarOrden}
        >
            <div>
                <label
                         className="text-xl block uppercase text-slate-600 font-bold"
                        htmlFor="nombre"
                >
                    Nombre:
                </label>
                <input
                        className="mt-3 p-2  bg-gray-200 w-full lg:w-1/3"
                         type="text"
                         id="nombre"
                         value={nombre}
                         onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className="mt-10">
                <p className="text-2xl">
                    Total: {''} <span className="font-bold">{(total)}</span>
                </p>
            </div>
            <div className="mt-5">
            <input 
                    className={`${comprobarPedido() ? ' bg-green-300' :  'bg-green-500 hover:bg-green-600'}   px-5 py-2 text-center w-full lg:w-auto rounded-md uppercase font-bold text-white`}
                    value="Confirmar pedido"
                    type="submit"
                    disabled={comprobarPedido()}
                    />
            </div>
        </form>
        </Layout>
    )
}