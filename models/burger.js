// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
      orm.selectAll('burgers', (res) => cb(res));
    },
    // The variables cols and vals are arrays.
    insertOne(newBurger, cb) {
      orm.insertOne('burgers', newBurger, (res) => cb(res));
    },
  
    updateOne(burger, valOfCol, cb) {
      orm.updateOne('burgers', burger, 'id', valOfCol, (res) => cb(res));
    },

  };
  
  // Export the database functions for the controller 
  module.exports = burger;