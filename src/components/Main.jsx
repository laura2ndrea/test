import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Banner from "./Banner";
import Button from "./Button";
import MiniCards from "./MiniCards";
import Authors from "./Authors";
import Recent from "./Recent";

export default function Main({
  className = "",
  user,
  banners,
  authors,
  recents,
}) {
  return (
    <main
      className={`flex flex-col h-fit items-center justify-center px-4 ${className}`}
    >
      <Banner
        banner={banners[0]}
        className="bg-secondary-color"
      >
        <Button
          variant="secondary"
          className="mt-3 w-fit px-2 sm:mt-6 lg:text-sm"
        >
          Crear borrador{" "}
          <FontAwesomeIcon icon={faPlus} className="ml-2 text-base" />
        </Button>
      </Banner>
      <div className="flex flex-col gap-2 bg-green-500 pt-2 w-full sm:flex-row">
        <div className="flex flex-col gap-2 sm:basis-2/3 sm:justify-between">
          <MiniCards data={user.info} className="bg-yellow-500 xsm:grid-cols-4 xl:gap-[3.5vw]" />
          <Authors url={authors} className="" />
        </div>
        <Recent data={recents} className="sm:basis-1/3" />
      </div>
      <Banner
        banner={banners[1]}
        className="bg-tertiary-color"
      />
    </main>
  );
}
