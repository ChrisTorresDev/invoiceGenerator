//dependencies
const express = require('express');
const { request, response } = require('express');
const router = express.Router();

//routes
router.get('/', (request, response )=>{
  response.send('<h1>Hello form the router update.js</h1>');
});

//exporting the contents of this file
module.exports = router;