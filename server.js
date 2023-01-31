const express = require('express');
const db = require ('./config/connection')
const route = require('./routes')
// const { User } = require('./models/User')
// const { Reaction } = require('./models/Reaction')
// const { Thought } = require('./models/Thought')

const app =  express();
const PORT =3002;


//middle ware
app.use(express.json());
app.use(route);


////////creates a new instance of a user
// app.post('/new-user', (req, res) => {
//   const newUser = User.create(req.body);
//   ///.save can be used to update
//   newUser.save();
//   if (newUser) {
//     res.status(201).json(newUser);
//     res.status(500).json({error:'Something went wrong 😿'});
//   }
// });

// /////finds all users 
// app.get('/all-users', (req,res) => {
//   User.find({}, (err, results) => {
//     if (result) {
//       res.status(200).json(result);
//     } else {
//       console.log('Something is not quite right here');
//       res.status(500)
// .json({error: 'Something is not quite right here 😿'})
//   }
// });
// });

/////update a THOUGHT
// app.post('/find-one-update/:thought', (req, res) => {
//   Thought.findOneAndUpdate(
//     {text: ""},
//     {text: req.params.thought},
//     //get new version of  document
//     {new: true }
//   ).then (updatedThought => {
//    res.status(200).json(updatedThought)
//   })
//   .catch (err => {
//     res.status(500).json(err)
//   })
// });



/////find a user's friends
// app.get('/find-friend-user', (req, res)) => {
//   User.findOne
// }


////deletes one user (or anything at the end)_
// app.delete('/find-one-delete/:user', (req, res) => {
//   User.findOneDelete(
//     {name: req.params.userName},
//     (err, result) => {
//       if (result) {
//         res.status(200).json(result);
//         console.log(`Deleted ${result}`);
//       } else {
//         console.log('Darn, something went wrong 😿');
//         res.status(500).json({error: 'Something went wrong 😿'});
//       }
//     }
//   );
//   });







db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
  })
})


































// app.post('/create', (req, res) => {
  
//   // Use db connection to add a document
//   db.collection('userCollection').insertOne(
//     { name: req.body.name, thought: req.body.thought },
//     (err, results) => {
//       if (err) throw err;
//       res.json(results);
//     }
//   );
// });

// app.get('/read', (req, res) => {
//   // Use db connection to find all documents in collection
//   db.collection('userCollection')
//     .find()
//     .toArray((err, results) => {
//       if (err) throw err;
//       res.send(results);
//     });
// });
