import { useState } from 'react';
import SearchBar from "./components/SearchBar";
import users from "./data/users.json";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";

function App() {
  const user = users.find((u) => u.id == 1)
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray text-[#343A3F] font-red-hat-display">
      <h1 className="text-red-500 text-2xl font-bold mb-4">Probando componentes 🚀</h1>
      <SearchBar />
    </div>
  )
}

export default App
