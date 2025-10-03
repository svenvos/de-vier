import { NavLink } from "react-router";
import { nanoid } from "nanoid";

export default function NavbarMenuItems() {
    const menuItems = [
        {
            id: nanoid(),
            text: "Menu",
            linkTo: "menu"
        },
        {
            id: nanoid(),
            text: "Arrangementen",
            linkTo: "buffet"
        },
        {
            id: nanoid(),
            text: "Agenda",
            linkTo: "calendar"
        },
        {
            id: nanoid(),
            text: "Over ons",
            linkTo: "about"
        },
        {
            id: nanoid(),
            text: "Vacatures",
            linkTo: "jobs"
        },
        {
            id: nanoid(),
            text: "Contact",
            linkTo: "contact"
        }
    ];

    const menuItemElements = menuItems.map(menuItem => {
        return (
            <li key={menuItem.id}>
                <NavLink to={menuItem.linkTo} className={({isActive}) => isActive ? "active font-size-32" : "font-size-32"}>{menuItem.text}</NavLink>
            </li>
        );
    });

    return (
        <div className="menu-items">
            <ul>
                {menuItemElements}
            </ul>
        </div>
    );
}
