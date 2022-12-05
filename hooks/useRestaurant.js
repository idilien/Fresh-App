import { useContext } from "react";
import RestaurantContext, { RestaurantProvider } from "../context/RestaurantProvider";



const useRestaurant = () => {
 return useContext(RestaurantContext)
}

export default useRestaurant