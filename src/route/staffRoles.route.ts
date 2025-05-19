import { createStaffRole} from "../controller/staffRole.controller";

const express = require("express");

const router = express.Router();

router.post('/createStaffRoles', createStaffRole)
// router.get('/', createStaffRoles)

export default router;