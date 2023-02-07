const { User, Thought } = require("../models");

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("__V")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that current ID" })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() =>
        res.json({ message: "User and associated thoughts deleted!" })
      )
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    ///{where}, {WHAT//update}, {return the new object}
    User.findOneAndUpdate({ _id: req.params.userId }, {$set:req.body}, {new: true})
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that current ID" })
          : res.json(user)
      )

      .catch((err) => res.status(500).json(err));
  },

  addFriend(req, res) {
    User.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $addToSet: {
          friends: req.params.friendId,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    )
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: "user not found" });
          return;
        }
        res.json(user);
      })
      .catch((err) => res.status(500).json(err));
  },

  removeFriend(req, res) {
    User.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $pull: {
          friends: req.params.friendsId,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    )
      .then((user) =>
        !user
          ? res.status(400).json({ message: "user not found" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
