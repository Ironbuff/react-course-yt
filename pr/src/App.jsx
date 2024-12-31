import { useState } from 'react'
import Card from './components/Card'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl font-bold text-blue-500 my-3">
      Hello world!
    </h1>
    <Card className="my-3" username="kushal" position="ceo" image="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/6483bb973b8f65001ea4755f.jpg" />
    <Card username="dog" position="pet" image="https://images.squarespace-cdn.com/content/v1/54822a56e4b0b30bd821480c/45ed8ecf-0bb2-4e34-8fcf-624db47c43c8/Golden+Retrievers+dans+pet+care.jpeg"/>
    </>
  )
}

export default App
