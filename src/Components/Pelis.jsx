import React, { useState, useEffect } from 'react';
import Muestra from './Muestra.jsx';
import style from './styles/Obtencion.module.css' 
import Slider from './Slider.jsx';
import data from '../data/Pelis.json'


function Comp() {

  const [datos,setDatos] = useState(data);
  
  return (
    <div>
    

<div className={style.slider}>
<Slider/>
</div>

      <div className={style.con}>
      


        {datos.map(e =>
          {
            return(
            <div id={style.pelis}> 

              <Muestra key={e.id}
              descripcion={e.descripcion}
              imagen={e.imagen}
              video={e.video}
              />
              
              </div>

            )
          })}
      </div>
    </div>
  );
}

export default Comp;
