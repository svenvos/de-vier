import { nanoid } from "nanoid";
import bandNight from "../assets/events/bandjes-avond.jpg";
import tigerClub from "../assets/events/tigerclub.jpg";

export const events = [
    {
        id: nanoid(),
        title: "Bandjesavond",
        date: "25 oktober 2025",
        description: "Geniet van een avond livemuziek van No Brakes",
        startingTime: "22:00",
        poster: bandNight
    },
    {
        id: nanoid(),
        title: "Tiger Club",
        date: "9 november 2025",
        description: "Geniet van een feestelijke avond met Clemens en Hans. Kaarten verkrijgbaar bij De Vier Jaargetijden, Goosen & aan de deur.",
        startingTime: "16:00",
        poster: tigerClub
    }
];
