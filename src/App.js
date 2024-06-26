import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [style,setStyle]=useState("light");
  const [color,setColor]=useState("white");
  

  const changeStyle = ()=>{
    if(style!=="light"){
      setStyle("light");
      setColor("white");
    }
    else{
      setStyle("dark");
      setColor("black");
      }
  }
  return (
    <div className={style}>
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" onClick={changeStyle}/>
        <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-100 dark:peer-focus:ring-blue-100 rounded-full peer dark:bg-white-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black after:border-black after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-black-600 peer-checked:bg-black peer-checked:dark:after:bg-white"></div>
        <span class={color}>Light/Dark</span>
      </label>
    </div>
  )
}

export default App
