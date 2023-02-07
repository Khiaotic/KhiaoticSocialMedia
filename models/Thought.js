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
    ref: 'reactionSchema',
    },
  ],

  createdAt: { 
    type: Date,
    default: Date.now,
  },

  username: {
    type: String,
    required: true,
  },
  // reactions: [reactionSchema],
},
{
  toJSON: {
    virtuals: true,
    
  },
  id:false,
}
);
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);



module.exports = Thought;
