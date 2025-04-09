function MiniCard({ title, text, className = "" }) {
  return (
    <div
      className={`flex flex-col w-full justify-center border-[0.5px] border-gray-300 rounded-xl shadow-lg p-3 text-tertiary-color bg-white ${className}`}
    >
      <h1 className="text-xs font-thin">{title}</h1>
      <p className="font-semibold text-xl">{text}</p>
    </div>
  );
}

export default function MiniCards({ data, className = "" }) {
  const labels = {
    bookshelf: "Librería",
    likes: "Me gusta",
    readers: "Lectores",
    opinions: "Opiniones",
  };
  return (
    <section className={`grid grid-cols-2 gap-[2vw] w-full ${className}`}>
      {Object.entries(data).map(([key, value], index) => (
        <MiniCard
          key={key}
          title={labels[key]}
          text={`${value}${index > 0 ? "k" : ""}`}
        />
      ))}
    </section>
  );
}
