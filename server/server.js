const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

const routeHome = require('./routes/home.js');

const db = require('./models/bookModel.js');

//loading requests and static files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route handlers
app.use('/api', routeHome);
// app.use('/home', (req, res) => {
//   return res.sendStatus(418);
// });
if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
  });
}

//global route handler and error handler
app.use('/', (req, res) => {
  return res.sendStatus(505);
});
//   res.status(404).send("This is not the page you're looking for...")
// );
//error
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//start server
module.exports = app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}`)
);
