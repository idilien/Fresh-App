import ResumeProduct from "../components/ResumeProduct"
import useRestaurant from "../hooks/useRestaurant"
import Layout from "../layout/Layout"

const Resume = () => {
    
    const {order} = useRestaurant()
    
    return (
        <Layout page={Resume}
        >
          <h1 className="text-4xl font-black">Carrito</h1>
          <p className="text-2xl my-10">Confirma tu pedido</p>

          {order.lenght ===  0 ? (
              <p className="text-center text-2xl"> Carrito Vacío </p> 
              ) : (         
                  order.map(product => (
                       <ResumeProduct
                                key={product.id}
                                product={product}
                                />
                  ))                     
          )
          }
          
      </Layout>
  )
}

export default Resume