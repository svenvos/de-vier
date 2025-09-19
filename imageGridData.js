import { nanoid } from "nanoid";
import morningBuffetImg from "./src/assets/imageGridImages/morning-buffet.jpg";
import barImg from "./src/assets/imageGridImages/bar.jpg";
import dinerbonImg from "./src/assets/imageGridImages/dinerbon.jpg";
import fishBuffetImg from "./src/assets/imageGridImages/fish-buffet.jpg";
import wrapsBuffetImg from "./src/assets/imageGridImages/wraps-buffet.jpg";

export default [
    {
        id: nanoid(),
        imageSrc: morningBuffetImg,
        imageAlt: "Voorbeeld van een heerlijk uitgebreid ochtendbuffet met verschillende soorten vleeswaren en broodjes.",
        supportingText: "Voorbeeld van een ontbijtbuffet",
        btnTxt: "Bekijk onze buffetten",
        linkTo: "buffet"
    },
    {
        id: nanoid(),
        imageSrc: barImg,
        imageAlt: "Sfeervolle foto van de bar. Verschillende taps voor bieren te zien, met leuke barkrukken aan de bar.",
        supportingText: "Onze prachtige bar",
        btnTxt: "Bekijk ons menu",
        linkTo: "menu"
    },
    {
        id: nanoid(),
        imageSrc: dinerbonImg,
        imageAlt: "",
        supportingText: "",
        btnTxt: "",
        linkTo: ""
    },
    {
        id: nanoid(),
        imageSrc: "",
        imageAlt: "",
        supportingText: "",
        btnTxt: "",
        linkTo: ""
    }
];
