import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";

export default function Header({ user, className = "" }) {
  // Shared style for icons
  const iconStyle =
    "p-[6px] transform transition duration-400 hover:scale-115 rounded-lg";
  return (
    <header
      className={`flex flex-col-reverse justify-center p-1 bg-blue-500 w-full ${className}`}
    >
      <SearchBar
        placeholder="Buscar por libros, personas o artículos"
        className="basis-1/2 md:h-1/2 md:ml-4"
      />
      <div className="flex basis-1/2 p-2 px-5 items-center justify-end gap-x-4 md:basis-1/3 md:justify-between md:gap-x-2 bg-yellow-500">
        <div>
          <FontAwesomeIcon
            icon={faBell}
            className={`mr-2 bg-[#FBF2E5] text-secondary-color ${iconStyle}`}
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            className={`bg-[#E3F4E9] text-primary-color ${iconStyle}`}
          />
        </div>
        <UserCard
          image={user.image}
          name={user.name}
          className="flex-row-reverse"
        />
      </div>
    </header>
  );
}
