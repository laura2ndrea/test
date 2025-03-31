export default function UserCard({ image, name, text, className}) {
    return (
        <div className={`${className} flex items-center`}>
            <img src={image} alt={name} className="w-10 h-10 rounded-xl m-2 shadow-lg"/>
            <div>
                <h3 className="font-bold">{name}</h3>
                {text && <p className="font-light text-sm">{text}</p>}
            </div>
        </div>
    );
}