import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria"


const Siderbar = () => {

    const {categorias}=useQuiosco()
    
  return (
    <>
        <Image src="/assets/img/logo.svg" width={300} height={100} alt="img logo"/>
        <nav className="mt-10">
                {categorias.map( categoria =>(
                        <Categoria
                        key={categoria.id}
                        categoria={categoria}
                        />
                ))}
        </nav>
    </>

  )
}

export default Siderbar