const axios = require('axios').default;

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { SingleStateSeries, SingleStateSummary } from '../client_types/singlestate';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StateChart from './StateChart';
import Container from 'react-bootstrap/Container';

const StateDetail = () => {
  let params = useParams();
  const state_id = params.id;
  const nav = useNavigate();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [singleStateSeries, setSingleStateSeries] = useState<SingleStateSeries>();
  const [singleStateSummary, setSingleStateSummary] = useState<SingleStateSummary>();

  useEffect(() => {
    //API stuff
    //? Can state specific data be pre-fetched from the App view?
    //! fetch single state time series - potential solution: use loc.path then useParams to define api route
    // /singleseries/:state_id'
    axios
      .get(`/api/states/singleseries/${state_id}`)
      .then((res: any) => {
        setSingleStateSeries(res.data);
        // setIsLoaded(true);
      })
      .catch((e: string) => alert(e));
    axios
      .get(`/api/states/singlesummary/${state_id}`)
      .then((res: any) => {
        setSingleStateSummary(res.data);
        setIsLoaded(true);
      })
      .catch((e: string) => alert(e));
  }, []);

  if (!isLoaded || !singleStateSeries || !singleStateSummary) {
    return <> Loading...</>;
  }

  return (
    <Container>
      <Row className="my-3">
        <h1>State Summary - {singleStateSeries.state}</h1>
        {/* < LineGraph /> */}
        <div className="justify-content-center">
          <Col sm={6}>
            <h2>State Stats</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Critical Metrics</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Population</th>
                  <td>{singleStateSummary.population.toLocaleString()}</td>
                </tr>
                <tr>
                  <th scope="row">Vaccinations Completed</th>
                  <td>{singleStateSummary.actuals.vaccinationsCompleted.toLocaleString()}</td>
                </tr>
                <tr>
                  <th scope="row"># Cases</th>
                  <td>{singleStateSummary.actuals.cases.toLocaleString()}</td>
                </tr>
                <tr>
                  <th scope="row"># Positive Tests</th>
                  <td>{singleStateSummary.actuals.positiveTests.toLocaleString()}</td>
                </tr>
                <tr>
                  <th scope="row"># Deaths</th>
                  <td>{singleStateSummary.actuals.deaths.toLocaleString()}</td>
                </tr>
                <tr>
                  <th scope="row">Source</th>
                  <td>
                    <a href={`${singleStateSummary.url}`}>{singleStateSummary.url}</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col sm={6}>
            <h2>Analysis</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Critical Metrics</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">% positive cases who have died</th>
                  <td>
                    {(
                      (singleStateSummary.actuals.deaths * 100) /
                      singleStateSummary.actuals.positiveTests
                    ).toFixed(2)}
                    %
                  </td>
                </tr>
                <tr>
                  <th scope="row">% population who have died</th>
                  <td>
                    {(
                      (singleStateSummary.actuals.deaths * 100) /
                      singleStateSummary.population
                    ).toFixed(2)}
                    %
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </div>
      </Row>
      <Row className="my-3">
        <h1>State Timeseries </h1>
        <div className="justify-content-center">
          <Col sm={12}>
            <StateChart timeSeries={singleStateSeries} />
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default StateDetail;
