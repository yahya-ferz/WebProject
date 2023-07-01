const express = require("express");
const { guard } = require("./auth");

const router = express.Router();

router.post("/url", guard, async (req, res) => {
  return res.status(201).send("Not Implement yet");
});

router.get("/url", guard, async (req, res) => {
  return res.status(201).send("Not Implement yet");
});

router.get("/url/:id/stats", guard, async (req, res) => {
  return res.status(200).send("Not Implement yet");
});

exports.urlRouter = router;
