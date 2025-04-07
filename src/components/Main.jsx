import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Banner from "./Banner";
import Button from "./Button";
import MinicardSection from "./MinicardSection";
import Authors from "./Authors";

export default function Main( {className="", user, banners, url} ) {
    return (
        <main className={`flex flex-col items-center justify-center ${className}`}>
            <Banner banner={banners[0]} className="basis-1/4 bg-secondary-color lg:flex-row lg:justify-between lg:p-6 lg:text-start ">
                <Button variant="secondary" className="mt-3 w-fit px-2 sm:mt-6 lg:text-sm">
                    Crear borrador <FontAwesomeIcon icon={faPlus} className="ml-2 text-base"/>
                </Button>
            </Banner>
            <div className="flex flex-col basis-2/4 h-fit bg-green-500 w-full lg:flex-row">
                <div className="flex flex-col basis-1/2 items-center lg:basis-2/3 bg-red-500">
                    <MinicardSection data={user.info} className="basis-1/3 bg-yellow-500 xsm:grid-cols-4 xsm:gap-x-6 sm:gap-x-7 md:gap-x-8 lg:gap-x-6 xl:gap-x-15"/>
                    <Authors url={url} className="mt-2"/>
                </div>
                <div className="basis-1/2 bg-yellow-500 lg:basis-1/3">hola2</div>
            </div>

        </main>
    );
}