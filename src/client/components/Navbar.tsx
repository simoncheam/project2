import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { APIService } from '../services/APIService';

const Navbar = () => {
    const loc = useLocation();
    const nav = useNavigate();

    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [isAuthed, setIsAuthed] = useState(false)

    useEffect(() => {

        if (loc.pathname === '/login' ||
            loc.pathname === '/register' ||
            loc.pathname === '/confirm' ||
            loc.pathname === '/' ||
            loc.pathname === '/verify' ||
            loc.pathname === '/learn'

        ) {
            return;

        } else {


            APIService('/auth/validate')
                .then(res => {

                    const tokenStatus = res.message === 'valid';
                    setIsAuthed(tokenStatus)

                })
                .catch(e => {
                    console.log(e)


                    nav(`/`)
                })

        }
    }, [loc.pathname])





    return <div>

        <Link type="button" className="m-2 btn btn-outline-primary" to="/"> Home </Link>
        {
            isAuthed &&
            <Link type="button" className="m-2 btn btn-outline-primary" to="/contact"> Contact Us </Link>
        }

        {/* {!isAuthed &&

            <Link type="button" className="m-2 btn btn-outline-primary" to="/register"> Register </Link>
        } */}

        {
            !isAuthed &&
            <Link type="button" className="m-2 btn btn-outline-primary" to="/login"> Start Here </Link>
        }






    </div>;
};

export default Navbar;
