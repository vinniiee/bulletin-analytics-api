const express = require("express");
const Bulletin = require("../models/bulletin");
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

    let response = [];
    let count;
    for (let i = 0; i < topics.length; i++) {
      count = await Bulletin.count({ topic: topics[i] });
      response.push({ name: topics[i], count });
    }
    // console.log(response);
    //
    //  topics.forEach(async (topic) => {
    //   count = await Bulletin.count({ topic: topic });

    //   response.push({ name: topic, count });
    //   console.log(response);
    // });
    // console.log("sending response...")
    res.send(response);
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

router.get("/pestles", async (req, res) => {
  try {
    const data = await Bulletin.find({});
    let i = 0;
    let hashing = {};

    let displayData = [];

    // eslint-disable-next-line react/prop-types
    data?.forEach(({ pestle }) => {
      if (pestle) {
        if (!hashing[pestle] && hashing[pestle] !== 0) {
          hashing = { ...hashing, [pestle]: i };
          displayData.push({ pestle, count: 1 });
          i++;
        } else {
          displayData[hashing[pestle]].count += 1;
        }
      }
    });

    console.log(displayData);

    res.send(displayData);
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
