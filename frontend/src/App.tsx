import { useState } from 'react'
import AuthModal from './components/AuthModal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AuthModal />
    </div>
  )
}

export default App
