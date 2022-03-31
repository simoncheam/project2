import { Router } from "express";
import { actnow_config, BASE_URL } from "../../config";
const axios = require('axios').default;

const router = Router();




//state (4)

//! singlesummary ✅ OK



router.get('/singlesummary/:state_id', async (req, res) => {

    const state: string = req.params.state_id;

    console.log('Single state summary')

    try {
        const results = await axios.get(`${BASE_URL}/v2/state/${state}.json?apiKey=${actnow_config.apiKey}`)

        res.status(200).json(results.data);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "A server errors occurred" });

    }
})

//! singleseries ✅ OK

router.get('/singleseries/:state_id', async (req, res) => {

    const state: string = req.params.state_id;

    try {
        const results = await axios.get(`${BASE_URL}/v2/state/${state}.timeseries.json?apiKey=${actnow_config.apiKey}`)
        res.status(200).json(results.data);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "A server errors occurred" });

    }
})


//! summaryall ✅ OK

router.get('/summary', async (req, res) => {

    try {
        const results = await axios.get(`${BASE_URL}/v2/states.json?apiKey=${actnow_config.apiKey}`)
        res.status(200).json(results.data);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "A server errors occurred" });

    }
})


//! seriesall ✅ OK

router.get('/series', async (req, res) => {

    try {
        const results = await axios.get(`${BASE_URL}/v2/states.timeseries.json?apiKey=${actnow_config.apiKey}`)
        res.status(200).json(results.data);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "A server errors occurred" });

    }
})



export default router; 