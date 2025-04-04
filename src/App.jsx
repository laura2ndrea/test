import { useState } from 'react';
import Menu from "./components/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Home from './pages/Home';
import books from "./data/books.json";

function App() {
  return (
    <div className="flex justify-between h-full bg-gray text-[#343A3F] font-red-hat-display">
      <Menu className="fixed z-0 h-full"/>
      <Home className="fixed ml-[18%] z-2"/>
    </div>
  )
}

export default App
