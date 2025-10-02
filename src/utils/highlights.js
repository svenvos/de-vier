import { nanoid } from "nanoid";
import menuImg from "../assets/highlightImages/menu.jpg";
import buffetImg from "../assets/highlightImages/buffet.jpg";
import eventImg from "../assets/highlightImages/event.jpg";

export default [
    {
        id: nanoid(),
        title: "Proef het verschil",
        imageUrl: menuImg,
        imageAlt: "Foto van een heerlijke biefstuk, geserveerd op een bord met patat.",
        description: "Ontdek onze zorgvuldig samengestelde menukaart, waarin klassieke gerechten een moderne twist krijgen. Elke creatie wordt bereid met seizoensgebonden ingrediënten en een passie voor verfijnde smaak.",
        btnText: "Bekijk ons menu",
        linkTo: "menu"
    },
    {
        id: nanoid(),
        title: "Voor uw mooiste momenten",
        imageUrl: buffetImg,
        imageAlt: "Foto van buffetschalen vol met eten.",
        description: "Voor groepen en speciale gelegenheden bieden wij uitgebreide buffetten vol smaak en variatie. Van hartige klassiekers tot verrassende specialiteiten: er is voor ieder wat wils.",
        btnText: "Bekijk onze buffetopties",
        linkTo: "buffet"
    },
    {
        id: nanoid(),
        title: "Geniet. Proost. Beleef.",
        imageUrl: eventImg,
        imageAlt: "Foto van live muziek met dansende mensen in de Vier Jaargetijden.",
        description: "Op geselecteerde vrijdag- en zaterdagavonden verandert ons restaurant in een bruisende bar met live muziek. Geniet van een drankje, goede sfeer en muzikale optredens in een intieme setting.",
        btnText: "Bekijk onze evenementenagenda",
        linkTo: "calendar"
    }
];
