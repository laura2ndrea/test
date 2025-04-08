import Button from "./Button"; 

function RecentItem({ user, interaction, date, showSeparator }) {
    return (
        <>
            {showSeparator && <hr className="text-gray-300 my-2" />}
            <div className="flex justify-between items-center py-2 text-xs">
                <p className="text-[11px] w-[70%]"><b>{user}</b> {interaction}</p>
                <p className="text-gray-500 text-xs">{date}</p>
            </div>
        </>
    );
}

export default function Recent({ data, className="" }) {
    return (
        <section className={`w-full bg-backgray-color p-3 rounded-xl shadow-lg text-tertiary-color ${className}`}>
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Reciente</h1>
                <Button variant="tertiary">Ver todo</Button>
            </div>
            <div className="py-4">
                {data.map((d, i) => (
                    <RecentItem key={d.id} user={d.user} interaction={d.interaction} date={d.date} showSeparator={i > 0}/>
                ))}
            </div>
        </section>
    );
}

/*export default function Recent ( { data, className="" } ) {
    return (
        <section className={`w-full bg-[#F2F2F2] p-4 rounded-xl shadow-lg text-[#343A3F] ${className}`}>
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
}*/