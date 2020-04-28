var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")
// Create all our routes and set up logic within those routes where required.
router.get("/", async function(req, res) {
    
    let burgersResponse = await burger.selectAll()
    // burger.selectAll(function(data) {
        if (burgersResponse instanceof Error) {
            res.json({
                message: "There was an error sending the request"
            })
        } else {
            res.render("index", {
               burgers: burgersResponse 
            })
            console.log(burgersResponse)
        }
        
    });

    //   var hbsObject = {
    //     burgers: data
    //   };
    //   console.log(hbsObject);
    //   res.render("index", hbsObject);
   
  
  router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      "burger_name"
    ], [
      req.body.burger_name
    ], function(result) {
      // Send back the ID 
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: true
    }, condition, function(result) {
      res.json(result) 
    });
  });
// Export routes for server.js to use.
module.exports = router;