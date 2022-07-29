const express = require("express");
const todoRoutes = require("./todo")
const router = express.Router()

router.use('/', todoRoutes)

module.exports = router