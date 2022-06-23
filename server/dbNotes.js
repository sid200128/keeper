const mongoose = require("mongoose");
const { Schema } = mongoose;
const noteSchema = new Schema({
  title: {type:String, required: true},
  content: String
});

module.exports = mongoose.model("Note", noteSchema);
// module.exports = Note;