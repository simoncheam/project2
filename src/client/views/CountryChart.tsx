import React, { useEffect } from 'react';
import { CountrySeries } from '../client_types/country';
import { Line } from 'react-chartjs-2';

interface ChartProps {
  timeSeries: CountrySeries;
}

const CountryChart = (data: ChartProps) => {
  //! create useEffect
  // ! create labels(dates), deaths via map

  //* create dataset

  useEffect(() => {
    //API stuff
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="display-1">Chart</h1>
      </div>
      <div className="row"></div>
    </div>
  );
};

export default CountryChart;
