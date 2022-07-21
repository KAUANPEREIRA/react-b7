import React, { ChangeEvent, useEffect } from 'react';
import Header from './components/Header/Header';
import { Photo } from './components/Photo/Photo';
import { Botao } from './components/Botao/Botao';
import { useState } from 'react';

import './App.css';

function App() {
  const [show,setShow]=useState(false)

  
  {/*componente nome aula ciclo de vida */}
  const [nome,setNome] = useState<string>('')
  const [sobrenome,setSobrenome]  = useState<string>('')
  const [nomeCompleto,setNomeCompleto] = useState<string>('')
  
  {/* contador */}
  const [n, setN] = useState(0)
  const soma =()=>{
    setN(n+1)
  }
  const subtrair =()=>{
    if(n>0){
      setN(n-1)
    }
  }

let amigos =[
  'geraldo',
  'Cristiano',
  'Hugo',
  'Alemao',
  'willian',
  'dopicles'
]

 const n1 = 5

const handleView =()=>{
 if(show){
  setShow(false)
 }else{
  setShow(true)
 }
}

const handleNome =(e:ChangeEvent<HTMLInputElement>)=>{
  setNome(e.target.value)
}

const handleSobrenome =(e:ChangeEvent<HTMLInputElement>)=>{
  setSobrenome(e.target.value)
}

useEffect(()=>{
 setNomeCompleto(`${nome} ${sobrenome}`)
},[nome,sobrenome])

console.log('MEU NOME',nome)
  return (
    <div className="App">
      <Header/>
      <h2>Contador</h2>
      <button onClick={soma}>+</button>
            {n}
      <button onClick={subtrair}>-</button>
      <hr></hr>
      <Botao text="um dia " />
      <hr></hr>
      <h4>Alguns colegas</h4>
      <ul>
        {amigos.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr></hr>
      <button onClick={handleView}>Mostrar</button>
      {show===true?<div>bla bla bla</div>:''}
      <h1>INPUTS CAMPO AULAS COM USEEFCT</h1>
      <input type="text" placeholder='digite seu nome' value={nome} onChange={handleNome}/>
      <input type="text" placeholder='digite seu sobrenome' value={sobrenome} onChange={handleSobrenome}/>
      <p>Nome completo :{nomeCompleto?nomeCompleto:''}</p>
    </div>
  );
}

export default App;
