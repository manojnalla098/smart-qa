
const router = require("express").Router();
const { getDocs } = require("../controllers/docController");

router.get("/", getDocs);

module.exports = router;