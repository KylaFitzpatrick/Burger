// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: async function() {
      try{
        var burgersResponse = await orm.selectAll("burgers")
      return burgersResponse;  
      }catch(err){
          return err;
      }
  },
  // The variables cols and vals are arrays.
  insertOne: async function(cols, vals) {
    try{
        var burgersResponse = await orm.insertOne("burgers", cols, vals)
      return burgersResponse;  
      }catch(err){
          return err;
      }
  },
  updateOne: async function(objColVals, condition) {
    try{
        var burgersResponse = await orm.updateOne("burgers", objColVals, condition)
      return burgersResponse;  
      }catch(err){
          return err;
      }
  },
  deleteOne: async function(condition) {
    try{
        var burgersResponse = await orm.deleteOne("burgers", condition)
            return burgersResponse;  
        }catch(err){
            return err;
        }
    }
  };

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;

