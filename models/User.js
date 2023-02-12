///object destructing
///schemas WILL NOT HAVE .find, .create, .use etc

const { Schema, model } = require("mongoose");

///creating a schema for ////UNIQUE USER//// and it's values
const uniqueUsername = new Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
   
    required: true,
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
{toJSON: {
    virtuals: true,
},
id:false
}
);

uniqueUsername 
.virtual('friend')
//Getter
.get(function () {
    return `${this.friends}`
});
const User = model("user", uniqueUsername);



module.exports = User;
