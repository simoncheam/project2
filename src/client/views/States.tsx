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
  const [statesSummaryData, setStatesSummaryData] =
    useState<AllStatesSummary[]>();
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
          <p className="text-muted">
            Last Update: {props.stateProps[0].lastUpdatedDate}
          </p>
          <Accordion defaultActiveKey={['0']} alwaysOpen>
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
                      <th scope="col">More Details (LINK)</th>
                      {/* <th scope="col">Handle</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {statesSummaryData.map((state) => (
                      <tr>
                        {/* Row 1 */}
                        <th scope="row">
                          <a href={state.url}>{state.state} </a>
                        </th>
                        <td>{state.population.toLocaleString()}</td>
                        <td>{state.actuals.cases.toLocaleString()}</td>
                        <td>{state.actuals.deaths.toLocaleString()}</td>
                        <td>State details Link</td>
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

      <div>
        {props.stateProps.map((st) => (
          <div key={`state-${st.state}`}>
            <Row className="my-3 ">
              <Col sm>
                <Row className="justify-content-center my-3">
                  <Card
                    className="shadow background-primary p-3"
                    style={{ width: '18rem' }}
                  >
                    <Card.Title>{st.state}: </Card.Title>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        Population: {st.population.toLocaleString()}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        source:
                        <a href={st.url}> {st.url}</a>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Row>
              </Col>

              <Col sm>
                <Row className="justify-content-center my-3">
                  <Card className="shadow p-3" style={{ width: '20rem' }}>
                    <Card.Title>Actuals</Card.Title>
                    <ListGroup variant="flush">
                      {/* // ? dealing with tolocalestring error? */}
                      <ListGroup.Item>
                        Vaccinations completed:{' '}
                        {st.actuals.vaccinationsCompleted}{' '}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Cases: {st.actuals.cases.toLocaleString()}{' '}
                      </ListGroup.Item>

                      {st.actuals.positiveTests ? (
                        <ListGroup.Item>
                          Positive Tests:{' '}
                          {st.actuals.positiveTests.toLocaleString()}{' '}
                        </ListGroup.Item>
                      ) : (
                        <ListGroup.Item>Positive Tests: N/A </ListGroup.Item>
                      )}

                      <ListGroup.Item>
                        Total Deaths: {st.actuals.deaths.toLocaleString()}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Row>
              </Col>

              <Col sm>
                <Row className="justify-content-center my-3">
                  <Card className="shadow p-3" style={{ width: '20rem' }}>
                    <Card.Title>Analysis</Card.Title>
                    <ListGroup variant="flush">
                      {st.actuals.positiveTests ? (
                        <ListGroup.Item>
                          Deaths/positive case [%]:{' '}
                          {(
                            (st.actuals.deaths * 100) /
                            st.actuals.positiveTests
                          ).toFixed(2)}{' '}
                        </ListGroup.Item>
                      ) : (
                        <ListGroup.Item>
                          Deaths/positive case [%]: Data not available{' '}
                        </ListGroup.Item>
                      )}

                      <ListGroup.Item>
                        Deaths/population [%]:{' '}
                        {((st.actuals.deaths * 100) / st.population).toFixed(2)}{' '}
                      </ListGroup.Item>
                      {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                    </ListGroup>
                  </Card>
                </Row>
              </Col>
            </Row>
          </div>
        ))}
      </div>

      {/* // ! end of map */}

      <hr />
      <Row className="my-3">
        <h1>Analysis</h1>
      </Row>
      <Row className="my-3">
        <h1>Chart</h1>
      </Row>

      <hr />
    </Container>
  );
};

export default States;
