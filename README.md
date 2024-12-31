# Country Component Explanation

This document explains the roles of the hooks used in the `Country` component and their differences.

## File Path

`/c:/Users/dell/OneDrive/Desktop/My-Projects/Country_React/src/Pages/Country.jsx`

## Code Overview

```jsx
import { useEffect, useState, useTransition } from "react";
import { getCountriesData } from "../api/postApi";
import CountryCard from "../components/Layouts/CountryCard";
import Loader from "../components/UI/Loader";

export default function Country() {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);

    // The data fetching and state update are wrapped in startTransition.
    // This marks the state update as a transition, allowing React to prioritize more urgent updates.
    useEffect(() => {
        startTransition(async () => {
            const res = await getCountriesData();
            console.log(res.data);
            setCountries(res.data);
        });
    }, []);

    if (isPending) return <Loader />;

    return (
        <section className="country-section">
            <ul className="grid grid-four-cols">
                {countries.map((country, index) => (
                    <CountryCard country={country} key={index} />
                ))}
            </ul>
        </section>
    );
}


Hooks Used
useState
Purpose: useState is a hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that state.

Usage in Your Code:

const [countries, setCountries] = useState([]);

countries: The current state value, initialized as an empty array. This state will hold the list of countries fetched from the API.
setCountries: The function to update the countries state. You call this function with the new state value to update the state.
useEffect
Purpose: useEffect is a hook that allows you to perform side effects in functional components. Side effects can include data fetching, subscriptions, or manually changing the DOM. The useEffect hook runs after the component renders.

Usage in Your Code:

useEffect(() => {
    startTransition(async () => {
        const res = await getCountriesData();
        console.log(res.data);
        setCountries(res.data);
    });
}, []);

Effect Function: The function inside useEffect is executed after the component mounts. In this case, it fetches data from the API and updates the countries state.
Dependencies Array: The empty array [] ensures that the effect runs only once after the initial render.
useTransition
Purpose: useTransition is a hook that allows you to mark state updates as non-urgent. It helps manage transitions and handle pending states, keeping the UI responsive during state updates that might take some time.

Usage in Your Code:

const [isPending, startTransition] = useTransition();

isPending: A boolean value that indicates whether the transition is currently in progress. You can use this to show a loading indicator or some other feedback to the user while the transition is happening.
startTransition: A function that you use to wrap the state updates you want to mark as non-urgent. When you call startTransition, React will prioritize more urgent updates (like user interactions) and defer the transition updates.
How They Work Together
State Management with useState:

useState is used to manage the countries state, which holds the list of countries fetched from the API.
Performing Side Effects with useEffect:

useEffect is used to perform the side effect of fetching data from the API when the component mounts. The fetched data is then used to update the countries state.
Managing Transitions with useTransition:

useTransition is used to mark the state update for fetching data as a transition. This helps keep the UI responsive by deferring the non-urgent state update until more urgent updates are handled.
isPending is used to conditionally render the Loader component while the data is being fetched.
Summary
useState: Manages state in functional components. In your code, it manages the countries state.
useEffect: Performs side effects in functional components. In your code, it fetches data from the API when the component mounts.
useTransition: Manages transitions and handles pending states. In your code, it marks the state update for fetching data as a transition and provides a way to show a loading indicator while the transition is in progress.
By using these hooks together, you can manage state, perform side effects, and handle transitions in a way that keeps your component responsive and maintainable.