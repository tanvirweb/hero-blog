import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header style={{backgroundColor:"yellow"}}>
            <nav className="max-w-7xl mx-auto">
                <ul className="flex gap-4">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;