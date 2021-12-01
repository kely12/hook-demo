import './App.css';
import React, {useState} from 'react';

function App() {
  const [n, setN] = useState(0);
  return (
    <div className="App">
      <div>数量{n}</div>
      <div onClick={() => setN(n+1)}>点击</div>

    </div>
  );
}

export default App;
