export default function Banner({ banner, children, className}) {
    return (
        <section className={`${className} flex p-4 rounded-2xl w-[95%] h-auto`}>
            <div className="text-white">
                <h1 className="py-2">{banner.title}</h1>
                <div className="text-xs">
                    {banner.text.map((line, index) => 
                        <p key={index}>
                            {line}
                        </p>
                    )}
                </div>
                {children}
            </div>
            <img src={banner.srcImage} alt={banner.altImage} className="w-[30%] m-0"/>
        </section>
    );
}
