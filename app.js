
let tarea = document.getElementById("tarea");
const btn = document.getElementById("btn")
let tareaN=0;
let estado=0;

btn.addEventListener("click",(e)=>{
  tareaN++;
  const div = document.querySelector(".padre"); // se deve hacer referencia al padre 
  const p = document.createElement("p"); // se crea el elemento que se desea agregar
  if(tarea.value.length > 0 && validar(tarea.value) == false){
    p.setAttribute(`id`, `tareax-${tareaN}`);
    p.setAttribute(`style`, `text-decoration:none`);
    p.setAttribute(`onclick`, `click1(this.id)`);
    const t = document.createTextNode(tarea.value); // se crea el texto que va a contener el p , en este caso es el del input 
      div.appendChild(p); // se agrega el parrafo en el html
      p.appendChild(t); // se agrega el contenido del parrafo.
  }else{
    alert("el campo no puede estar vacio ");
  }
  
})

function validar (ejem){ // funcion para validar espacios en blanco
  let patron= /^\s+$/; // esto es el patron donde  hay espacios en blanco

  if(patron.test(ejem)) // valida si tiene espacios en blanco 
   return true;
   else return  false;

}

function click1(id){
  const p =document.getElementById(id);
  let ps=window.getComputedStyle(p); // sacar toda la informacion del estilo de este elemento (parrafo)
  let ps1=ps.getPropertyValue('text-decoration'); // sacar el valor del campo (text-decoration)
  
  if(ps1=="none solid rgb(245, 245, 245)"){
  p.setAttribute(`style`,`text-decoration:line-through;`);
  ps=window.getComputedStyle(p);
  ps1=ps.getPropertyValue('text-decoration');
  
  //textDecoration="line-through;" // tachar texto
  }else {
    p.setAttribute(`style`,`text-decoration:none;`);;
    estado=0;
  }
 

}