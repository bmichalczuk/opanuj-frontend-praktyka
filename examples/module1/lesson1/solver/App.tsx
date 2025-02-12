import React, { useState } from 'react';
import { add, divide, multiply, subtract } from './operations';
import { type Operation } from './operations';

const App = () => {
  const [numA, setNumA] = useState<number>(0);
  const [numB, setNumB] = useState<number>(0);
  const [numC, setNumC] = useState<number | string>(0);

  const doOperation = (func: Operation) => {
    setNumC(func(numA, numB));
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const name = e.target.name;
    if (val === '') {
      name === 'numA' ? setNumA(0) : setNumB(0);
    } else {
      name === 'numA' ? setNumA(Number(val)) : setNumB(Number(val));
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={numA}
          name="numA"
          onChange={handleInput}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={numB}
          name="numB"
          onChange={handleInput}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => doOperation(add)}
        >
          +
        </button>
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => doOperation(subtract)}
        >
          -
        </button>
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => doOperation(multiply)}
        >
          *
        </button>
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => doOperation(divide)}
        >
          /
        </button>
      </div>
      <div>Result: {numC}</div>
    </div>
  );
};

export default App;
