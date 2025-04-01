import { useState } from 'react';
import Menu from "./components/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Latest from './components/Latest';
import books from "./data/books.json";

function App() {
  return (
    <div className="flex justify-end items-end h-screen bg-gray text-[#343A3F] font-red-hat-display">
      <Latest data={books} />
    </div>
  )
}

export default App
