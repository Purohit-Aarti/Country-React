import { useEffect, useState, useTransition} from "react";
import { getCountriesData } from "../api/postApi";
import CountryCard from "../components/Layouts/CountryCard";
import Loader from "../components/UI/Loader";
import SearchFilter from "../components/UI/SearchFilter";

export default function Country () {

    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);

    // The search and filter states are initialized with an empty string.
    const [search, setSearch] = useState();
    const [filter, setFilter] = useState("All");

    // The data fetching and state update are wrapped in startTransition.
    // This marks the state update as a transition, allowing React to prioritize more urgent updates.
    useEffect(() => {
        startTransition(async () => {
            const res = await getCountriesData();
            console.log(res.data);
            setCountries(res.data);
        })
    }, []);

    if (isPending) return <Loader />

    // search & filter logic
    const searchCountry = (country) => {
        if(search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return country;
    }

    const filterRegion = (country) => {
        if (filter === "All") return country;
        return country.region === filter;
    }

    const filteredCountries = countries.filter(
        (country) => searchCountry(country) && filterRegion(country)
    );

    return (
        <section className="country-section">

            <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries}/>



            <ul className="grid grid-four-cols">
                {
                    filteredCountries.map((currCountry, index) => {
                        return <CountryCard country={currCountry} key={index} />
                    })
                }
            </ul>
        </section>
    )
}