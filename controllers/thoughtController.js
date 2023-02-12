const { User, Thought } = require('../models');

module.exports = {
    getThoughts (req, res) {
        Thought.find ()
        .then((thoughts) => res.json(thoughts))
        .catch((err) =>res.status(500).json(err));
    },

    getSingleThought(req, res)  {
        Thought.findOne({_id: req.params.id}).populate({ path:"username"})
        .then ((thought) => 
        !thought
        ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
        ) 
        .catch((err) => res.status(500).json(err));
    },

    ///add a thought into the user
    createThought (req, res) {
       Thought.create(req.body)
        .then ((newThought) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                ///new id just created
                { $push: { thoughts: newThought._id} },
                { new: true }
              );
        
        })
        .then((userData) => res.json(userData))
        .catch((err) => res.status(500).json(err));
    },

    updateThought(req ,res) {
        Thought.findByIdAndUpdate(
            {
                _id: req.params.id,
            },
            {
                $set: req.body,
            },
            {
                new: true,
                runValidators:true,
            }
        )
        .then((thought) => {
            !thought
                ?res.status(404).json({message: "empty thought...not found"})
                :res.json(thought);
        })
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
.then((thought) => 
!thought
? res.status(404).json({
     message: 'User associated thought deleted!' })
     :res.json({ message: 'Thought successfully yeeted'})
     )
.catch((err) => res.status(500).json(err));

},

addReaction(req, res) {
    Thought.findOneAndUpdate  (
        { _id: req.params.thoughtId },
        { $addToSet: {reactions: req.body}},
        { new: true, runValidators: true}
    )
    .then ((thought) =>
    !thought
    ? res.status(404).json({message:"new reaction...who dis?"})
    :res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
},

removeReaction (req,res) {
    Thought.findOneAndUpdate (
        { _id:req.params.thoughtId },
        { $pull: { reactions: {reactionId: req.params.reactionId}}},
        { new: true, runValidators: true }
    )
    .then ((thought)  => 
    !thought
    ?res.status(400).json({message: "no user identified"})
    :res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
},
};

