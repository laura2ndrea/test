import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Banner from "./Banner";
import Button from "./Button";
import MinicardSection from "./MinicardSection";
import Authors from "./Authors";
import Recent from "./Recent";

export default function Main( {className="", user, banners, authors, recents} ) {
    return (
        <main className={`flex flex-col h-fit items-center justify-center px-4 ${className}`}>
            <Banner banner={banners[0]} className="basis-1/4 bg-secondary-color lg:flex-row lg:justify-between lg:p-6 lg:text-start ">
                <Button variant="secondary" className="mt-3 w-fit px-2 sm:mt-6 lg:text-sm">
                    Crear borrador <FontAwesomeIcon icon={faPlus} className="ml-2 text-base"/>
                </Button>
            </Banner>
            <div className="grid grid-cols-1 xsm:grid-cols-[3fr_4fr] bg-green-500 w-full gap-2">
                <MinicardSection data={user.info} className="bg-yellow-500 xsm:col-span-2 "/>
                <Authors url={authors} className=""/>
                <Recent data={recents} className="" />
            </div>
            <Banner banner={banners[1]} className="basis-1/4 bg-tertiary-color lg:flex-row lg:justify-between lg:p-6 lg:text-start ">
            </Banner>
        </main>
    );
}