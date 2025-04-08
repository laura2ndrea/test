import Button from "./Button";
import InfoCard from "./InfoCard";

export default function Latest({ data }) {
  return (
    <section className="flex flex-col w-fit h-fit bg-backgray-color m-4 p-3 rounded-xl text-tertiary-color shadow-lg">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Lo último</h1>
        <Button variant="tertiary">Ver todo</Button>
      </div>
      <ul
        className="flex mx-1 mb-1 text-xs leading-loose font-extralight"
        role="tablist"
      >
        <li className="mr-6 cursor-pointer transition-all duration-500 hover:font-bold hover:before:content-['>']">
          <a href="#"> Reciente</a>
        </li>
        <li className="cursor-pointer transition-all duration-500 hover:font-bold hover:before:content-['>']">
          <a href="#"> Popular</a>
        </li>
      </ul>
      <div className="flex flex-col items-center">
        {data.map((item) => (
          <InfoCard key={item.id} {...item} className="m-2" />
        ))}
      </div>
    </section>
  );
}
