export default function MiniCard( {title, text} ) {
    return (
        <div className="border-[0.5px] border-gray-300 rounded-xl shadow-lg p-2 w-[5%] text-[#343A3F]">
            <h1 className="text-xs font-thin">{title}</h1>
            <p className="font-bold">{text}</p>
        </div>
    ); 
}