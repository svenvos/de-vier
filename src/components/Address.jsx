export default function Address({ className }) {
    return (
        <div className="address">
            <p className={className === "color-light" ? className : ""}>IJsselkade 59</p>
            <p className={className === "color-light" ? className : ""}>8261AG, Kampen</p>
            <p className={className === "color-light" ? className : ""}>Overijssel</p>
        </div>
    );
}
