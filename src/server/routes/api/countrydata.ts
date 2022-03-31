import { Router } from "express";
import { actnow_config, BASE_URL } from "../../config";
const axios = require('axios').default;


const SINGLE_COUNTY_SUMMARY_URL = `${BASE_URL}/v2/county/{fips}.json?apiKey=${actnow_config.apiKey}`

const SINGLE_COUNTY_TIMESERIES_URL = `${BASE_URL}/v2/county/{fips}.timeseries.json?apiKey=${actnow_config.apiKey}`

const ALL_COUNTY_SUMMARY_URL = `${BASE_URL}/v2/counties.json?apiKey=${actnow_config.apiKey}`

const ALL_COUNTY_TIMESERIES_URL = `${BASE_URL}/v2/counties.timeseries.json?apiKey=${actnow_config.apiKey}`
const COUNTY_SUMMARY_IN_STATE_URL = `${BASE_URL}/v2/county/{state}.json?apiKey=${actnow_config.apiKey}`
const COUNTY_TIMESERIES_IN_STATE_URL = `${BASE_URL}/v2/county/{state}.timeseries.json?apiKey=${actnow_config.apiKey}`


// ! route structure

// country (2)

//! /summary
//! /timeseries



const router = Router();


router.get('/summary', async (req, res) => {

    try {
        const results = await axios.get(`${BASE_URL}/v2/country/US.json?apiKey=${actnow_config.apiKey}`)
        res.status(200).json(results.data);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "A server errors occurred" });
    }

})

router.get('/timeseries', async (req, res) => {

    try {
        const results = await axios.get(`${BASE_URL}/v2/country/US.timeseries.json?apiKey=${actnow_config.apiKey}`)
        res.status(200).json(results.data);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "A server errors occurred" });
    }
})




// -------------------------------

//state (4)

//! singlesummary
//! singleseries

//! summaryall
//! seriesall





export default router; 