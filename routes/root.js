"use strict";

const { Router } = require("express");
const { show } = require("../controllers/home");

const router = Router();

router.get("/", show)

module.exports = router;
