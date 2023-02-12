///object destructing
//update
///schemas WILL NOT HAVE .find, .create, .use etc

const { Schema, model } = require("mongoose");

///creating a schema for ////UNIQUE USER//// and it's values
const uniqueUsername = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
    match: [
      /^([a-z0-9_\.-]+))@([\da-z\.-]+)\.([a-z\.]{2,3})$/i,
      "enter a valid email pal",
    ],
  },

  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
},
{
  toJSON: {
    virtuals: true,
    
},
id:false
}
);

uniqueUsername 
.virtual('friendCount')
//Getter
.get(function () {
    return this.friends.length;
});
const User = model("User", uniqueUsername);



module.exports = User;
