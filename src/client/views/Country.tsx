import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation, useNavigate } from 'react-router';
import { CountrySummary, Actuals, CountrySeries } from '../client_types/country';
const axios = require('axios').default;
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
// import Table from '../components/Table';
import { AllStatesSummary } from '../client_types/allstates';
import Accordion from 'react-bootstrap/Accordion';
import CountryChart from './CountryChart';

interface CountryProps {
  countryProps: CountrySummary;
  timeSeries: CountrySeries;
  //? Q: if we want to pass in another prop (ie stateProps) into the Country view element, could we include it within this same CountryProps Interface?
  // ie. stateProps: StatesSummary
}

const Country = (props: CountryProps) => {
  // ! want tableData for sorted States by cases
  const [tableData, setTableData] = useState([]);

  const loc = useLocation();
  const nav = useNavigate();

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // ! Fetch country timeseries
  //   useEffect(() => {
  //     //API stuff
  //     const fetchData = async () => {
  //       await axios
  //         .get('/api/country/timeseries')
  //         .then((res) => {
  //           return res;
  //         })
  //         .then((data: any) => {
  //           // let chartData = buildChartData(data.data, casesType);
  //           // setData(chartData);
  //           setCountrySeriesData(data.data.actualsTimeseries);
  //           //console.log(data.data.actualsTimeseries);
  //           // buildChart(chartData);
  //         })
  //         .catch((e: any) => alert(e));
  //     };

  //     fetchData();
  //   }, []);

  // ! Fetch states summary date
  //   useEffect(() => {
  //     const getStatesData = async () => {
  //       await axios
  //         .get('/api/states/summary')
  //         .then(({ data }) => {
  //           const states = data.map((state) => ({
  //             stateID: state.state,
  //             cases: state.actuals.cases,
  //           }));
  //           console.log(states);
  //           //let sortedData = sortData(data)

  //           setStatesSummaryData(data);
  //           setStates(states);
  //           console.log(states);
  //           setIsLoaded(true);
  //           //  console.log(data.data);
  //           // setTableData(res.);
  //         })

  //         .catch((e: any) => alert(e));
  //     };
  //     getStatesData();

  //     // get state summary
  //   }, [isLoaded]);

  if (!props.countryProps) return <> Loading </>;

  return (
    <Container>
      <Row className="my-3">
        <p className="display-1 justify-content-center">COVID-19 Tracker</p>
        <h1>Summary: {props.countryProps.country} </h1>
        <p className="text-muted">Last Update: {props.countryProps.lastUpdatedDate}</p>
        <Col sm={6}>
          <h2>Country Stats </h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Critical Metrics</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Population</th>
                <td>{props.countryProps.population.toLocaleString()}</td>
              </tr>
              <tr>
                <th scope="row">Vaccinations Completed</th>
                <td>{props.countryProps.actuals.vaccinationsCompleted.toLocaleString()}</td>
              </tr>
              <tr>
                <th scope="row"># Cases</th>
                <td>{props.countryProps.actuals.cases.toLocaleString()}</td>
              </tr>
              <tr>
                <th scope="row"># Positive Tests</th>
                <td>{props.countryProps.actuals.positiveTests.toLocaleString()}</td>
              </tr>
              <tr>
                <th scope="row"># Deaths</th>
                <td>{props.countryProps.actuals.deaths.toLocaleString()}</td>
              </tr>
              {/* <tr>
                <th scope="row">Source</th>
                <td>{props.countryProps.url}</td>
              </tr> */}
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
                <th scope="row">Deaths/positive case [%]</th>
                <td>
                  {(
                    (props.countryProps.actuals.deaths * 100) /
                    props.countryProps.actuals.positiveTests
                  ).toFixed(2)}{' '}
                </td>
              </tr>
              <tr>
                <th scope="row">Deaths/population [%]</th>
                <td>
                  {(
                    (props.countryProps.actuals.deaths * 100) /
                    props.countryProps.population
                  ).toFixed(3)}
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>

      {/* //! --- Daily Update section */}

      <hr />
      <Row className="my-3">
        <h1>Daily Update: {props.countryProps.country}</h1>
        <Col sm={12}>
          <p className="text-muted">Last Update: {props.countryProps.lastUpdatedDate}</p>
        </Col>

        <Col sm>
          <Row className="justify-content-center my-3">
            <Card className="shadow" style={{ width: '18rem' }}>
              <Card.Title>New Cases</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  {' '}
                  {props.countryProps.actuals.newCases.toLocaleString()}{' '}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Row>
        </Col>
        <Col sm>
          <Row className="justify-content-center my-3">
            <Card className="shadow" style={{ width: '18rem' }}>
              <Card.Title>New Deaths</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  {' '}
                  {props.countryProps.actuals.newDeaths.toLocaleString()}{' '}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Row>
        </Col>
      </Row>
      <hr />
      <Row className="my-3">
        <h1>US Timeseries </h1>
        {/* < LineGraph /> */}
        <div className="justify-content-center">
          <Col sm={12}>
            <CountryChart timeSeries={props.timeSeries} />
          </Col>
        </div>
      </Row>

      <hr />
      {/* //! Accordion */}

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h1>Comparison data</h1>
          </Accordion.Header>
          <Accordion.Body>
            <Row className="my-3">
              <Col sm>
                <Row className="justify-content-center my-3">
                  <Card className="shadow" style={{ width: '18rem' }}>
                    <Card.Title>Heart disease and stroke</Card.Title>
                    <ListGroup variant="flush">
                      <ListGroup.Item>Total Deaths (2020): 857,226 </ListGroup.Item>
                      <ListGroup.Item>
                        Deaths/population[%]{' '}
                        {((857226 * 100) / props.countryProps.population).toFixed(2)}%
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Row>
              </Col>
              <Col sm>
                <Row className="justify-content-center my-3">
                  <Card className="shadow" style={{ width: '18rem' }}>
                    <Card.Title>Cancer</Card.Title>
                    <ListGroup variant="flush">
                      <ListGroup.Item>Total Deaths (2020): 602,350 </ListGroup.Item>
                      <ListGroup.Item>
                        Deaths/population[%]:{' '}
                        {((602350 * 100) / props.countryProps.population).toFixed(2)}%
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Row>
              </Col>
              <Col sm>
                <Row className="justify-content-center my-3">
                  <Card className="shadow" style={{ width: '18rem' }}>
                    <Card.Title>Alzheimers</Card.Title>
                    <ListGroup variant="flush">
                      <ListGroup.Item>Total Deaths (2020): 134,242 </ListGroup.Item>
                      <ListGroup.Item>
                        Deaths/population[%]:{' '}
                        {((134242 * 100) / props.countryProps.population).toFixed(2)}%
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Row>
              </Col>

              <Col sm={12}>
                Leading Causes of Death in US:
                <a href="https://www.cdc.gov/nchs/fastats/leading-causes-of-death.htm">
                  {' '}
                  https://www.cdc.gov/nchs/fastats/leading-causes-of-death.htm
                </a>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Country;
