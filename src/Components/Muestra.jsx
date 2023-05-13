import React, { useState, useEffect } from 'react';
import style from './styles/Obtencion.module.css' 

  const Muestra = ({imagen,descripcion,video})=>
  {
 return(
  <div> 
 <a href={video} target="_blank">
    <div className={style.con}>
    <div id={style.container}>
    
  <img src={imagen} alt="Avatar" id={style.ima} />

  <div id={style.texto}>

      <textarea id={style.bio}>{descripcion}</textarea>
    
 
  </div>

</div>
  </div>
    </a>
  </div>
 )
  
 }




export default Muestra;















