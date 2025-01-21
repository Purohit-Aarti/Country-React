export default function SearchFilter({ search, setSearch, filter, setFilter, countries, setCountries }) {
    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
        console.log(search);
    }

    const handleFilterChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value);
        console.log(filter);
    }

    const sortCountries = (order) => {
        const sortedCountries = [...countries].sort((a, b) => {
            if (order === "asc") {
                return a.name.common.localeCompare(b.name.common);
            } else {
                return b.name.common.localeCompare(a.name.common);
            }
        });
        setCountries(sortedCountries);
    }

    return (
        <section className="section-searchFilter container">
            <input type="text" placeholder="search" className="select-section" value={search} onChange={handleInputChange}/>

            <div>
                <button onClick={() => sortCountries("asc")}>Asc</button>
            </div>

            <div>
                <button onClick={() => sortCountries("desc")}>Desc</button>
            </div>

            <div>
                <select className="select-section" value={filter} onChange={handleFilterChange}>
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    )
}