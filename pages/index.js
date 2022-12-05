
import Image from 'next/image'
import Product from '../components/Product'
import useRestaurant from '../hooks/useRestaurant'
import Layout from '../layout/Layout'

export default function Home () {
  
  const { categoryActual} = useRestaurant()
  
  return (
    <Layout page={` ${categoryActual?.name}`}>
        <h1 className="mt-5 pb-4 text-4xl font-black text-amber-500">{categoryActual?.name}</h1>
        <div className='grid gap-3 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {categoryActual?.product?.map(product =>(
          <Product
              key={product.id}
              product={product}
          />       
          ))}
          </div>

      </Layout>
 
  )
}








