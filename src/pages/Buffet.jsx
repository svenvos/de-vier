import BuffetMenu from "../components/BuffetMenu";
import "../styles/Buffet.css";

export default function Buffet() {
    return (
        <main>
            <div className="buffet-container">
                <h1>Buffet</h1>
                <p>Mocht u één of meerdere buffetten willen reserveren, gelieve contact met ons opnemen via telefoon of email.</p>
                <div className="contact-details">
                    <p className="font-size-20 font-weight-600">
                        Tel: 
                        <a href="tel:038-33 334 63" className="font-size-16 font-weight-400">038-33 334 63</a>
                    </p>
                    <p className="font-size-20 font-weight-600">
                        Mail: 
                        <a href="mailto:info@devier-kampen.nl" className="font-size-16 font-weight-400">info@devier-kampen.nl</a>
                    </p>
                </div>
                <BuffetMenu />
            </div>
        </main>
    );
}
