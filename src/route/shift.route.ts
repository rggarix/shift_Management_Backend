import { addShift } from "../controller/shift.controller";

const express = require("express");

const router = express.Router();

router.post('/addShift', addShift)
// router.get('/getAllStaff', getAllStaff)

export default router;