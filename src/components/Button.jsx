// En la página principal definir color de fondo, texto, color de texto y la redondez de los bordes
export default function Button({ text, children, className  }) {
    return (
        <button className={`${className} px-4 py-2 bg-[#90B687] transition-all duration-400 hover:opacity-60`}>
            {text}
            {children}
        </button>
    );
}

