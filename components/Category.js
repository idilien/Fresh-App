import Image from "next/image"
import useRestaurant from "../hooks/useRestaurant"


const Category = ({cat}) => {

    const {categoryActual,  handlerClickCategoyActual} = useRestaurant()

    const {id, name, icon} = cat

  return (
    <div className={`${categoryActual?.id === id ? "bg-amber-400" : ''} p-1.5 flex items-center gap-4 w-full  hover:bg-amber-400 `}>
            <Image className="rounded-xl "
                src={`/assets/img/${icon}.jpg`} width={70} height={60} alt="img category"/>

            <button className="text-2xl font-bold hover:cursor-pointer"
                        type="button" 
                        onClick={() => handlerClickCategoyActual(id)} 
            >
                {name}
            </button>
    </div>
  )
}

export default Category