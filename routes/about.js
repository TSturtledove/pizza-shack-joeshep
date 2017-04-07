"use strict";

const { Router } = require("express")

const { show } = require("../controllers/about") //defined in the about.js controller

const router = Router();

router.get("/about", show);

module.exports = router;
