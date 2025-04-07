import MiniCard from "./MiniCard";

export default function MinicardSection({ data, className="" }) {
    const labels = {
        bookshelf: "Librería",
        likes: "Me gusta",
        readers: "Lectores",
        opinions: "Opiniones"
    };
    return (
        <section className={`grid grid-cols-2 gap-x-20 gap-y-3 justify-items-start content-center ${className}`}>
            {Object.entries(data).map(([key, value], index) => (
                <MiniCard key={key} title={labels[key]} text={`${value}${index > 0 ? "k":""}`}/>
            ))}
        </section>
    );
}
