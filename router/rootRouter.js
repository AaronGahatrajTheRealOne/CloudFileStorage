const express = require("express");
const router = express.Router();
const fileInfo = require("../Schema/fileDetail");

router.get("/", async (req, res) => {
  const files = await fileInfo.find();
  res.render("index", {files});

});

module.exports = router;
