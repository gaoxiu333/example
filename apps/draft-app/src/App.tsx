import { useState } from 'react'
import { counter } from 'jslib'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount(counter(count, 1))}>count:{count}</button>
    </>
  )
}

export default App
