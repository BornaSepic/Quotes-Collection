const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const router = require('./routes/routes')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(router)

app.listen(3030, () => {
  console.log('Server listening on port 3030')
});
