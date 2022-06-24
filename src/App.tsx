import React from 'react';
import Header from './components/Header/Header';
import { Photo } from './components/Photo/Photo';
import { useState } from 'react';

import './App.css';

function App() {

  const [name, setName] = useState('')
  const [lastName,setLastName]= useState('')
  const [age,setAge] = useState(0)

  const handleName =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value)
    setLastName(e.target.value)
    setAge(e.target.value)
    
  }

  

  return (
    <div className="App">
      nome:
      <input type="text" value={name} onChange={handleName} placeholder="digite seu nome"/>
      <hr></hr>
      Seu nome é: {name}
      
    </div>
  );
}

export default App;
