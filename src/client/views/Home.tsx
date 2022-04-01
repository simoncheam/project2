import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const axios = require('axios').default;



const Home = () => {

    const loc = useLocation();

    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [isAuthed, setIsAuthed] = useState(false)


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
                        <Link to={`/country`} className="row btn btn-outline-success m-2">Country </Link>
                        <Link to={`/states`} className="row btn btn-outline-success m-2">State</Link>
                        <Link to={`/counties`} className="row btn btn-outline-success m-2">County</Link>

                        <Link to={`/learn`} className="row btn btn-outline-warning m-2">Learn More </Link>


                    </div>
                </div>
            </div>
        </div>

    </div>;
};

export default Home;
