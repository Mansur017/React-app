import React from "react"
import image from "../../assets/images/refresh.png"
function Buttons(){
    return(
        <div className="button-container">
        <button type="button" className="plus">+</button>
        <button type="button" className="reload">  <img src={image} alt="#" /> </button>
        <button type="button" className="minus">-</button>
        </div>
    )
    }
    
    
    
    export default Buttons