import { NavLink } from "react-router";

export default function NavbarMenuItems() {
    const menuItems = [
        {
            text: "Menu",
            linkTo: "menu"
        },
        {
            text: "Buffetten",
            linkTo: "buffet"
        },
        {
            text: "Agenda",
            linkTo: "calendar"
        },
        {
            text: "Over ons",
            linkTo: "about"
        },
        {
            text: "Contact",
            linkTo: "contact"
        }
    ];

    const menuItemElements = menuItems.map(menuItem => {
        return (
            <li>
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
