import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useLocation, useNavigate } from 'react-router'
import { CountrySummary, Actuals } from '../client_types/country'
const axios = require('axios').default;
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'



const Country = () => {

    const [countrySummaryData, setCountrySummaryData] = useState<CountrySummary>();
    const [countryActualData, setCountryActualData] = useState<Actuals>();


    const loc = useLocation();
    const nav = useNavigate();

    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {

        //API stuff
        axios.get('/api/country/summary')
            .then(res => {
                setCountrySummaryData(res.data)
                setCountryActualData(res.data.actuals)
                setIsLoaded(true)

            }
            )
            .catch(e => alert(e))





    }, [isLoaded])

    if (!isLoaded) return <> Loading </>

    return (
        <Container>
            <Row className='my-3'>
                <h1>Stats at a glance: {countrySummaryData.country}</h1>
                {/* <Col sm={8}>Overall % death per +case</Col>
                <Col sm={4}>Other stat</Col> */}
            </Row>

            <hr />

            <Row className='my-3 '>
                <Col sm>
                    <Row className='justify-content-center my-3'>
                        <Card className='shadow background-primary' style={{ width: '18rem' }}>
                            <Card.Header>Demographics:  </Card.Header>
                            {/* <Card.Title>Card Title</Card.Title> */}
                            <ListGroup variant="flush">
                                <ListGroup.Item>Population: {countrySummaryData.population.toLocaleString()}</ListGroup.Item>
                                <ListGroup.Item>placeholder</ListGroup.Item>
                                <ListGroup.Item>placeholder</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Row>

                </Col>

                <Col sm>
                    <Row className='justify-content-center my-3'>
                        <Card className='shadow' style={{ width: '18rem' }}>
                            <Card.Header>Actuals</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Vaccinations completed: {countryActualData.vaccinationsCompleted.toLocaleString()}</ListGroup.Item>
                                <ListGroup.Item>Cases: {countryActualData.cases.toLocaleString()}</ListGroup.Item>
                                <ListGroup.Item>Positive Tests: {countryActualData.positiveTests.toLocaleString()}</ListGroup.Item>
                                <ListGroup.Item>Deaths: {countryActualData.deaths.toLocaleString()}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Row>

                </Col>


                <Col sm>
                    <Row className='justify-content-center my-3'>
                        <Card className='shadow' style={{ width: '18rem' }}>
                            <Card.Header>Analysis</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Deaths/positive case [%]: {(countryActualData.deaths * 100 / countryActualData.positiveTests).toFixed(2)} </ListGroup.Item>
                                {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                            </ListGroup>
                        </Card>
                    </Row>

                </Col>


            </Row>

            <hr />
            <Row className='my-3'>
                <h1>Chart</h1>

            </Row>

            <hr />
            <Row className='my-3'>
                <h1>Comparison data</h1>
                <Col sm> overall (% death per confirmed test)

                    <Row> % deaths - w/ vax</Row>
                    <Row> % deaths - no vax</Row>


                </Col>

                <Col sm> % Comorbidities
                    <hr />

                    <Row> % died with comorbitiy</Row>
                    <Row> % died with no comorbitiy</Row>
                </Col>


                <Col sm>death by age (histogram)
                    <Row> % age group 0</Row>
                    <Row> % age group 1</Row>
                    <Row> % age group 2</Row>
                    <Row> % age group 3</Row>
                    <Row> histogram</Row>
                </Col>


            </Row>


        </Container >





    )
}

export default Country