import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ className = "", placeholder }) {
  return (
    <form
      className={`flex items-center w-[calc(100%-16px)] h-1/3 bg-backgray-color p-2 my-4 mx-2 rounded-2xl ${className}`}
    >
      {/* Search icon */}
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="px-4 text-gray-600"
      />
      <input
        type="text"
        placeholder={placeholder}
        className="flex-[1] p-1 focus:outline-none text-sm"
      />
    </form>
  );
}
