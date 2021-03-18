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


  insertOne(tableInput, newBurger, cb) {
    const queryString = 'INSERT INTO ?? SET ?';
    connection.query(
      queryString,
      [tableInput, newBurger],
      (err, result) => {
        console.log(newBurger)
        if (err) throw err;
        cb(result);
      }
    );
  },


  updateOne(tableInput, burger, colToSearch, valOfCol, cb) {
    const queryString = 'UPDATE ?? SET ? WHERE ?? = ?';
    connection.query(
      queryString,
      [tableInput, burger, colToSearch, valOfCol, cb],
      (err, result) => {
        if (err) throw err;
        cb(result);
      }
    );
  },
};

module.exports = orm;
