# WorldExplorer

WorldExplorer is a React application that allows users to explore information about different countries. The application includes features such as a search filter, a mobile-friendly navigation menu, and detailed country information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Components](#components)
  - [Header](#header)
  - [SearchFilter](#searchfilter)
  - [Country](#country)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/WorldExplorer.git
    ```
2. Navigate to the project directory:
    ```sh
    cd WorldExplorer
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Features

- **Responsive Design**: The application is mobile-friendly with a responsive navigation menu.
- **Search and Filter**: Users can search for countries and filter them by region.
- **Detailed Information**: Provides detailed information about each country.

## Components

### Header

The `Header` component contains the navigation menu, including links to different pages and a hamburger menu for mobile view.

#### Code Example

```jsx
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [show, setShow] = useState(false);

    const handleMenuItemClick = () => {
        setShow(false);
    };

    const handleButtonToggle = () => {
        setShow(!show);
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
isPending is used to conditionally render the Loader component while the data is being fetched.
Summary
useState: Manages state in functional components. In your code, it manages the countries state.
useEffect: Performs side effects in functional components. In your code, it fetches data from the API when the component mounts.
useTransition: Manages transitions and handles pending states. In your code, it marks the state update for fetching data as a transition and provides a way to show a loading indicator while the transition is in progress.
By using these hooks together, you can manage state, perform side effects, and handle transitions in a way that keeps your component responsive and maintainable.
