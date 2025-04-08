import MiniCard from "./MiniCard";

export default function MinicardSection({ data, className="" }) {
    const labels = {
        bookshelf: "Librería",
        likes: "Me gusta",
        readers: "Lectores",
        opinions: "Opiniones"
    };
    return (
        <section className={`flex flex-wrap w-full h-fit justify-between content-center ${className}`}>
            {Object.entries(data).map(([key, value], index) => (
                <MiniCard key={key} title={labels[key]} text={`${value}${index > 0 ? "k":""}`}/>
            ))}
        </section>
    );
}
