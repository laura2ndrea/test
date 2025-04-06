import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Banner from "./Banner";
import Button from "./Button";

export default function Main( {className="", user, banners} ) {
    return (
        <main className={`flex flex-col items-center justify-center basis-2/3 ${className}`}>
            <Banner banner={banners[0]} className="basis-1/4 bg-secondary-color lg:flex-row lg:justify-between lg:p-6 lg:text-start ">
                <Button variant="secondary" className="mt-3 w-fit px-2 sm:mt-6 lg:text-sm">
                    Crear borrador <FontAwesomeIcon icon={faPlus} className="ml-2 text-base"/>
                </Button>
            </Banner>
        </main>
    );
}