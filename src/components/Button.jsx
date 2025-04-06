export default function Button({ children, className="", variant }) {
    // Default styles for buttons
    const baseStyle = "px-4 py-2 transition-all duration-300 hover:opacity-60"
    const variants = {
        primary: "bg-[#90B687] text-white text-sm rounded-lg shadow-lg",
        secondary: "bg-tertiary-color text-white text-xs rounded-lg",
        tertiary: "bg-[#E6EEE2] text-secondary-color text-xs rounded-full"
    }
    return (
        <button className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`}>
            {children}
        </button>
    );
}

