import UserCard from "./UserCard";

export default function InfoCard({
  imageBook,
  title,
  review,
  author,
  imageAuthor,
  date,
  className = "",
}) {
  return (
    <div
      className={`bg-white w-full min-h-full pb-3 rounded-2xl shadow-lg text-xs ${className}`}
    >
      <img
        src={imageBook}
        alt={title}
        className="w-full aspect-[4/2] object-cover rounded-2xl"
      />
      <div className="px-3">
        <h2 className="pt-3 font-bold">{title}</h2>
        <p className="pt-3 font-light text-[11px] text-gray-500">{review}</p>
      </div>
      <UserCard
        image={imageAuthor}
        name={author}
        text={date}
        className="px-3 pt-3"
      />
    </div>
  );
}
