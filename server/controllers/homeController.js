const fs = require('fs');
const path = require('path');
const db = require('../models/bookModel.js');

const homeController = {};

//get list of isbn
homeController.getBooks = (req, res, next) => {
  const text = `SELECT _isbn, title, author FROM books`;
  db.query(text).then((results) => {
    console.log('queried isbn', results.rows);
    res.locals.bookObj = results.rows;
    // res.locals.isbnArr = rows.map((el) => Object.values(el)).flat();
    // console.log(res.locals.isbnObj);
    return next();
  });
};

module.exports = homeController;
