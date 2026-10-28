const mongoose = require("mongoose");

const NicknameSchema = new mongoose.Schema({
  nickname: { type: String, required: true, unique: true }
});

module.exports = mongoose.models.Nickname || mongoose.model("Nickname", NicknameSchema);
