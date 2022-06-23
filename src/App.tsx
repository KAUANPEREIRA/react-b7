import React from 'react';
import Header from './components/Header/Header';
import { Photo } from './components/Photo/Photo';

import './App.css';

function App() {

  const ola =()=>{
    alert('Um dia vai chegar o dia')
  }
  return (
    <div className="App">
      <Header title="Estudando React Header"/>
      <h1></h1>
      <Photo url="http://www.google.com.br/google.jpg" legend='um dia vai chegar o dia' />
      <button onClick={ola}>Clique Aqui</button>
    </div>
  );
}

export default App;
