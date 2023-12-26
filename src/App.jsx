import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="card-section">
      <h1>CONTADOR NUMÉRICO</h1>
      <div className="card">
        <div className="item-card">
          <p className="p-counter">{count}</p>

          <div className="botoes">
            <button onClick={() => setCount((count) => count - 1)}> - </button>
            <button onClick={() => setCount((count) => count + 1)}> + </button>
          </div>

          <ul>
            <li>Diminuir</li>
            <li>Adicionar</li>
          </ul>

          <button onClick={() => setCount(0)}>RESETAR</button>
        </div>
      </div>
    </section>
  );
}

export default App;
