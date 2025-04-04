import Button from "./Button"; 

export default function Recent ( { data, className } ) {
    return (
        <section className={`${className} w-full bg-[#F2F2F2] p-4 rounded-xl shadow-lg text-[#343A3F]`}>
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Reciente</h1>
                <Button text="Ver todo" className="rounded-full text-xs bg-[#e6eee2]"/>
            </div>
            <div className="py-4">
                {data.map((d) => (
                    <div key={d.id}>
                        {d.id > 1 ? <hr key={d.id + '-separator'}  className="text-gray-300"/> : null}
                        <div className="flex justify-between py-2 text-sm items-center">
                            <p className="w-[70%]"><b>{d.user}</b> {d.interaction}</p>
                            <p className="text-gray-500 pr-4">{d.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}