import React, {useState} from "react";

function Header({onDarkModeClick, childIsDark}){
    // 
console.log(onDarkModeClick)
return (<header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
        {childIsDark ? "Dark" : "Light"} Mode
        </button>
      </header>
)
}
export default Header;