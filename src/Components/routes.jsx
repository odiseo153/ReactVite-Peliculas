import React from 'react'
import {BrowserRouter as Bowser ,Route,Routes,Link } from 'react-router-dom'
import Vista from './Pelis'
import Presentacion from './Presentacion'
import Slider from './Slider'

function Obtencion () 
{
  return (
    <div>
       
<Bowser>
   <Routes>
    
     <Route path='/about' element={<Presentacion/>} />
     <Route path='/' element={<Vista/>} />
    

   

   </Routes>
 </Bowser>



    </div>
  )
}

export default Obtencion