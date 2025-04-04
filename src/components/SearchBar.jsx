import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
    return (
        <form className="flex justify-start items-center w-[50%] h-10 bg-[#f2f2f2] p-2 rounded-2xl">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="px-4 text-gray-600"/>
            <input type="text" placeholder="Buscar por libros, personas o artículos" className="w-[80%] p-1 focus:outline-none text-sm"/>
        </form>
    );
}