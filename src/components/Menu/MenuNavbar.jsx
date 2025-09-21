import { NavLink } from "react-router";

export default function MenuNavbar() {
    return (
        <nav className="menu-nav">
            <NavLink to="." end className={({isActive}) => isActive ? "active" : ""}>Diner</NavLink>
            <NavLink to="desserts" className={({isActive}) => isActive ? "active" : ""}>Desserts</NavLink>
            <NavLink to="lunch" className={({isActive}) => isActive ? "active" : ""}>Lunch</NavLink>
        </nav>
    );
}
