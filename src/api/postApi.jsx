import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
});

export const getCountriesData = async () => {
    return api.get("/all?fields=name,population,region,capital,flags");
}