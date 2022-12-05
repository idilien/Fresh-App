import  axios  from "axios";
import { useRouter } from "next/router";
import { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";


const RestaurantContext = createContext()

const RestaurantProvider = ({children}) => {

    const [categories, setCategories] = useState([])
    const [categoryActual, setCategoryActual] = useState({})
    const [product, setProduct] = useState({})
    const [modal, setModal] = useState(false)
    const [order, setOrder] = useState([])
    const [name, setName] = useState('')
    const [total, setTotal] = useState()

    const router =useRouter()
   

    const getCategories = async () => {
            const {data} = await axios('/api/categories')
            setCategories(data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        setCategoryActual(categories[0])
    }, [categories])

    useEffect(() => {
        const newTotal = order.reduce((total, product) => (product.price * product.quantity)+ total,0)
        setTotal(newTotal)
    }, [order])
    

    const handlerClickCategoyActual = id => {
        const category = categories.filter(cat => cat.id === id)
        setCategoryActual(category[0]);
        router.push('/')
    }

    const handlerSetProduct = product => {
        setProduct(product)
    }

    const handlerChangeModal = () => {
        setModal(!modal)
    }

    const handlerAddOrder = ({categoryId, ...product}) => {
        if(order.some(productState => productState.id === product.id)){
           const orderActual = order.map(productState => productState.id === product.id ? product : productState)
            setOrder(orderActual)
            toast.success('Guardado Correctamente')
        }else{      
            setOrder([...order,product])
            toast.success('Añadido al Carrito')
        
            
        }      
        setModal(false)
    }

    //Change Quantity in Edit Mode
    const hanlerChangeEdit = id => {
        console.log(id);
        const productUpdate  = order.filter(product => product.id === id)
        setProduct(productUpdate[0])
        setModal(!modal)
    }

    const hanlerDelete = id => {
        const productUpdate = order.filter(product => product.id !== id)
        setOrder(productUpdate)
    }

    const handlerOrder =async (e) => {
        e.preventDefault()
        try {
          await axios.post('/api/order', {order,name,total, date:Date.now().toString()})

          //Reser App
         setCategoryActual(categories[0])
          setOrder([])
          setName('')
          setTotal(0)
          
          toast.success('Pedido Realizado Correctamente')
          setTimeout(() => {
            router.push('/')
          },5000);
        } catch (error) {
            console.log(error)
        }
    }
    
    return(
        <RestaurantContext.Provider
                value={{
                    product,
                    categories,
                    categoryActual,
                    handlerClickCategoyActual,
                    handlerSetProduct,
                    modal,
                    handlerChangeModal,
                    handlerAddOrder,
                    order,
                    hanlerChangeEdit,
                    hanlerDelete,
                    handlerOrder,
                    total,
                    name,
                    setName
                
                }}
        >
            {children}
        </RestaurantContext.Provider>
    )
}
export {
    RestaurantProvider
}
export default RestaurantContext

    