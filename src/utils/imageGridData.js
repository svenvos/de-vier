import { nanoid } from "nanoid";
import isSeasonalPeriod from "./dateUtils.js";
import morningBuffetImg from "../assets/imageGridImages/morning-buffet.jpg";
import barImg from "../assets/imageGridImages/bar.jpg";
import dinerbonImg from "../assets/imageGridImages/dinerbon.jpg";
import fishBuffetImg from "../assets/imageGridImages/fish-buffet.jpg";
import christmasImg from "../assets/imageGridImages/christmas.jpg";

let imageGridData = [
    {
        id: nanoid(),
        imageSrc: dinerbonImg,
        imageAlt: "Onze prachtige dinerbon voor een vaas met bloemen, naast een fles wijn.",
        supportingText: "Onze prachtige dinerbon",
        btnTxt: "Bekijk onze dinerbon",
        linkTo: "dinerbon"
    },
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
        imageSrc: fishBuffetImg,
        imageAlt: "Ons heerlijke visbuffet speciaal op maat gemaakt. Tentoongesteld in ons restaurant.",
        supportingText: "Voorbeeld van een visbuffet",
        btnTxt: "Bekijk onze bufetten",
        linkTo: "buffet"
    },
    {
        id: nanoid(),
        imageSrc: barImg,
        imageAlt: "Sfeervolle foto van de bar. Verschillende taps voor bieren te zien, met leuke barkrukken aan de bar.",
        supportingText: "Onze prachtige bar",
        btnTxt: "Bekijk ons menu",
        linkTo: "menu"
    }
];

if (isSeasonalPeriod()) {
    imageGridData.unshift({
        id: nanoid(),
        imageSrc: christmasImg,
        imageAlt: "Nette, gedekte tafel in kerstsferen. Met kerstverlichting aan de wand en een cadeau op tafel.",
        supportingText: "Kom gezellig dineren tijdens de kerstperiode",
        btnTxt: "Bekijk ons kerstmenu",
        linkTo: "menu/christmas"
    });
}

export default imageGridData;
