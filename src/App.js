
import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { Lista } from './components/Lista';

function App() {

  const [listaTareas, setListaTareas]= useState(Array(1).fill("Get MERN black belt"))

  
  


  return (
    <>
  <Form   
                listaTareas={listaTareas}
                setListaTareas={setListaTareas}
                />
  {listaTareas.map((texto, index)=> <Lista key={index} index={index} texto={texto} listaTareas={listaTareas} setListaTareas={setListaTareas}  />)}
  </>
  );
}

export default App;
