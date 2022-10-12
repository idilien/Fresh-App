import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"



const Categoria = ({categoria}) => {
    const {handleClickCategoria,categoriaActual}=useQuiosco()
    const {nombre,icono,id}=categoria
  return (
    <div className= {`${
      categoriaActual?.id === id ? 'bg-amber-400': ""
      }  p-5 flex items-center gap-3 w-full border  hover:bg-amber-400`}>
            <Image
            src={`/assets/img/icono_${icono}.svg`}
            width={100}
            height={100}
            alt="img icono"
            />

            <button
                  className="text-2xl font-bold hover: cursor-pointer"
                  type="button"
                  onClick={() => handleClickCategoria(id)}
            >
              {nombre}
            </button>
    </div>
  )
}

export default Categoria