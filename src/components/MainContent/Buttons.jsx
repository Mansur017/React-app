import React from "react"
import image from "../../assets/images/refresh.png"
function Buttons({number, setNumber}){

function plus() {
    setNumber(number+3)
}
function reload() {
    setNumber(0)
}
function minus() {
    if (number > 1) {
        setNumber(number - 2)
    }else if(number = 1){
        setNumber(number - 1)
    }
}
    
    


    return(
        <div className="button-container">
        <button  onClick={plus}  type="button" className="plus">+</button>
        <button  onClick={reload} type="button" className="reload">  <img src={image} alt="#" /> </button>
        <button  onClick={minus} type="button" className="minus">-</button>
        </div>
    )
    }
    
    
    
    export default Buttons