import React, { useState } from "react";

function CounterHook() {
  const [count, setCount] = useState(0);

 const incrementcount = () => {
    setCount(prevValue => prevValue + 1);
  };
  return (
    <div>
      <button onClick={incrementcount}>Count {count}</button>
    </div>
  );
}

export default CounterHook;
