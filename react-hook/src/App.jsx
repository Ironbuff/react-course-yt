import { useState, useCallback, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(0);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const genpassword = useCallback(() => {
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@£$%&*()";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);



  
  useEffect(() => {
    genpassword();
  }, [length, charAllowed, numberAllowed, genpassword]);


  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      alert('Password copied to clipboard!');
    });
  };

  return (
    <div className='w-100 h-screen bg-black'>
      <h1 className='text-3xl text-blue-700 flex justify-center'>
        Password Generator
      </h1>
      <div className='flex justify-center'>
        <input
          type="text"
          placeholder='Generated password'
          className='outline-none px-4 py-2 my-3 w-100'
          readOnly
          value={password}
        />
        <button className='bg-blue-600 text-white px-3 my-3' onClick={copyToClipboard}>
          Copy
        </button>
      </div>
      <div className='flex justify-center'>
        <div className='flex text-white mx-2 px-2'>
          <input
            type='range'
            min={0}
            max={25}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label htmlFor="Length">Length {length}</label>
        </div>
        <div className='flex text-white mx-2 px-2'>
          <input
            type='checkbox'
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            className='outline-none'
          />
          <label htmlFor="char">Char</label>
        </div>
        <div className='flex text-white mx-2 px-2'>
          <input
            type='checkbox'
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            className='outline-none'
          />
          <label htmlFor="number">Number</label>
        </div>
      </div>
    </div>
  );
}

export default App;
