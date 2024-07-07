import { useState } from "react"

export const Form= ({listaTareas, setListaTareas})=>{

    const [textoTarea, setTextoTarea]= useState("")

    const agregarALista=(event)=>{
        event.preventDefault()
        const newListaTareas= [...listaTareas, textoTarea]
        setListaTareas(newListaTareas)
        setTextoTarea("")
    }
    
    return(
        <form onSubmit={agregarALista} className="form" >
            <p>hello</p>
            <input className="form-input" type="text" value={textoTarea}  onChange={(e)=>setTextoTarea(e.target.value)}  />
            <button className="form-input-boton">Add</button>
        </form>
    )
}
