// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
      orm.selectAll('burgers', (res) => cb(res));
    },
    // The variables cols and vals are arrays.
    insertOne(colToSearch, cb) {
      orm.insertOne('burgers', colToSearch, (res) => cb(res));
    },
  
  //   update(objColVals, condition, cb) {
  //   //   orm.update('burgers', objColVals, condition, (res) => cb(res));
  //   },
  };
  
  // Export the database functions for the controller 
  module.exports = burger;