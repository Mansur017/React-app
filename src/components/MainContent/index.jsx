import React, { useState } from "react"
import "./style.scss"
import Number from "./Number"
import Buttons from "./Buttons"

function MainContent(){
 const [number, setNumber] = useState(0)

return (
    <div className="main-block">   
        <Number number = {number} />
        <Buttons number = {number} setNumber = {setNumber} />
    </div>
)
}
export default MainContent