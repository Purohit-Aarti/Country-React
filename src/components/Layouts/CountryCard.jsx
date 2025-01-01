import { FaAnglesRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function CountryCard({ country }) {
    const {flags, name, capital, region, population} = country;
    return(
        <li className="country-card card">
            <div className="container-card bg-white-box">
                <img src={flags.png} alt={flags.alt} />
                <div className="countryInfo">
                    <p className="card-title">
                        {name.common.length > 10 ? name.common.slice(0, 10) + "..." : name.common}
                    </p>
                    <p>
                        <span className="card-description">Population:</span>
                        {population.toLocaleString()}
                    </p>
                    <p>
                        <span className="card-description">Region:</span>
                        {region}
                    </p>
                    <p>
                        <span className="card-description">Capital:</span>
                        {capital[0]}
                    </p>
                    <NavLink to={`/Country/${name.common}`} style={{textDecoration: "none"}}>
                        <button>Read More <FaAnglesRight /></button>
                    </NavLink>
                </div>
            </div>
        </li>
    )
}