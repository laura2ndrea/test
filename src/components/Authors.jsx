import { useFetch } from "../hooks/useFetch";
import UserCard from "./UserCard"; 
import Button from "./Button"; 

export default function Authors ({ url }) {
    const {data, loading, error} = useFetch(url); 

    if (loading) return <p>Cargando autores ...</p>; 
    if (error) return <p>Error: {error}</p>; 

    return (
        <div className="w-full bg-[#F2F2F2] p-4 rounded-xl shadow-lg text-[#343A3F]">
            <div className="flex justify-between">
                <h1 className="text-2xl">Autores</h1>
                <Button text="Ver todo" className="rounded-full text-xs bg-[#e6eee2]"/>
            </div>
            {data.results.slice(0,3).map(({ id, name, species, image, episode}) => (
                <>
                    {id > 1 ? <hr key={id + '-separator'}  className="text-gray-300"/> : null}
                    <div key={id} className="flex m-2 justify-between items-center">
                        <UserCard 
                            image={image}
                            name={name}
                            text={species}
                        />
                        <div className="flex justify-between items-center w-[25%]">
                            <h1 className="text-xs">Lectores</h1>
                            <p className="text-2xl">{episode.length} k</p>
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
}