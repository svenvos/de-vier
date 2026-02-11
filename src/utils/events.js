import { nanoid } from "nanoid";
import pasen from "../assets/events/pasen.jpg";
import lenteWijn from "../assets/events/lentewijn.jpg";

export const events = [
    {
        id: nanoid(),
        title: "Vier Pasen bij De Vier!",
        date: "5 april 2026",
        description: "Kom op eerste paasdag genieten van een heerlijke Paasbrunch met diverse soorten broodjes, luxe beleg bestaande uit vis & vlees en natuurlijk eieren! Reserveren is vanaf nu mogelijk via de website, telefonisch of via de mail! Reserveren voor een groep is uiteraard ook mogelijk!",
        startingTime: "11:00",
        poster: pasen
    },
    {
        id: nanoid(),
        title: "LenteWijn Zondagse Brunchproeverij!",
        date: "31 mei 2026",
        description: "Kom zondag 31 maart genieten van 12 heerlijke proefwijnen in combinatie met 6 lentegerechtjes. In samenwerking met @wijnwereldnederland laten wij u heerlijke combinaties proeven! Wilt u erbij zijn? Reserveren kan vanaf nu via info@devier-kampen.nl of via 038- 333 34 63",
        startingTime: "13:00",
        poster: lenteWijn
    }
];
