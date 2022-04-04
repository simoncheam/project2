import { Router } from "express";

import countryRouter from './countrydata';
import countyRouter from './countydata';
import stateRouter from './statedata';

const router = Router();

router.use('/country', countryRouter);
router.use('/county', countyRouter);
router.use('/states', stateRouter);



export default router;

