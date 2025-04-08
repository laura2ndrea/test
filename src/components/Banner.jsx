export default function Banner({ banner, children, className=""}) {
    return (
        <section className={`relative flex flex-col p-4 rounded-2xl w-full items-center text-center m-2 ${className}`}>
            <img src={banner.srcImage} alt={banner.altImage} className="absolute inset-0 w-full h-full object-cover opacity-30 lg:hidden"/>
            <div className="flex flex-col z-2 items-center text-white text-lg h-full lg:items-start lg:justify-start lg:text-xl">
                <h1 className="pb-2 sm:pb-4">{banner.title}</h1>
                <div className="text-xs sm:text-sm">
                    {banner.text.map((line, index) => 
                        <p key={index}>
                            {line}
                        </p>
                    )}
                </div>
                {children}
            </div>
            <img src={banner.srcImage} alt={banner.altImage} className="hidden lg:block w-[calc(45%-40px)]"/>
        </section>
    );
}

