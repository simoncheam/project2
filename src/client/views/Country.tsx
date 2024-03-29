import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation, useNavigate } from 'react-router';
import { CountrySummary, Actuals, CountrySeries } from '../client_types/country';
const axios = require('axios').default;
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import CountryChart from './CountryChart';

interface CountryProps {
  countryProps: CountrySummary;
  timeSeries: CountrySeries;
}

const Country = (props: CountryProps) => {
  const loc = useLocation();
  const nav = useNavigate();

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
                    (props.countryProps.actuals.deaths * 100) /
                    props.countryProps.actuals.positiveTests
                  ).toFixed(2)}
                  %
                </td>
              </tr>
              <tr>
                <th scope="row">% population who have died</th>
                <td>
                  {(
                    (props.countryProps.actuals.deaths * 100) /
                    props.countryProps.population
                  ).toFixed(3)}
                  %
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
                  {props.countryProps.actuals.newDeaths.toLocaleString()}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Row>
        </Col>
      </Row>
      <hr />
      <Row className="my-3">
        <h1>US Timeseries </h1>
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
