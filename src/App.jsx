import { useState } from 'react';
import UserCard from "./components/UserCard";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray text-[#343A3F] font-red-hat-display">
      <h1 className="text-red-500 text-2xl font-bold mb-4">Probando componentes 🚀</h1>
      <UserCard 
        className="flex-row-reverse"
        image="src/assets/icons/photo.jpg" 
        name="Andrés Vargas"
      />
    </div>
  )
}

export default App
