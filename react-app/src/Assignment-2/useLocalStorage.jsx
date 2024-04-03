import  { useState } from 'react'

    
const useLocalStorage = (keyy,defaultvalue) => {
    const[state,setState]=useState('');

    const setting=(value)=>{
      localStorage.setItem('key',value)
      setState(value)
    }

   const removing=()=>{
    localStorage.removeItem('keyy')
   }

      return {state,setting,removing}
}

export default useLocalStorage