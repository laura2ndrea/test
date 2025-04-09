import Button from "./Button";
import InfoCard from "./InfoCard";

export default function Latest({ data, className="" }) {
  return (
    <section className={`flex flex-col w-fit h-fit min-h-[calc(100%-16px)] bg-backgray-color m-4 my-2 p-3 rounded-xl text-tertiary-color shadow-lg ${className}`}>
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold mb-2">Lo último</h1>
        <Button variant="tertiary">Ver todo</Button>
      </div>
      {/* Tabs for filtering content */}
      <ul
        className="flex mx-1 mb-4 text-xs leading-loose font-extralight"
        role="tablist"
      >
        <li className="mr-6 cursor-pointer transition-all duration-500 hover:font-bold hover:before:content-['>']">
          <a href="#"> Reciente</a>
        </li>
        <li className="cursor-pointer transition-all duration-500 hover:font-bold hover:before:content-['>']">
          <a href="#"> Popular</a>
        </li>
      </ul>
      {/* Display info cards */}
      <div className="flex flex-col gap-10 xsm:flex-row xlg:flex-col">
        {data.map((item) => (
          <InfoCard key={item.id} {...item} className="" />
        ))}
      </div>
    </section>
  );
}
