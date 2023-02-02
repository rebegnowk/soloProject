const { Pool } = require('pg');

const connectionString =
  'postgres://zheizsxv:wgUWlhYNgszYdv9K0dulwoe-x4H6nzlE@fanny.db.elephantsql.com/zheizsxv';

// create a new pool using the connection string URI
const pool = new Pool({
  connectionString,
});

// Access point to the database in dbModel.json
module.exports = {
  query: (text, params, callback) => {
    console.log('Executed query', text);
    return pool.query(text, params, callback);
  },
};
