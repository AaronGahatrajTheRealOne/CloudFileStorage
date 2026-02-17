const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  url: {
    type: String,
    unique: true,
  },
  secureURL: {
    type: String,
    unique: true,
  },
  uploadDate: {
    type: Date,
    default: Date.now(),
  },
});
const FileInfo = mongoose.model('FileCloud', fileSchema);

module.exports = FileInfo;
