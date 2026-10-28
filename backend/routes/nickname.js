const express = require("express");
const router = express.Router();
const Nickname = require("../models/Nickname");

// получить ник
router.get("/", async (req, res) => {
  try {
    const nick = await Nickname.findOne();
    if (nick) {
      res.json({ nickname: nick.nickname });
    } else {
      res.json({ nickname: null });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// сохранить / обновить ник
router.post("/", async (req, res) => {
  try {
    const { nickname } = req.body;
    let nick = await Nickname.findOne();

    if (nick) {
      nick.nickname = nickname;
      await nick.save();
    } else {
      nick = new Nickname({ nickname });
      await nick.save();
    }

    res.json({ nickname: nick.nickname });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
