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

homeController.getList = (req, res, next) => {
  //create a joint table of books list and books
  const { userId } = res.locals;
  const text = `SELECT b.genre_id, b.title, b.author, bl.date_added
  FROM public.books_list AS bl
  LEFT JOIN public.books AS b ON
  bl.book_isbn=b._isbn
  WHERE bl.user_id='${userId}'`;
  db.query(text).then((results) => {
    console.log('USER READING LIST', results.rows);
    res.locals.readingList = results.rows;
    return next();
  });
};

homeController.currentBook = (req, res, next) => {
  const { user } = req.params;
  const text = `SELECT title FROM books_list WHERE user_id = (SELECT _id FROM users WHERE name = ${user})`;
  db.query(text).then((results) => {
    console.log('curet query', results.rows);
    return next();
  });
};

homeController.signIn = (req, res, next) => {
  const { user } = req.params;
  console.log('oi');
  console.log(user);
  return next();
};

homeController.newBook = (req, res, next) => {
  const { isbn, title, author, series, year, pages, genre, user } = req.body;
  let genreCode;
  switch (genre) {
    case 'fantasy':
      genreCode = 1;
    case 'sci-fi':
      genreCode = 2;
    case 'mystery':
      genreCode = 3;
    case 'horror':
      genreCode = 4;
    case 'action-adventure':
      genreCode = 5;
  }

  const text = `INSERT INTO books VALUES (${Number(
    isbn
  )}, '${title}', '${author}', '${series}', '${year}', ${Number(pages)}, 1)`;
  console.log('hoi', text);
  db.query(text).then((results) => {
    console.log('queried new book');
    return next();
  });
};

homeController.getNextEntryId = (req, res, next) => {
  // const { userId } = res.locals.userId;
  const text = `SELECT MAX(_id) FROM books_list`; //default user rebe
  db.query(text).then((results) => {
    let currentId = Number(results.rows[0].max) + 1;
    console.log('booklistid:', typeof currentId);
    res.locals.nextEntryId = currentId;
    return next();
  });
  // console.log('next list id', nextID); //check that id is correct
};

homeController.getUserId = (req, res, next) => {
  const { user } = req.body;
  const { userN } = req.params;
  let currentUser;
  if (userN) {
    currentUser = userN;
  } else {
    currentUser = user;
  }
  const text = `SELECT _id FROM users WHERE name='${currentUser}'`;
  db.query(text).then((results) => {
    res.locals.userId = results.rows[0]._id;
    console.log(res.locals.userId);
    return next();
  });
};
homeController.newBookListEntry = (req, res, next) => {
  const { isbn } = req.body;
  const { nextEntryId, userId } = res.locals;
  console.log('new; ids', nextEntryId, userId);
  const text = `INSERT INTO books_list VALUES (${nextEntryId}, ${userId}, ${Number(
    isbn
  )}, 'want to read', '2023-02-02')`;
  db.query(text).then((results) => {
    console.log('added to reading list');
    return next();
  });
};

module.exports = homeController;
