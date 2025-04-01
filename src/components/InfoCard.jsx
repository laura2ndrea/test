import UserCard from "./UserCard"

export default function InfoCard({ imageBook, title, review, author, imageAuthor, date, className}) {
    return (
        <div className={`${className} bg-white w-[80%] rounded-2xl shadow-lg text-sm`}>
            <img src={imageBook} alt={title} className="w-[100%] h-[46%] rounded-2xl" />
            <h1 className="py-1 px-4 font-bold">{title}</h1>
            <p className="px-4 pb-1 text-[11px] font-light">{review}</p>
            <UserCard image={imageAuthor} name={author} text={date} className="px-2"/>
        </div>
    ); 
}