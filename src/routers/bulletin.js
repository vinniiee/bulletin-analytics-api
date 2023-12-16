const express = require("express");
const Bulletin = require("../models/bulletin");
const { router } = require("express/lib/application");
const router = new express.Router();

router.post("/", async (req, res) => {
  const bulletin = new Bulletin(req.body);

  try {
    await bulletin.save();
    res.sendStatus(201).send(bulletin);
  } catch (e) {
    res.sendStatus(400).send(e);
  }
});

router.get("/", async (req, res) => {
  try {
    const bulletins = await Bulletin.find({});
    res.send(bulletins);
  } catch (e) {
    res.sendStatus(500).send();
  }
});


router.get("/topics", async (req, res) => {
  try {
    const results = await Bulletin.distinct("topic");
    const topics = results.filter((item) => item);

    res.send(topics);
  } catch (e) {
    console.log(e);
    res.sendStatus(500).send();
  }
});

router.get("/regions", async (req, res) => {
  try {
    const results = await Bulletin.distinct("region");
    const regions = results.filter((item) => item);
    res.send(regions);
  } catch (e) {
    console.log(e);
    res.sendStatus(500).send();
  }
});

router.get("/countries", async (req, res) => {
  try {
    const results = await Bulletin.distinct("country");
    const countries = results.filter((item) => item);
    res.send(countries);
  } catch (e) {
    console.log(e);
    res.sendStatus(500).send();
  }
});

router.get("/pestle", async (req, res) => {
  try {
    const results = await Bulletin.distinct("pestle");
    const pestle = results.filter((item) => item);
    res.send(pestle);
  } catch (e) {
    console.log(e);
    res.sendStatus(500).send();
  }
});

router.get("/sectors", async (req, res) => {
  try {
    const results = await Bulletin.distinct("sector");
    const sectors = results.filter((item) => item);
    res.send(sectors);
  } catch (e) {
    console.log(e);
    res.sendStatus(500).send();
  }
});
router.get("/sources", async (req, res) => {
  try {
    const results = await Bulletin.distinct("source");
    const sources = results.filter((item) => item);
    res.send(sources);
  } catch (e) {
    console.log(e);
    res.sendStatus(500).send();
  }
});

router.get("/:id", async (req, res) => {
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

router.patch("/:id", async (req, res) => {
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

router.delete("/:id", async (req, res) => {
  try {
    const bulletin = await Bulletin.findByIdAndDelete(req.params.id);

    if (!bulletin) {
      res.sendStatus(404).send();
    }

    res.send(bulletin);
  } catch (e) {
    console.log(e);
    res.sendStatus(500).send();
  }
});

module.exports = router;
