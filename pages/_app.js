
import {RestaurantProvider} from '../context/RestaurantProvider'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  return (
      <RestaurantProvider>
         <Component {...pageProps} /> 
      </RestaurantProvider>
    
  )
}

export default MyApp
