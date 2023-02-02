const express = require('express');
const router = express.Router();

//controllers?
const homeController = require('../controllers/homeController.js');
//router handlers

router.get('/', homeController.getBooks, (req, res) => {
  return res.json(res.locals.bookObj);
}); //send all books

router.get(
  '/readingList/:userN',
  homeController.getUserId,
  homeController.getList,
  (req, res) => {
    return res.status(200).json(res.locals.readingList);
  }
);
router.get('/currentBook/:user', homeController.currentBook, (req, res) => {
  return res.status(200).json(res.locals.currBook);
});

router.get('/verifyUser/:user', homeController.signIn, (req, res) => {
  return res.sendStatus(200);
});

router.post(
  '/newBook',
  homeController.newBook,
  homeController.getUserId,
  homeController.getNextEntryId,
  homeController.newBookListEntry,
  (req, res) => {
    return res.sendStatus(200);
  }
);
//export.
module.exports = router;
