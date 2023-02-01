const express = require('express');
const router = express.Router();

//controllers?
const homeController = require('./controllers/homeController');
//router handlers

router.get('/', (req, res) => {
  // homeController.getList,
  res.status(200).json({ wowie: hi });
}); //send current reading list

//export
module.exports = router;
