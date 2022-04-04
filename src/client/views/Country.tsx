import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation, useNavigate } from 'react-router';
import {
  CountrySummary,
  Actuals,
  CountrySeries,
} from '../client_types/country';
const axios = require('axios').default;
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import LineGraph from '../components/LineGraph';
// import Table from '../components/Table';
import { AllStatesSummary } from '../client_types/allstates';

const Country = () => {
  const [countrySummaryData, setCountrySummaryData] =
    useState<CountrySummary>();
  const [countryActualData, setCountryActualData] = useState<Actuals>();

  const [countrySeriesData, setCountrySeriesData] = useState<CountrySeries>();

  const [statesSummaryData, setStatesSummaryData] =
    useState<AllStatesSummary[]>();
  const [states, setStates] = useState<{ stateID: string; cases: string }[]>(
    []
  );

  // ! want tableData for sorted States by cases
  const [tableData, setTableData] = useState([]);

  const loc = useLocation();
  const nav = useNavigate();

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // ! Fetch country summary data
  useEffect(() => {
    axios
      .get('/api/country/summary')
      .then((res) => {
        setCountrySummaryData(res.data);
        setCountryActualData(res.data.actuals);
        setIsLoaded(true);
      })
      .catch((e: any) => alert(e));
  }, [isLoaded]);

  // ! Fetch country timeseries
  useEffect(() => {
    //API stuff
    const fetchData = async () => {
      await axios
        .get('/api/country/timeseries')
        .then((res) => {
          return res;
        })
        .then((data: any) => {
          // let chartData = buildChartData(data.data, casesType);
          // setData(chartData);
          setCountrySeriesData(data.data.actualsTimeseries);
          //console.log(data.data.actualsTimeseries);
          // buildChart(chartData);
        })
        .catch((e: any) => alert(e));
    };

    fetchData();
  }, []);

  // ! Fetch states summary date
  useEffect(() => {
    const getStatesData = async () => {
      await axios
        .get('/api/states/summary')
        .then(({ data }) => {
          const states = data.map((state) => ({
            stateID: state.state,
            cases: state.actuals.cases,
          }));
          console.log(states);
          //let sortedData = sortData(data)

          setStatesSummaryData(data);
          setStates(states);
          console.log(states);
          setIsLoaded(true);
          //  console.log(data.data);
          // setTableData(res.);
        })

        .catch((e: any) => alert(e));
    };
    getStatesData();

    // get state summary
  }, [isLoaded]);

  if (!isLoaded) return <> Loading </>;

  return (
    <Container>
      <Row className="my-3">
        <p className="display-1 justify-content-center">COVID-19 Tracker</p>
        <h1>Summary Stats: {countrySummaryData.country} </h1>
        <Col sm={8}>
          Last Update: {countrySummaryData.lastUpdatedDate}
          <h1>This is a table - Country</h1>
        </Col>

        <Col sm={4}>
          <Form.Select aria-label="Default select example">
            State Selection menu
            <option> States</option>
            {states.map((state) => (
              <option key={`state-${state.stateID}`} value="1">
                {state.stateID}{' '}
              </option>
            ))}
            {/* <option value="2">County Data</option> */}
          </Form.Select>

          <h1>This is a table - State</h1>
        </Col>
      </Row>
      {/*  */}
      {/* <Table states={tableData} /> */}

      <hr />

      <Row className="my-3 ">
        <Col sm>
          <Row className="justify-content-center my-3">
            <Card
              className="shadow background-primary"
              style={{ width: '18rem' }}
            >
              <Card.Title>Demographics </Card.Title>

              <ListGroup variant="flush">
                <ListGroup.Item>
                  Population: {countrySummaryData.population.toLocaleString()}
                </ListGroup.Item>
                {/* <ListGroup.Item>placeholder</ListGroup.Item>
                <ListGroup.Item>placeholder</ListGroup.Item> */}
              </ListGroup>
            </Card>
          </Row>
        </Col>

        <Col sm>
          <Row className="justify-content-center my-3">
            <Card className="shadow" style={{ width: '18rem' }}>
              <Card.Title>Actuals</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Vaccinations completed:{' '}
                  {countryActualData.vaccinationsCompleted.toLocaleString()}
                </ListGroup.Item>
                <ListGroup.Item>
                  Cases: {countryActualData.cases.toLocaleString()}
                </ListGroup.Item>
                <ListGroup.Item>
                  Positive Tests:{' '}
                  {countryActualData.positiveTests.toLocaleString()}
                </ListGroup.Item>
                <ListGroup.Item>
                  Total Deaths: {countryActualData.deaths.toLocaleString()}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Row>
        </Col>

        <Col sm>
          <Row className="justify-content-center my-3">
            <Card className="shadow" style={{ width: '18rem' }}>
              <Card.Title>Analysis</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Deaths/positive case [%]:{' '}
                  {(
                    (countryActualData.deaths * 100) /
                    countryActualData.positiveTests
                  ).toFixed(2)}{' '}
                </ListGroup.Item>
                <ListGroup.Item>
                  Deaths/population [%]:{' '}
                  {(
                    (countryActualData.deaths * 100) /
                    countrySummaryData.population
                  ).toFixed(2)}
                </ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card>
          </Row>
        </Col>
      </Row>

      <hr />
      <Row className="my-3">
        <h1>Daily Stats: {countrySummaryData.country}</h1>
        <Col sm={12}>Last Update: {countrySummaryData.lastUpdatedDate}</Col>

        <Col sm>
          <Row className="justify-content-center my-3">
            <Card className="shadow" style={{ width: '18rem' }}>
              <Card.Title>New Cases</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  {' '}
                  {countryActualData.newCases.toLocaleString()}{' '}
                </ListGroup.Item>
                {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
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
                  {countryActualData.newDeaths.toLocaleString()}{' '}
                </ListGroup.Item>
                {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
              </ListGroup>
            </Card>
          </Row>
        </Col>
        <Col sm>
          <Row className="justify-content-center my-3">
            <Card className="shadow" style={{ width: '18rem' }}>
              <Card.Header>Stuff</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item> stuff </ListGroup.Item>
                {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
              </ListGroup>
            </Card>
          </Row>
        </Col>
      </Row>
      <hr />
      <Row className="my-3">
        <h1>This is a Graph</h1>
        {/* < LineGraph /> */}
      </Row>

      <hr />
      <Row className="my-3">
        <h1>Comparison data</h1>
        <Col sm={12}>Leading Causes of Death in US: (date range)</Col>

        <Col sm>
          <Row className="justify-content-center my-3">
            <Card className="shadow" style={{ width: '18rem' }}>
              <Card.Title>Heart disease and stroke</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Total Deaths (2020): 857,226 </ListGroup.Item>
                <ListGroup.Item>
                  Deaths/population[%]{' '}
                  {((857226 * 100) / countrySummaryData.population).toFixed(2)}%
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
                  {((602350 * 100) / countrySummaryData.population).toFixed(2)}%
                </ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
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
                  {((134242 * 100) / countrySummaryData.population).toFixed(2)}%
                </ListGroup.Item>

                {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
              </ListGroup>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Country;
