import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

export default function Navbar({ className }) {
    const navBarItems = ["Inicio", "Libros", "Editores", "Lectores"];
    return (
        <nav className={`hidden fixed h-full w-1/6 justify-center bg-primary-color ${className}`}>
            <div className="flex flex-col h-full w-[85%] justify-between items-center py-[80px]">
                <FontAwesomeIcon icon={faBook} className=" bg-[#90B687] text-white text-4xl px-4 py-3 rounded-lg shadow-lg" />
                <ul className="text-center text-white text-sm leading-loose font-extralight">
                    {navBarItems.map((item, idx) => (
                        <li key={idx} className="cursor-pointer transition-all duration-500 hover:font-bold hover:before:content-['>']"><a href="#"> {item}</a></li>
                    ))}
                </ul>
                <Button variant="primary">
                    Crear <FontAwesomeIcon icon={faPlus} className="ml-2"/>
                </Button>
            </div>
        </nav>
    ); 
}