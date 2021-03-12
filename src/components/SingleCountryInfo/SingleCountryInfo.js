

const SingleCountryInfo = (props) => {
    const { Country, Date, NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered } = props.country;
    return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4"> 
            <div className="p-3 border bg-dark text-white shadow rounded">   
               <h6 className="text-primary"><b>Country: </b>{Country}</h6>
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

export default SingleCountryInfo;