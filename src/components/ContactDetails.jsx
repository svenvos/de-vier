export default function ContactDetails({ className }) {
    return (
        <div className="contact-details">
            <p className={`font-size-20 font-weight-600 ${className === "color-light" ? className : ""}`}>
                Tel: 
                <a href="tel:038-33 334 63" className={`font-size-16 font-weight-400 ${className === "color-light" ? className : ""}`}>038-33 334 63</a>
            </p>
            <p className={`font-size-20 font-weight-600 ${className === "color-light" ? className : ""}`}>
                Mail: 
                <a href="mailto:info@devier-kampen.nl" className={`font-size-16 font-weight-400 ${className === "color-light" ? className : ""}`}>info@devier-kampen.nl</a>
            </p>
        </div>
    );
}
