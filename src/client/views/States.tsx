import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useLocation, useNavigate } from 'react-router'
import { CountrySummary, Actuals } from '../client_types'
const axios = require('axios').default;
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import { StatsModuleIssuer } from 'webpack'



const States = () => {

    const [statesSummaryData, setStatesSummaryData] = useState<>();
    const [statesActualData, setStatesActualData] = useState<Actuals>();


    const loc = useLocation();
    const nav = useNavigate();

    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {

        //API stuff
        axios.get('/api/country/summary')
            .then(res => {
                setStatesSummaryData(res.data)
                setStatesActualData(res.data.actuals)
                setIsLoaded(true)

            }
            )
            .catch((e: any) => alert(e))





    }, [isLoaded])

    if (!isLoaded) return <> Loading </>

    return (
        <Container>
            <Row className='my-3'>
                <p className='display-1 justify-content-center'>COVID-19 Tracker</p>
                <h1>Stats at a glance </h1>
                <Col sm={8}>Last Update:  {statesSummaryData.lastUpdatedDate}</Col>
                <Col sm={4}>
                    <Form.Select aria-label="Default select example">
                        <option>{statesSummaryData.country} Data</option>
                        <option value="1">State Data</option>
                        <option value="2">County Data</option>
                    </Form.Select>


                </Col>
            </Row>

            <hr />

            <Row className='my-3 '>
                <Col sm>
                    <Row className='justify-content-center my-3'>
                        <Card className='shadow background-primary' style={{ width: '18rem' }}>
                            <Card.Header>Demographics:  </Card.Header>
                            {/* <Card.Title>Card Title</Card.Title> */}
                            <ListGroup variant="flush">
                                <ListGroup.Item>Population: {statesSummaryData.population.toLocaleString()}</ListGroup.Item>
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
                                <ListGroup.Item>Vaccinations completed: {statesActualData.vaccinationsCompleted.toLocaleString()}</ListGroup.Item>
                                <ListGroup.Item>Cases: {statesActualData.cases.toLocaleString()}</ListGroup.Item>
                                <ListGroup.Item>Positive Tests: {statesActualData.positiveTests.toLocaleString()}</ListGroup.Item>
                                <ListGroup.Item>Total Deaths: {statesActualData.deaths.toLocaleString()}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Row>

                </Col>


                <Col sm>
                    <Row className='justify-content-center my-3'>
                        <Card className='shadow' style={{ width: '18rem' }}>
                            <Card.Header>Analysis</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Deaths/positive case [%]: {(statesActualData.deaths * 100 / statesActualData.positiveTests).toFixed(2)} </ListGroup.Item>
                                <ListGroup.Item>Deaths/population [%]:  {(statesActualData.deaths * 100 / statesSummaryData.population).toFixed(2)}</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Row>

                </Col>


            </Row>

            <hr />
            <Row className='my-3'>
                <h1>Daily Stats</h1>
                <Col sm={12}>Last Update:  {statesSummaryData.lastUpdatedDate}</Col>

                <Col sm>
                    <Row className='justify-content-center my-3'>
                        <Card className='shadow' style={{ width: '18rem' }}>
                            <Card.Header>New Cases</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item> {statesActualData.newCases.toLocaleString()} </ListGroup.Item>
                                {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                            </ListGroup>
                        </Card>
                    </Row>

                </Col>
                <Col sm>
                    <Row className='justify-content-center my-3'>
                        <Card className='shadow' style={{ width: '18rem' }}>
                            <Card.Header>New Deaths</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item> {statesActualData.newDeaths.toLocaleString()} </ListGroup.Item>
                                {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                            </ListGroup>
                        </Card>
                    </Row>

                </Col>
                <Col sm>
                    <Row className='justify-content-center my-3'>
                        <Card className='shadow' style={{ width: '18rem' }}>
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
            <Row className='my-3'>
                <h1>Chart</h1>

            </Row>

            <hr />
            <Row className='my-3'>
                <h1>Comparison data</h1>
                <Col sm={12}>Leading Causes of Death in US: (date range)</Col>

                <Col sm>
                    <Row className='justify-content-center my-3'>
                        <Card className='shadow' style={{ width: '18rem' }}>
                            <Card.Header>Vascular (heart disease or stroke)</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Total Deaths </ListGroup.Item>
                                {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                            </ListGroup>
                        </Card>
                    </Row>

                </Col>
                <Col sm>
                    <Row className='justify-content-center my-3'>
                        <Card className='shadow' style={{ width: '18rem' }}>
                            <Card.Header>Cancer</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item> Numbers </ListGroup.Item>
                                {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                            </ListGroup>
                        </Card>
                    </Row>

                </Col>
                <Col sm>
                    <Row className='justify-content-center my-3'>
                        <Card className='shadow' style={{ width: '18rem' }}>
                            <Card.Header>Alzheimers</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item> stuff </ListGroup.Item>
                                {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                            </ListGroup>
                        </Card>
                    </Row>

                </Col>


            </Row>


        </Container >





    )
}

export default States