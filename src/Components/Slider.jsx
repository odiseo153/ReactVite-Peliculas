import { useState,useEffect } from "react";
import React from 'react'
import data from '../data/Pelis.json'
function Slider() {
  
    const [imagenes,setDatos] = useState(data); 

 

  let img = 'https://image.tmdb.org/t/p/w500'

  
  
    return (
    <div class="slider-frame">
    <ul>
        {imagenes.map(e=>{
           return(
            <li>
            <img src={e.imagenDetras} alt=".."  />    
           </li>
           )
        })}
    </ul>
    </div>
  )
}

export default Slider