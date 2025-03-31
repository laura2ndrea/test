import { useState } from 'react';
import Banner from "./components/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import MiniCard from './components/MiniCard';
import users from "./data/users.json";

function App() {
  const user = users.find((u) => u.id == 1)
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray text-[#343A3F] font-red-hat-display">
      <h1 className="text-red-500 text-2xl font-bold mb-4">Probando componentes 🚀</h1>
      <MiniCard title="Librería" text={user.bookshelf} />
    </div>
  )
}

export default App
