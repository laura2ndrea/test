import { useState } from 'react';
import Menu from "./components/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import MiniCard from './components/MiniCard';
import users from "./data/users.json";

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray text-[#343A3F] font-red-hat-display">
      <Menu />
    </div>
  )
}

export default App
