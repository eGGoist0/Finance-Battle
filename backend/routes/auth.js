const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

router.post("/register", async (req, res) => {
  try {
    const { nickname, email, password } = req.body

    if (!nickname || !email || !password) {
      return res.status(400).json({ msg: "All fields are required" })
    }

    const existingUser = await User.findOne({ email })
    if (existingUser) return res.status(400).json({ msg: "Email already exists" })

    const existingNick = await User.findOne({ nickname })
    if (existingNick) return res.status(400).json({ msg: "Username already exists" })

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = new User({ nickname, email, password: hashedPassword })
    await user.save()

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })

    res.json({
      token,
      user: {
        id: user._id,
        nickname: user.nickname,
        email: user.email,
      },
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: "Internet error" })
  }
})

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ msg: "Incorrect email or password" })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({ msg: "Incorrect email or password" })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })

    res.json({
      token,
      user: {
        id: user._id,
        nickname: user.nickname,
        email: user.email,
      },
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: "Internet error" })
  }
})

router.get("/me", async (req, res) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "")
    if (!token) return res.status(401).json({ msg: "No tocken" })

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decoded.id).select("-password")

    res.json(user)
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: "Internet error" })
  }
})

router.put("/update-nickname", async (req, res) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "")
    if (!token) return res.status(401).json({ msg: "No tocken" })

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const { nickname } = req.body
    if (!nickname) return res.status(400).json({ msg: "Username is required" })

    const existingNick = await User.findOne({ nickname })
    if (existingNick && existingNick._id.toString() !== decoded.id) {
      return res.status(400).json({ msg: "Username alredy exists" })
    }

    const user = await User.findByIdAndUpdate(
      decoded.id,
      { nickname },
      { new: true }
    ).select("-password")

    res.json(user)
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: "Internet error" })
  }
})

module.exports = router
