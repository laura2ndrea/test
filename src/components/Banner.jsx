export default function Banner({ banner, children, className=""}) {
    return (
        <section className={`relative flex flex-col p-4 rounded-2xl w-[95%] items-center text-center m-2 ${className}`}>
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

/*export default function Banner({ banner, children, className = "" }) {
    return (
        <section
            className={`
                relative 
                flex flex-col 
                p-4 rounded-2xl 
                w-[90%] items-center text-center 
                text-white 
                overflow-hidden 
                sm:items-start sm:justify-start sm:text-sm 
                lg:flex-row lg:items-center lg:justify-between lg:text-xl 
                ${className}
            `}
        >
           
            <img 
                src={banner.srcImage} 
                alt={banner.altImage} 
                className="absolute inset-0 w-full h-full object-cover opacity-30 sm:opacity-20 lg:hidden" 
            />

           
            <div className="relative z-10 flex flex-col items-center sm:items-start text-white">
                <h1 className="pb-2 sm:pb-4">{banner.title}</h1>
                <div className="text-xs sm:text-sm">
                    {banner.text.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
                {children}
            </div>

            
            <img 
                src={banner.srcImage} 
                alt={banner.altImage} 
                className="hidden lg:block lg:w-[30%] lg:ml-4" 
            />
        </section>
    );
}*/
