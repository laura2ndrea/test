export default function UserCard({ image, name, text, className}) {
    return (
        <div className={`${className} flex items-center text-xs`}>
            <img src={image} alt={name} className="w-9 h-9 rounded-xl m-2 mt-0 shadow-lg"/>
            <div>
                <h3 className="font-bold">{name}</h3>
                {text && <p className="font-light text-[10px]">{text}</p>}
            </div>
        </div>
    );
}