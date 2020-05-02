import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState('');

  const change = e => setCount(Number(e.target.value));

  return (
    <div>
      <h1>houks</h1>
      <input type = "number" onChange = {change} />

      <p> Le compteur est  à : {count} </p>

      <button onClick={() => setCount(count + 1)}> +1 </button>
      <button onClick={() => setCount(count - 1 )}> -1 </button>
    </div>
  );
}

export default Counter;