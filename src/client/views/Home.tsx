import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const axios = require('axios').default;

import { actnow_config } from "../../server/config";


const Home = () => {

    const loc = useLocation();

    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [isAuthed, setIsAuthed] = useState(false)

    const api = axios.create({
        baseURL: `https://api.covidactnow.org/v2/country/US.json?apiKey={${actnow_config.apiKey}} `
    })

    useEffect(() => {

        // axios.get({
        //     baseURL: '/api/countrydata'
        // })
        //     .then(res => console.log(res))
        //     .catch(err => console.error(err));


        //API stuff
        setIsLoaded(true)


    }, [isLoaded])






    return <div className='container'>
        <h1 className="display-3 m-3 text-center"> Welcome  </h1>

        <h2 className='row justify-content-center m-2'> Covid Dashboard</h2>
        <div className="row justify-content-center m-2">
            <div className="col-md-6">
                <div className="card shadow">
                    <div className="card-body row m-5 justify-content-center">

                        {/* {isAuthed && */}
                        <Link to={`/overview`} className="row btn btn-outline-success m-2">Overview </Link>


                        {/* {!isAuthed &&
                            <Link to={`/register`} className="row btn btn-outline-warning m-2">Register </Link>
                        } */}
                        {/* {!isAuthed &&
                            <Link to={`/login`} className="row btn btn-outline-success m-2">Start Here </Link>
                        } */}

                        <Link to={`/learn`} className="row btn btn-outline-warning m-2">Learn More </Link>


                    </div>
                </div>
            </div>
        </div>

    </div>;
};

export default Home;
