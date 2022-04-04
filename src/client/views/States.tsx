import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Navigate, useLocation, useNavigate } from 'react-router'
import { AllStatesSummary, Actuals } from '../client_types/allstates'
const axios = require('axios').default;
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import { StatsModuleIssuer } from 'webpack'
import { Link } from 'react-router-dom'



const States = () => {

    const [statesSummaryData, setStatesSummaryData] = useState<AllStatesSummary[]>();
    // const [statesActualData, setStatesActualData] = useState<Actuals>();


    const loc = useLocation();
    const nav = useNavigate();

    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {

        // get state summary
        axios.get('/api/states/summary')
            .then(res => {
                setStatesSummaryData(res.data)
                setIsLoaded(true)
            })
            .catch((e: any) => alert(e))
    }, [isLoaded])

    // useEffect(() => {

    //     // get state series
    //     axios.get('/api/states/series')
    //         .then(res => {
    //             setStatesSeriesData(res.data)
    //             setIsLoaded(true)
    //         })
    //         .catch((e: any) => alert(e))
    // }, [isLoaded])





    if (!isLoaded || !statesSummaryData.length) return <> Loading </>

    return (
        <Container>

            {/* //! Add map here, map thru all states */}
            <Row className='my-3'>
                <p className='display-1 justify-content-center'>COVID-19 Tracker</p>
                <h1>Stats at a glance </h1>
                <Col sm={8}>Last Update:  </Col>
                <Col sm={4}>
                    <Form.Select aria-label="Default select example">
                        <option> Data</option>
                        <option value="1">State Data</option>
                        <option value="2">County Data</option>
                    </Form.Select>


                </Col>
            </Row>

            <hr />

            <div>

                {statesSummaryData.map(st => (
                    <div key={`state-${st.state}`}>


                        <Row className='my-3 '>




                            <Col sm>
                                <Row className='justify-content-center my-3'>
                                    <Card className='shadow background-primary p-3' style={{ width: '18rem' }}>
                                        <Card.Title>{st.state}:  </Card.Title>
                                        {/* <Card.Title>Card Title</Card.Title> */}
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Population: {st.population.toLocaleString()}</ListGroup.Item>
                                            <ListGroup.Item>source:
                                                <a href={st.url}> {st.url}</a>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Row>

                            </Col>

                            <Col sm>
                                <Row className='justify-content-center my-3'>
                                    <Card className='shadow p-3' style={{ width: '20rem' }}>
                                        <Card.Title>Actuals</Card.Title>
                                        <ListGroup variant="flush">
                                            {/* // ? dealing with tolocalestring error? */}
                                            <ListGroup.Item>Vaccinations completed: {st.actuals.vaccinationsCompleted} </ListGroup.Item>
                                            <ListGroup.Item>Cases: {st.actuals.cases.toLocaleString()} </ListGroup.Item>

                                            {st.actuals.positiveTests ?
                                                <ListGroup.Item>Positive Tests: {st.actuals.positiveTests.toLocaleString()} </ListGroup.Item>
                                                :
                                                <ListGroup.Item>Positive Tests: N/A </ListGroup.Item>
                                            }


                                            <ListGroup.Item>Total Deaths: {st.actuals.deaths.toLocaleString()}</ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Row>

                            </Col>


                            <Col sm>
                                <Row className='justify-content-center my-3'>
                                    <Card className='shadow p-3' style={{ width: '20rem' }}>
                                        <Card.Title>Analysis</Card.Title>
                                        <ListGroup variant="flush">

                                            {st.actuals.positiveTests ?
                                                <ListGroup.Item>Deaths/positive case [%]:  {(st.actuals.deaths * 100 / st.actuals.positiveTests).toFixed(2)} </ListGroup.Item>
                                                :
                                                <ListGroup.Item>Deaths/positive case [%]:  Data not available </ListGroup.Item>
                                            }

                                            <ListGroup.Item>Deaths/population [%]: {(st.actuals.deaths * 100 / st.population).toFixed(2)} </ListGroup.Item>
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


            < hr />
            <Row className='my-3'>
                <h1>Chart</h1>

            </Row>

            <hr />



        </Container >





    )
}

export default States