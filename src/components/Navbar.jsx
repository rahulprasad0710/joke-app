import { useState } from "react";

const Navbar = () => {
    const [navOpen, setnavOpen] = useState(false);
    return (
        <nav>
            <div onClick={() => setnavOpen(!navOpen)} class='hamburger'>
                <div class='line1'></div>
                <div class='line2'></div>
                <div class='line3'></div>
            </div>
            <ul class={navOpen ? "nav-links open" : "nav-links"}>
                <li>
                    <a href='/'>SO&nbsp;FUNKTIONIERT'S</a>
                </li>
                <li>
                    <a href='/'>SONDERANGEBOTE</a>
                </li>
                <li>
                    <a href='/'>MEIN BEREICH</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
