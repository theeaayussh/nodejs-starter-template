const express = require("express");

const router = express.Router();

router.get("/info", (req, res) => {
  res.json({
    msg: "v2 api route hit"
  })
})

module.exports = router;
