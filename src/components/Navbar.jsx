import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [navOpen, setnavOpen] = useState(false);
    return (
        <nav>
            <ul class='nav-links'>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
