import UserCard from "./UserCard"

export default function InfoCard({ imageBook, title, review, author, imageAuthor, date, className = "" }) {
    return (
        <div className={`bg-white w-full rounded-2xl shadow-lg text-sm ${className}`}>
            <img src={imageBook} alt={title} className="w-full aspect-[4/3] object-cover rounded-t-2xl" />
            <div className="px-4">
                <h2 className="py-1 font-bold text-base">{title}</h2>
                <p className="pb-1 text-[11px] font-light">{review}</p>
            </div>
            <UserCard image={imageAuthor} name={author} text={date} className="px-4" />
        </div>
    ); 
}