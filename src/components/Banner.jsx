export default function Banner({ banner, children, className = "" }) {
  return (
    <section
      className={`relative flex flex-col p-4 max-h-[200px] rounded-2xl w-full items-center text-center m-2 sm:flex-row sm:justify-between sm:p-6 sm:text-start ${className}`}
    >
      {/* Background image for small screens */}
      <img
        src={banner.srcImage}
        alt={banner.altImage}
        className="absolute inset-0 w-full h-full object-cover opacity-30 sm:hidden"
      />
      <div className="flex flex-col z-2 items-center text-white text-lg h-full sm:items-start sm:justify-start sm:text-xl">
        <h1 className="pb-2">{banner.title}</h1>
        <div className="text-xs sm:text-sm">
          {banner.text.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        {children}
      </div>
      {/* Banner image for larger screens */}
      <img
        src={banner.srcImage}
        alt={banner.altImage}
        className="hidden sm:block object-contain w-1/3"
      />
    </section>
  );
}
