import { useState } from 'react';
import './App.css';

function App() {
  let [aa, setAa] = useState(1)
  let aaPlus = () => {
    aa++;
    setAa(aa);
  }
  let aaMinus=()=>{
    aa--;
    setAa(aa);
  }

  let [bb, setBb] = useState(1)
  let bbPlus = () => {
    bb++;
    setBb(bb);
  }
  let bbMinus=()=>{
    bb--;
    setBb(bb);
  }

    let [cc, setCc] = useState()
    let pushButton = () => {
      cc = aa + bb;
      setCc(cc);

    }
    return (
      <div className="App">
        <div>
        <button onClick={aaMinus}>minus</button>
        <p className='center'>{aa}</p>
        <button onClick={aaPlus}>plus</button>
        
        </div>
        <div className='center'>+</div>
        <div>
        <button onClick={bbMinus}>minus</button>
        <p className='center'>{bb}</p>
        <button onClick={bbPlus}>plus</button>
        
        </div>
        <div className='center'>=</div>
        <div>
        <p className='center'><br/>{cc}</p>
        <button onClick={pushButton}>sum</button>
        </div>
      </div>
    )
  };
  export default App;
