import "../styles/Dinerbon.css";
import dinerbon from "../assets/imageGridImages/dinerbon.jpg";

export default function Dinerbon() {
    return (
        <main>
            <div className="container">
                <h1 className="font-size-32 dinerbon-title">Dinerbon</h1>
                <div className="dinerbon-container">
                    <div>
                        <h3>Op zoek naar het perfecte geschenk?</h3>
                        <p>
                            Verras familie, vrienden of collega's met een dinerbon voor een heerlijk avondje uit bij ons restaurant.
                            Onze dinerbon is verkrijgbaar voor elk gewenst bedrag en biedt de ontvanger een culinaire beleving om nooit te vergeten.
                        </p>
                    </div>
                    <div>
                        <img src={dinerbon} alt="Onze prachtige dinerbon voor een vaas met bloemen, naast een fles wijn." />
                        <p>* Voorbeeld van een dinerbon.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
