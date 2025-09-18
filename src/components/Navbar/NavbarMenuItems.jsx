import { NavLink } from "react-router";

export default function NavbarMenuItems() {
    const menuItems = ["menu", "buffetten", "agenda", "over ons", "contact"];

    const menuItemElements = menuItems.map(item => {
        return (
            <li>
                <NavLink to={item} className={({isActive}) => isActive ? "active font-size-32" : "font-size-32"}>{item}</NavLink>
            </li>
        );
    });

    return (
        <>
            <div className="menu-items">
                <ul>
                    {menuItemElements}
                </ul>
            </div>
        </>
    );
}
