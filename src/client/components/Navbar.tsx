import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const loc = useLocation();
  const nav = useNavigate();

  return (
    <div>
      <Link type="button" className="m-2 btn btn-outline-primary" to="/">
        Home
      </Link>
      {/* <Link type="button" className="m-2 btn btn-outline-primary" to="/chart">
        Chart
      </Link> */}
      <Link type="button" className="m-2 btn btn-outline-primary" to="/states">
        States
      </Link>
    </div>
  );
};

export default Navbar;
