export default function ContactDetails() {
    return (
        <div className="container">
            <h2 className="color-light font-size-32">Contact</h2>
            <div className="contact-details">
                <p className="color-light font-size-20 font-weight-600">
                    Tel: 
                    <a href="tel:038-33 334 63" className="color-light font-size-16 font-weight-400">038-33 334 63</a>
                </p>
                <p className="color-light font-size-20 font-weight-600">
                    Mail: 
                    <a href="mailto:info@devier-kampen.nl" className="color-light font-size-16 font-weight-400">info@devier-kampen.nl</a>
                </p>
            </div>
        </div>
    );
}
