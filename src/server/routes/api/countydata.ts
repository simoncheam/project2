const axios = require('axios').default;

import { Router } from 'express';
import { actnow_config, BASE_URL } from '../../config';

const router = Router();

//! singlesummary
router.get('/singlesummary/:fips', async (req, res) => {
    const fips: string = req.params.fips;

    try {
        const results = await axios.get(
            `${BASE_URL}/v2/county/${fips}.json?apiKey=${actnow_config.apiKey}`
        );
        res.status(200).json(results.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'A server errors occurred' });
    }
});

//! singleseries
router.get('/singleseries/:fips', async (req, res) => {
    const fips: string = req.params.fips;

    try {
        const results = await axios.get(
            `${BASE_URL}/v2/county/${fips}.timeseries.json?apiKey=${actnow_config.apiKey}`
        );
        res.status(200).json(results.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'A server errors occurred' });
    }
});

//! summaryall
router.get('/summaryall', async (req, res) => {
    try {
        const results = await axios.get(`${BASE_URL}/v2/counties.json?apiKey=${actnow_config.apiKey}`);
        res.status(200).json(results.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'A server errors occurred' });
    }
});

router.get('/series', async (req, res) => {
    console.log('county ----- series all');

    try {
        const results = await axios.get(
            `${BASE_URL}/v2/counties.timeseries.json?apiKey=${actnow_config.apiKey}`
        );
        res.status(200).json(results.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'A server errors occurred' });
    }
});

//! summaryinstate
router.get('/summaryinstate/:state', async (req, res) => {
    const state: string = req.params.state;

    try {
        const results = await axios.get(
            `${BASE_URL}/v2/county/${state}.json?apiKey=${actnow_config.apiKey}`
        );
        res.status(200).json(results.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'A server errors occurred' });
    }
});

//! seriesinstate
router.get('/seriesinstate/:state', async (req, res) => {
    const state: string = req.params.state;

    try {
        const results = await axios.get(
            `${BASE_URL}/v2/county/${state}.timeseries.json?apiKey=${actnow_config.apiKey}`
        );
        res.status(200).json(results.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'A server errors occurred' });
    }
});

export default router;
