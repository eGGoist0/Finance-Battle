const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/auth", require("./routes/auth"))

mongoose.connect("mongodb://127.0.0.1:27017/myapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`))
