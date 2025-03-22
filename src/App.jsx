import { useState } from 'react'
import Form from './index/form'
import './index/form.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Form/>
   </>
  )
}

export default App
