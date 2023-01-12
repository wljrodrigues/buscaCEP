import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';
import api from './services/api.js';

function App() {
const [input, setInput] = useState('')
const [cep, setCep] = useState({});

async function handleSearch(){
  if(input === ''){
    alert("Preencha algum CEP")
    return;
} 
try{
  const response = await api.get(`${input}/json`);
  setCep(response.data)
  setInput("");

}
catch{
    alert("Ops erro ao buscar");
    setInput('') //limpar o campo após clicar em fechar.
  }
}
  return (
    
    <div className="container">    
      
      <h1 className="title">Buscar CEP - Brasil</h1>
      

    <div className="containerInput">
        <input
        type="text"
        placeholder="Digite seu cep..."
        value={input}
        onChange={(e) => setInput(e.target.value) }
        
        />

        <button className="buttonSearch" onClick={handleSearch}>
        <FiSearch size={25} color="#fff"/>
        </button>
        </div>

{Object.keys(cep).length > 0 && (

<main className="main">
<h2>CEP: {cep.cep}</h2>
  <span>Logradouro: {cep.logradouro}</span>
  <span>Complemento: {cep.complemento}</span>
  <span>Bairro: {cep.bairro}</span>
  <span>Localidade: {cep.localidade}</span>
  <span>UF: {cep.uf}</span>
  <span>DDD: {cep.ddd}</span>
  </main>

  )}
<div className="containerFooter">

  <span>Desenvolvido por Walter Rodrigues</span>

</div>

</div>
   
 );
}

export default App;



