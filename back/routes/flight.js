// import express from 'express';

import { getFlights } from '../controller/flight.js'

// const router = express.Router();

// router
//     .route("/:flight")
//     .get(getFlights);

// export default router;

//const express = require("express");
import express from 'express';
const router = express.Router();
router.get("/:flight", getFlights);
// module.exports = router;
export default router;