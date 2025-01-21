import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [show, setShow] = useState(false);

    const handleButtonToggle = () => {
        setShow(!show);
    };

    const handleMenuItemClick = () => {
        setShow(false);
    };

    return (
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="Logo">
                        <NavLink to="/">
                            <h1 onClick={handleMenuItemClick}>WorldExplorer</h1>
                        </NavLink>
                    </div>
                    <nav className={show ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li onClick={handleMenuItemClick}>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li onClick={handleMenuItemClick}>
                                <NavLink to="/About">About</NavLink>
                            </li>
                            <li onClick={handleMenuItemClick}>
                                <NavLink to="/Contact">Contact</NavLink>
                            </li>
                            <li onClick={handleMenuItemClick}>
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