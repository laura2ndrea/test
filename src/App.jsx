import { useState } from 'react';
import Menu from "./components/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import InfoCard from './components/InfoCard';
import books from "./data/books.json";

function App() {
  const { imageBook, title, review, author, imageAuthor, date } = books.find((b) => b.id == 2);
  return (
    <div className="flex justify-center items-center h-screen bg-gray text-[#343A3F] font-red-hat-display">
      <InfoCard 
        imageBook={imageBook} 
        title={title} 
        review={review} 
        author={author} 
        imageAuthor={imageAuthor} 
        date={date}
      />
    </div>
  )
}

export default App
