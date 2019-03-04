const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

//db connection
mongoose.connect('mongodb://localhost/quotes', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('database connected');
});

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});


router.get('/quotes', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) {
      return console.error(err)
    }
    res.send(result)
  })
})

router.post('/quotes', (req, res) => {
  const quoteData = {
    author: req.body.params.author,
    quote: req.body.params.quote
  }
  const result = new Promise((resolve, reject) => {
    db.collection('quotes').insertOne(quoteData, (err, res) => {
      if (err) return console.log(err)
      resolve(res)
    })
  });
  result.then(result => {
    res.send(result.ops)
  });
})

router.put('/quotes', (req, res) => {
  const quoteData = {
    author: req.body.params.author,
    quote: req.body.params.quote
  }
  const idToUpdate = mongoose.Types.ObjectId(req.body.params.id);

  const result = new Promise((resolve, reject) => {
    db.collection('quotes').updateOne(
      { '_id': idToUpdate}, 
      { $set: quoteData }, 
      { upsert: true },
      (err, res) => {
        if (err) reject(err)
        resolve(res)
      }
    )
  });
  result.then(result => {
    res.send(result)
  });
  result.catch(err => {
    console.log(err)
  })
});


router.delete('/quotes', (req, res) => {
  const idToRemove = mongoose.Types.ObjectId(req.query.idToRemove);
  const result = new Promise((resolve, reject) => {
    db.collection('quotes').deleteOne({ '_id': idToRemove}, (err, res) => {
      if (err) return console.log(err)
      resolve(res)
    })
  });
  result.then(result => {
    res.send(res.deletedCount)
  });
});



module.exports = router


