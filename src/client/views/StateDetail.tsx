const axios = require('axios').default;

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { SingleStateSeries } from '../client_types/singlestate';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StateChart from './StateChart';

const StateDetail = () => {
  let params = useParams();
  const state_id = params.id;
  const nav = useNavigate();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [singleStateSeries, setSingleStateSeries] = useState<SingleStateSeries>();
  useEffect(() => {
    //API stuff
    //? Can this be fetched from the App view?
    //! fetch single state time series
    // /singleseries/:state_id'
    axios
      .get(`/api/states/singleseries/${state_id}`)
      .then((res) => {
        setSingleStateSeries(res.data);
      })
      .catch((e) => alert(e));
  }, []);

  return (
    <div>
      StateDetail
      <Row className="my-3">
        <h1>State Timeseries </h1>
        {/* < LineGraph /> */}
        <div className="justify-content-center">
          <Col sm={12}>
            <StateChart timeSeries={singleStateSeries} />
          </Col>
        </div>
      </Row>
    </div>
  );
};

export default StateDetail;
