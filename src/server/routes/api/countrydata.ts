import { Router } from "express";
import { actnow_config, BASE_URL } from "../../config";
const axios = require('axios').default;




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