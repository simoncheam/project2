import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navigate, useLocation, useNavigate } from 'react-router';
import { AllStatesSummary, Actuals } from '../client_types/allstates';
const axios = require('axios').default;
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { StatsModuleIssuer } from 'webpack';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';

interface StatesProps {
  // name of props passed in
  stateProps: AllStatesSummary[];
}

const States = (props: StatesProps) => {
  const [statesSummaryData, setStatesSummaryData] = useState<AllStatesSummary[]>();
  // const [statesActualData, setStatesActualData] = useState<Actuals>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const loc = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    //API stuff
    setStatesSummaryData(props.stateProps);
    setIsLoaded(true);
  }, []);

  if (!isLoaded || !statesSummaryData.length) return <> Loading </>;

  return (
    <Container>
      {/* //! Add map here, map thru all states */}
      <Row className="my-3">
        <p className="display-1 justify-content-center">COVID-19 Tracker</p>
        <Col sm={12}>
          <p className="text-muted">Last Update: {props.stateProps[0].lastUpdatedDate}</p>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h1>Summary: All States </h1>
              </Accordion.Header>
              <Accordion.Body>
                <table className="table table-striped">
                  <thead>
                    {/* column names */}
                    <tr>
                      <th scope="col">State</th>
                      <th scope="col">Population</th>
                      <th scope="col">Cases</th>
                      <th scope="col">Deaths</th>
                      <th scope="col">Link to Detailed State View)</th>
                      {/* <th scope="col">Handle</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {statesSummaryData.map((state) => (
                      <tr>
                        {/* Row 1 */}
                        <th scope="row">
                          <a>{state.state} </a>
                        </th>
                        <td>{state.population.toLocaleString()}</td>
                        <td>{state.actuals.cases.toLocaleString()}</td>
                        <td>{state.actuals.deaths.toLocaleString()}</td>
                        <td>
                          <Link to={`/states/${state.state}`} className="row btn btn-warning ">
                            See More
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      <hr />
      <Row className="my-3">
        <Col sm={12}>
          {/* //! Accordion */}
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h1>Analysis: All States </h1>
              </Accordion.Header>
              <Accordion.Body>
                <table className="table table-striped">
                  <thead>
                    {/* column names */}

                    <tr>
                      <th scope="col">State</th>
                      <th scope="col">Deaths</th>
                      <th scope="col">Vax completed/population[%]</th>

                      <th scope="col">Deaths/positive case [%]</th>
                      <th scope="col">Deaths/population [%]</th>
                      <th scope="col">Deaths/completed vax [%]</th>
                      <th scope="col">hospitalization/completed vax [%]</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* //! mapped analysis */}

                    {statesSummaryData.map((state) => (
                      <tr>
                        <th scope="row">
                          {/* //! state */}
                          <a>{state.state} </a>
                        </th>
                        {/* //! deaths */}
                        <td> {state.actuals.deaths.toLocaleString()}</td>
                        {/* //! vax completed /population - what % of pop */}
                        <td>
                          {' '}
                          {state.actuals.vaccinationsCompleted
                            ? (
                                (state.actuals.vaccinationsCompleted * 100) /
                                state.population
                              ).toFixed(1)
                            : 'N/A'}
                        </td>
                        {/* //! death/positive case */}
                        <td>
                          {state.actuals.positiveTests
                            ? ((state.actuals.deaths * 100) / state.actuals?.positiveTests).toFixed(
                                3
                              )
                            : 'N/A'}
                        </td>
                        {/* //! death/population */}
                        <td> {((state.actuals.deaths * 100) / state.population).toFixed(3)}</td>
                        {/* //! death/completed vax */}
                        <td>
                          {' '}
                          {state.actuals.vaccinationsCompleted
                            ? (
                                (state.actuals.deaths * 100) /
                                state.actuals?.vaccinationsCompleted
                              ).toFixed(3)
                            : 'N/A'}
                        </td>
                        {/* //!covid hospital bed usage/completed vax */}
                        <td>
                          {' '}
                          {state.actuals.vaccinationsCompleted
                            ? (
                                (state.actuals.hospitalBeds.currentUsageCovid * 100) /
                                state.actuals.vaccinationsCompleted
                              ).toFixed(3)
                            : 'N/A'}
                        </td>
                        <td> </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      {/* // ! end of map */}

      <hr />

      <hr />
    </Container>
  );
};

export default States;
