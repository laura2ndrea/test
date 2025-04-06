import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";

export default function Header({ user, className="" }) {
    return (
        <header className={`flex flex-col-reverse justify-center p-1 bg-blue-500 w-full ${className}`}>
            <SearchBar placeholder="Buscar por libros, personas o artículos" className="basis-1/2 md:basis-3/6 md:h-1/2"/>
            <div className="flex basis-1/2 p-2 px-4 items-center justify-end gap-x-4 md:basis-[36%] md:justify-between md:gap-x-2 lg:basis-[30%] bg-yellow-500">
                <div>
                    <FontAwesomeIcon icon={faBell} className="mr-2 bg-[#FBF2E5] text-secondary-color p-[6px] rounded-lg" />
                    <FontAwesomeIcon icon={faEnvelope} className="bg-[#E3F4E9] text-primary-color p-[6px] rounded-lg" />
                </div>
                <UserCard image={user.image} name={user.name} className="flex-row-reverse"/>
            </div>
        </header>
    );
}