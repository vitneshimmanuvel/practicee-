
import { useState,useEffect, useRef, useContext } from 'react'


const Sema = () => {
  
const [state,setstate] = useState("")

setstate(()=>{
    console.log("state changed")
})


useEffect(()=>{
    console.log("component mounted")
},[])


const inputRef = useRef(null)
const contextValue = useContext(MyContext);
console.log(inputRef)

  return (
    <div>
        <div>
            alfaa numeric evetns that areneeded 
        </div>
        <form>
            <input type="text" id='alphaNumericInput'/>
            <button type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default Sema
