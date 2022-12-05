import { useRouter } from "next/router"
import useRestaurant from "../hooks/useRestaurant"



const stepsNav = [
    {step: 1, name: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>, url: '/'},
    {step: 2, name: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, url: '/resume'},
    {step: 3, name: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>, url: '/total'},
]

const Steps = () => {

    const {step, hanlerChangeStep} =useRestaurant()

    const router = useRouter()

    const calculateProgress = () => {
      let value;
      if(router.pathname === "/"){
        value = 20;
      }else if( router.pathname === "/resume"){
        value = 50;
      }else{
        value = 100
      }
      return value
    }

    return(
        <>
            <div className="mt-5 flex justify-center md:justify-around" >
                {stepsNav.map((step) => (
                    <button className="mx-10 text-2xl font-bold"
                    onClick = {() => {
                        router.push(step.url)
                    }}
                    key={step.step}
                    >
                        {step.name}</button>
                ))}
            </div>
            <div className= "mt-2 mx-auto w-80 md:w-4/5 bg-gray-100 mb-10">
                <div 
                    className="w-10 h-2 text-white  text-center rounded-full bg-amber-500 text-xs leading-none"
                    style={{width: `${calculateProgress()}%`}}
                >

                </div>
            </div>
        </>
    )
}
    


export default Steps