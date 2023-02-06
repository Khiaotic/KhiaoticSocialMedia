const express = require('express');
const db = require ('./config/connection')
const routes = require('./routes')



const PORT =process.env.port || 3002;
const app =  express();


//middle ware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(routes);



db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
  });
});


































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
