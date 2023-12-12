const express = require("express");
const Bulletin = require("../models/bulletin");
const router = new express.Router();

router.post("/bulletins", async (req, res) => {
  const bulletin = new Bulletin(req.body);

  try {
    await bulletin.save();
    res.sendStatus(201).send(bulletin);
  } catch (e) {
    res.sendStatus(400).send(e);
  }
});

router.get("/bulletins", async (req, res) => {
  try {
    const bulletins = await Bulletin.find({});
    res.send(bulletins);
  } catch (e) {
    res.sendStatus(500).send();
  }
});

router.get("/bulletins/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const bulletin = await Bulletin.findById(_id);

    if (!bulletin) {
      return res.sendStatus(404).send();
    }

    res.send(bulletin);
  } catch (e) {
    res.sendStatus(500).send();
  }
});

router.patch("/bulletins/:id", async (req, res) => {
  const updates = Object.keys(req.body);

  try {
    const bulletin = await Bulletin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bulletin) {
      return res.sendStatus(404).send();
    }

    res.send(bulletin);
  } catch (e) {
    res.sendStatus(400).send(e);
  }
});

router.delete("/bulletins/:id", async (req, res) => {
  try {
    const bulletin = await Bulletin.findByIdAndDelete(req.params.id);

    if (!bulletin) {
      res.sendStatus(404).send();
    }

    res.send(bulletin);
  } catch (e) {
    res.sendStatus(500).send();
  }
});

module.exports = router;
