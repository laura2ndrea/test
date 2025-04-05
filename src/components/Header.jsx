import SearchBar from "./SearchBar";

export default function Header({ className }) {
    return (
        <header className={`flex flex-col-reverse justify-center p-1 bg-blue-500 w-full ${className}`}>
            <SearchBar placeholder="Buscar por libros, personas o artículos" className="basis-1/2 md:basis-3/6 md:h-1/2"/>
            <div className="basis-1/2 md:basis-1/4 bg-yellow-500">
                Iconos
            </div>
        </header>
    );
}