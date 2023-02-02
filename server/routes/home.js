const express = require('express');
const router = express.Router();

//controllers?
const homeController = require('../controllers/homeController.js');
//router handlers

router.get('/', homeController.getBooks, (req, res) => {
  return res.json(res.locals.bookObj);
}); //send current reading list

//export
module.exports = router;
