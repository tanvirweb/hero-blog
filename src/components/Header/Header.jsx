import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header style={{backgroundColor:"yellow"}}>
            <nav className="max-w-7xl mx-auto">
                <ul className="flex gap-4">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs">Blogs</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;