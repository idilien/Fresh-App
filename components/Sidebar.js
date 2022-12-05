import Image from "next/image"
import useRestaurant from "../hooks/useRestaurant"
import Category from "./Category"


const Sidebar = () => {

  const {categories} = useRestaurant()
  
  return (
    <>
        <div >
          <div className=" mt-10 flex justify-center">
              <Image className="" src="/assets/img/logo_fenicia.jpg" width={300} height={90}  alt="img logo"/>
          </div>
              <nav className="mt-7 px-2">
                {categories.map(cat =>(
                  <Category
                  key={cat.id}
                  cat={cat}
                  />
                  ))}
              </nav>
        </div>
    </>
  )
}

export default Sidebar