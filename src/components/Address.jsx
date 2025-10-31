export default function Address({ className }) {
    return (
        <div className="address">
            <p className={className === "color-light" ? `font-manrope ${className}` : "font-manrope"}>IJsselkade 59</p>
            <p className={className === "color-light" ? `font-manrope ${className}` : "font-manrope"}>8261AG, Kampen</p>
            <p className={className === "color-light" ? `font-manrope ${className}` : "font-manrope"}>Overijssel</p>
        </div>
    );
}
