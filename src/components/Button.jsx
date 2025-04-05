export default function Button({ text, children, className="", variant }) {
    /* Default styles for buttons
    const baseStyle = "px-4 py-2 transition-all duration-300 hover:opacity-60"
    const variants = {
        primary: "bg-primary-color text-white text-sm rounded-lg w-[50%] shadow-lg",
        secundary: "",
        tertiary: ""
    }*/
    return (
        <button className={`${className}`}>
            {text}
            {children}
        </button>
    );
}

/* export default function Button({ 
    text, 
    children, 
    className = "", 
    variant = "primary", 
    size = "md", 
    type = "button", 
    ...props 
}) {
    // Definir estilos base y variantes
    const baseStyles = "px-4 py-2 font-semibold transition-all duration-300 rounded-md";
    
    const variants = {
        primary: "bg-[#90B687] text-white hover:opacity-60",
        secondary: "bg-gray-500 text-white hover:bg-gray-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
    };

    const sizes = {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    return (
        <button
            type={type}
            className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
            {...props}
        >
            {text}
            {children}
        </button>
    );
}*/

