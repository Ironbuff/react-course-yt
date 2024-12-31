import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //using use state to change color
  const[color,setColor]= useState('green')
//defining function to change color on click also we use argument in fuction to change state and we use method defined on use state to change state value
function changeColor(color){
  setColor(color);
}

  return (
    // here we put the css inside the {} in js so we are using {} inside a curly braces since in tyescript one {} shows the js
    <div className='w-full h-screen flex px-9 justify-center flex-row duration-4' style={{backgroundColor: color}}>
      <div className='w-full flex flex-wrap fixed bottom-10 justify-center px-8'>
        {/* since on click doesnt change value that is already returned on event so we pass function on event  */}
      <button className='border-2 rounded-2xl border-green-800 py-2 px-8 text-white shadow-lg bg-red-600 m-2' onClick={()=>{changeColor('red')}}>Red</button>
      <button className='border-2 rounded-2xl border-green-800 py-2 px-8 text-white shadow-lg bg-yellow-500 m-2' onClick={()=>{changeColor('yellow')}}>Yellow</button>
      <button className='border-2 rounded-2xl border-green-800 py-2 px-8 text-white shadow-lg bg-blue-500 m-2' onClick={()=>{changeColor('blue')}}>blue</button>
      </div>
    </div>
  )
}

export default App
