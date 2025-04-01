import UserCard from "./UserCard"

export default function InfoCard({ imageBook, title, review, author, imageAuthor, date}) {
    return (
        <div className="bg-white w-[20%] h-[55%] rounded-2xl shadow-lg">
            <img src={imageBook} alt={title} className="w-[100%] rounded-2xl" />
            <h1 className="py-3 px-4 font-bold">{title}</h1>
            <p className="px-4 pb-4 text-sm">{review}</p>
            <UserCard image={imageAuthor} name={author} text={date} className="px-2"/>
        </div>
    ); 
}