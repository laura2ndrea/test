// En la página principal definir color de fondo, texto, color de texto y la redondez de los bordes
export function Button({ text, className  }) {
    return (
        <button className={`${className} px-4 py-2 bg-[#90b687] transition duration-700 hover:opacity-70`}>
            {text}
        </button>
    )
}

