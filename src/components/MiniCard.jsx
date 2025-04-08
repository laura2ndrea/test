export default function MiniCard({ title, text, className="" }) {
    return (
        <div className={`flex flex-col w-[20%] aspect-square justify-center border-[0.5px] border-gray-300 rounded-xl shadow-lg p-3 text-tertiary-color bg-white ${className}`}>
            <h1 className="text-xs font-thin">{title}</h1>
            <p className="font-semibold text-xl">{text}</p>
        </div>
    ); 
}