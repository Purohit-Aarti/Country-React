import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
});

// HTTP GET Request to get all countries data
export const getCountriesData = async () => {
    return api.get("/all?fields=name,population,region,capital,flags");
}

// HTTP GET Request to get individual country data
export const getIndividualCountryInfo =  (name) => {
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
}