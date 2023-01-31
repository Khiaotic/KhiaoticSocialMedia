const { User, Thought } =require('../models');

module.exports = {
    getThoughts(req, res) {
        User.find ()
        .then((users) => res.json(users))
        .catch((err) =>res.status(500).json(err));
    },

    getSingleThought(req, res)  {
        User.findOne({_id: req/URLSearchParams.userId})
        .select('__V')
        .then ((user) => 
        !thought
        ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

    createThought (req, res) {
       Thought.create(req.body)
        .then ((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },

deleteThought (req, res) {
    Thought.findOneAndDelete({_id: req.params.thoughtId})
    .then((thought) =>
    !thought
    ? res.status(404).json({ message: 'No thought with that current ID' })
    : Thought.findOneAndUpdate(
        {thoughts: req.params.thoughtId },
        {$pull: { thoughts: req.params.thoughtId}},
        {new:true}
    )
)
.then((user) => 
!user
? res.status(404).json({
     message: 'User associated thought deleted!' })
     :res.json({ message: 'Thought succesfully yeeted'})
     )
.catch((err) => res.status(500).json(err));

},
};