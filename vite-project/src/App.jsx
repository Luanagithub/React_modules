import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [IMC, Calcular] = useState(0);
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (id === 'peso') {
      setPeso(value);
    } else if (id === 'altura') {
      setAltura(value);
    }
  };

  return (
    <>
      <h1>Calculadora de IMC</h1>
      <div className='Align'>
        <input className='Align' id="peso" type='number' placeholder='Peso' value={peso} onChange={handleInputChange}></input>
        <br></br>
        <input className='Align' id="altura" type='number' placeholder='Altura' value={altura} onChange={handleInputChange}></input>
      </div>
      
      <div className="card">
        <button onClick={() => Calcular((IMC) => (peso) / (altura*altura))}>
        The IMC is : {IMC}
        </button>
      </div>
    </>
  )
}

export default App
