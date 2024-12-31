import { useEffect, useState, useTransition} from "react";
import { getCountriesData } from "../api/postApi";
import CountryCard from "../components/Layouts/CountryCard";
import Loader from "../components/UI/Loader";

export default function Country () {

    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);

    // The data fetching and state update are wrapped in startTransition.
// This marks the state update as a transition, allowing React to prioritize more urgent updates.
    useEffect(() => {
        startTransition(async () => {
            const res = await getCountriesData();
            console.log(res.data);
            setCountries(res.data);
        })
    }, []);

    if (isPending) return <Loader />;

    return (
        <section className="country-section">
            <ul className="grid grid-four-cols">
                {
                    countries.map((currCountry, index) => {
                        return <CountryCard country={currCountry} key={index} />
                    })
                }
            </ul>
        </section>
    )
}