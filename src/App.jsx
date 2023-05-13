import { useState } from 'react'

import Presentacion from './Components/Presentacion'
import './Components/styles/Presentacion.css'
import './Components/styles/slider.css'
import Pelis from './Components/Pelis'

function App() {
const[va,setVa] = useState(false)

const mostrar = ()=>
{
let div = document.getElementById('yo')

  

  if(!va)
  {
  div.style.visibility = 'hidden'
setVa(true)

  }
else
{
div.style.visibility = 'visible'
setVa(false)
}


}

  return (
    <div className="App">
     

 <Pelis/>
<button onClick={mostrar}>mostrar</button>

<div id='yo'>
<Presentacion />
</div>
    </div>
  )
}

export default App
