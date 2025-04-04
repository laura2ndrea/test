import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

export default function Menu( {className} ) {
    return (
        <nav className={`${className} flex h-full w-[20%] bg-[#7DA870] p-4`}>
            <div className="flex flex-col h-full w-[85%] justify-between items-center py-[80px]">
                <FontAwesomeIcon icon={faBook} className=" bg-[#90B687] text-white text-4xl px-4 py-3 rounded-lg shadow-lg" />
                <ul className="text-center text-white text-sm leading-loose font-extralight">
                    <li className="cursor-pointer transition-all duration-500 hover:font-bold hover:before:content-['>']"><a href="#"> Inicio</a></li>
                    <li className="cursor-pointer transition-all duration-500 hover:font-bold hover:before:content-['>']"><a href="#"> Libros</a></li>
                    <li className="cursor-pointer transition-all duration-500 hover:font-bold hover:before:content-['>']"><a href="#"> Editores</a></li>
                    <li className="cursor-pointer transition-all duration-500 hover:font-bold hover:before:content-['>']"><a href="#"> Lectores</a></li>
                </ul>
                <Button text="Crear" className="text-white text-sm rounded-lg w-[50%] shadow-lg">
                    <FontAwesomeIcon icon={faPlus} className="ml-2"/>
                </Button>
            </div>
        </nav>
    ); 
}