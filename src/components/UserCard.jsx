export default function UserCard({ image, name, text, className=""}) {
    return (
        <div className={`flex items-center text-xs gap-x-2 ${className} `}>
            <img src={image} alt={name} className="w-9 h-9 rounded-xl shadow-lg"/>
            <div>
                <h3 className="font-bold">{name}</h3>
                {text && <p className="font-light text-[11px] text-gray-500">{text}</p>}
            </div>
        </div>
    );
}