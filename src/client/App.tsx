import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AllStatesSummary } from './client_types/allstates';
import { Actuals, CountrySummary } from './client_types/country';
import Navbar from './components/Navbar';
import Counties from './views/Counties';
import Country from './views/Country';
import CountyDetail from './views/CountyDetail';
import Home from './views/Home';
import StateDetail from './views/StateDetail';
import States from './views/States';
const axios = require('axios').default;

const App = (props: AppProps) => {
  // ! state: countrysum, countryActual, state summary
  const [countrySummaryData, setCountrySummaryData] =
    useState<CountrySummary>();
  const [countryActualData, setCountryActualData] = useState<Actuals[]>([]);
  const [statesSummaryData, setStatesSummaryData] = useState<
    AllStatesSummary[]
  >([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // ! create useEffect - multi-state function
  useEffect(() => {
    //API stuff
    // country - summary and series
    axios
      .get('/api/country/summary')
      .then((res) => {
        setCountrySummaryData(res.data);
        setCountryActualData(res.data.actuals);
      })
      .catch((e: any) => alert(e));

    axios
      .get('/api/states/summary')
      .then((res) => {
        setStatesSummaryData(res.data);
      })
      .catch((e: any) => alert(e));

    // states - summary and series
  }, []);

  useEffect(() => {
    if (countrySummaryData && statesSummaryData.length) {
      setIsLoaded(true);
    }

    //API stuff
  }, [countrySummaryData, statesSummaryData]);

  //if (!isLoaded) return <> Loading </>;

  return (
    <BrowserRouter>
      <Navbar />
      {isLoaded ? (
        <Routes>
          <Route
            path="/"
            element={<Country countryProps={countrySummaryData} />}
          ></Route>

          <Route
            path="/states"
            element={<States stateProps={statesSummaryData} />}
          ></Route>
          <Route path="/states/:state_id" element={<StateDetail />}></Route>

          <Route path="/counties" element={<Counties />}></Route>
          <Route path="/county/:county_id" element={<CountyDetail />}></Route>
        </Routes>
      ) : (
        <h1> Loading...</h1>
      )}
    </BrowserRouter>
  );
};

interface AppProps {}

export default App;
