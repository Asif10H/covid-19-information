import React from 'react';

const CovidGlobalInfo = (props) => {
    const { Date, NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered } = props.global;
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
        <div className="p-3 border bg-dark text-white shadow rounded">
           <h1>  Covid-19 Global Information:</h1>   
           <p><b>Date: </b>{Date}</p>
           <p><b>NewConfirmed: </b>{NewConfirmed}</p>
           <p><b>NewDeaths: </b>{NewDeaths}</p>
           <p><b>NewRecovered: </b>{NewRecovered}</p>
           <p><b>TotalConfirmed: </b>{TotalConfirmed}</p>
           <p><b>TotalDeaths: </b>{TotalDeaths}</p>
           <p><b>TotalRecovered: </b>{TotalRecovered}</p>
        </div>
    </div>
    );
};

export default CovidGlobalInfo;