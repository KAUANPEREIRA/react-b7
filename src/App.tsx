import React from 'react';
import Header from './components/Header/Header';
import { Photo } from './components/Photo/Photo';
import { useState } from 'react';

import './App.css';

function App() {

  const [name, setName] = useState('')
  const [lastName,setLastName]= useState('')
  const [age,setAge] = useState('')

  const handleName =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value)

  }

  const handleLastName =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setLastName(e.target.value)
  }

  const handleAge =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setAge(e.target.value)
  }
  
  const [n, setN] = useState(0)

  const soma =()=>{
    setN(n+2)
  }

  const subtrair =()=>{
    if(n>0){
      setN(n-1)
    }
  }



  

  return (
    <div className="App">
      nome:
      <input type="text" value={name } onChange={handleName} placeholder="digite seu nome"/>
      <input type="text" value={ lastName } onChange={handleLastName} placeholder="digite seu Sobrenome"/>
      <input type="text" value={ age } onChange={handleAge} placeholder="digite sua idade"/>
      <hr></hr>
      Seu nome é : {name } <br></br> 
      { lastName } 
         sua idade é { age} anos
      <hr></hr>
      <h2>Contador</h2>

      <button onClick={soma}>+</button>
            {n}
      <button onClick={subtrair}>-</button>


      
    </div>
  );
}

export default App;
