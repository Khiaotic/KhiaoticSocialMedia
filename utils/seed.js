const connection = require("../config/connection");
const { User, Thought } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  ///created an empty array to hold the users
  const users = [];

  //add users to the collection and await the results
  await User.collection.insertMany(users);

  ///////////////////////////
  ///QUESTIONssssss////
  //add thoughts to collection and await the results

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
