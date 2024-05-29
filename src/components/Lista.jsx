import { useState } from "react"
export const Lista=({texto, index, setListaTareas, listaTareas})=>{
    const [isChecked, setIsChecked]= useState(false)
    const eliminarTarea= (index)=>{
        const nuevaLista= listaTareas.filter((_, i)=> i!== index)
        setListaTareas(nuevaLista)
    }
    
    return(
        <article className="lista"  >
            <p className="lista-texto"  style={{textDecoration: isChecked? 'line-through' : ""}} >{texto}</p>
            <input className="lista-checkbox" type="checkbox"  onClick={()=> setIsChecked(isChecked? false : true)  } />
            <button className='lista-delete' onClick={()=>eliminarTarea(index)}  >Delete</button>
        </article>
    )
}