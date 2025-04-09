import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPlus, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

export default function Navbar({ className = "" }) {
  const [open, setOpen] = useState(false);
  const navBarItems = ["Inicio", "Libros", "Editores", "Lectores"];
  const NavContent = () => (
    <div className="flex flex-col h-full w-[85%] justify-between items-center py-[80px]">
      <FontAwesomeIcon
        icon={faBook}
        className="bg-[#90B687] text-white text-4xl px-4 py-3 rounded-lg shadow-lg"
      />
      <ul className="text-center text-white text-sm leading-loose font-extralight">
        {navBarItems.map((item, idx) => (
          <li
            key={idx}
            className="cursor-pointer transition-all duration-500 hover:font-bold hover:before:content-['>']"
          >
            <a href="#"> {item}</a>
          </li>
        ))}
      </ul>
      <Button variant="primary">
        Crear <FontAwesomeIcon icon={faPlus} className="ml-2" />
      </Button>
    </div>
  );
  return (
    <>
      {/* Hamburger button for small screens */}
      {!open && (
        <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-3 left-4 z-50 text-white bg-primary-color p-2 aspect-square rounded-lg"
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      )}
      {/* Navbar for large screens */} 
      <nav className={`hidden fixed h-full w-1/6 justify-center bg-primary-color ${className}`}>
        <NavContent />
      </nav>
      {/* Expanded hamburger menu */}
      {open && (
        <div className="fixed inset-0 bg-primary-color z-40 flex flex-col justify-center items-center text-white">
          <NavContent />
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-white"
          >
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </button>
        </div>
      )}
    </>
  );
}

