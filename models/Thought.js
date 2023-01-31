///object destructing
const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema({
  text: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 128,
  },
  //QUESTION: an array of nested docs
  reactions: [
    {
    type:Schema.Types.ObjectId,
    ref: 'Reaction',
    },
  ],

  createdAt: {
    type: Date,
    default: Data.now,
  },

  username: {
    type: String,
    required: true,
  },
});
const Thought = model("thought", thoughtSchema);
module.exports = Thought;
