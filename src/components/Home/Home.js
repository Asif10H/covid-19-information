import React, { useEffect, useState } from 'react';
import CovidGlobalInfo from '../CovidGlobalInfo/CovidGlobalInfo';
import SingleCountryInfo from '../SingleCountryInfo/SingleCountryInfo';
const Home = () => {
    const [global, setGlobal] = useState({});
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const urlGlobal = 'https://api.covid19api.com/summary';
        fetch(urlGlobal)
            .then(res => res.json())
            .then(data => setGlobal(data.Global))
    }, [])

    useEffect(() => {
        const urlCountry = 'https://api.covid19api.com/summary';
        fetch(urlCountry)
            .then(res => res.json())
            .then(data => setCountries(data.Countries))
    }, [])
    return (
        <div>
            <div class="container-fluid">
                <h1>Covid-19 Information</h1>
                <div class="row  g-2 g-lg-3">
                    {
                        <CovidGlobalInfo global={global}></CovidGlobalInfo>
                    }
                </div>
            </div>
            <div className="container-fluid text-center">
                <h1>  Covid-19 Global Information:</h1>
            </div>
            <div className="container-fluid">
                <div className="row g-2 g-lg-3">
                    {
                        countries.map(country => <SingleCountryInfo country={country}></SingleCountryInfo>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;