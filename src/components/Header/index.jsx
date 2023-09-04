import React from "react";
import Logo from "./Logo"
import Menu from "./Menu"
import "./style.scss"
function Header(){
    return(
        <header>
            <Logo/>
            <Menu/>
        </header>
    )
}
export default  Header