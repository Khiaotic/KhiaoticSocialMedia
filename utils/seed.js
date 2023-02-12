const connection = require("../config/connection");
const { User, Thought } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  ///created an empty array to hold the users
  const users = [];

  //add users to the collection and await the results
  await User.collection.insertMany(users);

 

  await Thought.collection.insertMany(thoughts)({
    user: [...users],
  });

  //add user to users array
  users.push({
    username,
    thought,
    email,
  });
});
