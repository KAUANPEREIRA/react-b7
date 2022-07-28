import React, { ChangeEvent, useEffect } from 'react';
import Header from './components/Header/Header';
import { Photo } from './components/Photo/Photo';
import { Botao } from './components/Botao/Botao';
import { useState } from 'react';
import axios from 'axios';

import './App.css';
import { isTemplateExpression } from 'typescript';

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

{/*get simples explicando que vai receber um array de props aula get simples*/}

 type Props ={
  titulo:string
  avatar:string
}


const [dadosApi,setDadosApi]= useState<Props[]>([]) 

  useEffect(()=>{
  axios.get(`https://api.b7web.com.br/cinema/`)
  .then((response)=>{
    setDadosApi(response.data)
  })
  .catch(()=>{
    console.log('erro na requisição')
  })
  
},[])

console.log('data appi',dadosApi)

{/* modelo requisicao assincrona  com tipagem*/}

type JsonProps ={
  userId:number
  id:number
  title:string
  body:string
}

const [post, setPosts] = useState<JsonProps[]>([])
useEffect(()=>{
  const getPosts = async () =>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/`)
    .then(res =>setPosts(res.data))
  }
  getPosts()
},[])

console.log('meus 100 posts',post)


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
      <h1>AULA DE GET SIMPLES</h1>
      {/* <ul>
        {dadosApi.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul> */}
{/* 
      <ul>
        {dadosApi.map((item,index)=>{
          return(
            <li key={index}>{item?.titulo}</li>
          )
        })}
      </ul> */}

      <h2>Json Placeholder</h2>




    </div>

    
  );
}

export default App;
