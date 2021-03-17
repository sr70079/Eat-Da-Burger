const connection = require('./connection.js');

const orm = {
  // The last variable cb represents the anonymous function being passed from server.js
  selectAll(tableInput, cb) {
    const queryString = 'SELECT * FROM ??';
    connection.query(
      queryString,
      [tableInput],
      (err, result) => {
        if (err) throw err;
        cb(result);
      }
    );
  },


  insertOne(tableInput, colToSearch, cb) {
    const queryString = 'INSERT INTO ?? SET ??';
    connection.query(
      queryString,
      [tableInput, colToSearch],
      (err, result) => {
        if (err) throw err;
        cb(result);
      }
    );
  },


  updateOne(tableInput, colToSearch, valOfCol, cb) {
    const queryString = 'UPDATE ?? SET ? WHERE ?? = ?';
    connection.query(
      queryString,
      [tableInput, colToSearch, valOfCol, cb],
      (err, result) => {
        if (err) throw err;
        cb(result);
      }
    );
  },
};

module.exports = orm;
