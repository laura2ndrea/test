import { useState } from 'react';
import { Icon } from "./components/Icon";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray">
      <h1 className="text-red-500 text-2xl font-bold mb-4">Probando componentes 🚀</h1>
      <Icon icon={faEnvelope} className="text-red-500"/>
    </div>
  )
}

export default App
