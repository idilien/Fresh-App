import { useRouter } from "next/router";



const pasos =[
    {paso:1, nombre: 'Menú', url:'/'},
    {paso:2, nombre: 'Carrito', url:'/resumen'},
    {paso:3, nombre: 'Confirmar', url:'/total'},
];



const Pasos = () => {
   
    const router = useRouter()
    
    const calcularProgreso = () => {
       let valor
       if(router.pathname === "/"){
        valor= 25
       }else if(router.pathname === "/resumen"){
        valor = 50
       }else{
        valor= 100
       }
       return valor
    }

  return (
        <>
            <div className=" flex justify-around my-10">
                {pasos.map( (paso) => (
                    <button
                        onClick={() =>{
                            router.push(paso.url);
                        }}
                        className="text-2xl font-bold" key={paso.paso}>
                        {paso.nombre}
                    </button>
                ))}
            </div>
            <div className="bg-gay-100 mb-10">
                <div className="rounded-full bg-amber-400 text-xs leading-none h-2 text-center text-white"
                                        style={{width:`${calcularProgreso()}%`}}
                >

                </div>
            </div>
        </>
  )
}

export default Pasos