import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon({ icon, className }) {
    return <FontAwesomeIcon icon={icon} className={`${className} px-4 py-2 text-xl transition-transform duration-700 hover:scale-130`} />
}