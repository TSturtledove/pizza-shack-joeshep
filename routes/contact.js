"use strict";

const { Router } = require("express")

const { show, addContact } = require("../controllers/contact") //defined in the contact.js controller

const router = Router();

router.get("/contact", show);
router.post("/contact", addContact);

module.exports = router;
