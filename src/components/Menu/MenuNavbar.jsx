import { NavLink } from "react-router";
import { isSeasonalPeriod, isValentinePeriod } from "../../utils/dateUtils.js";

export default function MenuNavbar() {
    return (
        <nav className="menu-nav">
            <NavLink to="lunch" className={({isActive}) => isActive ? "active" : ""}>Lunch</NavLink>
            <NavLink to="." end className={({isActive}) => isActive ? "active" : ""}>Diner</NavLink>
            <NavLink to="desserts" className={({isActive}) => isActive ? "active" : ""}>Desserts</NavLink>
            {isSeasonalPeriod() && (
                <NavLink to="christmas" className={({isActive}) => isActive ? "active" : ""}>Kerstmenu</NavLink>
            )}
            {isValentinePeriod() && (
                <NavLink to="valentine" className={({isActive}) => isActive ? "active" : ""}>Valentijn</NavLink>
            )}
        </nav>
    );
}
