"use strict";

const { Router } = require("express")

const {show, create} = require("../controllers/order")

const router = Router();

router.get("/order", show);
router.post("/order", create);

module.exports = router;
