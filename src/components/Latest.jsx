import Button from "./Button"; 
import InfoCard from "./InfoCard";

export default function Latest({ data }) {
    return (
        <section className="flex flex-col w-[18%] h-[90%] bg-[#F2F2F2] overflow-hidden mr-2 rounded-xl text-[#343A3F] shadow-lg">
            <div className="flex justify-between m-4 mb-2">
                <h1 className="text-lg font-bold">Lo último</h1>
                <Button text="Ver todo" className="rounded-full text-[10px] text-[#7DA870] bg-[#e6eee2]"/>
            </div>
            <ul className="flex mx-4 mb-1 text-xs leading-loose font-extralight">
                <li className="mr-6 cursor-pointer transition-all duration-500 hover:font-bold hover:before:content-['>']"><a href="#"> Reciente</a></li>
                <li className="cursor-pointer transition-all duration-500 hover:font-bold hover:before:content-['>']"><a href="#"> Popular</a></li>
            </ul>
            <div className="flex flex-col items-center">
            {data.slice(0,2).map(({ id, imageBook, title, review, author, imageAuthor, date}) => (
                <InfoCard 
                    key={id} 
                    imageBook={imageBook} 
                    title={title} 
                    review={review} 
                    author={author} 
                    imageAuthor={imageAuthor} 
                    date={date}
                    className="h-[42%] m-2"
                />
            ))}
            </div>
        </section>
    );
}