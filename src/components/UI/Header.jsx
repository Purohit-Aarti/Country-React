import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [show, setShow] = useState(false);

    const handleButtonToggle = () => {
        return setShow(!show);
    }

    return (
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="Logo">
                        <NavLink to="/">
                            <h1>WorldExplorer</h1>
                        </NavLink>
                    </div>
                    <nav className={show ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/About">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Contact">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Country">Country</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="ham-menu">
                        <button onClick={handleButtonToggle}><GiHamburgerMenu /></button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;