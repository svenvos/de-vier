import { nanoid } from "nanoid";
import menuImg from "../assets/highlightImages/menu.jpg";
import buffetImg from "../assets/highlightImages/buffet.jpg";
import eventImg from "../assets/highlightImages/event.jpg";

export default [
    {
        id: nanoid(),
        title: "Proef het verschil",
        imageUrl: menuImg,
        imageAlt: "Een heerlijke schaal met nachos.",
        description: "Geniet bij De Vier van heerlijke en seizoensgebonden gerechten. Wij beschikken over een uitgebreide kaart met diverse vlees, vis & vegetarische gerechten.",
        btnText: "Bekijk ons menu",
        linkTo: "menu"
    },
    {
        id: nanoid(),
        title: "Voor uw mooiste momenten",
        imageUrl: buffetImg,
        imageAlt: "Foto van buffetschalen vol met eten.",
        description: "Op zoek naar een locatie voor grote gezelschappen? Bij De Vier kunt u terecht voor een gezellige lunch, borrel of diner. Daarnaast beschikken wij over een aparte zaal die ideaal is voor vergaderingen, diners of feesten.",
        btnText: "Bekijk onze arrangementen",
        linkTo: "buffet"
    },
    {
        id: nanoid(),
        title: "Geniet. Proost. Beleef.",
        imageUrl: eventImg,
        imageAlt: "Foto van live muziek met dansende mensen in de Vier Jaargetijden.",
        description: "Livemuziek bij De Vier! Zin een avondje gezelligheid & dansen? Bekijk onze evenementenagenda met alle data voor de livemuziekavonden.",
        btnText: "Bekijk onze evenementenagenda",
        linkTo: "calendar"
    }
];
