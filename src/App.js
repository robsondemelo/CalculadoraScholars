import {useState} from 'react';
import './App.css';


export default function App(){
  const [posicao, setPosicao]= useState('');
  const[inscritos, setInscritos]=useState('');

  const [mensagem, setMensagem] =useState('');

  

  function calcular(){
    const calc1 = (Math.sqrt(inscritos) * 10) / (Math.sqrt(posicao));
    const calc2 = (Math.sqrt(inscritos) * 5 ) / (Math.sqrt(posicao));
    if(posicao <= (inscritos / 4)){
      setMensagem("O total de pontos obtidos é: " + calc1.toFixed(2) + " pontos.")
    }else {
      setMensagem("O total de pontos obtidos é: " + calc2.toFixed(2) + " pontos.")
    }
  }
  return(
    <div className="app">
      <h1>Calculadora Scholars Leaderboard</h1>
      <span>Calcule os pontos obtidos.</span>
      <div className="area-input">
    <input 
      type="text"
      inputMode='numeric'
      placeholder="Digite a posição atual ou final."
      value={posicao}
      onChange={(e) => setPosicao(e.target.value)}
    />
    <input 
      type="text"
      inputMode='numeric'
      placeholder="Digite o total de inscritos."
      value={inscritos}
      onChange={(e) => setInscritos(e.target.value)}
    />
    <button onClick={calcular}>
      Calcular
    </button>
      </div>

      <h2>{mensagem}</h2>
      <h2>Desenvolvido por Robson Melo.</h2>
    </div>

  );
}