import React from 'react'

function Presentacion() {
  
  const Portapapeles = async ()=>
  {
    try {
        await navigator.clipboard.writeText("odiseorincon@gmail.com")

        alert('email copiado al portapapeles')
    }catch(e)
    {
console.log(e)
    }
  }

  const whatsapp = async ()=>
  {
    try {      
        await navigator.clipboard.writeText("8297890766")
        alert('WhasApp copiado al portapapeles')
        
    }catch(e)
    {
console.log(e)
    }
  }

  
    return (
    <div>
 <div className="card" >
  <img className="card-img-top" id='imaPre' src='/src/data/odise.jpg'  alt="Card image cap" />
  <h1 >Odiseo Esmerlin Rincon Sanchez</h1>
  <h4>Web Development</h4>
  <div className="card-body" id='texto'>
  <p id='pr' className="card-text">Hi, I'm a web developer with experience in programming languages ​​like HTML, CSS, JavaScript,React,C# Web Api and Asp.Net, and developing web applications on multiple platforms. I have a solid understanding of web design principles and development best practices, having worked on projects from the planning phase through deployment and maintenance. I am passionate about creating effective and engaging web experiences for users, and am constantly updating myself on the latest technologies and trends in the field of web development to improve my skills and knowledge.</p>
 
   
 
<br />
<br />
<div id='social'>
   
    <a onClick={whatsapp} type="button" class="btn btn-success">
<img id='icon' src='https://png.pngtree.com/png-vector/20230225/ourmid/pngtree-whatsapp-icon-social-media-png-image_6618452.png' />
    8297890766
    </a>
    
    <a id='so' target="_blank" href='https://www.linkedin.com/in/odiseo-esmerlin-rincon-sanchez-48053524b/' type="button" class="btn btn-primary">
    <img id='icon' src='https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-vkm0drb1.png' />
    Linkedin</a>
    <br />
    <br />


    <a id='so1'  href='https://github.com/' target="_blank" type="button" class="btn btn-dark">
    <img id='icon' src='https://cdn3.iconfinder.com/data/icons/inficons/512/github.png' />
 .GitHub</a>

 <a onClick={Portapapeles} id='so2'  type="button" class="btn btn-dark">
    <img id='icon' src='https://workspace.google.com/static/img/products/png/gmail.png?cache=f50ecb6' />
 .odiseorincon@gmail.com</a> 
 </div>

  </div>



</div>
    </div>
    

  )
}

export default Presentacion
