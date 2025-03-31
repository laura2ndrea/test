import banners from "/src/data/banners.json";

export default function Banner({ id, children, className}) {
    const banner = banners.find((b) => b.id == id);
    return (
        <section className={`${className} flex p-4 rounded-2xl w-[47%] h-[33%]`}>
            <div className="text-white text-lg">
                <h1 className="py-2">{banner.title}</h1>
                <div className="text-sm">
                    {banner.text.map((line, index) => 
                        <p key={index}>
                            {line}
                        </p>
                    )}
                </div>
                {children}
            </div>
            <img src={banner.srcImage} alt={banner.altImage} className="w-[50%]"/>
        </section>
    );
}
