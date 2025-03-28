import { useState } from 'react'
import { Button } from './components/Button'

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray">
      <h1 className="text-red-500 text-2xl font-bold mb-4">Probando componentes 🚀</h1>
      <Button text="¡Haz clic!"/>
    </div>
  )
}

export default App
